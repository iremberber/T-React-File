import React from "react";
import User from "./components/user";


const user={
  name: "İrem Berber", 
  city: "Trabzon",
  age:"21"
};


function App() {
  return  <div ><User data={user} family={["Ayşegül", "Furkan", "Mustafa"]}/>

  
  </div>;
}

export default App;