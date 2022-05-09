import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

const person = {
  username: 'drdynscript',
  avatarURL: 'https://vignette.wikia.nocookie.net/markiplier/images/3/3e/Eviebot.png/revision/latest?cb=20151104163318'
};

const UserProvider = ({children}) => {
  const [user, setUser] = useState(person);

  const logOut = () => {
    setUser(null);
  };

  const logIn = () => {
    setUser(person);
  };

  return (
    <UserContext.Provider value={{user, logIn, logOut}}>
      {children}
    </UserContext.Provider>
  )
};

export {
  UserContext,
  UserProvider,
  useUserContext,
};