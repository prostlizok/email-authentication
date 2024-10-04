"use client";

import { handleSignOut } from "@/src/lib/auth/signOutServerAction";
import { Button } from "@/components/ui/button";

export const SignOutButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
    //   className={props.className}
    //   style={{ cursor: "pointer" }}
      onClick={() => handleSignOut()}
    >
      {props.children || "Sign Out"}
    </Button>
  );
};
