import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { marketContract } from "../../contract";
import Head from '../../components/head'

export default function Value() {
    const [activeListings, setActiveListings] = useState("0");
    const [tokenIdCounter, setTokenIdCounter] = useState(0);
    const [totalTokenList, setTotalTokenList] = useState("0");
    const [masterKey, setMasterKey] = useState("");
    const [listingBounties, setListingBounties]: any = useState([]);
    const [listingPrice, setListingPrice] = useState("");
    useEffect(() => {
        const getParams = async () => {
            var tx1 = await marketContract.activeListings();
            var getActiveListings = ethers.utils.formatUnits(tx1, 0);
            var tx2 = await marketContract.tokenIdCounter();
            var getTokenIdCounter = ethers.utils.formatUnits(tx2, 0);
            var tx3 = await marketContract.totalTokensWhitelisted();
            var getTotalTokensList = ethers.utils.formatUnits(tx3, 0);
            var tx4 = await marketContract.MSFY();
            var tx5 = await marketContract.getListingPrice();
            var getListingPrice = ethers.utils.formatUnits(tx5, 18);
            setActiveListings(getActiveListings);
            setTokenIdCounter(Number(getTokenIdCounter));
            setTotalTokenList(getTotalTokensList);
            setMasterKey(tx4);
            setListingPrice(getListingPrice);
        }
        getParams();
    }, [])

    useEffect(() => {
        const getParams = async () => {
            var data1: any = [];
            for (var i = 0; i < tokenIdCounter; i++) {
                var tx1 = await marketContract.getListingBounty(ethers.utils.parseUnits(`${i + 1}`, 0));
                var data2: any = [];
                for (var j = 0; j < tx1.length; j++) {
                    data2.push({ value: ethers.utils.formatUnits(tx1[j], 18) });
                }
                data1.push(data2);

            }
            setListingBounties(data1);
        }
        getParams();
    }, [tokenIdCounter]);
    return (
        <>
            <Head />
            <div className="flex flex-column justify-center align-center">
                <div className="flex">
                    <p>activeListings :</p>
                    <p>{activeListings}</p>
                </div>
                <div className="flex">
                    <p>tokenIdCounter :</p>
                    <p>{tokenIdCounter}</p>
                </div>
                <div className="flex">
                    <p>totalTokensWhitelisted :</p>
                    <p>{totalTokenList}</p>
                </div>
                <div className="flex">
                    <p>Master Key Address :</p>
                    <p>{masterKey}</p>
                </div>
                <div className="flex">
                    <p>Listing of Bountys :</p>
                    <div>{listingBounties.map((bounty: any, key: any) => (
                        <div key={key}>
                            {bounty.map((num: any, key: any) => (
                                <div key={key}>{num.value}</div>
                            ))}
                            <>........</>
                        </div>
                    ))}</div>
                </div>
                <div className="flex">
                    <p>Listing Price :</p>
                    <p>{listingPrice}</p>
                </div>

            </div>
        </>
    )
}