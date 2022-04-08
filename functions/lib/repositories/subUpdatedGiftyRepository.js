"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionUpdate = void 0;
class subscriptionUpdate {
    constructor(repository, webhookRepository, mpRepository) {
        this.repository = repository;
        this.webhookRepository = webhookRepository;
        this.mpRepository = mpRepository;
    }
    async executeUpdate() {
        console.log('1');
        //*------------->------------->------------->------------->-------------> Crea el repository de mercadopago
        let mpData = await this.mpRepository.get(); //!------------->-------------> testeado
        console.log('2');
        //*------------->------------->------------->------------->-------------> Obtiene el repository de usuario de dominio a partir del usuario de interfaz
        let user = await this.repository.read(mpData.storeId); //!-------------> testeado
        console.log('3');
        //*------------->------------->------------->------------->-------------> Asigna por un set el webhook repository al user
        user.repository = this.webhookRepository; //!------------->-------------> testeado
        console.log('4');
        //* Ward
        if (mpData.status == user.status)
            return;
        console.log('5');
        //!------------->------------->------------->------------->-------------> Actualiza el usuario poniendo/quitando webhooks y datos
        await user.update(mpData); //*------------->------------->-------------> testeado
        console.log('6');
        //!------------->------------->------------->------------->-------------> Ejecuta la actualización BBDD
        this.repository.update(user); //*------------->------------->-------------> testeado
        console.log('7');
    }
}
exports.subscriptionUpdate = subscriptionUpdate;
//# sourceMappingURL=subUpdatedGiftyRepository.js.map