import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'src/components/foundation/Alert'
import { Button } from 'src/components/foundation/Button'
import { TextArea } from 'src/components/foundation/TextArea/TextArea'
import Layout from 'src/components/Layout/Layout'
import Pagenation from 'src/components/Pagenation'
import ThreadItem from 'src/components/ThreadItem'
import { usePostComment, useCommentList } from 'src/hooks/usePost'

type param = {
  threadId: string
}

const Thread: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [pageIndex, setPageIndex] = useState(0)

  const { threadId } = useParams<param>()
  const { data, isLoading, mutate } = useCommentList(threadId, pageIndex*10)
  const { error, fetchPost } = usePostComment()

  // 送信ボタン押下時
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (threadId) {
      await fetchPost(threadId, inputValue)
      data && mutate({...data, posts: [...data.posts]})
      setInputValue("")
    }
  }

  return (
    <Layout>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <main className='flex flex-col divide-y divide-[#30363d] outline outline-[#30363d] bg-[#161b22] overflow-hidden w-full max-w-[1120px] mb-2'>
            {isLoading && <p>読み込み中です...</p>}
            {data && data.posts.length < 1 && (<p>まだ投稿がありません・。・</p>)}
            {data && data.posts.map((comment, index) => (
              <ThreadItem key={index} wrap>
                {comment.post}
              </ThreadItem>
            ))}
          </main>
          <div className='flex justify-center'>
            <Pagenation index={pageIndex} setIndex={setPageIndex} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <TextArea 
            required
            id='comment'
            label="書き込む"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="入力"
            rows={6}
            value={inputValue}
            />
          <Button>
            送信
          </Button>
        </form>
        {error !== "" && <Alert variant='error'>
          {error}
        </Alert>}
      </div>
      
    </Layout>
  )
}

export default Thread