import Styles from "../styles/navBar.module.css";
import Image from "next/image";
import menuIcon from "../public/assets/menu-icon.svg";
import Link from "next/link";
import Search from "./search"
import logoImg from "../public/assets/olplogo.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import closeIcon from '../public/assets/close-icon.svg'


const NavBar = ({ toggle, showSearch,isSideBarOpen,setSearch }) => {


      const [activePage, setActivePage] = useState('')
      const router = useRouter();


      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])

      


      return <>
            <div className={Styles.container}>
                  <div className={Styles.contentLeftWraper}>

                  <div className={Styles.menuContainer}>
                       {
                        isSideBarOpen ? (<Image src={closeIcon} className={Styles.menuIcon} onClick={toggle} width={25} height={25} alt="logo">

                        </Image>) : (<Image className={Styles.menuIcon} onClick={toggle} src={menuIcon} width={25} height={25} alt="menu icon">

                        </Image>) 

                       }
                        
                  </div>
                  <div className={Styles.logoContainer}>
                        <Image src={logoImg} width={40} height={40} alt="logo">

                        </Image>
                        <span className={Styles.title}>SKILLME</span>
                  </div>
                  </div>

                  {/* space for search component */}

                  {
                        showSearch && <Search setSearch={setSearch}/>  
                  }
                  

                  <div className={Styles.contentRightWraper}>
                        {
                              activePage === '/Courses' ? (
                                    <Link href='/myCourses'>
                        <span className={Styles.title}>MY COURSES</span>
                        </Link>
                              ) : <Link href='/Courses'>
                              <span className={Styles.title}>ALL COURSES</span>
                              </Link>
                        }
                        
                        
                        <div className={Styles.profilePicContainer}>

                        </div>
                  </div>


            </div>
      </>
}

export default NavBar;