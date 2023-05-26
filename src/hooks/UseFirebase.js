import firebaseInit from './../components/Authentication/Firebase/FirebaseInit';
import { getAuth, createUserWithEmailAndPassword,updateProfile ,sendPasswordResetEmail,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from 'react';



firebaseInit()

const useFirebase = ()=>{
    const auth = getAuth();
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const [admin,setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    

    // CREATE NEW USER REGISTRATION 
    const reg = (email,password,location,navigate,name)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = {email,displayName:name}
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {  
                  }).catch((error) => {
                  });
                  saveUser(email,name,'POST')
                setError('')
                navigate('/')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false))
    }

    // LOGIN 
    const login = (email,password,location,navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const destinatetion = location?.state?.from || '/'
                navigate(destinatetion)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false))

    }

    // LogOut 
    const logout = ()=>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(()=>setIsLoading(false))
    }

    // GOOGLE SINGiN 
    const googleSingIn = (navigate,location)=>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email,user.displayName,'PUT')
                const destinatetion = location?.state?.from || '/'
                navigate(destinatetion)
                setError('')
            }).catch((error) => {
                setError(error.message);
            });

    } 
    // RESET EMAIL AND PASSWORD 
     const resetUserEmail = (email)=>{
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('')
            })
            .catch((error) => {
                setError(error.message);
        });
    }

    // ON AUTH CHANGE 
    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> subscribe
    },[])

    const saveUser =(email,displayName,method)=>{
        const user = {email,displayName}
        fetch('https://radiant-scrubland-22004.herokuapp.com/user',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res)
        .then(data => data)
    }

    // admin 
    useEffect(()=>{
        fetch(`https://radiant-scrubland-22004.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
    return{
        user,
        logout,
        reg,
        login,
        isLoading,
        error,
        googleSingIn,
        resetUserEmail,
        admin
    }
}


export default useFirebase