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
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

interface AuthFormComponentProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  setUser:React.Dispatch<React.SetStateAction<null>>
}

export default  function AuthFormComponent({type,isLoading,setIsLoading,setUser}: AuthFormComponentProps) {

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // Sign In with Appwrite & create plaid token
      if(type === 'sign-up'){
        const newUser = await signUp(values)
        setUser(newUser)
      } 

      if(type === 'sign-in'){
        const response = await signIn({
          email:values.email,
          password:values.password
        })

        if(response) router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-2">
        {type === "sign-up" && (
          <>
            <div className="flex gap-4">
              <AuthFormInput
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
              />
              <AuthFormInput
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />
            </div>
            <AuthFormInput
              control={form.control}
              name="address"
              label="Address"
              placeholder="Enter your specific address"
            />
            <AuthFormInput
              control={form.control}
              name="city"
              label="City"
              placeholder="Enter your specific City"
            />
            <div className="flex gap-4">
              <AuthFormInput
                control={form.control}
                name="state"
                label="State"
                placeholder="Example: NY"
              />
              <AuthFormInput
                control={form.control}
                name="postalCode"
                label="Postal Code"
                placeholder="Example: 11101"
              />
            </div>
            <div className="flex gap-4">
              <AuthFormInput
                control={form.control}
                name="date"
                label="Date of Birth"
                type="date"
                placeholder="Example: YYYY-MM-DD"
              />
              <AuthFormInput
                control={form.control}
                name="ssn"
                label="SSN"
                placeholder="Example: 1234"
              />
            </div>
          </>
        )}
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
        <div className="flex flex-col gap-4 px-6">
          <Button type="submit" className="form-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                &nbsp; Loading...
              </>
            ) : type === "sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
