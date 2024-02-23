import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-start border md:px-[16%] py-[5%] bg-main-gradient">
      <div className="relative overflow-hidden h-full w-full bg-white rounded-xl drop-shadow-xl mx-auto">
        {children}
      </div>
    </main>
  );
};
