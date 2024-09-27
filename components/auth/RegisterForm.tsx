"use client";
import { TUserSchema, userSchema } from "@/types/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import createUser from "@/actions/UserAction";
const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });

  return (
    <form action={createUser} className="w-full flex flex-col space-y-2 mt-10">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="username">用户名</label>
        <input
          type="text"
          id="username"
          className="border border-gray-300 rounded-md p-2"
          {...register("username")}
        />
        <p className="text-red-500">{errors.username?.message}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">邮箱</label>
        <input
          type="text"
          id="email"
          className="border border-gray-300 rounded-md p-2"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="password">密码</label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded-md p-2"
          {...register("password")}
        />
        <p className="text-red-500">{errors.password?.message}</p>
      </div>
      <button
        type="submit"
        className="bg-primary text-white dark:text-slate-900 p-2 rounded-md"
        disabled={isSubmitting}
      >
        注册
      </button>
    </form>
  );
};

export default RegisterForm;
