import React from "react";
import Login from "./components/Login";

const isLoggedIn = false;
const fullName = "İrem Berber";

function App() {
  return (
    <div className="test">
      {isLoggedIn ? "Hoşgeldiniz, " + fullName : <Login/>}
      
    </div>
  );
}

export default App;