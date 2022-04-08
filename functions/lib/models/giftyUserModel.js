"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const hooksEnum_1 = require("../types/hooksEnum");
class user {
    constructor(_id, state, status, orderHook, categoryHook, visualizationsQuantity, storeId, accessToken, business_id, email, onboardingComplete, debt) {
        this._id = _id;
        this.state = state;
        this.status = status;
        this.orderHook = orderHook;
        this.categoryHook = categoryHook;
        this.visualizationsQuantity = visualizationsQuantity;
        this.storeId = storeId;
        this.accessToken = accessToken;
        this.business_id = business_id;
        this.email = email;
        this.onboardingComplete = onboardingComplete;
        this.debt = debt;
    }
    toObject() {
        try {
            return {
                state: this.state,
                status: this.status,
                orderHook: this.orderHook,
                categoryHook: this.categoryHook,
                visualizationsQuantity: this.visualizationsQuantity,
                storeId: this.storeId,
                accessToken: this.accessToken,
                business_id: this.business_id,
                onboardingComplete: this.onboardingComplete,
                debt: this.debt
            };
        }
        catch (error) {
            throw new Error("Error en tranformación del usuario de dominio en objeto JSON (user.toObject :: linea 30 :: src/models/userModel.ts ::)");
        }
    }
    async update(updateParams) {
        var _a, _b, _c, _d;
        try {
            if (updateParams.status !== this.status) { //!------------------<<->>-<<!>>-< Checkea si hubo realmente un cambio en el estatus de la suscripción ---->
                if (updateParams.status === "cancelled") {
                    this.state = false;
                    this.status = updateParams.status || this.status;
                    await ((_a = this._repository) === null || _a === void 0 ? void 0 : _a.delete(this.orderHook, this.storeId, this.accessToken));
                    await ((_b = this._repository) === null || _b === void 0 ? void 0 : _b.delete(this.categoryHook, this.storeId, this.accessToken));
                    this.orderHook = "";
                    this.categoryHook = "";
                }
                else if (updateParams.status === "authorized") {
                    this.onboardingComplete = true;
                    this.state = true;
                    this.status = updateParams.status || this.status;
                    this.orderHook = await ((_c = this._repository) === null || _c === void 0 ? void 0 : _c.add(hooksEnum_1.webhookTypeEnum.order, this.storeId, this.accessToken)) || null;
                    this.categoryHook = await ((_d = this._repository) === null || _d === void 0 ? void 0 : _d.add(hooksEnum_1.webhookTypeEnum.category, this.storeId, this.accessToken)) || null;
                }
            }
        }
        catch (e) {
            throw new Error("Error en la actualización del usuario de dominio (user.update :: linea 47 :: src/models/userModel.ts ::)");
        }
    }
    async updatePayment() {
        try {
            this.debt = 0;
        }
        catch (e) {
            throw new Error("Error en la actualización del usuario de dominio para payment (user.updatePayment :: linea 68 :: src/models/userModel.ts ::)");
        }
    }
    set id(value) {
        try {
            this._id = value;
        }
        catch (error) {
            throw new Error("Error en el seteo del user_id en set id  (user.id :: linea 76 :: src/models/userModel.ts ::)");
        }
    }
    set repository(value) {
        try {
            this._repository = value;
        }
        catch (error) {
            throw new Error("Error seteando el webHookRepository al usario de dominio (user.repository :: linea 84 :: src/models/userModel.ts ::)");
        }
    }
}
exports.user = user;
//# sourceMappingURL=giftyUserModel.js.map