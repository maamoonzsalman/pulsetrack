import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    console.log('hey', user);
    try {
        console.log('here now');
        const newUser = await users.create(
            ID.unique(),
             user.email, 
             undefined,
             user.phone, 
             user.name
        );
        
        return parseStringify(newUser);

    } catch (error: any) {
        console.log(error);
        if(error && error?.code === 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ]);

            return documents?.users[0];
        }
    }
} 