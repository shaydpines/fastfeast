import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";
import { CreateUserParams, SignInParams } from "@/type";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT as string,
  platform: "com.jsm.fastfeast",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as string,
  databaseId: "689b696b001d1f1023f2",
  userCollectionId: "689b6a7a0035abed5996",
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({
  email,
  password,
  name,
}: CreateUserParams) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) throw new Error("Failed to create user");

    await signIn({ email, password });

    const avatarUrl = avatars.getInitialsURL(name);

    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, name, email, avatar: avatarUrl },
    );
  } catch (e) {
    throw new Error(e as string);
  }
};

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) new Error("Failed to sign in");
  } catch (e) {
    throw new Error(e as string);
  }
};

export const getCurrentUser = async () => {
  try{
    const currentAccount = await account.get();
    if(!currentAccount) new Error("Failed to get current account");

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    )

    if(!currentUser) new Error("Failed to get current user");
    return currentUser.documents[0];
  } catch (e) {
    throw new Error(e as string);
  }
}