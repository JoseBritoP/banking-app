import React from "react";
import AuthForm from "@/components/shared/AuthComponents/AuthForm";

export default function SignUpPage() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}
