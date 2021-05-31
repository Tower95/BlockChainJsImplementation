'use strict'

const {Blockchain} = require('./src/blockchain');
const {Transactions} = require('./src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('da7ed714055eb56184551920ceeb6c4ab1c4478c1f602d19948ea720eea872f4');
const myWalletAddess = myKey.getPublic('hex');

let AxoloteCoin = new Blockchain();

const tx1 = new Transactions(myWalletAddess,'public key goes here', 10);

tx1.signTransaction(myKey);

AxoloteCoin.addTransactions(tx1);

// AxoloteCoin.createTransactions(new Transactions('address1','address2',1000));
// AxoloteCoin.createTransactions(new Transactions('address2','address1',500));

console.log('\nStarting miner...');
AxoloteCoin.minePendingTransactions(myWalletAddess);

console.log('\nBalance of mario is ', AxoloteCoin.getBalanceOfAddress(myWalletAddess));  