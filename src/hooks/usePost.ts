import useSWR from 'swr'
import type { post } from 'src/types'

const fetcher = (url: string): Promise<post> => fetch(url).then(res => res.json())
const baseUrl = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"

export const usePostList = (threadId: string, offset=0) => {
  const { data, error, isLoading, mutate } = useSWR<post, Error>(`${baseUrl + threadId}/posts?offset=${offset}`, fetcher)

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

