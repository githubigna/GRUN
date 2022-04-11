"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossup = void 0;
const functions = require("firebase-functions");
const subWebhookGifty_1 = require("./controllers/subWebhookGifty");
const mongodb_1 = require("./database/mongodb");
let db = new mongodb_1.mongo();
exports.crossup = functions.https.onRequest(async (request, response) => {
    response.sendStatus(200);
    console.log('Request body', request.body);
    await db.init();
    const { action, data, type } = request.body;
    if (type == "subscription_preapproval") {
        await (0, subWebhookGifty_1.subscriptionHandler)(action, data.id);
    }
});
//# sourceMappingURL=index.js.map