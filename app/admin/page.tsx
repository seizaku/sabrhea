import { MainContainer } from "@/components/main-container";
import AdminNavigationBar from "@/components/nav-admin";
import Link from "next/link";
export default function Home() {
  return (
    <MainContainer>
      <AdminNavigationBar />
      <section className="relative rounded-b-3xl bg-white drop-shadow-sm container h-[580px] p-12 md:px-24 flex justify-between items-center">
        <div className="flex -mt-28">
          <div>
            <p className="text-2xl text-muted-foreground/50 font-bold">
              Hi, I am
            </p>
            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-main-gradient">
              Sabrhea.
            </h1>
            <div className="my-4 border-b-8 border-muted-foreground/20 w-1/4"></div>
            <Link
              href="/about"
              className="bg-main-gradient hover:opacity-80 duration-500 transition-all text-white py-2.5 px-5 rounded-full mt-2"
            >
              Contact Me °✩
            </Link>
          </div>
        </div>
        <div className="hidden xl:block -mt-36 absolute z-20 -right-36">
          <div className="relative h-[500px] w-[500px] bg-main-gradient-reverse rounded-full overflow-hidden">
            <div className="absolute h-[200px] w-[200px] bg-white/20 backdrop-blur-sm rounded-full"></div>
            <div className="absolute flex justify-center items-center right-24 top-44 h-[80px] w-[80px] bg-white/80 backdrop-blur-sm rounded-full">
              <div className="h-[50px] w-[50px] bg-main-gradient opacity-80 rounded-full"></div>
            </div>
            <div className="absolute flex justify-center items-center left-14 bottom-0 h-[120px] w-[120px] bg-second/50 backdrop-blur-sm rounded-full">
              <div className="h-[80px] w-[80px] bg-main rounded-full"></div>
            </div>
          </div>
        </div>
        {/* <div className="overflow-hidden">
            <svg
              className="z-10 absolute bottom-0 right-0 w-[920px] md:w-[1080px] lg:w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#FA8A72"
                fill-opacity="1"
                d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,138.7C672,160,768,224,864,250.7C960,277,1056,267,1152,250.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div> */}
      </section>
    </MainContainer>
  );
}
