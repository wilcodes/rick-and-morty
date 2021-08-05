import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Characters from './components/Characters';
import { useState, useEffect } from "react";
function App() {

  const [appMode, setAppMode] = useState('Dark');
  const [style, setStyle] = useState('App');
  const handleStyle = () => {
    if (appMode === "Light") {
      setStyle('AppLight')
    } else {
      setStyle("App")
    }
  }

  useEffect(() => {
    handleStyle()
  }, [appMode])

  return (
    <div className={style}>
      <Header changeMode={(value) => setAppMode(value)} />
      <Characters mood={appMode} />
    </div>
  );
}

export default App;
