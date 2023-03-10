export type Thread = {
  id: string;
  title: string;
}

export type ThreadCreateResponse = {
  threadId: string,
  title: string
}

export type post = {
  threadId: string,
  posts: [
    {
      id: string,
      post: string
    }
  ]
}
