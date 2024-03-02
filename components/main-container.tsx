import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const MainContainer = ({ children, className }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-start border md:px-[16%] py-[5%] bg-main-gradient">
      <div
        className={cn(
          "relative overflow-hidden h-full w-full bg-white rounded-xl drop-shadow-xl mx-auto",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
};
