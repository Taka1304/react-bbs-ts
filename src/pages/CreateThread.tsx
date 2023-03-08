import React, { FC, useState } from 'react'
import Layout from 'src/components/Layout/Layout'
import { useCreateThread } from 'src/hooks/useThread'
import { Link } from 'react-router-dom'
import { TextField } from 'src/components/foundation/TextField'
import { Button } from 'src/components/foundation/Button'
import { Alert } from 'src/components/foundation/Alert/Alert'

const CreateThread: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  
  const { data, fetchPost, isLoading } = useCreateThread()

  return (
    <Layout>
      <main className='p-8'>
        <form className='flex flex-col justify-between h-[150px]'>
          <TextField
            label={"スレッド名"}
            type="text"
            value={inputValue}
            placeholder="スレッド名を入力"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type='submit'
            onClick={() => {
              fetchPost(inputValue)
            }}
          >
            スレッド作成
          </Button>
        </form>
        {isLoading && <div>
          作成中です…
        </div>}
        {<div>
          <Alert variant='success'>
            新規スレッドを作成しました！
          </Alert>
          <Link to={`/thread/${data?.threadId}`} >
            スレッドに移動する
          </Link>
        </div>}
      </main>
    </Layout>
  )
}

export default CreateThread