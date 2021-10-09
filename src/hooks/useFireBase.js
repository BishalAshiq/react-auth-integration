import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";


initializeAuthentication();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   
    const  signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(result =>{
    console.log(result.user);
    setUser(result.user);
    })
    .catch(error => {
        setError(error.massage);
    })
  };

  const signinUsingGithub =() => {
      signInWithPopup(auth, githubProvider)
      .then(result => {
      setUser(result.user);
      })
  }

  const logOut = () =>{
      signOut(auth)
      .then(()=>{
          setUser({});
      })
  }

useEffect(() =>{
 onAuthStateChanged(auth, user=>{
     if(user){
         console.log('inside user sate change',user);
         setUser(user);
     }
 })
}, [])

  return{
      user, 
      error,
      signInUsingGoogle,
      signinUsingGithub,
      logOut
  }
};

export default useFireBase;