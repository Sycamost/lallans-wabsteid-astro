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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paypalCaptureOrder = exports.paypalCreateOrder = void 0;
var _env_1 = __importDefault(require("./_env"));
function paypalCreateOrder(order) {
    return __awaiter(this, void 0, void 0, function () {
        var accessToken, url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLazyAccessToken()];
                case 1:
                    accessToken = _a.sent();
                    url = "".concat(PAYPAL_URL, "/v2/checkout/orders");
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: paypalCreateOrderRequestHeaders(accessToken),
                            body: paypalCreateOrderRequestBody(order),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, handle(response)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.paypalCreateOrder = paypalCreateOrder;
function paypalCaptureOrder(orderId) {
    return __awaiter(this, void 0, void 0, function () {
        var accessToken, url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLazyAccessToken()];
                case 1:
                    accessToken = _a.sent();
                    url = "".concat(PAYPAL_URL, "/v2/checkout/orders/").concat(orderId, "/capture");
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: paypalCaptureOrderRequestHeaders(accessToken),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, handle(response)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.paypalCaptureOrder = paypalCaptureOrder;
function handle(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!response.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, response.json()];
                case 1: return [2 /*return*/, _c.sent()];
                case 2:
                    _a = Error.bind;
                    _b = 'Failed to communicate with PayPal. ';
                    return [4 /*yield*/, response.text()];
                case 3: throw new (_a.apply(Error, [void 0, _b + (_c.sent())]))();
            }
        });
    });
}
function paypalCreateOrderRequestBody(order) {
    var body = JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
            {
                description: order.productDescription,
                soft_descriptor: order.shortDescription,
                amount: {
                    currency_code: 'GBP',
                    value: order.totalPrice.toFixed(2),
                },
            },
        ],
    });
    return body;
}
function paypalCreateOrderRequestHeaders(accessToken) {
    return {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(accessToken),
    };
}
function paypalCaptureOrderRequestHeaders(accessToken) {
    return {
        Authorization: "Bearer ".concat(accessToken),
    };
}
var getLazyAccessToken = (function () {
    var accessToken;
    var timeRequested;
    var timeExpires;
    return function () {
        return __awaiter(this, void 0, void 0, function () {
            var isNearlyExpired, secondsUntilExpires, msUntilExpires;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isNearlyExpired = timeExpires - Date.now() < 10000;
                        if (!(!accessToken || isNearlyExpired)) return [3 /*break*/, 2];
                        timeRequested = Date.now();
                        secondsUntilExpires = void 0;
                        return [4 /*yield*/, generateAccessToken()];
                    case 1:
                        (_a = _b.sent(), accessToken = _a.accessToken, secondsUntilExpires = _a.secondsUntilExpires);
                        msUntilExpires = secondsUntilExpires * 1000;
                        timeExpires = timeRequested + msUntilExpires;
                        _b.label = 2;
                    case 2: return [2 /*return*/, accessToken];
                }
            });
        });
    };
})();
function generateAccessToken() {
    return __awaiter(this, void 0, void 0, function () {
        var auth, response, _a, access_token, expires_in;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_SECRET).toString('base64');
                    return [4 /*yield*/, fetch("".concat(PAYPAL_URL, "/v1/oauth2/token"), {
                            method: 'POST',
                            body: 'grant_type=client_credentials',
                            headers: {
                                Authorization: "Basic ".concat(auth),
                            },
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a = _b.sent(), access_token = _a.access_token, expires_in = _a.expires_in;
                    if (access_token && expires_in) {
                        return [2 /*return*/, {
                                accessToken: access_token,
                                secondsUntilExpires: expires_in,
                            }];
                    }
                    throw new Error('Could not fetch access token from PayPal.');
            }
        });
    });
}
var PAYPAL_CLIENT_ID = _env_1.default.ENVIRONMENT === 'prod'
    ? _env_1.default.PAYPAL_LIVE_CLIENT_ID
    : _env_1.default.PAYPAL_SANDBOX_CLIENT_ID;
var PAYPAL_SECRET = _env_1.default.ENVIRONMENT === 'prod'
    ? _env_1.default.PAYPAL_LIVE_SECRET
    : _env_1.default.PAYPAL_SANDBOX_SECRET;
var PAYPAL_URL = _env_1.default.ENVIRONMENT === 'prod'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
//# sourceMappingURL=_paypal.js.map