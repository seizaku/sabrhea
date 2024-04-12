"use client";
import { usePathname, useRouter } from "next/navigation";

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
      return;
    }
  }

  return (
    <section id="home" className="container p-12 md:px-24 md:pt-24">
      <nav>
        <ul className="grid grid-cols-5 place-items-start max-w-2xl w-full font-bold sm:text-xl lg:text-2xl">
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
        </ul>
      </nav>
    </section>
  );
};

export default AdminNavigationBar;
