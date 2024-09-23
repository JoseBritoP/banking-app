"use client";
import React, { useState } from "react";
import AuthHeaderForm from "./AuthHeaderForm";
import AuthFormComponent from "./AuthFormComponent";

export default function AuthForm({ type }: { type: string }) {
  const [user, setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(false)

  return (
    <section className="auth-form">
     <AuthHeaderForm type={type} user={user} isLoading={isLoading} setIsLoading={setIsLoading}/>
      {user ? (<div className="flex flex-col gap-4">{/* PlaidLink */}</div>) : (<AuthFormComponent isLoading={isLoading} setIsLoading={setIsLoading} type={type}/>)}
    </section>
  );
}
