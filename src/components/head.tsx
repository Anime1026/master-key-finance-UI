import { Link } from 'react-router-dom'
// import { ethers } from "ethers";
//@ts-ignore
import { NotificationManager } from "react-notifications";

import './comp.styles.scss'

import Logo from '../assets/mkf.png';
import Burger from '../assets/burger.png';
import Dashboard from '../assets/dash_menu.png'
import Bounty from '../assets/bounty_menu.png'
import Setting from '../assets/setting_menu.png'
import Wallet from '../assets/wallet_menu.png'
import Connect_icon from '../assets/elec.png'
import Chart_icon_r from '../assets/raise_icon.png'
import Right from '../assets/right_s.png'
import { useState } from 'react';

declare global {
    interface Window {
        ethereum?: any
    }
}

export default function Head() {
    const [modalOpened, setModalOpened] = useState(false)
    const [flag, setFlag] = useState(false);
    const [wallet, setWallet] = useState("");

    const handleModal = () => {
        setModalOpened(!modalOpened)
    }
    const handleConnect = async () => {
        if (typeof window !== "undefined") {
            if (window.ethereum) {
                console.log("Exsist metamask");
                const chainId = await window.ethereum.request({
                    method: "eth_chainId",
                });
                if (!flag && chainId === "0x61")
                    window.ethereum
                        .enable()
                        .then(async (res: any) => {
                            window.sessionStorage.setItem("address", res[0]);
                            setWallet(res[0]);
                            setFlag(true);
                            window.sessionStorage.setItem("connected", "true");
                            // const provider = new ethers.providers.Web3Provider(
                            //     //@ts-ignore
                            //   window.ethereum
                            // );
                            // const balance = await provider.getBalance(res[0]);
                            // const bal = ethers.utils.formatEther(balance);
                            // window.sessionStorage.setItem("balance", bal);
                            //   window.location.reload();
                            if (res) {
                                NotificationManager.success(
                                    "Connected Metamask successfully.",
                                    "Success",
                                    3000
                                );
                            }
                        })
                        .catch((err: any) => {
                            NotificationManager.error(err.message, "Error", 3000);
                            setFlag(false);
                            window.sessionStorage.removeItem("address");
                            window.sessionStorage.removeItem("connected");
                            // window.sessionStorage.removeItem("balance");
                            // window.location.reload();
                        });
                if (chainId !== "0x61") {
                    NotificationManager.warning(
                        "Please change network to BSC test net.",
                        "Action required",
                        3000
                    );
                }
            } else {
                NotificationManager.warning(
                    "You must install metamask.",
                    "Action required",
                    3000
                );
            }
        }
    }

    return (
        <>
            <div className='sticky'>Powered By <b>MarketingKey PoRtal</b><sup>TM</sup></div>
            <div className='head'>
                <div className='logo-container'>
                    <Link to="/">
                        <img src={Logo} className="logo-img" alt="logo" />
                    </Link>
                </div>
                <div className='nav'>
                    <div className='nav-bar'>
                        <Link to="/" >Home</Link>
                    </div>
                    <div className='nav-bar'>
                        <Link to="/dashboard" >Dashboard</Link>
                    </div>
                    <div className='nav-bar'>
                        <Link to="/bounty" >Bounty</Link>
                    </div>
                    <div className='nav-bar'>
                        <Link to="/wallet" >Wallet</Link>
                    </div>
                    <div className='nav-bar'>
                        <Link to="/value" >Values</Link>
                    </div>
                    <div className='nav-bar'>
                        <Link to="/setting">Setting</Link>
                    </div>
                    <div className='nav-bar'>
                        <div className='wallet-connect-btn' onClick={handleConnect}>
                            <img src={Connect_icon} alt="connect" className='wallet-connect-icon' />
                            {flag ? wallet.slice(0, 4) + "..." + wallet.slice(-3) : "Connect"}
                            {/* <div>Connect</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='head-mobile'>
                <div className='burger' onClick={handleModal}>
                    <img className='burger-icon' src={Burger} alt="burger" />
                </div>
                <div className='burger-logo'>
                    <div>Powered By</div>
                    <div><b>MarketingKey PoRtal</b><sup>TM</sup></div>
                </div>
                <div className='mobile-bar'>
                    {/* <Link to = "/">
                        <img src = {Dashboard} alt = "menu" />
                    </Link> */}
                    <Link to="/dashboard">
                        <img src={Dashboard} alt="menu" />
                    </Link>
                    <Link to="/bounty">
                        <img src={Bounty} alt="menu" />
                    </Link>
                    <Link to="/wallet">
                        <img src={Wallet} alt="menu" />
                    </Link>
                    <Link to="/setting">
                        <img src={Setting} alt="menu" />
                    </Link>
                </div>
            </div>
            {
                (modalOpened === true) ?
                    <>
                        <div className='mobile-modal-bg' onClick={handleModal}></div>
                        <div className='mobile-modal'>
                            <div className='modal-close' onClick={handleModal}>X</div>
                            <div className='modal-connect' onClick={handleConnect}>
                                <img src={Connect_icon} alt="connect" width="20px" />
                                {/* <div className='connect-btn'>Connect</div> */}
                                {flag ? wallet.slice(0, 4) + "..." + wallet.slice(-3) : "Connect"}
                            </div>
                            <div className='modal-logo'>
                                <div>Powered By</div>
                                <div><b>MarketingKey PoRtal</b><sup>TM</sup></div>
                            </div>
                            <div className='modal-score'>
                                <div className='price-chart'>
                                    <img className='price-chart-icon' src={Chart_icon_r} alt="price" />
                                    <div className='price-chart-raise'>30%</div>
                                </div>
                                <div className='port-rate'>$65,454</div>
                            </div>
                            <Link to="/dashboard">
                                <div className='modal-nav'>
                                    <div className='modal-nav-l'>
                                        <img src={Dashboard} alt="icon" />
                                        <div className='modal-nav-name'>Dashboard</div>
                                    </div>
                                    <img src={Right} alt="icon" />
                                </div>
                            </Link>
                            <Link to="/bounty">
                                <div className='modal-nav'>
                                    <div className='modal-nav-l'>
                                        <img src={Bounty} alt="icon" />
                                        <div className='modal-nav-name'>Live Bounties</div>
                                    </div>
                                    <img src={Right} alt="icon" />
                                </div>
                            </Link>
                            <Link to="/wallet">
                                <div className='modal-nav'>
                                    <div className='modal-nav-l'>
                                        <img src={Wallet} alt="icon" />
                                        <div className='modal-nav-name'>Wallet</div>
                                    </div>
                                    <img src={Right} alt="icon" />
                                </div>
                            </Link>
                            <Link to="/setting">
                                <div className='modal-nav'>
                                    <div className='modal-nav-l'>
                                        <img src={Setting} alt="icon" />
                                        <div className='modal-nav-name'>Setting</div>
                                    </div>
                                    <img src={Right} alt="icon" />
                                </div>
                            </Link>
                        </div>
                    </> : null
            }
        </>
    )
}