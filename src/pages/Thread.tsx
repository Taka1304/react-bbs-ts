import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'src/components/foundation/Button'
import { TextArea } from 'src/components/foundation/TextArea/TextArea'
import Layout from 'src/components/Layout/Layout'
import Pagenation from 'src/components/Pagenation'
import ThreadItem from 'src/components/ThreadItem'
import { usePostComment, useCommentList } from 'src/hooks/usePost'

type param = {
  threadId: string
}

type Comment = {
  id: string
  post: string
}

const Thread: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [pageIndex, setPageIndex] = useState(0)

  const { threadId } = useParams<param>()
  const { data, isLoading } = useCommentList(threadId, pageIndex*10)
  const { fetchPost } = usePostComment()

  // 送信ボタン押下時
  const handleSubmit = async () => {
    if (inputValue !== "" && threadId) {
      const newComment = await fetchPost(threadId, inputValue)
      newComment && setComments((p) => [{ id: newComment.id, post: newComment.post } ,...p])
      // data && newComment && mutate({...data, posts: [{ id: newComment.id, post: newComment.post }]})
      setInputValue("")
    }
  }
  // data変更時
  useEffect(() => {
    data && setComments([...data.posts])
  },[data])

  return (
    <Layout>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <main className='flex flex-col divide-y divide-[#30363d] outline outline-[#30363d] bg-[#161b22] overflow-hidden w-full max-w-[1120px] mb-2'>
            {isLoading && <p>読み込み中です...</p>}
            {comments.length < 1 && (<p>まだ投稿がありません・。・</p>)}
            {comments.map((comment, index) => (
              <ThreadItem key={index} wrap>
                {comment.post}
              </ThreadItem>
            ))}
          </main>
          <div className='flex justify-center'>
            <Pagenation index={pageIndex} setIndex={setPageIndex} />
          </div>
        </div>
        <div>
          <TextArea 
            id='comment'
            label="書き込む"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="入力"
            rows={6}
            value={inputValue}
            />
          <Button onClick={handleSubmit}>
            送信
          </Button>
        </div>
      </div>
      
    </Layout>
  )
}

export default Thread