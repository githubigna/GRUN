import { iuserRepository } from "../interfaces/userInterface";
import { iwebHookRepository } from "../interfaces/webHookInterface";
import { impRepository } from "../interfaces/mp.interface";

export class subscriptionUpdate {
    repository: iuserRepository;
    webhookRepository: iwebHookRepository;
    mpRepository: impRepository;

    constructor(repository: iuserRepository, webhookRepository: iwebHookRepository, mpRepository: impRepository) {
        this.repository = repository;
        this.webhookRepository = webhookRepository;
        this.mpRepository = mpRepository;
    }

    async executeUpdate() {//*------------->------------->------------->------------->Función que ejecuta el servicio de subscription updated
        console.log('1');
        //*------------->------------->------------->------------->-------------> Crea el repository de mercadopago
        let mpData = await this.mpRepository.get();//!------------->-------------> testeado
        console.log('2');
        //*------------->------------->------------->------------->-------------> Obtiene el repository de usuario de dominio a partir del usuario de interfaz
        let user = await this.repository.read(mpData.storeId)//!-------------> testeado
        console.log('3');
        //*------------->------------->------------->------------->-------------> Asigna por un set el webhook repository al user
        user.repository = this.webhookRepository;//!------------->-------------> testeado
        console.log('4');
        //* Ward
        if(mpData.status == user.status) return;
        console.log('5');

        //!------------->------------->------------->------------->-------------> Actualiza el usuario poniendo/quitando webhooks y datos
        await user.update(mpData)//*------------->------------->-------------> testeado
        console.log('6');

        //!------------->------------->------------->------------->-------------> Ejecuta la actualización BBDD
        this.repository.update(user);//*------------->------------->-------------> testeado
        console.log('7');


    }
}