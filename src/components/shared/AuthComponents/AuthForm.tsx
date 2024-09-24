"use client";
import React, { useState } from "react";
import AuthHeaderForm from "./AuthHeaderForm";
import AuthFormComponent from "./AuthFormComponent";
import AuthFormFooter from "./AuthFormFooter";

export default function AuthForm({ type }: { type: string }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="auth-form">
      <div className="bg-gray-100/80 rounded-lg pb-4 px-2">
        <AuthHeaderForm type={type} user={user} />
        {user ? (
          <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
        ) : (
          <AuthFormComponent
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            type={type}
          />
        )}
        <AuthFormFooter type={type} />
      </div>
    </section>
  );
}
