import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/userContext";
import { UserProvider } from "@/context/userContext";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import Styles from '../styles/addNotes.module.css';
import PageTitle from "@/components/pageTitle";
import cls from "classnames";
import { NotesContext } from "@/context/notesContext";




const MyNotes = () => {

      const user = useUser();
      const { handleAddNotes } = useContext(NotesContext);

      const [title,setTitle] = useState("");
      const [notes,setNotes] = useState("");
      const [isSideBarOpen, setIsSideBarOpen] = useState(false)
      const [activePage, setActivePage] = useState('')



      const router = useRouter();
      useEffect(() => {
            setActivePage(router.pathname)
      }, [router.pathname])


      const toggleSideBar = () => {
            setIsSideBarOpen(!isSideBarOpen);
      }

      const handleAddNotesBtn = () => {
            const notesCollection = {
                  title:title,
                  notes:notes,
            }
            handleAddNotes(notesCollection)
      }
      


      return <>
        <Head>
            <title>Add new notes</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar toggle={toggleSideBar} showSearch={activePage === '/Courses' || activePage === '/myCourses'} isSideBarOpen={isSideBarOpen}/>
      <div className={Styles.bodyContainer}>
      {
            isSideBarOpen && <SideBar activePage={activePage}/>
      }
      <div className={cls(!isSideBarOpen && Styles.fullMainContainer, Styles.mainContent)}>
      <PageTitle title="ADD NOTES" width="140px"/>
      <div className={Styles.notesContainer}>
                  <input 
                  value={title} 
                  className={Styles.title} 
                  type="text" 
                  placeholder="Notes title....."
                  onChange={(e) => setTitle(e.target.value)}
                  />

                  <textarea 
                  value={notes} 
                  className={Styles.textarea} 
                  type="textarea"
                  placeholder="Notes....." 
                  cols="30" 
                  rows="10" 
                  onChange={(e) => setNotes(e.target.value)}
                  />
            
            <button onClick={handleAddNotesBtn} className={Styles.buttonLrg}>Add Notes</button>

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