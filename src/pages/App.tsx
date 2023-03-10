import { FC, useState } from "react";
import Layout from "src/components/Layout/Layout";
import ThreadItem from "src/components/ThreadItem";
import Pagenation from "src/components/Pagenation";
import { Anchor } from "src/components/foundation/Anchor/Anchor";
import { useThreadList } from "src/hooks/useThread";

const Page: FC<{index: number}> = ({ index }) => {
  const { threadList, isLoading } = useThreadList(index*10)

  if (isLoading) {
    return <p>Now Loading...</p>
  }
  return (
    <div className="flex flex-col divide-y divide-[#30363d] outline outline-[#30363d] rounded-lg bg-[#161b22] overflow-hidden w-full mb-2">
      {threadList?.map((thread) => (
        <Anchor 
          key={thread.id}
          className="Boeder-box hover:bg-[#21262d] no-underline"
          href={`/thread/${thread.id}`}
          >
          <ThreadItem >
            {thread.title}
          </ThreadItem>
        </Anchor>
      ))}
    </div>
  )
}

const App: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-2">新規スレッド一覧</h1>
      <div className="flex flex-col justify-center items-center">
        <Page index={pageIndex} />
        <div className="hidden"><Page index={pageIndex + 1}/></div>
        <Pagenation index={pageIndex} setIndex={setPageIndex} />
      </div>
    </Layout>
  );
};

export default App;
