# Helloworld

## Colne

```
 git clone https://github.com/carlosamcruz/sCrypt-helloWorld
 cd helloworld
 npm install
 npx scrypt-cli@latest compile

```

Delete the following folders from node_modules:
```
   ..\helloworld\node_modules\scrypt-ts
```
Copy the custom folders from the repo:

```
   ..\helloworld\scrypt-ts
```
And paste them inside folder node_modules:


```
   ..\helloworld\node_modules
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
