import { IdentityConnectWallet } from "@identity-connect/wallet-adapter-plugin";
import { WalletCore, NetworkName } from "@aptos-labs/wallet-adapter-core";

async function runScript() {
  const IDENTITY_CONNECT_ID = "c153c733-b2ee-4bd4-9ed9-e8db00ac9c4e";

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
