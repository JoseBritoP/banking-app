/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

const { NEXT_PUBLIC_APPWRITE_ENDPOINT, NEXT_PUBLIC_APPWRITE_PROJECT, NEXT_APPWRITE_KEY } = process.env

export async function createSessionClient() {
  if(!NEXT_PUBLIC_APPWRITE_ENDPOINT || !NEXT_PUBLIC_APPWRITE_PROJECT ) throw new Error(`Check env file`)
  const client = new Client()
    .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database (){
      return new Databases(client)
    },
    get user(){
      return new Users(client)
    }
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    
    const user = await account.get();
    return parseStringify(user)
  } catch (error:any) {
    console.log('Error',error)
    return null;
  }
}