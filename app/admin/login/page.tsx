import { MainContainer } from "@/components/main-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonPrimary } from "@/components/button-primary";

export default function Home() {
  return (
    <MainContainer className="max-w-sm mt-44">
      <section className="relative rounded-b-3xl bg-white drop-shadow-sm h-fit p-12 flex justify-between items-center">
        <form action="" className="w-full mx-auto space-y-2">
          <div className="grid gap-1.5">
            <Label>Username</Label>
            <Input />
          </div>
          <div className="grid gap-1.5">
            <Label>Password</Label>
            <Input />
          </div>
          <ButtonPrimary>Login</ButtonPrimary>
        </form>
      </section>
    </MainContainer>
  );
}
