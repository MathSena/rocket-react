//JSX = Javascript + XML

import Post from "./Post"
import "./globals.css"

function App() {
  
  return (
    <>
    <h1>Hello World!</h1>
    <div><Post author="Matheus Sena"
    content = "Esse é um post de exemplo" 
    />
    <Post author="Memphis Depay"
    content = "Vai Corinthians" 
    />
    <Post />
    <Post />
    </div>
    </>
  )
}

export default App
