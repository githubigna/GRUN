"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const userModel_1 = require("../models/userModel");
const userSchema_1 = require("../database/models/userSchema");
class userRepository {
    async read(_id) {
        try {
            let query = await userSchema_1.userSchema.findById(_id);
            console.log('query::', query);
            let userInstance = new userModel_1.user(_id, query.state, query.subscriptionData.status, query.orderHook, query.categoryHook, query.visualizationsQuantity, query.storeId, query.accessToken, query.dataStore.business_id, query.email, query.onboardingComplete, query.debt);
            return userInstance;
        }
        catch (error) {
            console.error(error);
            throw new Error("Error la obtención del usuario de dominio mediante el userRepository (userRepository.read :: linea 5 :: src/repositories/userRepository.ts ::)");
        }
        ;
    }
    ;
    async update(user) {
        try {
            console.log('entro');
            const userObject = user.toObject();
            console.log('user', user);
            await userSchema_1.userSchema.findByIdAndUpdate(user._id, {
                $set: {
                    "subscriptionData.status": `${userObject.status}`,
                    "state": `${userObject.state}`,
                    "orderHook": `${userObject.orderHook}`,
                    "categoryHook": `${userObject.categoryHook}`,
                    "visualizationsQuantity": `${userObject.visualizationsQuantity}`,
                    "storeId": `${userObject.storeId}`,
                    "accessToken": `${userObject.accessToken}`,
                    "business_id": `${userObject.business_id}`,
                    "onboardingComplete": userObject.onboardingComplete,
                    "debt": userObject.debt
                }
            });
        }
        catch (error) {
            console.log("Error::", error);
            throw new Error("Error en update usuario en userRepository (userRepository.update :: linea 15 :: src/repositories/userRepository.ts ::)");
        }
        ;
    }
    ;
}
exports.userRepository = userRepository;
;
//# sourceMappingURL=giftyUserRepo.js.map