import { z } from 'zod';

export const userSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
})

export type TUserSchema = z.infer<typeof userSchema>;

export const signInSchema = z.object({
    email: z.string().email("email无效"),
    password: z.string().min(8, "密码长度至少8位"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;