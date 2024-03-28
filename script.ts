import { IdentityConnectWallet } from "@identity-connect/wallet-adapter-plugin";
import { WalletCore, NetworkName } from "@aptos-labs/wallet-adapter-core";

async function runScript() {
  const IDENTITY_CONNECT_ID = "7e53af3b-dd84-4327-9e12-485b89f15221";

  const ic = new IdentityConnectWallet(IDENTITY_CONNECT_ID, {
    networkName: NetworkName.Testnet,
  });
  const connectedWalletName = "AptosWalletName";

  if (connectedWalletName && window && localStorage && window.localStorage) {
    const walletAdapter = new WalletCore([ic]);

    const wallet = await walletAdapter._wallets[0].connect();

    console.log("🚀 ~ wallet:", wallet);
  }
}

// Run the script when the button is clicked
document.getElementById("runScriptBtn").addEventListener("click", runScript);
