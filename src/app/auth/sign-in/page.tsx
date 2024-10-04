import { redirect } from "next/navigation";
import { SignInPage } from "./signin";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { ProfileForm } from "./signin2";

const SignIn: React.FC = async () => {
  // const isAuthenticated = await checkIsAuthenticated();
  const isAuthenticated = false;


  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    //return <SignInPage />;
    return <ProfileForm />
  }
};

export default SignIn;
