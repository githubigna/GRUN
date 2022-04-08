"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    storeId: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        default: "Store"
    },
    preapproval_id: {
        type: String,
        require: false
    },
    subscriptionData: {
        type: Object,
        require: false
    },
    trialPeriodEnded: {
        type: Boolean,
        require: true
    },
    failedPayments: {
        type: Number,
        default: 0
    },
    allStats: {
        type: Array,
        require: false
    },
    firstMonthEnded: {
        type: Boolean,
        require: true,
        defualt: false
    },
    productsId: {
        type: String,
        require: false
    },
    categoriesId: {
        type: String,
        require: false
    },
    accessToken: {
        type: String,
        require: true
    },
    scriptId: {
        type: String,
        require: true
    },
    state: {
        type: Boolean,
        require: true,
        defualt: true
    },
    createdOn: {
        type: Date,
        require: true,
        default: Date.now()
    },
    offers: {
        type: [String],
        require: false
    },
    email: {
        type: String,
        require: true
    },
    uninstallDate: {
        type: Date,
        default: ""
    },
    lastUpdate: {
        type: Date,
        require: false
    },
    visualizationsQuantity: {
        type: Number,
        default: -1,
    },
    categoryHook: {
        type: String,
        require: true,
        defualt: ""
    },
    orderHook: {
        type: String,
        require: true,
        defualt: ""
    },
    data_fiscal: {
        type: Object,
        require: false
    },
    debt: {
        type: Number,
        require: false,
    },
    main_language: {
        type: String,
        require: true,
        default: "es"
    },
    dataStore: {
        type: Object,
        require: true,
    },
    onboardingComplete: {
        type: Boolean,
        require: true,
        default: false
    }
});
exports.userModel = mongoose.model("User", userSchema);
// const { Schema, model } = require('mongoose');
// const StoreSchema = Schema({
//     accessToken: {
//         type: String,
//         required: [true, 'El Access Token es obligatorio'],
//         unique: true,
//     },
//     onBoardingComplete: {
//         type: Boolean,
//         default: false,
//     },
//     name: {
//         type: String,
//         required: [true, 'El nombre es obligatorio']
//     },
//     logo: {
//         type: String,
//     },
//     storeId: {
//         type: String,
//         unique: true,
//     },
//     mail: {
//         type: String,
//         required: [true, 'El mail es obligatorio'],
//     },
//     facebook:{
//         type: String,
//         default: 'sin info'
//     },
//     twitter:{
//         type: String,
//         default: 'sin info'
//     },
//     instagram:{
//         type: String,
//         default: 'sin info'
//     },
//     pinterest:{
//         type: String,
//         default: 'sin info'
//     },
//     phone:{
//         type: String,
//         default: 'sin info'
//     },
//     business_name:{
//         type: String,
//         default: 'sin info'
//     },
//     business_id: {
//         type: String,
//         default: 'sin info'
//     },
//     plan_name:{
//         type: String,
//         default: 'sin info'
//     },
//     origin:{
//         type: String,
//         default: 'tiendanube'
//     },
//     original_domain:{
//         type: String,
//         default: 'sin info'
//     },
//     main_language:{
//         type: String,
//         default: 'sin info'
//     },
//     speciality:{
//         type: String,
//         default: 'sin info'
//     },
//     state: {
//         type: Boolean,
//         default: true
//     },
//     rol: {
//         type: String,
//         default: "USER_ROLE",
//         required: [true, 'El rol es obligatorio'],
//     },
//     createdOn:{
//         type: Date,
//         default: Date.now(),
//     },
//     categoryId: {
//         type: String,
//     },
//     giftCards: [
//         {   
//             type: String, 
//             ref:'GiftCard',    
//         }
//     ],
//     contactName: {
//         type: String,
//         default: 'sin info'
//     },
//     contactEmail: {
//         type: String,
//         default: 'sin info'
//     },
//     contactPhone: {
//         type: String,
//         default: 'sin info'
//     },
//     contactExpert: {
//         type: Boolean,
//         default: false
//     },
//     contactWay: {
//         type: String,
//         default: 'sin info'
//     },
//     contactOrigin: {
//         type: String,
//         default: 'sin info'
//     },
//     categoryId: {
//         type: Number,
//         require: true
//     },
//     subscriptionData: {
//         type: Object
//     },
//     formData: {
//         type: Object
//     },
//     endTutorial: {
//         type: Boolean,
//         default: false
//     }
// }, { timestamps: true });
// //Para pasar solo los atributos que yo deseo de la tienda
// StoreSchema.methods.toJSON = function(){
//     const { __v, _id, accessToken, ...store } = this.toObject();
//     store.uid = _id;
//     return store;
// }
// //Model, primer string es el nombre de la coleccion + 's'
// module.exports = model( 'Store', StoreSchema);
//# sourceMappingURL=giftyUserSchema.js.map