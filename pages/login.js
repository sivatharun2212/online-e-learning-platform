import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "/components/logo";
import Styles from '@/styles/login.module.css';
import { toast } from "react-toastify";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useRouter } from "next/router";

import codingImage from "../public/assets/Coding.svg";
import { useState,useEffect } from "react";
import { useUser } from "@/context/userContext";




const Login = () => {

      const router = useRouter();
      const user = useUser();
      console.log("user : " ,user)
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      useEffect(() => {
            if(user){
                  router.replace("/Courses")
            }
      }, [user,router])

            
      const login = async (e) => {
            e.preventDefault();
            if (email && password !== ""){
                  try{
                        await signInWithEmailAndPassword(auth, email, password);
                        router.push("/Courses")
                        toast.success("Login successful")
                        
                        
                  }catch(error){
                        if (error.code === 'auth/wrong-password'){
                              toast.error("Incorrect Password");
                        }
                        if (error.code === 'auth/user-not-found'){
                              toast.error("User not found");
                        }
                        
                  }
            }else{
                  if (email=== ""){
                        toast.warning("Provide email id")
                  }
                  if (password=== ""){
                        toast.warning("Provide password")
                  }
            }
            
            
      }




      return <>
            <Head>
                  <title>Log in to SkillMe</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={Styles.pageContainer}>
        
            <div className={Styles.navbar}>
            <Logo />
            </div> 
            <div className={Styles.container}>
                  <div className={Styles.loginForm}>
                        <div className={Styles.form}>
                              
                              <form onSubmit={login}  className={Styles.loginSection}>

                              <input 
                              className={Styles.input} 
                              type="email" 
                              placeholder="Email" 
                              value={email} 
                              required
                              onChange={(e) => setEmail(e.target.value)}
                              />
                              <input 
                              className={Styles.input} 
                              type="password" 
                              placeholder="Password" 
                              value={password} 
                              required
                              onChange={(e) => setPassword(e.target.value)}
                              />
                              <button type="submit" onClick={login} className={Styles.buttonLrg}>
                                    Log in
                              </button> 
                                    </form>
                              
                              <div className={Styles.signupSection}>
                              <p className={Styles.signupTag}>new to skillme ?</p>
                              <Link href='/signup'>
                              <button className={Styles.buttonLrg}>
                                    Sign up
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

export default Login;