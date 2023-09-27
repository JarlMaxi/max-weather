import Image from "next/image";
import logo from '../../public/images/weather_app.png';
import styles from  '@/styles/title.module.css'

export default function Title() {
  return (
    <div className={styles.body}>
      <h1>Max personal weather app</h1>
      <Image
        src={logo}
        width={150}
        height={150}
        alt="Weather app logo"
      />
    </div>
  );
}
