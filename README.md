# SSI associated Loan Token (※ In progress)

***
## 【Introduction of SSI associated Loan Token】 
- This is the smart contract for creating SSI associated Loan Token
  - Create the loan token every borrowing (and repaying).
   （Each loan token is created in the LoanTokenFactory.sol）
  - Each loan token is associated with SSI (Use the Ethr-DID-Registry contract of uPort)


&nbsp;

***

## 【Setup】
1. Npm install
```
$ npm install
```

<br>


2. Migrate
```
$ npm run migrate:rinkeby
```

&nbsp;

## 【Test】

- Testing for all contract (※ `Rinkeby test network` )
```
$ npm run test:rinkeby
```


<br>

***

## 【References】
- [Truefi]
  - Loan Token
    https://github.com/trusttoken/truefi-spec#loantoken
    https://github.com/trusttoken/truefi-spec#loantoken-lifecycle
  
  - Trust-Token contract
    https://github.com/trusttoken/true-currencies/tree/master/contracts/trusttoken
  
  - Workshop
    https://youtu.be/JjotxeoVRuE

  - Chainlink-workshop repo
    https://github.com/hal909/chainlink-workshop

<br>

- [Ethr-DID-Registry contract (from uPort)]:
  - Ethr-DID-Registry contract
    https://github.com/uport-project/ethr-did-registry

  - Doc
    https://developer.uport.me/categories/ethr-did-registry
  


