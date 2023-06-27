import Head from "next/head";
import Image from 'next/image';
import Styles from '@/styles/signup.module.css';
import Logo from "/components/logo";
import Link from "next/link";
import codingImage from "../public/assets/Coding.svg";
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUser } from "@/context/userContext";





const SignUp = () => {

      const router = useRouter();
      const user = useUser();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");


      
            try{
                  const createUserDocument = async (userId,userDocData) => {
                  const userRef = db.collection('users').doc(userId);
                  await userRef.set(userDocData)
                  console.log('user document created')
            }
            }catch(error){
                  console.log('error creating user document',error)
            }
      

      const signup = async (e) => {
            e.preventDefault();
            

            if (name && email && password && confirmPassword !== ""){
                  if (password === confirmPassword){
                        try{
                              const { user: authUser } = await createUserWithEmailAndPassword(auth, email, confirmPassword);
                              router.push('/login')
                              toast.success("Created new account")
                              await updateProfile(authUser,{
                                   displayName: name
                              })

                              const userId = authUser.uid
                              const userDocData = {
                                    "name": name,
                                    "email": email,
                                    "selectedCourses": null
                              }



                              createUserDocument(userId,userDocData);

                              }catch(error){
                              if (error.code === 'auth/email-already-in-use'){
                                    toast.success("Account already exists")
                              }
                        }
                  }else{
                        toast.error("Password not matched")
                  }
            }else{
                  if (name=== ""){
                        toast.warning("Provide Name")
                  }
                  if (email=== ""){
                        toast.warning("Provide Email")
                  }
                  if (password=== ""){
                        toast.warning("Provide password")
                  }
                  if (confirmPassword=== ""){
                        toast.warning("Confirm password")
                  }
            }

           
      }

      return <>
            <Head>
                  <title>Sign Up to SkillMe</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={Styles.pageContainer}>
        
            <div className={Styles.navbar}>
            <Logo />
            </div> 
            <div className={Styles.container}>
                  <div className={Styles.loginForm}>
                        <div className={Styles.form}>
                              <form onSubmit={signup} className={Styles.loginSection}>
                              <input 
                              className={Styles.input} 
                              type="text" 
                              name="name" 
                              id="name" 
                              placeholder="Full Name" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)}/>

                              <input 
                              className={Styles.input} 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="Email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}/>

                              <input 
                              className={Styles.input} 
                              type="password" 
                              name="password" 
                              id="password" 
                              placeholder="Create New Password" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}/>

                              <input 
                              className={Styles.input} 
                              type="password" 
                              name="confirmPassword" 
                              id="CnfPassword" 
                              placeholder="Confirm Password" 
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}/>

                                    <button type="submit" onClick={signup} className={Styles.buttonLrg}>
                                    sign up
                                    </button> 
                              </form>
                              <div className={Styles.signupSection}>
                              <p className={Styles.signupTag}>allready joined skillme ?</p>
                              <Link href='/login'>
                              <button className={Styles.buttonLrg}>
                                    Log in
                              </button> 
                              </Link>
                              </div>
                        </div>
                  </div>
                  <div className={Styles.bannerImg}>
                        <Image className={Styles.codingImg} src={codingImage} width={600} height={500}>

                        </Image>
                  </div>
            </div>
            </div>
      </>
}

export default SignUp;