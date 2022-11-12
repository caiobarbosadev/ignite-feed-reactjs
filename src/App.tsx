import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caiobarbosadev.png',
      name: 'Caio Barbosa',
      role: 'Web Developer @UNIFEOB'
    },
    content: [
      { type: 'paragraph', content: 'Boa noite pessoal do Ignite Feed!' },
      { type: 'paragraph', content: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web lançado em maio de 2013.' },
      { type: 'link', content: 'https://pt-br.reactjs.org/' }
    ],
    publishedAt: new Date('2022-11-05 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Boa noite pessoal do Ignite Feed!' },
      { type: 'paragraph', content: 'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.' },
      { type: 'link', content: 'https://reactnative.dev/' }
    ],
    publishedAt: new Date('2022-11-03 22:00:00'),
  }
];


export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>

          {posts.map(post => {

            return (

              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />

            )

          })}

        </main>

      </div>
    </div>
  )
}