"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AuthFormInput from "./AuthFormInput";
import { authFormSchema } from "@/schema";
import { Loader2 } from "lucide-react";

interface AuthFormComponentProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  type:string
}

export default function AuthFormComponent({
  type,
  isLoading,
  setIsLoading,
}: AuthFormComponentProps) {
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof authFormSchema>) {
    setIsLoading(true)
    console.log(values);
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <AuthFormInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <AuthFormInput
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 size={20} className="animate-spin" />&nbsp;
              Loading...
            </>
          ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'
          }
        </Button>
      </form>
    </Form>
  );
}
