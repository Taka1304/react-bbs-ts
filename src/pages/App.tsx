import { FC, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "../components/Header";
import ThreadItem from "../components/Thread";

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
    <div className="App">
      <Header />
      <h1>新規スレッド一覧</h1>
      <div className="flex flex-col items-center justify-center divide-y divide-[30363d]-200 border-blue">
        {threads.map((thread) => (
          <ThreadItem key={thread.id} threadId={thread.id}>
            {thread.title}
          </ThreadItem>
        ))}
      </div>
    </div>
  );
};

export default App;
