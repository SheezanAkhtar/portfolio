"use client";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import develpAnimation from '../../development.json';
import githubIcon from '../../githubicon.json';
import facebookIcon from '../../facebookIcon.json';
import whatsAppIcon from '../../whatsAppIcon.json';
import linkedInIcon from '../../linkedIn.json';
import Lottie from 'lottie-react';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <div className='homMain'>
        <div>
          <h1 className="greeting">Aslamu Alaikum! I&apos;m</h1>
          <h1 className='nameInMain'>Sheezan Akhtar</h1>
          <h1 className='whoIam'>
            <span style={{ marginRight: 10, color: '#a0abb7' }}>I am a</span>
            <Typewriter
              options={{
                strings: [
                  'Passionate Web Developer',
                  'Skilled JavaScript Expert',
                  'Dedicated Mobile App Developer',
                  'Next.js Specialist',
                  'Expert in Front-end Development'
                ],
                autoStart: true,
                loop: true,
                delay: 35,
                deleteSpeed: 35
              }}
            />
          </h1>
          <p className='mySkills'>
            🚀 Front-End Developer skilled in JavaScript and Next.js, progressing toward Full Stack Development. 💻 Passionate about creating responsive web applications and eager to deliver seamless user experiences. 🌟
          </p>
          <div className="icons">
            <Link href={"https://github.com/SheezanAkhtar"}>
              <Lottie className='iconClass' animationData={githubIcon} />
            </Link>
            <Link href={"https://facebook.com/share/15iLaTCx8H"}>
              <Lottie className='iconClass' animationData={facebookIcon} />
            </Link>
            <Link href={"https://wa.me/qr/WYXH45V6ZCXXK1"}>
              <Lottie className='iconClass' animationData={whatsAppIcon} />
            </Link>
            <Link href={"https://www.linkedin.com/in/Sheezan-Akhtar/"}>
              <Lottie className='iconClass' animationData={linkedInIcon} />
            </Link>
          </div>
        </div>
        <div>
          <Lottie className='animation' animationData={develpAnimation} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
