import useSWR from 'swr'
import { Thread } from 'src/types'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export const useThreadList = (offset=0) => {
  const { data, error, isLoading } = useSWR<Thread[], Error>(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${offset}`, fetcher)

  return {
    threadList: data,
    error: error,
    isLoading: isLoading
  }
}

export const useMakeThread = () => {

}

export const usePostList = (threadId :string) => {

}