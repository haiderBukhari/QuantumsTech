import './TechStack.css'
import Pic1 from '../assets/all-pic/pic1.png';
import Pic2 from '../assets/all-pic/pic2.png';
import Pic3 from '../assets/all-pic/pic3.jpg';
import Pic4 from '../assets/all-pic/pic4.jpg';
import Pic5 from '../assets/all-pic/pic5.jpg';
import Pic6 from '../assets/all-pic/pic6.png';
import Pic7 from '../assets/all-pic/pic7.png';
import Pic8 from '../assets/all-pic/pic8.jpg';
import Pic9 from '../assets/all-pic/pic9.jpg';
import Pic10 from '../assets/all-pic/pic10.jpg';
import Pic11 from '../assets/all-pic/pic11.jpg';
import Pic12 from '../assets/all-pic/pic12.jpg';
import Pic13 from '../assets/all-pic/pic13.jpg';
import Pic14 from '../assets/all-pic/pic14.jpg';
import Pic15 from '../assets/all-pic/pic15.jpg';
import Pic16 from '../assets/all-pic/pic16.jpg';
import Pic17 from '../assets/all-pic/pic17.png';
import Pic18 from '../assets/all-pic/pic18.jpg';

let skills = ["Web Designing and Development", "Wordpress", "Graphic Designing", "Logo Designing", "Coding & Game Development", "Social Media Marketing", "SEO and Website Optimization", "Video and Image Editing", "Digital Marketing", "Data Analytics and Machine Learning", "CopyWrting and Content Creation", "E-Commerce Application Development", "Video Production", "BlockChain", "UI/UX Designing", "Project Management", "Python Developer", "Excel/MsWord/PPT",];
const imageArray = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic14, Pic15, Pic16, Pic17, Pic18,];

export const TechStack = () => {
    return (
        <>
            <h1 className='main1'>Explore the Tech Stack</h1>
            <div className='tech-stack'>
                {skills.map((skill, index) => (
                    <div className="data">
                        <img src={imageArray[index]} alt="" srcset="" />
                        <p>{skill}</p>
                    </div>))}
            </div>
        </>
    );
};
