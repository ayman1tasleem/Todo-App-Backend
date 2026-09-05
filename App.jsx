import React from "react";
import { useState } from "react";
import Hero from "./src/components/Hero/Hero.jsx";
import TodoPage from "./src/pages/TodoPage.jsx";

function App() {
  const [showTodo, setShowTodo] = useState(false);

  return (
    <>{showTodo ? <TodoPage /> : <Hero onStart={() => setShowTodo(true)} />}</>
  );
}

export default App;
