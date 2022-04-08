import { user } from "../models/userModel";
import { userGifty } from "../models/giftyUserModel";

export interface iuserRepository {
    read(id: string): Promise<user>;
    update(user: user): Promise<void>;
}
export interface iuserGiftyRepository {
    read(id: string): Promise<userGifty>;
    update(user: userGifty): Promise<void>;
}