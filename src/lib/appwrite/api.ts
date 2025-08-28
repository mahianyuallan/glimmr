import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),     // userId
      user.email,      // email
      user.password,   // password
      user.name        // optional name
    );

    return newAccount;
  } catch (error) {
    console.error(error);
    return error;
  }
}
