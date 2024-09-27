import ThemeTogger from "@/components/ThemeTogger";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative bg-slate-50 dark:bg-slate-900">
      <div className="absolute top-5 right-5 text-white">
        <ThemeTogger />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
