import React, { useState } from 'react';

function User() {
  const names = ["Ayşe", "Furkan", "Mustafa", "Ali", "Veli", "Fatma"];
  const surnames = ["Berber", "Sahin", "Makas", "Klavye"]
  const [user, setUser] = useState({ name: 'İrem', surname: 'Berber' });

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const getRandomSurname = () => {
    const randomIndexTwo = Math.floor(Math.random()* surnames.length);
    return surnames[randomIndexTwo];
  }

  return (
    <div>
      <h2>user</h2>
      {user.name} {user.surname}
      
      <button onClick={() => setUser({ ...user, name: getRandomName() })}>
        İsim Değiştirici
      </button>

      <button onClick={() => setUser({ ...user, surname: getRandomSurname() })}>
        Soyisim Değiştirici
      </button>
    </div>
  );
}

export default User;