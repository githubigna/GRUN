import { subscriptionUpdate } from "../repositories/subUpdatedGiftyRepository";
import { userRepository } from "../repositories/giftyUserRepo";
import { mpRepository } from "../repositories/mp.repository";
import { webhookrepository } from "../repositories/webHookRepository";


export async function subscriptionHandler(action: string, id: string) {//*-------------> Controlador de webhook de susccripción
    let mpRepo = new mpRepository(id,'APP_USR-8377065187044150-040815-b8e5e5f789b176dd15f0be7a1f75e36d-725644963') //*-------------> Crea el repository de mercado pago 
    let webhook = new webhookrepository();//*-------------> Crea el repository de webhooks
    let usuarioR = new userRepository();//*-------------> Crea el repository de usuario de interfaz
    let subUpdate = new subscriptionUpdate(usuarioR, webhook, mpRepo); //*-------------> Crea el servicio de suscripción actualizada
    await subUpdate.executeUpdate()//*-------------> Ejecuta la actualización del servicio de suscripción actualizada
}