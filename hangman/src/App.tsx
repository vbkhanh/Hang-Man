import { useState } from "react"
import words from './WordList.json';
import Draw from "./components/Draw";
import Word from "./components/Word";
import KeyBoard from "./components/KeyBoard";

function App() {
  
  const [targetWord, setTargetWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
   <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
    borderStyle: "dotted",
    borderColor: "green"
   }}>

    <div style={{fontSize: "2rem", textAlign: "center", borderStyle: "dotted", borderColor: "blue"}}>
      <h2>Hang Man Game</h2>
      <h1>{targetWord}</h1>
    </div>
    
    <Draw />
    <Word />
    <KeyBoard />
   </div>
  )
}

export default App
