import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import BoxNodeContent from "./components/content/content";
function App() {
  const [dark, setDark] = useState<boolean>(false);
  const handleClickDark = (): void => {
    setDark(!dark);
  };
  const searchContent = (todoNode: string) => {
    return todoNode;
  };
  return (
    <div className={dark ? "dark-open App" : "App"}>
      <Header handleClickDark={handleClickDark} searchContent={searchContent} />
      <BoxNodeContent />
    </div>
  );
}

export default App;
