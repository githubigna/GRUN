"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookrepository = void 0;
const categorySchema_1 = require("../database/models/categorySchema");
const axios_1 = require("axios");
class webhookrepository {
    async delete(id, storeId, accessToken) {
        if (id === null)
            return;
        try {
            let answer = await axios_1.default.delete(`https://api.tiendanube.com/v1/${storeId}/webhooks/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authentication: `bearer ${accessToken}`,
                    "User-Agent": "Flowy - Cross-sell & Up-sell (appflowy@gmail.com)",
                },
            });
            console.log('answer', answer.status);
        }
        catch (error) {
            throw new Error("Error en delete webhook (webHookRepository.delete :: linea 7 :: src/repositories/webHookRepository.ts ::)");
        }
    }
    async add(webhookType, storeId, accessToken) {
        try {
            let urlEnd;
            if (webhookType === "order/paid") {
                urlEnd = "order";
            }
            else {
                urlEnd = "category_updated";
            }
            let res = await axios_1.default.post(`https://api.tiendanube.com/v1/${storeId}/webhooks`, {
                url: `https://flowy.com.ar/api/webhooks/${urlEnd}`,
                event: webhookType,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authentication: `bearer ${accessToken}`,
                    "User-Agent": "Flowy - Cross-sell & Up-sell (appflowy@gmail.com)",
                }
            });
            if (webhookType === "category/updated") {
                await categorySchema_1.categoryUpdate.findOneAndUpdate({ "store_id": storeId }, {
                    $set: {
                        "hook_id": res.data.id
                    }
                });
            }
            return res.data.id;
        }
        catch (error) {
            throw new Error("Error en add webhook (webHookRepository.add :: linea 21 :: src/repositories/webHookRepository.ts ::)");
        }
    }
}
exports.webhookrepository = webhookrepository;
//# sourceMappingURL=webHookRepository.js.map