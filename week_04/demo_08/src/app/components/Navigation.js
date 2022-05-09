import { useUserContext } from "../contexts";

import './Navigation.css';

const Navigation = () => {
  const {user, logIn, logOut} = useUserContext();

  return (
    <nav className="navigation">
      {user && 
        <div className="">
          <h2>You are {user.username}</h2>
          <img className="user__avatar" src={user.avatarURL} alt={user.username} />
          <button onClick={() => logOut()}>Sign off</button>
        </div>
      }
      {!user && 
        <div className="">
          <h2>Not verified</h2>
          <button onClick={() => logIn()}>Login</button>
        </div>
      }
    </nav>
  )
};

export default Navigation;