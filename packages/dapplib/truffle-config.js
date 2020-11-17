require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign story repeat pitch proud include enroll army ghost'; 
let testAccounts = [
"0xcbf775064f9cec737a27aa838bc973b6c86ebce0adb5657f8c8ccdf7f8bed181",
"0x064935327d7629a978e939c4b0eef6bbd0c38bcc98b907869e89780e0b2e3b6c",
"0xbbb21980a872bff3214e3c6c6b42f6c9dd4948e190f380fb4726bf3cf0efd2d1",
"0xcfb61b1574f46276b357c5bf5961aa9a93b7bb7bed6c437a4def03df822f10ba",
"0xf08ab866472515e9f4de08d3760db71e829a8c32f1e6386a2f0ddd214a5734d9",
"0xbdceed76a54987788f89713fe4df25438a7d7eb28ff434bf567415186395b3cb",
"0x9e8c6ec8cc78c235d65f6680d546ec6cfb176d3d94a50b2d29e7e4e5b0956450",
"0x328526cddaea20c1977083ef2e62e728597186bce5302983bf5e2529d54c9652",
"0x6a8257abb72ecdb990db93168934930c31bc27c108a9cf7939374e8a7f7e3689",
"0x06fa1d8613dd24a980ea2e5b890259d7388e5327be379c5ba5a2ae642e8eaaba"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
