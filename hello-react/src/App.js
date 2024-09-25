import React from "react";
import User from "./components/user";


function App() {
  return(  
    <div >
      <User
      /* name="irem"
       city="61"
       age="21"  */
   
       data={{
        name: "İrem Berber", 
        city: "Trabzon",
        age: 21  // age should be a number, not a string
      }}
      family={["Ayşegül", "Furkan", "Mustafa"]}
    />
  </div>
);
}

export default App;