import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { ProfileForm } from "./signin";

const SignIn: React.FC = async () => {
  // const isAuthenticated = await checkIsAuthenticated();
  const isAuthenticated = false;


  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    return <ProfileForm />
  }
};

export default SignIn;
