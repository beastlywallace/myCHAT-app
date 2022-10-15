import { createContext, useState ,useEffect} from "react";
 import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

export const AuthContext = createContext()

  export default function AuthContextProvider({ children }){
    const [currentUser, setCurrentUser]= useState({})
    useEffect(() => {
        //to check wheather we have a user or not, if theres  a user,we are going to set our current user
       const unsub= onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log("user", user)
        })
        return () =>  {
            unsub()
        }
    }, []);
    return (
//the childre is our appliction .......below means the current component(childrn can reach the current user)
        <AuthContext.Provider value= {{currentUser}}>
    {children}
      </AuthContext.Provider>
    )
}
// default AuthContextProvider