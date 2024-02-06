import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps{
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps)
{
  <div>
    <Image src={props.imgData} alt={props.imgAlt} />
    <p>{props.title}</p>
  </div>
}