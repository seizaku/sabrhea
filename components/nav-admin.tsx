"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const navlinks = [
  {
    title: "Home",
    href: "/admin",
  },
  {
    title: "About",
    href: "/admin/about",
  },
  {
    title: "Systems",
    href: "/admin/systems",
  },
  {
    title: "Designs",
    href: "/admin/designs",
  },
  {
    title: "Skills",
    href: "/admin/skills",
  },
];

const AdminNavigationBar = () => {
  const path = usePathname();
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("logged_in") != "true") {
      router.push("./admin/login");
      return <section></section>;
    }
  }

  return (
    <section id="home" className="container p-12 md:px-24 md:pt-24">
      <nav>
        <ul className="flex gap-8 flex-wrap max-w-2xl w-full font-bold sm:text-xl lg:text-2xl">
          {navlinks.map(({ title, href }, index) => (
            <li
              key={index}
              className={`flex flex-col border-main ${
                path != href
                  ? "hover:text-main-gradient-t text-muted-foreground/20"
                  : "text-main-gradient-t"
              } pb-2 group`}
            >
              <a href={href}>{title}</a>
              <span
                className={`transition-all duration-500 ease-in-out ${
                  path != href ? "group-hover:w-full w-0" : "w-full"
                } p-0.5 mt-1 ${
                  path != href
                    ? "group-hover:bg-main-gradient"
                    : "bg-main-gradient"
                }`}
              ></span>
            </li>
          ))}
          <li
            className={`flex flex-col border-main hover:text-main-gradient-t text-muted-foreground/20 pb-2 group`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button>Logout</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Logout Confirmation</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to logout?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    className="bg-main hover:bg-main/90"
                    onClick={() => {
                      sessionStorage.clear();
                      router.push("/admin/login");
                    }}
                    type="submit"
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <span
              className={`transition-all duration-500 ease-in-out group-hover:w-full w-0 p-0.5 mt-1 group-hover:bg-main-gradient`}
            ></span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default AdminNavigationBar;
