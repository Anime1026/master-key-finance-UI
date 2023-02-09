import Head from '../../components/head'
import './wallet.scss'

import Chart_icon_r from '../../assets/raise_icon.png'
import Chart_icon_d from '../../assets/down_icon.png'
import MKF from '../../assets/mkf.png'
import BTC from '../../assets/btc.png'
import BUSD from '../../assets/busd.png'
import KCS from '../../assets/kcs.png'
import SXP from '../../assets/sxp.png'
import VAX from '../../assets/vax.png'
import Chart1 from '../../assets/chart1.png'
import Chart2 from '../../assets/chart2.png'
import Footer from '../../components/footer'

export default function Wallet() {
    return(
        <div className='wallet'>
            <Head />
            <div className='wallet-container'>
                <div className='page-title'>Your Wallet</div>
                <div className='welcome'>Welcome, 0x3469ED...</div>
                <div className='wallet-card'>
                    <div className='wallet-card-obj'>
                        <div className='wallet-card-key'>Balance</div>
                        <div className='wallet-card-val'>$65,454</div>
                    </div>
                    <div className='wallet-card-obj'>
                        <div className='wallet-card-key'>Monthly Earnings</div>
                        <div className='wallet-card-val'>$12,673</div>
                    </div>
                    <div className='price-chart'>
                        <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                        <div className='price-chart-raise'>30%</div>
                    </div>
                </div>
                <div className='sub-title'>Live Bounties</div>
                <div className='wallet-ports'>
                    <div className='wallet-port card-theme'>
                        <div className='wallet-port-top'>
                            <div className='port-currency'>
                                <img className='currency-icon' src = {BTC} alt = "btc" />
                                <div className='currency-name'>
                                    <div className='currency-name-sup'>BTC/BUSD</div>
                                    <div className='currency-name-sub'>Bitcoin</div>
                                </div>
                            </div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>30%</div>
                            </div>
                        </div>
                        <div className='wallet-port-cont'>
                            <div className='port-txt'>Portfolio</div>
                            <div className='port-rate'>$543.90</div>
                        </div>
                        <img className='wallet-port-chart' src = {Chart1} alt = "chart" />
                    </div>
                    <div className='wallet-port card-theme'>
                        <div className='wallet-port-top'>
                            <div className='port-currency'>
                                <img className='currency-icon' src = {BUSD} alt = "busd" />
                                <div className='currency-name'>
                                    <div className='currency-name-sup'>BUSD/BTC</div>
                                    <div className='currency-name-sub'>Binance USD</div>
                                </div>
                            </div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>7.2%</div>
                            </div>
                        </div>
                        <div className='wallet-port-cont'>
                            <div className='port-txt'>Portfolio</div>
                            <div className='port-rate'>$0.03</div>
                        </div>
                        <img className='wallet-port-chart' src = {Chart2} alt = "chart" />
                    </div>
                    <div className='wallet-port card-theme'>
                        <div className='wallet-port-top'>
                            <div className='port-currency'>
                                <img className='currency-icon' src = {SXP} alt = "sxp" />
                                <div className='currency-name'>
                                    <div className='currency-name-sup'>SXP/BUSD</div>
                                    <div className='currency-name-sub'>SXP</div>
                                </div>
                            </div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_d} alt = "price" />
                                <div className='price-chart-down'>12%</div>
                            </div>
                        </div>
                        <div className='wallet-port-cont'>
                            <div className='port-txt'>Portfolio</div>
                            <div className='port-rate'>$543.90</div>
                        </div>
                        <img className='wallet-port-chart' src = {Chart2} alt = "chart" />
                    </div>
                    <div className='wallet-port card-theme'>
                        <div className='wallet-port-top'>
                            <div className='port-currency'>
                                <img className='currency-icon' src = {KCS} alt = "kcs" />
                                <div className='currency-name'>
                                    <div className='currency-name-sup'>KCS/BUSD</div>
                                    <div className='currency-name-sub'>Kucoin</div>
                                </div>
                            </div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>6.5%</div>
                            </div>
                        </div>
                        <div className='wallet-port-cont'>
                            <div className='port-txt'>Portfolio</div>
                            <div className='port-rate'>$21.3</div>
                        </div>
                        <img className='wallet-port-chart' src = {Chart1} alt = "chart" />
                    </div>
                    <div className='wallet-port card-theme'>
                        <div className='wallet-port-top'>
                            <div className='port-currency'>
                                <img className='currency-icon' src = {VAX} alt = "VAX" />
                                <div className='currency-name'>
                                    <div className='currency-name-sup'>VAX/BUSD</div>
                                    <div className='currency-name-sub'>VAX</div>
                                </div>
                            </div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_d} alt = "price" />
                                <div className='price-chart-down'>0.13%</div>
                            </div>
                        </div>
                        <div className='wallet-port-cont'>
                            <div className='port-txt'>Portfolio</div>
                            <div className='port-rate'>$0.14</div>
                        </div>
                        <img className='wallet-port-chart' src = {Chart2} alt = "chart" />
                    </div>
                </div>
                <div className='sub-title'>Wallet MKF Balance</div>
                <div className='wallet-ports'>
                    <div className='balance-card card-theme'>
                        <div className='balance-card-left'>
                            <img className='currency-icon' src = {MKF} alt = "mkf" />
                            <div className='currency-name'>
                                    <div className='currency-name-sup'>MKF/BUSD</div>
                                    <div className='currency-name-sub'>MasterKey Finance</div>
                                </div>
                        </div>
                        <div className='balance-card-right'>
                            <div className='port-rate'>$98,763.43</div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>4.5%</div>
                            </div>
                        </div>
                    </div>
                    <div className='balance-card card-theme'>
                        <div className='balance-card-left'>
                            <img className='currency-icon' src = {VAX} alt = "vax" />
                            <div className='currency-name'>
                                    <div className='currency-name-sup'>VAX/BUSD</div>
                                    <div className='currency-name-sub'>VAX</div>
                                </div>
                        </div>
                        <div className='balance-card-right'>
                            <div className='port-rate'>$432.12</div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_d} alt = "price" />
                                <div className='price-chart-down'>1.2%</div>
                            </div>
                        </div>
                    </div>
                    <div className='balance-card card-theme'>
                        <div className='balance-card-left'>
                            <img className='currency-icon' src = {KCS} alt = "kcs" />
                            <div className='currency-name'>
                                    <div className='currency-name-sup'>KCS/BUSD</div>
                                    <div className='currency-name-sub'>KCS</div>
                                </div>
                        </div>
                        <div className='balance-card-right'>
                            <div className='port-rate'>$98,763.43</div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>4.5%</div>
                            </div>
                        </div>
                    </div>
                    <div className='balance-card card-theme'>
                        <div className='balance-card-left'>
                            <img className='currency-icon' src = {SXP} alt = "sxp" />
                            <div className='currency-name'>
                                    <div className='currency-name-sup'>SXP/BUSD</div>
                                    <div className='currency-name-sub'>SXP</div>
                                </div>
                        </div>
                        <div className='balance-card-right'>
                            <div className='port-rate'>$2,126.02</div>
                            <div className='price-chart'>
                                <img className='price-chart-icon' src = {Chart_icon_r} alt = "price" />
                                <div className='price-chart-raise'>21.3%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}