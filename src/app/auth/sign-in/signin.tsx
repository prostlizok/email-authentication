"use client";

import { FcGoogle } from "react-icons/fc";
import { useTransition, useState } from "react";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerAction";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import "./signin.css"

export const SignInPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ email: "" as string });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      startTransition(async () => {
        await handleEmailSignIn(formData.email);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        
        <div className="form-container">
          <form className="email-signin-form" onSubmit={handleSubmit}>
            <Input
              className="form-input"
              type="email"
              maxLength={320}
              placeholder="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ email: event.target.value })
              }
              disabled={isPending}
              required
            />
            <Button className="submit-button" type="submit">
              Sign in with email
            </Button>
          </form>

          <div className="divider">
            <div className="line"></div>
            <span className="or">or</span>
            <div className="line"></div>
          </div>

          <div className="social-logins">
            <Button className="google" onClick={() => handleGoogleSignIn()}>
              <FcGoogle className="google-icon" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
