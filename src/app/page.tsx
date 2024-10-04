"use client";

import { SignInButton } from "@/components/signin_button";
import "./home.css"

const Home: React.FC = () => {
  return (
    <div>
      <div className="home-page">
        <h2>Home</h2>
        <div>
          <SignInButton/>
        </div>
      </div>
    </div>
  );
};

export default Home;