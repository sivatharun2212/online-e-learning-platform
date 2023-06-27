      // import { useEffect, useState } from "react";
      // import { auth } from "firebase/auth";

      // const useAuth = () => {
      //       const [user, setUser] = useState(null);

      //       useEffect(() => {
      //             const handleAuthStateChange = (user) => {
      //                   if (user) {
      //                         setUser(user);
      //                   }else{
      //                         setUser(null);
      //                   }
      //             }
      //             const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);
      //             return () => unsubscribe();
      //       }, []);
      //       return user;
      // }

      // export default useAuth;