import { Link } from 'react-router';
import { NavBar } from '../components/navbar/navbar.jsx';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/logo/logo.jsx'
import  shopPic from '../assets/shop_pic.png';

export function Homepage() {
    return (
      <div className='homepage-container'>
        <img src={shopPic} alt="shop icon" className='homepage-icon'/>
        <h1>Welcome to the <Logo size={'large'}/></h1>
        <Link to={"shop"} className='homepage-cta'>Browse Shop<ArrowRight color={"#000000"} size={24} strokeWidth={2}/></Link>
      </div>
    )
}

export default Homepage;
