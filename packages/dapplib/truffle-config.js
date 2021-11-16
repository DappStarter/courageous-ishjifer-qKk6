require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant harvest opera box split'; 
let testAccounts = [
"0x541e568ca3607671781032a98c18f5044c7e650032094175f7cdc39ec9cd12a8",
"0x4594b5990ef8923eaa4c50d3e5c824675268f3f683021fdb7c184e1d32bb5308",
"0x906be4bc7cda14e083b034e87e091673c0aa40c6217763afe9d6d2ed49adcee0",
"0x9cb1ab287c84d98dfdb328d8464659a02eddf4f0a63765c599728573287c987f",
"0x63d07fa53cd69bd50a5595f59f9494f7e54657fd19b1791897dbebe3372f5729",
"0x5e299826e3a2c1f6d029a59300e1e27dbc584764d5fb8f1818b22aa61db97f27",
"0xe4ae5351038bbe076cd43322fe1e5591d63d6e653a91d570d8f5b5f94d4d60eb",
"0x8ed638fa278d680380d0276d03087e7d00982fdea2ea1f205517c57530542574",
"0x0ac4349a1baf6db4a26228bd6fea6800851f6d5358ed581109df568bad45bb30",
"0xbcac30ef57a51ce08169839ba5089d5b6f511d2a02a0fde4c6cce763de201267"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

