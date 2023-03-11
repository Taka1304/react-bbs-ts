import { FC, useState } from 'react'
import Layout from 'src/components/Layout/Layout'
import { useCreateThread } from 'src/hooks/useThread'
import { TextField } from 'src/components/foundation/TextField'
import { Button } from 'src/components/foundation/Button'
import { Alert } from 'src/components/foundation/Alert/Alert'
import { Anchor } from 'src/components/foundation/Anchor/Anchor'

const CreateThread: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  
  const { data, fetchPost, isLoading } = useCreateThread()

  return (
    <Layout>
      <main className=''>
        <h1
          className='font-bold text-2xl mb-4'
        >
          新規スレッドを作成
        </h1>
        <div className='flex flex-col justify-between h-[150px] max-w-[500px]'>
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
              setInputValue('')
            }}
          >
            スレッド作成
          </Button>
        </div>
        {isLoading && <div>
          作成中です…
        </div>}
        {data && <div className='mt-4'>
          <Alert variant='success'>
            新規スレッドを作成しました！
          </Alert>
          <Anchor href={`/thread/${data.id}`}>
            スレッドに移動する
          </Anchor>
        </div>}
      </main>
    </Layout>
  )
}

export default CreateThread