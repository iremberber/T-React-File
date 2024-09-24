import React from 'react'

function user(props) {
    console.log(props)
  return  <div>
      user
      <div>isim= {props.name}</div>
      <div>şehir= {props.city}</div>
      <div>yaş= {props.age}</div>
    </div>
  
}

export default user;
