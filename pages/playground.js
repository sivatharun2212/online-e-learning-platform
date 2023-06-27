import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import Styles from '../styles/playground.module.css';
import PageTitle from "@/components/pageTitle";
import cls from "classnames";






const Playground = () => {





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
            <title>Playground</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar toggle={toggleSideBar} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen}/>
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>

      <PageTitle title="PLAYGROUND" width="170px"/>
      <div className={Styles.playgroundContainer}>
      <div className={Styles.threeBody}>
<div className={Styles.threeBodyDot}></div>
<div className={Styles.threeBodyDot}></div>
<div className={Styles.threeBodyDot}></div>
</div>
      </div>
      </div>
      </div>

      </> 
}














const PlaygroundWithContext = () => {
      return <> 
      <UserProvider>
            <Playground />
      </UserProvider>
      </>
      
}

export default PlaygroundWithContext;