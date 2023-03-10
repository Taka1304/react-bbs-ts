import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'src/components/foundation/Button'
import { TextArea } from 'src/components/foundation/TextArea/TextArea'
import Layout from 'src/components/Layout/Layout'
import ThreadItem from 'src/components/ThreadItem'
import { usePostList } from 'src/hooks/usePost'

type param = {
  threadId: string
}

type post = {
  id: string
  post: string
}

const Thread: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [comments, setComments] = useState<post[]>([])

  const { threadId } = useParams<param>()
  const { data, isLoading, mutate } = usePostList(threadId ?? "")

  useEffect(() => {
    data && setComments((p) => [...p, ...data.posts])
  },[data])

  const handleSubmit = async () => {

  }

  return (
    <Layout>
      <div className='grid grid-cols-3 gap-4'>
        <main className='col-span-2 flex flex-col divide-y divide-[#30363d] outline outline-[#30363d] bg-[#161b22] overflow-hidden w-full max-w-[1120px] mb-2'>
          {isLoading && <p>読み込み中です...</p>}
          {data && comments.length < 1 && (<p>まだ投稿がありません・。・</p>)}
          {comments.map((comment) => (
            <ThreadItem key={comment.id}>
              {comment.post}
            </ThreadItem>
          ))}
        </main>
        <div>
          <form>
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
          </form>
        </div>
      </div>
      
    </Layout>
  )
}

export default Thread