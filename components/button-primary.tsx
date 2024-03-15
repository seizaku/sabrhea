import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
};

export const ButtonPrimary = ({ children, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-w-fit bg-main-gradient hover:opacity-80 duration-500 transition-all text-white py-2.5 px-5 rounded-full mt-2",
        className
      )}
    >
      {children}
    </button>
  );
};
