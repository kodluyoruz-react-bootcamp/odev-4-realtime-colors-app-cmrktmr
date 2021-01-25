import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");

  const [userName, setUserName] = useState("");

  const [lastName, setLastName] = useState("KİMSESİZ");

  const [lastColor, setLastColor] = useState("#ffff");

  useEffect(() => {
    if (!userName) {
      const name = prompt("Lütfen Kullanıcı Adınızı Giriniz!");
      setUserName(name ? name : "KİMSESİZ");
    }
  }, [userName]);

  const handleColor = () => {
    if (color === lastColor) {
      window.alert("Renk seçer misin gardaş");
    } else setLastColor(color);
    setLastName(userName);
  };

  return (
    <div className="App" style={{ backgroundColor: lastColor }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleColor}>Rengi Değiştir </button>

      <div>Color Name</div>
      <div>{color}</div>

      <div>Son Değiştiren: {lastName}</div>
    </div>
  );
}

export default App;
