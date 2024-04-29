////////////////////////////////////////////////////////////////////////////////
//Spend the Output
////////////////////////////////////////////////////////////////////////////////
import { Helloworld } from './src/contracts/helloworld'
import { toByteString, sha256, utxoFromOutput, bsv, SensibleProvider, 
    WhatsonchainProvider, Tx, DefaultProvider, TestWallet } from 'scrypt-ts'

(async () => {

    //Put here your private key
    const privateKey = bsv.PrivateKey.fromHex("894aaebc8b2ce399ada5c566d86b4a47f3755a775310f67cf4881735c0d60564", bsv.Networks.testnet)
    const Alice = new TestWallet(privateKey, new DefaultProvider({network: bsv.Networks.testnet}))

    const message = toByteString('hello world', true)

    await Helloworld.compile()

    let provDf = new DefaultProvider({network: bsv.Networks.testnet})

    await provDf.connect()

    let tx = new bsv.Transaction
    //Put here the TXID of current contract
    tx = await provDf.getTransaction('1049fc741d91f7611bb5039bd27aee88ed2e2bf5ffa52794d752434d01100e3e')

    console.log('Test TX3: ', tx.id)

    const instance = Helloworld.fromTx(tx, 0)

    await instance.connect(Alice)

    const { tx: callTx } = await instance.methods.unlock(message)
    console.log('Helloworld contract `unlock` called: ', callTx.id)

})()


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////