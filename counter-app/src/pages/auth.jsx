import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from '../utils/Web3Portal.json'
const contractAddress = "0x278aC0E5246F3112e02513846CE2e64984670fA0";

const AuthPage = ({user, setUser}) => {
    const [allLinks, setAllLinks] = useState([]);
    const contractABI = abi.abi;

    const [urlValue, setUrlValue] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                console.log("Make sure you have Metamask");
                return;
            }
            else {
                console.log("We have ethereum object");
            }

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account: ", account);
                setUser(account);
            } else {
                console.log("No authorized account found");
            }

        } catch (error) {
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Get Metamask");
                return;
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected: ", accounts[0]);
            setUser(accounts[0]);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    const sendLink = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const web3RadioContract = new ethers.Contract(contractAddress, contractABI, signer);

                let count = await web3RadioContract.getTotalLinks();
                console.log("Retrieved total links count...", count.toNumber());
                const radioTxn = await web3RadioContract.sendLink(urlValue, { gasLimit: 300000 });
                console.log("Mining...", radioTxn.hash);

                await radioTxn.wait();
                console.log("Mined -- ", radioTxn.hash);

                count = await web3RadioContract.getTotalLinks();
                console.log("Retrieved total links count...", count.toNumber());
                getAllLinks();

            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getAllLinks = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const web3RadioContract = new ethers.Contract(contractAddress, contractABI, signer);

                const links = await web3RadioContract.getAllLinks();

                let linksCleaned = [];
                links.forEach(link => {
                    linksCleaned.push({
                        address: link.sender,
                        timestamp: new Date(link.timestamp * 1000),
                        url: link.url
                    });
                });
                linksCleaned = linksCleaned.reverse();

                setAllLinks(linksCleaned);
            } 
            else 
            {
                console.log("Ethereum object doesn't exist!")
            }
        } catch (error) 
        {
            console.log(error);
        }
    }

    const nameArray = ['Chiraag Madan – 20BCI0059','Pulkit Chahar – 20BCI0087','Shaurya Agarwal – 20BCI0044', 'Harsh Wardhan – 20BCI0051','Aryan Bapat – 20BCI0105']

    return (
        <div className="d-flex flex-column justify-content-between align-items-center text-center" style={{height: '100vh', backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <h1 className="header display-3 text-danger" style={{fontWeight: 'bold'}}>Distributed Government System Using Blockchain</h1>

            <div className="dataContainer">
                <h2 className="header text-warning" style={{padding: '1rem'}}>👋 Hey there!</h2>
                <button className="btn btn-danger btn-lg" onClick={connectWallet}>
                    Connect Wallet
                </button>
                {allLinks.map((link, index) => {
                    return (
                        <div key={index} class="messageBox">
                            <div>Address: {link.address}</div>
                            <div>Time: {link.timestamp.toString()}</div>
                            <div>URL: {link.url}</div>
                        </div>)
                })}
            </div>
            <div className="p-3 mb-2 bg-info text" style = {{fontWeight: '800'}}>
                <ul style={{listStyleType: 'none',padding:0}}>
                    {nameArray.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default AuthPage

// 

// Chiraag Madan – 20BCI0059
// Pulkit Chahar – 20BCI0087
// Shaurya Agarwal – 20BCI0044
// Harsh Wardhan – 20BCI0051
// Aryan Bapat – 20BCI0105
