import Styles from "../styles/pageTitle.module.css";





const PageTitle = ({title, width}) => {
      const underLineStyle = {
            width:width
      }
      return <>
      <div className={Styles.titleContainer}>
            <h2 className={Styles.title}>{title}</h2>
            <div style={underLineStyle} className={Styles.underLine}>

            </div>
      </div>
      </>
}

export default PageTitle;