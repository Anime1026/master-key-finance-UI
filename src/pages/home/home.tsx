import Footer from "../../components/footer";
import Head from "../../components/head";
import './home.scss'

import Hero from '../../assets/mkf_hero.png'
import Demo1 from '../../assets/demo1.png'
import Demo2 from '../../assets/demo2.png'
import Demo3 from '../../assets/demo3.png'
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="home">
            <Head />
            <div className='home-container'>
                <div className="home-hero">
                    <div className="home-hero-left">
                        <img className="home-hero-img" src = {Hero} alt = "hero" />
                    </div>
                    <div className="home-hero-right">
                        <div className="home-hero-sup">The Future of DeFi</div>
                        <div className="home-hero-cont">
                            Vetoran-owned and operated, we strive to keep out honor, courage, and commitment to not only our holders but our technology as well. Our bedrock...Truth, and Transparency within our team is 100% based in the United States and committed to working with the SEC and beyond.
                            We want to bring comfort and offer a safe haven within the BSC space for all to emulate.
                        </div>
                    </div>
                </div>
                <div className="start-btn">
                    <Link to = "/dashboard" >START EARNING</Link>
                </div>
                <div className="learn">
                    <a href = "https://mskt-organization.gitbook.io/master-key-finance-white-paper/" target="_blank" rel="noreferrer">Learn more</a>
                </div>
                <div className="demos">
                    <img className="demo-img-d" src = {Demo1} alt = "demo" />
                    <img className="demo-img-u" src = {Demo2} alt = "demo" />
                    <img className="demo-img-d" src = {Demo3} alt = "demo" />
                </div>
            </div>
            <Footer />
        </div>
    )
}