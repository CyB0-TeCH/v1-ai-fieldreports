'use server';
import { z } from 'zod';

export const registerUser = async (input: any) => {
  console.log("Registering user:", input.email);
  return { success: true, uid: "temp-uid", message: "Success" };
};
