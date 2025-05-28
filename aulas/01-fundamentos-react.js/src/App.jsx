import Header from './Components/Header';
import Post from './Components/Post';
import './globals.css';

import styles from './App.module.css';
import Sidebar from './Components/Sidebar';

function App() {
  const post = {
    author: {
      name: 'Matheus Sena',
      role: 'CTO @ senacodes',
      avatarUrl: 'https://avatars.githubusercontent.com/u/33051907?v=4',
    },
    publishedAt: new Date(),
    content: [
      { type: 'paragraph', content: 'Fala galera, beleza? Esse site aqui é top' },
      { type: 'link', content: 'https://rocketseat.com.br' },
    ],
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post post={post} />
        </main>
      </div>
    </>
  );
}

export default App;