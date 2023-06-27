import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import { signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";
import { useState, useEffect, useContext } from "react";
import Styles from "../Courses/Home.module.css";
import cls from "classnames";
import PageTitle from "@/components/pageTitle";
import CourseCard from "@/components/courseCard";
import pythonIcon from "../../public/assets/python.svg";
import cIcon from "../../public/assets/c-lang.png";
import cPlusIcon from "../../public/assets/c++.svg";
import cssIcon from "../../public/assets/css.svg";
import htmlIcon from "../../public/assets/html.svg";
import javaIcon from "../../public/assets/java.svg";
import javascriptIcon from "../../public/assets/javascript.svg";
import nextIcon from "../../public/assets/next.svg";
import reactIcon from "../../public/assets/react.svg";
import { CourseContext } from "@/context/courseContext";







const AllCourses = () => {

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
      
      const [isSideBarOpen, setIsSideBarOpen] = useState(false);
      const [activePage, setActivePage] = useState('');
      const [search, setSearch] = useState('');
      const [filteredCourses, setFilteredCourses] = useState(courses);

      const user = useUser();

      const router = useRouter();

      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])




      const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen);
            
      }

      useEffect(() => {
            const filtered = courses.filter((course) => {
                  return course.title.toLowerCase().includes(search.toLowerCase())
            })
            setFilteredCourses(filtered);
      },[search])




      
      const handleSignOut = async () => {
            await signOut(auth)
            router.push("/login");
       }



      const { handleCourseClick } = useContext(CourseContext);

       const handleCardClick = (course) => {
            handleCourseClick(course);
       }


      console.log("userDetails :", user);



 

          if (user === null) {
            return <div className={Styles.loaderContainer}><div className="loader">

            </div></div>;
          }
          
    return <>
      <Head>
            <title>Courses | Explore our courses</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={Styles.pageContainer}>
      <NavBar toggle={toggleSideBar} setSearch={setSearch} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen} />
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }

      
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>
            <PageTitle title="ALL COURSES" width="170px"/>
            <div className={Styles.coursesListContainer}>
                  {
                        filteredCourses.map((course, index) => {
                              return <Link href={`/Courses/${course.title}`}>
                        <CourseCard onClick={() => handleCardClick(course)} key={index} title={course.title} imgSrc={course.imgSrc} />
                              </Link> 

                        })
                  }
            </div>
      </div>
      </div>
      <h1>all courses page</h1>
      {user && user.displayName && (
        <h3>Welcome, {user.displayName}</h3>
      )}
      <br></br>
      {
            user && (<button className={Styles.buttonLrg} onClick={handleSignOut}>Sign out</button>)
      }
     
     </div>

      </>
}



const AllCoursesWithContext = () => {
      return <> 
      <UserProvider>
            <AllCourses />
      </UserProvider>
      </>
      
}

export default AllCoursesWithContext;