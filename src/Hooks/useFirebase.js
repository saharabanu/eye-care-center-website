import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication();


const useFirebase = () => {
    const [user,setUser]=useState({});
    const [error,setError]=useState({})
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
    const signInUsingGoogle = ()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setIsLoading(false))


    }
    useEffect(()=>{
       const unSubscribed= onAuthStateChanged(auth,user =>{
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unSubscribed;
    },[])
    const logOut=()=>{
        setIsLoading(true)
        
    signOut(auth)
    .then(() => {
  
    })
     .finally(()=>setIsLoading(false));
    }
    

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;