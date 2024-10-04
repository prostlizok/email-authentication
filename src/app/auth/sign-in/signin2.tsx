"use client"

import "./signin.css"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useTransition, useState } from "react";

import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerAction";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
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
            <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>SIGN IN</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormDescription>
                            Enter your email adress.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>

                    <Button  onClick={() => handleGoogleSignIn()}>
                        <FcGoogle className="google-icon" />
                        Sign in with Google
                    </Button>
                </form>
            </Form>
        </div>
    </div>

  )
}
