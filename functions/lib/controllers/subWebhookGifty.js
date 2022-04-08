"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionHandler = void 0;
const subUpdatedGiftyRepository_1 = require("../repositories/subUpdatedGiftyRepository");
const giftyUserRepo_1 = require("../repositories/giftyUserRepo");
const mp_repository_1 = require("../repositories/mp.repository");
const webHookRepository_1 = require("../repositories/webHookRepository");
async function subscriptionHandler(action, id) {
    let mpRepo = new mp_repository_1.mpRepository(id, 'APP_USR-8377065187044150-040815-b8e5e5f789b176dd15f0be7a1f75e36d-725644963'); //*-------------> Crea el repository de mercado pago 
    let webhook = new webHookRepository_1.webhookrepository(); //*-------------> Crea el repository de webhooks
    let usuarioR = new giftyUserRepo_1.userRepository(); //*-------------> Crea el repository de usuario de interfaz
    let subUpdate = new subUpdatedGiftyRepository_1.subscriptionUpdate(usuarioR, webhook, mpRepo); //*-------------> Crea el servicio de suscripción actualizada
    await subUpdate.executeUpdate(); //*-------------> Ejecuta la actualización del servicio de suscripción actualizada
}
exports.subscriptionHandler = subscriptionHandler;
//# sourceMappingURL=subWebhookGifty.js.map