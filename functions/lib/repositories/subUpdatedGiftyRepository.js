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
        //*------------->------------->------------->------------->-------------> Crea el repository de mercadopago
        let mpData = await this.mpRepository.get(); //!------------->-------------> testeado
        //*------------->------------->------------->------------->-------------> Obtiene el repository de usuario de dominio a partir del usuario de interfaz
        let user = await this.repository.read(mpData.storeId); //!-------------> testeado
        //*------------->------------->------------->------------->-------------> Asigna por un set el webhook repository al user
        user.repository = this.webhookRepository; //!------------->-------------> testeado
        //* Ward
        console.log('diff', mpData.status === user.status);
        if (mpData.status == user.status)
            return;
        //!------------->------------->------------->------------->-------------> Actualiza el usuario poniendo/quitando webhooks y datos
        await user.update(mpData); //*------------->------------->-------------> testeado
        //!------------->------------->------------->------------->-------------> Ejecuta la actualización BBDD
        this.repository.update(user); //*------------->------------->-------------> testeado
    }
}
exports.subscriptionUpdate = subscriptionUpdate;
//# sourceMappingURL=subUpdatedGiftyRepository.js.map