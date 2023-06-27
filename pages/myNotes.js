import Head from "next/head";
import { useState, useEffect,useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import Styles from '../styles/myNotes.module.css';
import PageTitle from "@/components/pageTitle";
import cls from "classnames";
import { NotesContext } from "@/context/notesContext";
import Image from "next/image";
import pythonIcon from "../public/assets/python.svg";
import cIcon from "../public/assets/c-lang.png";
import cPlusIcon from "../public/assets/c++.svg";
import cssIcon from "../public/assets/css.svg";
import htmlIcon from "../public/assets/html.svg";
import javaIcon from "../public/assets/java.svg";
import javascriptIcon from "../public/assets/javascript.svg";
import nextIcon from "../public/assets/next.svg";
import reactIcon from "../public/assets/react.svg";
import Link from "next/link";




const MyNotes = () => {


      const courses = [
            {
                  "title":"Python",
                  "imgSrc":pythonIcon
            },
            {
                  "title":"JavaScript",
                  "imgSrc":javascriptIcon
            },
            {
                  "title":"C",
                  "imgSrc":cIcon
            },
            {
                  "title":"C++",
                  "imgSrc":cPlusIcon
            },
            {
                  "title":"Html",
                  "imgSrc":htmlIcon
            },
            {
                  "title":"Css",
                  "imgSrc":cssIcon
            },
            {
                  "title":"Java",
                  "imgSrc":javaIcon
            },
            {
                  "title":"React.js",
                  "imgSrc":reactIcon
            },
            {
                  "title":"Next.js",
                  "imgSrc":nextIcon
            }

      ]




      const user = useUser();

      const { writtenAddNotes, setWrittenAddNotes} = useContext(NotesContext);

      const [isSideBarOpen, setIsSideBarOpen] = useState(false)
      const [activePage, setActivePage] = useState('')

      const router = useRouter();

      const getRequiredImgSrc = (writtenAddNotes,courses) => {
           const matchingCourses = writtenAddNotes.filter((note) => {
           return courses.find((course) => course.title === note.courseType)
          });

          return matchingCourses.map((course) => course.imgSrc)
      }
      const requiredImgSrc = getRequiredImgSrc(writtenAddNotes,courses)
 

      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])

console.log(activePage)
      const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen);
      }






      return <>
        <Head>
            <title>My Notes</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar toggle={toggleSideBar} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen}/>
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>
      <PageTitle title="MY NOTES" width="125px"/>
      <div className={Styles.noteContainer}>

            {
                  writtenAddNotes.map((note, index) => {
                        return (
                              <div className={Styles.notesContainer}>
                                    <div className={Styles.header}>
                                          <h2 className={Styles.title}>{note.title}</h2>
                                          <div className={Styles.btns}>
                                          <button className={Styles.btn}>Delete</button>
                                          <button className={Styles.btn}>Download</button>
                                          </div>
                                    </div>
                                    <div className={Styles.notes}>
                                          <pre style={{ whiteSpace: 'pre-wrap'}}>{note.notes}</pre>
                                    </div>
                              </div>
                        )
                  })
            }

            <Link href='/addNotes'>
            <button className={Styles.buttonLrg}>Add Notes</button>
            </Link>
            </div>
      </div>
      </div>
      </> 
}









const MyNotesWithContext = () => {
      return <> 
      <UserProvider>
            <MyNotes />
      </UserProvider>
      </>
      
}

export default MyNotesWithContext;