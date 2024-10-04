"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const SignInButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <Button
      variant="default"
      //className={props.className}
      // style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/auth/sign-in");
      }}
    >
      {props.children || "Sign In"}
    </Button>
  );
};