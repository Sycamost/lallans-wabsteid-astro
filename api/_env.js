"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
// Parsing the env file.
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
var ENV = {
    PAYPAL_LIVE_CLIENT_ID: 1,
    PAYPAL_LIVE_SECRET: 1,
    PAYPAL_SANDBOX_CLIENT_ID: 1,
    PAYPAL_SANDBOX_SECRET: 1,
    ENVIRONMENT: 1,
};
var env = process.env;
var sanitisedEnvEntries = Object.keys(ENV)
    .map(function (key) {
    var value = env[key];
    if (!value) {
        throw new Error("Environment not configured correctly. ".concat(key, " was not defined."));
    }
    if (key === 'ENVIRONMENT') {
        if (!['dev', 'prod'].includes(value)) {
            throw new Error("\n          Environment not configured correctly. ".concat(key, " must be\n          either 'dev' or 'prod', but '").concat(value, "' was provided.\n        "));
        }
    }
    return [key, value];
});
var sanitisedEnv = Object.fromEntries(sanitisedEnvEntries);
exports.default = sanitisedEnv;
//# sourceMappingURL=_env.js.map