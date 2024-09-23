import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/schema'
import { FieldPath } from 'react-hook-form'
interface AuthFormInput {
  control:Control<z.infer<typeof authFormSchema>>,
  name: FieldPath<z.infer<typeof authFormSchema>>
  label:string
  placeholder:string
  type?:string
}
export default function AuthFormInput({control,name,label,placeholder,type}:AuthFormInput) {
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"/>
          </div>
        </FormItem>
      )}
    />
  )
}
