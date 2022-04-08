"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mpRepository = void 0;
const axios_1 = require("axios");
const mercadopago = require("mercadopago");
class mpRepository {
    constructor(_id, access_token) {
        this._id = _id;
        this.mp = mercadopago;
        this._accessToken = access_token;
        this.mp.configure({ access_token });
    }
    async get() {
        try {
            let preapprovalData = await this.mp.preapproval.findById(this._id);
            let updateParams = {
                "storeId": preapprovalData.body.external_reference,
                "status": preapprovalData.body.status
            };
            return updateParams;
        }
        catch (error) {
            throw new Error("Error en getSubscription (mpRepository.get :: linea 17 :: src/repositories/mp.repository.ts ::)");
        }
    }
    async getPayment() {
        try {
            let response = await axios_1.default.get(`https://api.mercadopago.com/authorized_payments/${this._id}`, {
                headers: {
                    Authorization: `Bearer ${this._accessToken}`
                }
            });
            let data = {
                "status": response.data.payment.status,
                "id": response.data.external_reference,
                "impTotal": response.data.transaction_amount,
                "description": response.data.reason
            };
            return data;
        }
        catch (error) {
            throw new Error("Error en getPayment (mpRepository.getPayment :: linea 30 :: src/repositories/mp.repository.ts ::)");
        }
    }
}
exports.mpRepository = mpRepository;
//# sourceMappingURL=mp.repository.js.map