import { FC, useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

type Thread = {
  id: string
  title: string
}

const App: FC = () => {
  const [threads, setThreads] = useState<Thread[]>([])
  useEffect(() => {
    const fetchData = async( offset=0 ) => {
      await fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${offset}`)
      .then(res => res.json())
      .then(data => setThreads(data))
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <Header />
      <ul>

      {threads.map((thread) => (
        <li key={thread.id}>
          {thread.id}: {thread.title}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App
