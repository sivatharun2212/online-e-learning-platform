import Head from "next/head";
import { useState, useEffect, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import Styles from '../styles/myCourses.module.css';
import PageTitle from "@/components/pageTitle";
import cls from "classnames";
import Link from "next/link";
import CourseCard from "@/components/courseCard";
import { CourseContext } from "@/context/courseContext";
import { db } from "@/firebase";
import { doc, updateDoc,getDoc } from "firebase/firestore";






const MyCourses = () => {
      const user = useUser();
      const userId = user?.uid
      const {selectedMyCourse,setSelectedMyCourse}= useContext(CourseContext)
      const router = useRouter();

      const [isSideBarOpen, setIsSideBarOpen] = useState(false)
      const [activePage, setActivePage] = useState('')


      console.log('bSelectedMyCourse:', selectedMyCourse); 
      





      // useEffect(() => {
      //       const updateUserSelectedCourses = async (userId, setSelectedMyCourse ) => {
      //             console.log("userId:", userId);
      //             console.log("selectedMyCourse:", selectedMyCourse);
      //             const userRef = doc(db, "users",userId);
      //             // await addDoc(collection(db, "users"), userDocData);
      //             try{
      //                   await updateDoc(userRef,setSelectedMyCourse);
      //                   console.log("Updated")
      
      //             }catch(error){
      //                   console.log("error",error)
      //             }
      //       }
      
      //       updateUserSelectedCourses(userId,setSelectedMyCourse)
      // }, [selectedMyCourse,userId])


      const handleClear = () => {
            setSelectedMyCourse([]);
      }

      




      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])


      const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen);
      }





      return <>
        <Head>
            <title>My Courses</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar toggle={toggleSideBar} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen}/>
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>

      <PageTitle title="MY COURSES" width="160px"/>
      <div className={Styles.coursesListContainer}>
      {
                        selectedMyCourse.map((course, index) => {
                              return <Link href={`/Courses/${course.title}`}>
                        <CourseCard onClick={() => handleCardClick(course)} key={index} title={course.title} imgSrc={course.imgSrc} />
                              </Link> 

                        })
                  }
            <button className={Styles.buttonLrg} onClick={handleClear}>Clear all</button>

            </div>
      </div>
      </div>
      </> 
}









const MyCoursesWithContext = () => {
      return <> 
      <UserProvider>
            <MyCourses />
      </UserProvider>
      </>
      
}

export default MyCoursesWithContext;