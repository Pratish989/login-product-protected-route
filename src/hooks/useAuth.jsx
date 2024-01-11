/* eslint-disable react-refresh/only-export-components */
import { useState,useContext, createContext } from "react";

const authContext = createContext();

export function useAuth() {
 const [authed, setAuthed] = useState(false);
 return {
   authed,
   login() {
    console.log("hello")
       setAuthed(true);
   },
   logout() {
       setAuthed(false);
   },
 };
}


// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
 const auth = useAuth();
 return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer() {
 return useContext(authContext);
}
