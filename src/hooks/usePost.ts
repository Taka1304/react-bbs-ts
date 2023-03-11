import useSWR from "swr";
import type { Post, PostCommentResponse } from "src/types";
import { useState } from "react";

const fetcher = (url: string): Promise<Post> =>
  fetch(url).then((res) => res.json());
const baseUrl =
  "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/";

export const useCommentList = (threadId: string | undefined, offset = 0) => {
  const { data, error, isLoading, mutate } = useSWR<Post, Error>(
    threadId ? `${baseUrl + threadId}/posts?offset=${offset}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const usePostComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")

  const fetchPost = async (threadId: string, comment: string): Promise<PostCommentResponse | undefined> => {
    const sendData = { post: comment };
    try {
      setIsLoading(true);
      setError("")
      const res = await fetch(`${baseUrl + threadId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });
      return await res.json()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return {
    error,
    fetchPost,
    isLoading,
  };
};
