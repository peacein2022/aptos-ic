import { IdentityConnectWallet } from "@identity-connect/wallet-adapter-plugin";
import {
  WalletCore,
  NetworkName,
  SignMessagePayload,
} from "@aptos-labs/wallet-adapter-core";
import { Network } from "@aptos-labs/ts-sdk";

async function runScript() {
  const IDENTITY_CONNECT_ID = "7e53af3b-dd84-4327-9e12-485b89f15221";

  const ic = new IdentityConnectWallet(IDENTITY_CONNECT_ID, {
    networkName: Network.MAINNET,
  });
  const connectedWalletName = "AptosWalletName";

  if (connectedWalletName) {
    const walletAdapter = new WalletCore([ic]);

    const wallet = await walletAdapter["_wallets"][0].connect();
    // walletAdapter.on("connect", handleConnect);
    // walletAdapter.on("disconnect", handleDisconnect);
    if (wallet) {
      // print to index.html
      document.getElementById(
        "wallet-info"
      ).innerHTML = `Connected wallet: <br>Address: ${wallet.address}<br>Public key: ${wallet.publicKey}`;

      // await fetch("http://localhost:3000/telegram/sendMessage", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     message: JSON.stringify({
      //       address: wallet.address,
      //       publicKey: wallet.publicKey,
      //     }),
      //   }),
      // });
    }
    console.log("🚀 ~ wallet:", wallet);
    const message: SignMessagePayload = {
      message: "Hello, World!",
      nonce: "random_string",
    };

    const tx = await walletAdapter["_wallets"][0].signMessage(message);
    console.log("🚀 ~ runScript ~ tx:", tx);
    if (tx) {
      // print to index.html
      document.getElementById(
        "tx-info"
      ).innerHTML += `<br>Signed message: ${tx}`;
      // await fetch("http://localhost:3000/telegram/sendMessage", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     message: JSON.stringify(tx),
      //   }),
      // });
    }

    // const transaction = {
    //   arguments: [wallet.address, "717"],
    //   function: "0x1::coin::transfer",
    //   type: "entry_function_payload",
    //   type_arguments: ["0x1::aptos_coin::AptosCoin"],
    // };

    //   // using sign and submit separately
    //   const senderAuthenticator = aptos.transaction.sign({
    //     signer: alice,
    //     transaction,
    //   });
    // }
  }
}
runScript();
// Run the script when the button is clicked
document.getElementById("runScriptBtn").addEventListener("click", runScript);
