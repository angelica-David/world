# Helloworld

## Colne

```
 git clone https://github.com/carlosamcruz/sCrypt-helloWorld
 cd helloworld
 npm install
 npx scrypt-cli@latest compile

```

## Run

```
//change to your private key on the file deploy.ts

npx ts-node deploy.ts

//copy the TXID of the deployment result
//change to your private key on the file interact.ts
//paste the TXID of the deployed contract on the file interact.ts

npx ts-node intract.ts

//The result must be the unlocked contract TXID

```
