import { FC, useState } from "react";
import { useEffect } from "react";
import Layout from "src/components/Layout/Layout";
import ThreadItem from "../components/ThreadItem";

type Thread = {
  id: string;
  title: string;
};

const App: FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);
  useEffect(() => {
    const fetchData = async (offset = 0) => {
      await fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${offset}`
      )
        .then((res) => res.json())
        .then((data) => setThreads(data));
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">新規スレッド一覧</h1>
      <div className="flex flex-col justify-center divide-y divide-[#30363d] outline outline-[#30363d] rounded-lg bg-[#1d2222]">
        {threads.map((thread) => (
          <a 
            key={thread.id}
            className="after:content['☛']" 
            href={`/thread/${thread.id}`}
          >
            <ThreadItem >
              {thread.title}
            </ThreadItem>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default App;
