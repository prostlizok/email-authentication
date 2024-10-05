"use server";

// import { signIn } from "@/src/lib/auth/authConfig";
import { signIn } from "./authConfig";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
  }
};
