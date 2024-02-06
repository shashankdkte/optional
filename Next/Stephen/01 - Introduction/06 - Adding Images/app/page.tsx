import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div>
      HomePage
      <Image  src={homeImg} alt="" fill />
    </div>
  )
}