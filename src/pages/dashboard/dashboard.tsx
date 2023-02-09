import Head from '../../components/head'
import './dashboard.scss'

import Record_icon from '../../assets/edit.png'
import Right_icon from '../../assets/right.png'
import Key_icon from '../../assets/key_box.png'
import Alarm_icon from '../../assets/alarm.png'
import Wallet_icon from '../../assets/wallet.png'
import Footer from '../../components/footer'

export default function Dashboard() {
    return(
        <div className='dashboard'>
            <Head />
            <div className='dashboard-container'>
                <div className='page-title'>Dashboard</div>
                <div className='welcome'>Welcome, 0x3469ED...</div>
                <div className='dash-card card-theme'>
                    <div className='dash-card-sup'>
                        <div className='dash-card-sup-key'>MasterKey Finance</div>
                        <div className='dash-card-sup-val'>$35,000</div>
                    </div>
                    <div className='dash-infors'>
                        <div>Information</div>
                        <div>Token Name</div>
                        <div>Token symbol</div>
                        <div>Decimals</div>
                        <div>MKF Contract</div>
                        <div>BUSD Address</div>
                    </div>
                    <div className='dash-card-btns'>
                        <div className='buy-btn'>BUY</div>
                        <div className='stake-btn'>STAKE</div>
                    </div>
                </div>
                <div className='sub-title'>Your Earnings</div>
                <div className='earning-cards'>
                    <div className='earned-card card-theme'>
                        <img className='card-icon' src = {Record_icon} alt = "icon" />
                        <div className='earning-card-contents'>
                            <div className='card-content-sup'>Your Total BUSD Earned</div>
                            <div className='card-content-sub'>4230 BUSD Earned</div>
                        </div>
                        <img className='card-icon' src = {Right_icon} alt = "icon" />
                    </div>
                    <div className='earned-card card-theme'>
                        <img className='card-icon' src = {Record_icon} alt = "icon" />
                        <div className='earning-card-contents'>
                            <div className='card-content-sup'>Manual Claim Rewards</div>
                            <div className='card-content-sub'>$ 140 BUSD</div>
                        </div>
                        <img className='card-icon' src = {Right_icon} alt = "icon" />
                    </div>
                </div>
                <div className='sub-title'>MKF Contract</div>
                <div className='contract-cards'>
                    <div className='contract-card card-theme'>
                        <img className='card-icon' src = {Key_icon} alt = "icon" />
                        <div className='earning-card-contents'>
                            <div className='card-content-sup'>Total BUSD Pending for Holders</div>
                            <div className='card-content-sub'>A total of $140.00 BUSD</div>
                        </div>
                    </div>
                    <div className='contract-card card-theme'>
                        <img className='card-icon' src = {Alarm_icon} alt = "icon" />
                        <div className='earning-card-contents'>
                            <div className='card-content-sup'>Total BUSD Paid to Holders</div>
                            <div className='card-content-sub'>A total of $6430.24 BUSD</div>
                        </div>
                    </div>
                    <div className='contract-card card-theme'>
                        <img className='card-icon' src = {Wallet_icon} alt = "icon" />
                        <div className='earning-card-contents'>
                            <div className='card-content-sup'>Total MKF Burned</div>
                            <div className='card-content-sub'>$ 140 MKF</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}