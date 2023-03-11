export type Thread = {
  id: string;
  title: string;
}

export type ThreadCreateResponse = {
  id: string,
  title: string
}

export type Post = {
  threadId: string,
  posts: [
    {
      id: string,
      post: string
    }
  ]
}

export type PostCommentResponse = {
  id: string,
  post: string
}
