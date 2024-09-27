"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, TSignInSchema } from "@/types/UserSchema";
import { userLogin } from "@/actions/UserAction";
import { useFormStatus } from "react-dom";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const { pending } = useFormStatus();

  const login = async (formData: FormData) => {
    const result = await userLogin(formData);
    if (result?.error) {
      setError("password", { message: result.error });
    }
  };

  return (
    <>
      <form action={login} className="flex flex-col gap-y-2 mt-10">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="email"
            placeholder="请输入邮箱"
            className="border border-gray-300 rounded-md p-2"
            {...register("email")}
          />
          <p className="text-red-500">{errors.email?.message ?? ""}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            className="border border-gray-300 rounded-md p-2"
            {...register("password")}
          />
          <p className="text-red-500">{errors.password?.message ?? ""}</p>
        </div>

        <button
          type="submit"
          className="bg-primary text-white  dark:text-slate-900 p-2 rounded-md disabled:bg-gray-500"
          disabled={pending}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
