import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const lightMode = {
  backgroundColor: "#fff",
  color: "#222",
};

const darkMode = {
  backgroundColor: "#222",
  color: "#fff",
};

export default function App() {
  const [styleMode, setStyleMode] = useState(lightMode);

  const changeTheme = () => {
    if (styleMode === lightMode) {
      setStyleMode(darkMode);
    }
    if (styleMode === darkMode) {
      setStyleMode(lightMode);
    }
  };

  return (
    <div style={styleMode}>
      <button onClick={changeTheme}>Toggle Light/Dark Mode</button>
      <Header style={styleMode}></Header>
      <Content style={styleMode}></Content>
      <Footer style={styleMode}></Footer>
    </div>
  );
}
