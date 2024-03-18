import { useContext, useState } from "react";
import {auth} from '../../firebase/firebase'; 
const AuthContext= React.createContext();

export function useAuth(){

    return useContext(AuthContext);

}

export function AuthProvider({children}){
    const [currentUser, setcurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user){
        if(user){
            setcurrentUser({...user});
            setUserLoggedIn(true);
        }
        else{
            setcurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value={
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )


}