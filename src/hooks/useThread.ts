import useSWR from 'swr'
import { Thread, ThreadCreateResponse } from 'src/types'
import { useState } from 'react'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const threadUrl = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"

export const useThreadList = (offset=0) => {
  const { data, error, isLoading } = useSWR<Thread[], Error>(`${threadUrl}?offset=${offset}`, fetcher)

  return {
    threadList: data,
    error: error,
    isLoading: isLoading
  }
}


export const useCreateThread = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ThreadCreateResponse | undefined>()

  
  const fetchPost = async(threadTitle: string) => {
    const sendData = { title: threadTitle }
    try {
      setIsLoading(true)
      const res = await fetch(threadUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      })
      if (res.ok) {
        setData(await res.json())
        console.log(res.json())
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  } 
  return {
    data,
    fetchPost,
    isLoading
  }
}
