import  {useSession} from "../service/getSession.ts";
import { useUserUpdater } from "../service/updateUser.ts";
import User from "../models/Usuario.ts";
export function UpdateUserVM() {
    const { getSession } = useSession();
    const { updateUser } = useUserUpdater();
    const updateUserVM = async (username: User) => {
        return await updateUser(username);
    };

    const getSessionVM = async () => {
        const user = await getSession();
        return user;
    }

    return { updateUserVM, getSessionVM };
}
