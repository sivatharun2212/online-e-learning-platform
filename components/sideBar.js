import Styles from "../styles/sideBar.module.css";
import cls from "classnames";
import Link from 'next/link';

const SideBar = ({ activePage }) => {
      return <>
      <section className={Styles.sideBar}>
            <div className={Styles.container}>
                  <div className={Styles.linksList}>
                        <div className={cls(activePage === "/Courses" ? Styles.activePage : '', Styles.titleBackGround)}>
                        <Link href='/Courses'>
                        <span className={Styles.pageTitle}>ALL COURSES</span>
                        </Link>
                        </div>
                        <div className={cls(activePage === "/myCourses" ? Styles.activePage : '', Styles.titleBackGround)}>


                        <Link href='/myCourses'>
                        <span className={Styles.pageTitle}>MY COURSES</span>
                        </Link>
                        </div>
                        <div className={cls(activePage === "/progress" ? Styles.activePage : '', Styles.titleBackGround)}>

                        <Link href='/progress'>
                        <span className={Styles.pageTitle}>PROGRESS</span>
                        </Link>
                        </div>
                        <div className={cls(activePage === "/myNotes" ? Styles.activePage : '', Styles.titleBackGround)}>

                        <Link href='/myNotes'>
                        <span className={Styles.pageTitle}>MY NOTES</span>
                        </Link>
                        </div>
                        <div className={cls(activePage === "/playground" ? Styles.activePage : '', Styles.titleBackGround)}>
                        <Link href='/playground'>
                        <span className={Styles.pageTitle}>PLAYGROUND</span>
                        </Link>
                        </div>
                  </div>
            </div>
            <div className={Styles.socialLinks}>
                  
            </div>
            <div className={Styles.dividerLine}>

            </div>
      </section>
      </>
}

export default SideBar;