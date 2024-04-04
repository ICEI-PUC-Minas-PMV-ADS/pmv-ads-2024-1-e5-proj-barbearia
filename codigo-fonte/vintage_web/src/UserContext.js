import React, { createContext, useState, useContext } from 'react';

// Cria o contexto de usuário
const UserContext = createContext({
  signed: false,
  setSigned: () => {},
  id: 0,
  setId: () => {},
  name: '',
  setName: () => {},
  surname: '',
  setSurname: () => {},
  email: '',
  setEmail: () => {},
  accessToken: '',
  setAccessToken: () => {}
});

// Provedor do contexto de usuário
export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState('');

  return (
    <UserContext.Provider value={{ signed, setSigned, id, setId, name, setName, surname, setSurname, email, setEmail, accessToken, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export function useUser() {
  const context = useContext(UserContext);
  const {
    signed,
    setSigned,
    id,
    setId,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    accessToken,
    setAccessToken
  } = context;
  return {
    signed,
    setSigned,
    id,
    setId,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    accessToken,
    setAccessToken
  };
}
