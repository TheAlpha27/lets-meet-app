import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex-center h-screen w-screen">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
