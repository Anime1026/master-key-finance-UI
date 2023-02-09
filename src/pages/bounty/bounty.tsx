// @ts-ignore
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import './bounty.scss'

import Head from '../../components/head'
import MKF from '../../assets/mkf.png'
import SXP from '../../assets/sxp.png'
import KCS from '../../assets/kcs.png'
import VAX from '../../assets/vax.png'
import BTC from '../../assets/btc.png'
import Right from '../../assets/right_b.png'
import Left from '../../assets/left_b.png'
import Elect from '../../assets/elec.png'
import Footer from '../../components/footer';


export default function Bounty() {

    return (
        <div className='bounty'>
            <Head />
            <div className='dashboard-container'>
                <div className='page-title'>Live Bounties</div>
                <div className='welcome'>Welcome, 0x3469ED...</div>
                <div className='bounty-cards'>
                    <div className='bounty-card card-theme'>
                        <div className='bounty-card-sup'>Active Swaps</div>
                        <div className='bounty-card-sub'>Total swaps today</div>
                        <div className='bounty-amount'>$1,000</div>
                        <Progress
                            theme={{
                                default: {
                                    color: "white"
                                }
                            }}
                            percent={60}
                        />
                    </div>
                    <div className='bounty-card card-theme'>
                        <div className='bounty-card-sup'>Authorized Swaps</div>
                        <div className='bounty-card-sub'>Per day ratio</div>
                        <div className='bounty-amount'>$250</div>
                        <Progress
                            theme={{
                                default: {
                                    color: "white"
                                }
                            }}
                            percent={40}
                        />
                    </div>
                </div>
                <div className='sub-title'>Live Bounties</div>
                <div className='bounty-boxes'>
                    <div className='bounty-box card-theme'>
                        <div className='currency'>
                            <img className='currency-icon' src={MKF} alt="mkf" />
                            <div className='currency-name'>MKF</div>
                        </div>
                        <div className='swap'>
                            <img className='swap-icon' src={Left} alt="left" />
                            <img className='swap-icon' src={Elect} alt="ele" />
                            <img className='swap-icon' src={Right} alt="right" />
                        </div>
                        <div className='currency'>
                            <img className='currency-icon' src={MKF} alt="mkf" />
                            <div className='currency-name'>MKF</div>
                        </div>
                    </div>
                    <div className='bounty-box card-theme'>
                        <div className='currency'>
                            <img className='currency-icon' src={SXP} alt="SXP" />
                            <div className='currency-name'>SXP</div>
                        </div>
                        <div className='swap'>
                            <img className='swap-icon' src={Left} alt="left" />
                            <img className='swap-icon' src={Elect} alt="ele" />
                            <img className='swap-icon' src={Right} alt="right" />
                        </div>
                        <div className='currency'>
                            <img className='currency-icon' src={SXP} alt="SXP" />
                            <div className='currency-name'>SXP</div>
                        </div>
                    </div>
                    <div className='bounty-box card-theme'>
                        <div className='currency'>
                            <img className='currency-icon' src={KCS} alt="KCS" />
                            <div className='currency-name'>KCS</div>
                        </div>
                        <div className='swap'>
                            <img className='swap-icon' src={Left} alt="left" />
                            <img className='swap-icon' src={Elect} alt="ele" />
                            <img className='swap-icon' src={Right} alt="right" />
                        </div>
                        <div className='currency'>
                            <img className='currency-icon' src={KCS} alt="KCS" />
                            <div className='currency-name'>KCS</div>
                        </div>
                    </div>
                    <div className='bounty-box card-theme'>
                        <div className='currency'>
                            <img className='currency-icon' src={VAX} alt="VAX" />
                            <div className='currency-name'>VAX</div>
                        </div>
                        <div className='swap'>
                            <img className='swap-icon' src={Left} alt="left" />
                            <img className='swap-icon' src={Elect} alt="ele" />
                            <img className='swap-icon' src={Right} alt="right" />
                        </div>
                        <div className='currency'>
                            <img className='currency-icon' src={VAX} alt="VAX" />
                            <div className='currency-name'>VAX</div>
                        </div>
                    </div>
                    <div className='bounty-box card-theme'>
                        <div className='currency'>
                            <img className='currency-icon' src={BTC} alt="BTC" />
                            <div className='currency-name'>BTC</div>
                        </div>
                        <div className='swap'>
                            <img className='swap-icon' src={Left} alt="left" />
                            <img className='swap-icon' src={Elect} alt="ele" />
                            <img className='swap-icon' src={Right} alt="right" />
                        </div>
                        <div className='currency'>
                            <img className='currency-icon' src={BTC} alt="BTC" />
                            <div className='currency-name'>BTC</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}