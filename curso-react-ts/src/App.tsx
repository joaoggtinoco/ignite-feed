import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post, PostType } from "./components/Post/Post"

import './global.css'
import styles from './App.module.css'

const post: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/67712405?v=4",
      name: "João Tinoco",
      role: "Developer"
    },
    content: [
      { id: 1, type: "text", content: "Olá meu nome é João" },
      { id: 2, type: "text", content: "Sou desenvolverdor C# e React" },
      { id: 3, type: "link", content: "https://github.com/joaoggtinoco" }
    ],
    publishedAt: new Date("2023-02-21 20:06")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/67712405?v=4",
      name: "Bergameu Tinoco",
      role: "Developer Web"
    },
    content: [
      { id: 1, type: "text", content: "Olá meu nome é Bergameu" },
      { id: 2, type: "text", content: "Sou desenvolverdor C# e React" },
      { id: 3, type: "link", content: "https://github.com/joaoggtinoco" }
    ],
    publishedAt: new Date("2024-02-21 20:06")
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            post.map(post => {
              return (
                <Post
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}