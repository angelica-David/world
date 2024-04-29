////////////////////////////////////////////////////////////////////////////////
//Criar o SC
////////////////////////////////////////////////////////////////////////////////
import { Helloworld } from './src/contracts/helloworld'
import { toByteString, sha256, bsv, TestWallet, DefaultProvider, WhatsonchainProvider } from 'scrypt-ts'

(async () => {

    //Put Here your test private key
    const privateKey = bsv.PrivateKey.fromHex("894aaebc8b2ce399ada5c566d86b4a47f3755a775310f67cf4881735c0d60564", bsv.Networks.testnet)   
  
    // Prepare signer.
    // See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider

    let Alice = new TestWallet(privateKey, new DefaultProvider({network: bsv.Networks.testnet}))
    const message = toByteString('hello world', true)

    await Helloworld.compile()
    const instance = new Helloworld(sha256(message))

    // connect to a signer
    await instance.connect(Alice)

    const deployTx = await instance.deploy(100)
    console.log('Helloworld contract deployed: ', deployTx.id)

})()
