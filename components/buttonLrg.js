import Styles from '@/styles/buttonLrg.module.css'


const ButtonLrg = (props) => {
      return <button  className={Styles.buttonLrg}>
            {props.btnName}
      </button> 
}

export default ButtonLrg;