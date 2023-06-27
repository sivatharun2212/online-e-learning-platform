import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase'; 



const UserContext = createContext();

export  const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user){
        setUser({uid: user.uid, ...user});
      }else{
        setUser(null);
      }
      
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export  const useUser = () => useContext(UserContext);


