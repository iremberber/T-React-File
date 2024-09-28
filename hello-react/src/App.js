import React from "react";

import Counter from "./components/Counter";


function App() {
  return(  
    <div >
      <Counter/>
      {/* 
      <User
      //title="kişi"
       name="irem"
       city="61"
       age="21"  
   
       data={{
        name: "İrem Berber", 
        city: "Trabzon",
        age: 21  // age should be a number, not a string
      }}
      family={["Ayşegül", "Furkan", "Mustafa"]}
       />  
      */}
  </div>
);
}

export default App;