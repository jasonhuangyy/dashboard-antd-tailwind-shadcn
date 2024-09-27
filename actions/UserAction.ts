"use server";

import { userSchema, signInSchema } from "@/types/UserSchema";
import { redirect } from "next/navigation";
export default async function createUser(formData: FormData) {
    const validatedFields = userSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email')
    });

    if (!validatedFields.success) {
        console.log("数据校验失败", validatedFields.error);
        return {
            error: validatedFields.error.issues.map(issue => issue.message).join(', ')
        }
    }

    const resp = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        body: JSON.stringify(validatedFields.data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('status', resp.status);
    redirect("/");

}

export const userLogin = async (formData: FormData) => {
    const validatedFields = signInSchema.safeParse({
        password: formData.get('password'),
        email: formData.get('email')
    });

    if (!validatedFields.success) {
        console.log("数据校验失败", validatedFields.error);
        return {
            error: validatedFields.error.issues.map(issue => issue.message).join(', ')
        }
    }

    redirect("/");
}