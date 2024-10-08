import React, {useState} from 'react'

function Form() {

    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[gender, setGender] = useState("1");
  return (
    <div>
      <div>İsim</div>
      <input placeholder='isim' value={name} onChange={(event) => setName(event.target.value)}/>
      <input placeholder='soyisim' value={surname} onChange={(event) => setSurname(event.target.value)}/>
      <div>
         <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value={0}>erkek</option>
            <option value={1}>kadın</option>
         </select>
       </div>
<hr/>
      <div>İsim:
        <strong>{name}</strong></div>
      
      <div>Soyisim:<strong>{surname}</strong></div>

    <br/>
      Cinsiyet:<strong>{gender ==='0' ? "erkek" : "kadın"}</strong>
      
      
    </div>

  )
}

export default Form
