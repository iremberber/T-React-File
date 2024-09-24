import React from 'react'

/*function user(props) {
    console.log(props);
  return  <div>
      user
      <div>isim= {props.data.name}</div>
      <div>şehir= {props.data.city}</div>
      <div>yaş= {props.data.age}</div>
    </div>
  
}*/


/*function user({data: {name, city, age}}) {
  return  <div>
      user
      <div>isim= {name}</div>
      <div>şehir= {city}</div>
      <div>yaş= {age}</div>
    </div>
  
}*/

/*function user(props) {
    console.log(props);

    const {name, age, city} = props.data;

  return  <div>
      user
      <div>isim= {name}</div>
      <div>şehir= {city}</div>
      <div>yaş= {age}</div>
    </div>
  
}*/


function user({data, family}) {
    console.log(data);
  return  <div>
      user
      <div>isim= {data.name}</div>
      <div>şehir= {data.city}</div>
      <div>yaş= {data.age}</div>

      <hr/>

      <h3>Family members</h3>
     { family.map((fam, i) => (
        <div key={i}>{fam}</div>)
        

      )}
    </div>
  
}

export default user;
