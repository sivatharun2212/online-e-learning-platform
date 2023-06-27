import Styles from "../styles/courseCard.module.css";
import Image from "next/image";

const CourseCard = ({title, imgSrc, onClick}) => {
      return <>
      
      <div onClick={onClick} className={Styles.cardContainer}>
            <div className={Styles.header}>
                  <div className={Styles.line}>
                  </div>
                  <h3 className={Styles.title}>{title}</h3>
            </div>
            <Image className={Styles.image} src={imgSrc} width={150} height={150} alt="python icon">

            </Image>
      </div>
      </>
}

export default CourseCard;