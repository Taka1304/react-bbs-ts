import { FC, useState } from "react";
import Layout from "src/components/Layout/Layout";
import ThreadItem from "../components/ThreadItem";
import { useThreadList } from "src/hooks/useThread";
import Pagenation from "src/components/Pagenation";

const Page: FC<{index: number}> = ({index}) => {
  const { threadList, isLoading } = useThreadList(index*10)

  if (isLoading) {
    return <p>Now Loading...</p>
  }
  return (
    <div className="flex flex-col divide-y divide-[#30363d] outline outline-[#30363d] rounded-lg bg-[#161b22] overflow-hidden w-full max-w-[1120px] mb-4">
      {threadList?.map((thread) => (
        <a 
          key={thread.id}
          className="Boeder-box hover:bg-[#21262d]" 
          href={`/thread/${thread.id}`}
          >
          <ThreadItem >
            {thread.title}
          </ThreadItem>
        </a>
      ))}
    </div>
  )
}

const App: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">新規スレッド一覧</h1>
      <div className="flex flex-col justify-center items-center">
        <Page index={pageIndex} />
        <div className="hidden"><Page index={pageIndex + 1}/></div>
        <Pagenation index={pageIndex} setIndex={setPageIndex} />
      </div>
    </Layout>
  );
};

export default App;
