"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var wallet_adapter_plugin_1 = require("@identity-connect/wallet-adapter-plugin");
var wallet_adapter_core_1 = require("@aptos-labs/wallet-adapter-core");
var ts_sdk_1 = require("@aptos-labs/ts-sdk");
function runScript() {
    return __awaiter(this, void 0, void 0, function () {
        var IDENTITY_CONNECT_ID, ic, connectedWalletName, walletAdapter, wallet, message, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    IDENTITY_CONNECT_ID = "7e53af3b-dd84-4327-9e12-485b89f15221";
                    ic = new wallet_adapter_plugin_1.IdentityConnectWallet(IDENTITY_CONNECT_ID, {
                        networkName: ts_sdk_1.Network.MAINNET
                    });
                    connectedWalletName = "AptosWalletName";
                    if (!connectedWalletName) return [3 /*break*/, 3];
                    walletAdapter = new wallet_adapter_core_1.WalletCore([ic]);
                    return [4 /*yield*/, walletAdapter["_wallets"][0].connect()];
                case 1:
                    wallet = _a.sent();
                    // walletAdapter.on("connect", handleConnect);
                    // walletAdapter.on("disconnect", handleDisconnect);
                    console.log("🚀 ~ wallet:", wallet);
                    message = {
                        message: "Hello, World!",
                        nonce: "random_string"
                    };
                    return [4 /*yield*/, walletAdapter["_wallets"][0].signMessage(message)];
                case 2:
                    tx = _a.sent();
                    console.log("🚀 ~ runScript ~ tx:", tx);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
var handleConnect = function () {
    console.log("Connected to wallet");
};
var handleDisconnect = function () {
    console.log("Disconnected from wallet");
};
runScript();
// Run the script when the button is clicked
document.getElementById("runScriptBtn").addEventListener("click", runScript);
