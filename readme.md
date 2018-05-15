## Problem
Most people have nothing to reference to help them understand what a blockchain is. Hearing it described as "decentralized system", "peer to peer", "distributed ledger", "cryptographically secure", etc. doesn't mean much to the average person, no matter how many times it's verbally explained.

## Solution
For me, a visual representation is the most effective way to portray a blockchain and how it works. I think that is the case for most others as well.

My goal is to create an educational and interactive web app to update real-time that shows the bitcoin blockchain in more than just code the average person will not understand, while not overlooking important details around data contained in a block. Rather than telling, I will show how it's immutable, explain key terms (nonce, hash, merkle root, difficulty) and what role they play.

Many people interested in learning more about cryptocurrencies and blockchian are turned off when it's explained in a way that their first reaction is, "You have to be a computer scientist to understand this stuff". Wider adoption of cryptocurrencies cannot occur until people truly understand what a blockchain is and how it works.

## Technologies
For now, simple node.js backend and ejs front end. I am using axios API calls to blockchain.info as well as jQuery AJAX code to run blockcypher's API calls for my data.

## Planned Features
* User is able to click at a tx ID and see the sending and receiving addresses, as well as the BTC transfered
* Timer showing elapsed time since last hashed block
* Animation of new block entering the chain if user is on site while a new block is mined
* Animation of a potential miner attempting to approve the block
* Interactive - user can edit the tx IDs, which will change the block hash, making the outline red and rendering it incorrect, showing the immutability of a block chain.
* Info bubbles if you hover over any key words showing definitions (nonce, merkle root, height, etc.)
* Re-write it in React.js
