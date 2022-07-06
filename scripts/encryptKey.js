const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function encryptOneTime() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );

    fs.writeFileSync("./.encryptedJsonKey.json", encryptedJsonKey);
    console.log(encryptedJsonKey);
}

async function main() {
    // call one time then go to deploy.js to edit wallet init
    await encryptOneTime();
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
