import React, {useState} from 'react'

function Form() {

    const [form, setForm] = useState({name:"", surname:"", gender:"0"});

    const handleChange= (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


  return (
    <div>
      <div>İsim</div>
      <input placeholder='isim' value={form.name} onChange={handleChange}/>
      <input placeholder='soyisim' value={form.surname} onChange={handleChange}/>
      <div>
         <select value={form.gender} onChange={handleChange}>
            <option value={0}>erkek</option>
            <option value={1}>kadın</option>
         </select>
       </div>
<hr/>
      <div>İsim:
        <strong>{form.name}</strong></div>
      
      <div>Soyisim:<strong>{form.surname}</strong></div>

    <br/>
      Cinsiyet:<strong>{form.gender ==='0' ? "erkek" : "kadın"}</strong>
      
      
    </div>

  )
}

export default Form
