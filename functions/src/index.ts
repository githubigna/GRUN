import * as functions from "firebase-functions";
import { subscriptionHandler } from "./controllers/subWebhookGifty";
import { mongo } from "./database/mongodb";
let db = new mongo();

export const crossup = functions.https.onRequest(async (request, response) => {
    response.sendStatus(200);
    await db.init();
    const { action, data, type } = request.body;
    if (type == "subscription_preapproval") {
        await subscriptionHandler(action, data.id);
    }
});
