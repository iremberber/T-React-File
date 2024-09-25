import React from 'react';
import PropTypes from 'prop-types';

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


function user({title, data, family}) {
    
  return  <div>
      <strong>{title}</strong>
      <div>isim= {data.name}</div>
      <div>şehir= {data.city}</div>
      <div>yaş= {data.age}</div>

       <hr/>
     <h3>Family members</h3>
     {family.map((fam, i) => (
        <div key={i}>{fam}</div>)
      )} 
    </div>
  
}

user.propTypes= {
/*  name: PropTypes.string,
  city: PropTypes.string.isRequired,
  age: PropTypes.number, */

  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
  }),
  family: PropTypes.string
};

user.defaultProps = {
  title: 'Kişi',
}

export default user;
