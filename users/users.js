const users = {
    data : [
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
            "words": "Liquidation",
            "meaning": "Crypto Coin going low.",
            "synonyms": ""
        },
        {
            "words": "Block",
            "meaning": "A record in a blockchain that contains a list of transactions.",
            "synonyms": ""
        },
    
    ]
}

module.exports = users;