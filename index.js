require("dotenv").config()
const express= require("express");
const app= express();
const users = [
    {
        words: "FUD",
        meaning: "Fear, Uncertainty, and Doubt",
        synonyms: "Fogey"
    },
    {
        words : "FUD",
        meaning:"Fear, uncertainty and doubt",
        synonyms:"fogey"
       } ,
       {
        "words": "HODL",
        "meaning": "Hold On for Dear Life",
        "synonyms": "Hold, Keep"
    },
    {
        "words": "Blockchain",
        "meaning": "A decentralized and distributed digital ledger technology.",
        "synonyms": ""
    },
    {
        "words": "Cryptocurrency",
        "meaning": "A digital or virtual currency that uses cryptography for security.",
        "synonyms": "Crypto, Digital Currency"
    },
    {
        "words": "Wallet",
        "meaning": "A digital tool used to store, manage, and transact cryptocurrencies.",
        "synonyms": "Digital Wallet"
    },
    {
        "words": "Mining",
        "meaning": "The process of validating and adding transactions to a blockchain, often involving the use of powerful computers.",
        "synonyms": ""
    },
    {
        "words": "Decentralization",
        "meaning": "The distribution of control and authority away from a central entity or authority.",
        "synonyms": ""
    },
    {
        "words": "Smart Contract",
        "meaning": "Self-executing contracts with the terms directly written into code.",
        "synonyms": "Self-executing Contract"
    },
    {
        "words": "ICO",
        "meaning": "Initial Coin Offering - a fundraising method using cryptocurrencies.",
        "synonyms": ""
    },
        {
            "words": "Altcoin",
            "meaning": "Any cryptocurrency other than Bitcoin.",
            "synonyms": "Alternative Coin"
        },
        {
            "words": "Bear Market",
            "meaning": "A market characterized by a prolonged period of declining prices.",
            "synonyms": "Downtrend, Negative Market"
        },
        {
            "words": "Bull Market",
            "meaning": "A market characterized by a prolonged period of rising prices.",
            "synonyms": "Uptrend, Positive Market"
        },
        {
            "words": "Cold Storage",
            "meaning": "Storing cryptocurrencies offline to enhance security against hacking.",
            "synonyms": ""
        },
        {
            "words": "Consensus",
            "meaning": "A general agreement or validation among participants in a blockchain network.",
            "synonyms": "Agreement, Harmony"
        },
        {
            "words": "DAO",
            "meaning": "Decentralized Autonomous Organization - an organization operated by smart contracts.",
            "synonyms": ""
        },
        {
            "words": "Dapp",
            "meaning": "Decentralized Application - an application that runs on a blockchain network.",
            "synonyms": "Decentralized App"
        },
        {
            "words": "Exchange",
            "meaning": "A platform where cryptocurrencies can be bought, sold, or traded.",
            "synonyms": "Trading Platform, Marketplace"
        },
        {
            "words": "Fiat",
            "meaning": "Government-issued currency that isn't backed by a physical commodity.",
            "synonyms": "Traditional Currency"
        },
        {
            "words": "FOMO",
            "meaning": "Fear Of Missing Out - the fear of missing out on potential profits in the market.",
            "synonyms": ""
        },
        {
            "words": "Fork",
            "meaning": "A split in a blockchain resulting in two separate chains, often due to a protocol change.",
            "synonyms": ""
        },
        {
            "words": "Gas",
            "meaning": "A unit used to measure the computational effort required to execute operations on a blockchain.",
            "synonyms": ""
        },
        {
            "words": "Hashrate",
            "meaning": "The processing power of a cryptocurrency network, often related to mining.",
            "synonyms": "Mining Power, Computational Power"
        },
        {
            "words": "ICO",
            "meaning": "Initial Coin Offering - a fundraising method using cryptocurrencies.",
            "synonyms": ""
        },
        {
            "words": "KYC",
            "meaning": "Know Your Customer - a process to verify the identity of users for compliance.",
            "synonyms": ""
        },
        {
            "words": "Lambo",
            "meaning": "Short for Lamborghini, often used humorously to describe achieving substantial profits in crypto.",
            "synonyms": ""
        },
        {
            "words": "Market Cap",
            "meaning": "The total value of a cryptocurrency in circulation, calculated by price multiplied by supply.",
            "synonyms": ""
        },
        {
            "words": "Node",
            "meaning": "A computer on a blockchain network that maintains and verifies the blockchain's transactions.",
            "synonyms": ""
        },
        {
            "words": "Orphan Block",
            "meaning": "A block that is valid but not part of the main blockchain due to a fork.",
            "synonyms": ""
        },
        {
            "words": "Private Key",
            "meaning": "A secret cryptographic key used to sign transactions and access wallets.",
            "synonyms": ""
        },
        {
            "words": "Public Key",
            "meaning": "A cryptographic key derived from a private key and used to receive cryptocurrency.",
            "synonyms": ""
        },
        {
            "words": "Pump and Dump",
            "meaning": "A scheme where the price of a cryptocurrency is artificially inflated and then rapidly sold off.",
            "synonyms": ""
        },
        {
            "words": "Satoshi",
            "meaning": "The smallest unit of Bitcoin, named after its pseudonymous creator.",
            "synonyms": ""
        },
        {
            "words": "Security Token",
            "meaning": "A token that represents ownership or assets and is subject to regulatory compliance.",
            "synonyms": ""
        },
        {
            "words": "SHA-256",
            "meaning": "A cryptographic hash function used in Bitcoin and other cryptocurrencies.",
            "synonyms": ""
        },
        {
            "words": "Smart Contract",
            "meaning": "Self-executing contracts with the terms directly written into code.",
            "synonyms": "Self-executing Contract"
        },
        {
            "words": "Stablecoin",
            "meaning": "A cryptocurrency designed to have a stable value, often pegged to a fiat currency.",
            "synonyms": ""
        },
        {
            "words": "Token",
            "meaning": "A unit of value issued by a blockchain network, representing assets or utility.",
            "synonyms": ""
        },
        {
            "words": "Transaction Fee",
            "meaning": "A fee paid by users to process their transactions on a blockchain network.",
            "synonyms": ""
        },
        {
            "words": "Unspent Transaction Output (UTXO)",
            "meaning": "An unspent output of a transaction that can be used as an input for a new transaction.",
            "synonyms": ""
        },
        {
            "words": "Vitalik Buterin",
            "meaning": "The co-founder of Ethereum, a prominent cryptocurrency and blockchain platform.",
            "synonyms": ""
        },
        {
            "words": "Whale",
            "meaning": "An individual or entity with a large amount of cryptocurrency.",
            "synonyms": ""
        },
        {
            "words": "Whitepaper",
            "meaning": "A document outlining the details, purpose, and technology of a cryptocurrency project.",
            "synonyms": ""
        },
        {
            "words": "Zero-Knowledge Proof",
            "meaning": "A cryptographic method that proves a statement is true without revealing specific information.",
            "synonyms": ""
        },
        {
            "words": "51% Attack",
            "meaning": "An attack on a blockchain network where a single entity controls the majority of the mining power.",
            "synonyms": "Majority Attack"
        },
        {
            "words": "Airdrop",
            "meaning": "Distributing free tokens to holders of a specific cryptocurrency.",
            "synonyms": ""
        },
        {
            "words": "All-Time High (ATH)",
            "meaning": "The highest price ever reached by a cryptocurrency.",
            "synonyms": ""
        },
        {
            "words": "Anti-Money Laundering (AML)",
            "meaning": "Regulations and procedures to prevent illegal financial activities in cryptocurrencies.",
            "synonyms": ""
        },
        {
            "words": "Bee Brain",
            "meaning": "A Crypto Lord.",
            "synonyms": "Abdol"
        },
        {
            "words": "Long",
            "meaning": "Buying a crypto coin.",
            "synonyms": "Buy"
        },
        {
            "words": "Short",
            "meaning": "Selling out Crypto Coin.",
            "synonyms": "Sell"
        },
        {
            "words": "Dip",
            "meaning": "Crypto Coin/Token Price Decrease.",
            "synonyms": "Low"
        },
        {
            "words": "Pump",
            "meaning": "Crypto coin increase .",
            "synonyms": "High"
        },
        {
            "words": "Honeypot",
            "meaning": "Token that dosent have liquidity.",
            "synonyms": ""
        },
        {
            "words": "Rugpull",
            "meaning": "Scam in Crypto Currency.",
            "synonyms": "Fraud"
        },
        {
            "words": "Shill",
            "meaning": "Token that dosent have liquidity.",
            "synonyms": ""
        },
        {
            "words": "Liquidation",
            "meaning": "Crypto Coin going low.",
            "synonyms": ""
        },
        {
            "words": "Block",
            "meaning": "A record in a blockchain that contains a list of transactions.",
            "synonyms": ""
        },
        {
            "words": "Shill",
            "meaning": "The act of promoting or endorsing a cryptocurrency or project with the intent to influence its price or reputation, often in a deceptive or exaggerated manner.",
            "synonyms": "Promote, Endorse, Advocate"
        },
        {
            "words": "Ponzi Scheme",
            "meaning": "A fraudulent investment scheme that promises high returns to earlier investors using the capital of newer investors, rather than legitimate profits from the operation of a business. It eventually collapses when there are not enough new investors to sustain the payouts.",
            "synonyms": "Pyramid Scheme, Investment Scam"
        },
        {
            "words": "Bitcoin",
            "meaning": "The first and most well-known cryptocurrency, introduced by an unknown person or group using the pseudonym Satoshi Nakamoto in 2009. Bitcoin operates on a decentralized peer-to-peer network, enabling secure and transparent transactions without the need for intermediaries.",
            "synonyms": "BTC, Digital Gold"
        },
        {
            "words": "Take Profit",
            "meaning": "A predefined price level set by a trader to automatically sell a cryptocurrency holding in order to lock in profits. It is used as part of a trading strategy to avoid potential price reversals.",
            "synonyms": "Profit Target, Exit Point"
        },
        {
            "words": "Stop Loss",
            "meaning": "A predetermined price level set by a trader to automatically sell a cryptocurrency holding in order to limit potential losses. It is used as part of a risk management strategy to prevent significant downturns.",
            "synonyms": "Loss Limit, Protective Exit"
        },
        {
            "words": "Break Even",
            "meaning": "The point at which the price of a cryptocurrency reaches the level at which an investor's total costs (initial investment plus any additional costs) are equal to the total gains from selling the cryptocurrency. At this point, the investor neither makes a profit nor incurs a loss.",
            "synonyms": "Cost Recovery, Neutral Point"
        },
        {
            "words": "Liquidation",
            "meaning": "The process of selling off a trader's or investor's cryptocurrency holdings to cover losses when the market price drops below a certain level, often as a result of margin trading. It is an automated mechanism used to prevent further losses.",
            "synonyms": "Sell-off, Forced Sale"
        },
        {
            "words": "Ratio",
            "meaning": "A quantitative comparison between two or more values, often expressed as a fraction or percentage. In the context of cryptocurrency, ratios can be used to analyze various aspects such as market trends, risk, and performance.",
            "synonyms": "Proportion, Relationship"
        },
        {
            "words": "Degen",
            "meaning": "Short for 'degenerate', it refers to individuals who engage in high-risk and speculative trading or investing strategies, often disregarding caution and rational decision-making. 'Degen' traders might pursue high-reward opportunities with a willingness to accept significant losses.",
            "synonyms": "Degenerate, Risk-Taker"
        },             
        {
            "words": "Short Play",
            "meaning": "A trading strategy in which a trader borrows and sells a cryptocurrency with the expectation that its price will decrease. The trader aims to buy back the cryptocurrency at a lower price, returning the borrowed amount and pocketing the price difference as profit.",
            "synonyms": "Short Selling, Short Position"
        },
        {
            "words": "Long Play",
            "meaning": "A trading strategy in which a trader buys a cryptocurrency with the expectation that its price will increase over time. The trader aims to sell the cryptocurrency at a higher price, thereby making a profit from the price difference.",
            "synonyms": "Long Position, Bullish Play"
        },
        {
            "words": "Order",
            "meaning": "A request made by a trader to buy or sell a specific amount of a cryptocurrency at a particular price. Orders can be of different types, such as market orders (executed at the current market price) or limit orders (executed at a specified price or better).",
            "synonyms": "Trade Request, Transaction Order"
        },
        {
            "words": "Trigger",
            "meaning": "A predefined condition or event that prompts the execution of an action, such as placing a trade, setting an alert, or activating an order. In trading, triggers are often used to automate responses based on market conditions.",
            "synonyms": "Activation, Prompt"
        },
        {
            "words": "Position",
            "meaning": "The status of a trader's holdings in a specific cryptocurrency or financial instrument. It indicates whether the trader has a long (bullish) or short (bearish) exposure to the market and at what price level the position was entered.",
            "synonyms": "Holding, Investment"
        },
        {
            "words": "Profit",
            "meaning": "The positive financial gain obtained from trading or investing in cryptocurrencies. Profit is calculated by subtracting the total costs (including initial investment and fees) from the total returns of selling a cryptocurrency at a higher price.",
            "synonyms": "Gain, Earnings"
        },
        {
            "words": "Loss",
            "meaning": "The negative financial outcome resulting from trading or investing in cryptocurrencies. A loss occurs when the selling price of a cryptocurrency is lower than the buying price, leading to a reduction in the value of the investment.",
            "synonyms": "Downturn, Deficit"
        },
        {
            "words": "PNL",
            "meaning": "Short for 'Profit and Loss', PNL represents the overall financial outcome of trading or investing in cryptocurrencies. It's calculated by subtracting the total costs (including initial investment and fees) from the total returns, considering both profits and losses.",
            "synonyms": "Profit and Loss Statement, Financial Outcome"
        },
        {
            "words": "Bybit",
            "meaning": "Bybit is a cryptocurrency derivatives exchange platform that offers trading of cryptocurrency contracts, including perpetual contracts and futures. It provides traders with leveraged trading options to speculate on the price movements of cryptocurrencies.",
            "synonyms": ""
        },
        {
            "words": "Shitcoin",
            "meaning": "A derogatory term used in the cryptocurrency community to refer to a cryptocurrency that is perceived as having little to no value, potential, or utility. Shitcoins are often associated with projects lacking credibility, purpose, or innovation.",
            "synonyms": "Low-Value Coin, Worthless Token"
        },
        {
            "words": "Binance",
            "meaning": "Binance is one of the world's largest and most popular cryptocurrency exchanges. It offers a platform for users to trade a wide range of cryptocurrencies and provides various features including spot trading, futures trading, margin trading, staking, and more.",
            "synonyms": ""
        },{
            "words": "Trust Wallet",
            "meaning": "Trust Wallet is a popular mobile cryptocurrency wallet that allows users to securely store, manage, and exchange a wide variety of cryptocurrencies. It is known for its user-friendly interface, strong security features, and support for multiple blockchains and tokens.",
            "synonyms": ""
        },
        {
            "words": "Satoshi",
            "meaning": "The smallest unit of Bitcoin, named after its pseudonymous creator, Satoshi Nakamoto. One Bitcoin is divisible into 100 million Satoshis, making it possible to transact with very small fractions of a Bitcoin.",
            "synonyms": ""
        },
        {
            "words": "Whale Watching",
            "meaning": "The practice of monitoring the movements and activities of large cryptocurrency holders or 'whales' in the market, often to anticipate potential price shifts.",
            "synonyms": ""
        },
        {
            "words": "Flash Loan",
            "meaning": "A type of decentralized finance (DeFi) lending where a user borrows and repays funds within a single transaction block, without the need for collateral.",
            "synonyms": ""
        },
        {
            "words": "Yield Farming",
            "meaning": "A strategy in DeFi where users provide liquidity to a protocol in exchange for rewards, often in the form of additional tokens or interest.",
            "synonyms": ""
        },
        {
            "words": "NFT Collateralization",
            "meaning": "Using non-fungible tokens (NFTs) as collateral in DeFi protocols to secure loans or liquidity provision.",
            "synonyms": ""
        },
        {
            "words": "Gas Wars",
            "meaning": "A situation in which users bid up transaction fees (gas) to ensure their transactions are prioritized on a congested blockchain network.",
            "synonyms": "Fee Bidding, Transaction Race"
        },
        {
            "words": "NFT",
            "meaning": "Short for Non-Fungible Token, an NFT is a unique digital asset that represents ownership or proof of authenticity of a specific item, artwork, collectible, or piece of content. Unlike cryptocurrencies such as Bitcoin, NFTs are indivisible and cannot be exchanged on a one-to-one basis.",
            "synonyms": "Non-Fungible Digital Asset"
        }
];
const port= process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to the Crypto Dictionary!');
});

users.forEach(entry => {
    app.get(`/${entry.words}`, (req, res) => {
        res.json(entry);
    });
});


app.listen(port, ()=>{
    console.log(`App is Running on port ${port}..`)
})