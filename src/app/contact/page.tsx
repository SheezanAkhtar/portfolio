"use client"

import Image from "next/image";
import profilePic from "../../public/profilePicture.jpg";
import Link from "next/link";
import Lottie from "lottie-react";
import githubIcon from '../../../githubicon.json';
import facebookIcon from '../../../facebookIcon.json';
import whatsAppIcon from '../../../whatsAppIcon.json';
import linkedInIcon from '../../../linkedIn.json';
import locationIcon from "../../../locationIcon.json";
import emailIcon from "../../public/emailIcon.png";

const Contact = () => {
    return (
        <div>
            <div className="contactMain">
                <h1 className="reachOUtTome">Reach Out to Me!</h1>
                <div className="contactInner">
                    <div className="contactmeContent">
                        <h1 className="speicalClasscontact">Interested in collaborating or just want to chat? My inbox is always open.</h1>
                        <br />
                        <h1>
                            &quot;Aspiring Web Developer | Passionate about learning and growing in web technologies | Continuously building and refining my skills.&quot;
                        </h1>
                        <div className="location">
                            <Lottie animationData={locationIcon} className="locationIcon" />
                            <p>Karachi, Pakistan</p>
                        </div>
                        <p className="opportunity">Open for Opportunity: <span>Yes</span></p>
                    </div>
                    <Image src={profilePic} width={350} height={300} alt="Profile Pic" className="profilepic" />
                </div>
                <div className="iconsInContacts">
                    <Link href={"https://github.com/SheezanAkhtar"}>
                        <Lottie className='iconClassConact' animationData={githubIcon} />
                    </Link>
                    <Link href={"https://facebook.com/share/15iLaTCx8H"}>
                        <Lottie className='iconClassConact' animationData={facebookIcon} />
                    </Link>
                    <Link href={"https://wa.me/qr/WYXH45V6ZCXXK1"}>
                        <Lottie className='iconClassConact' animationData={whatsAppIcon} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/Sheezan Akhtar/"}>
                        <Lottie className="iconClassConact" animationData={linkedInIcon} />
                    </Link>
                    <Link href={"mailto:sheezanakhtar316@gmail.com"}>
                        <Image src={emailIcon} width={50} height={50} alt="Email Icon" className="iconClassConact" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;