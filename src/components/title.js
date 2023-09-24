import Image from "next/image";
import logo from '../../public/images/weather_app.png';

export default function Title() {
  return (
    <>
      <h1>Max personal weather app</h1>
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Weather app logo"
      />
    </>
  );
}
