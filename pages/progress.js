import Head from "next/head";
import { useState, useEffect,useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import Styles from '../styles/progress.module.css';
import PageTitle from "@/components/pageTitle";
import cls from "classnames";
import Image from "next/image";
import pythonImg from "../public/assets/python.svg";
import { CourseContext } from "@/context/courseContext";






const Progress = () => {

      const { selectedMyCourse,setSelectedMyCourse } = useContext(CourseContext);


      const user = useUser();

      const [isSideBarOpen, setIsSideBarOpen] = useState(false)
      const [activePage, setActivePage] = useState('')

      const router = useRouter();

      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])


      const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen);
      }



      return <>
        <Head>
            <title>Progress</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar toggle={toggleSideBar} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen}/>
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>
      <PageTitle title="PROGRESS" width="135px"/>
      <div className={Styles.progressesContainer}>
            {
                  selectedMyCourse.map((course, index) => {
                        return (
                              <div className={Styles.progressContainer}>
                              <Image className={Styles.img} src={course.imgSrc} width={60} height={60} alt={course.title}>
      
                              </Image>
                        <div className={Styles.progressContent}>
                            <h3 className={Styles.title}>{course.title}</h3>
                            <div className={Styles.progressBar}>
                                 <div className={Styles.innerProgress}>
      
                         </div>
                        </div>
                        </div>
                        <div className={Styles.progressPercentage}>
                              <h2 className={Styles.percentage}>0%</h2>
                        </div>
                        </div>
                        )
                  })
            }
                        <button className={Styles.buttonLrg} onClick={() => setSelectedMyCourse([])}>Clear all</button>
      </div>
    
      </div>
      </div>
      </>
}








const ProgressWithContext = () => {
      return <> 
      <UserProvider>
            <Progress />
      </UserProvider>
      </>
      
}

export default ProgressWithContext;




