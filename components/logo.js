import Image from "next/image";
import styles from '@/styles/logo.module.css'


const Logo = () => {
      return <div className={styles.logoContainer}>
            <Image src="/assets/olplogo.svg" width={50} height={50}>

            </Image>
            <h3 className={styles.title}>SKILLME</h3>
      </div>
}

export default Logo;