import React from "react";
import User from "./components/user";


function App() {
  return  <div ><User name="irem" city="Tekirdağ" age="21"/>
  <User name="Furkan" city="New York" age="25"/>
  <User name="Ayşegül" city="Köln" age="51"/>
  <User name="mustafa" city="Trabzon" age="54"/>
  
  </div>;
}

export default App;