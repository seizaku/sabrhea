import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonPrimary = ({ children, className }: Props) => {
  return (
    <button
      className={cn(
        "w-full bg-main-gradient hover:opacity-80 duration-500 transition-all text-white py-2.5 px-5 rounded-full mt-2",
        className
      )}
    >
      {children}
    </button>
  );
};
