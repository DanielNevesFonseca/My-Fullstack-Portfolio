import { useState, useEffect, useContext } from "react";
import { HeroDivider } from "../components/HeroDivider";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";

export const Home = () => {
  const { translation } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <main className="grid items-center gap-10 translate-y-3 md:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="uppercase font-marlinge text-primary">
              {translation
                ? "Desenvolvedor Web Fullstack"
                : "Fullstack Web Developer"}
            </span>
            <h1 className="text-5xl font-bold">
              {translation ? "Seja Bem Vindo!" : "Welcome!"}
            </h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 font-thin leading-7 text-white/70">
              {translation
                ? "Conectando negócios e seus desafios às soluções digitais criativas por meio de software!"
                : "Connecting businesses and their challenges to creative digital solutions through software!"}
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="tracking-widest transition-all duration-300 btn btn-primary w-fit rounded"
              >
                {translation ? "Contato" : "Contact"}
              </Link>
              <a
                target="_blank"
                href={
                  translation
                    ? "https://drive.google.com/file/d/1JeRyUKypD7XGsSBkJjeSqa_4c7JN_zdF/view?usp=sharing"
                    : "https://drive.google.com/file/d/1zH4lfPb0-1Fb5Hgl_rY_0T5ghMZyqiG3/view?usp=sharing"
                }
                className="inline-flex tracking-widest transition-all duration-300 rounded btn btn-outline w-fit"
              >
                {translation ? "Currículo" : "Resume"}
              </a>
            </div>
          </HeroDivider>
        </div>
        <div className="relative mx-auto">
          <div className="overflow-hidden rounded-full ">
            <img
              className="transition-all duration-1000 hover:scale-110 w-30"
              src="https://avatars.githubusercontent.com/u/107806928?v=4"
            />
          </div>
          <span className="rounded absolute bottom-0 p-2 text-xl font-bold transition-all duration-1000 shadow-lg font-marlinge bg-primary px-14 sm:p-4 text-primary-content sm:text-3xl">
            Daniel
          </span>
        </div>
      </main>
      <section className="grid grid-cols-1 col-span-2 gap-3 md:grid-cols-7 md:gap-10">
        <h2 className="text-5xl font-bold md:col-span-2">
          {translation ? "Sobre mim" : "About me"}
        </h2>
        <>
          {translation ? (
            <span className="py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/70">
              Olá! Me chamo{" "}
              <strong className="font-bold">Daniel Neves Fonseca</strong>,
              possuo conhecimentos em{" "}
              <strong className="font-bold">
                {" "}
                JavaScript, TypeScript, Python
              </strong>{" "}
              e tecnologias avançadas para o front-end como
              <strong className="font-bold">
                {" "}
                Angular, React.js e Tailwind CSS.
              </strong>{" "}
              Também estou familiarizado com frameworks de back-end como o
              <strong className="font-bold">
                {" "}
                NodeJS, Django, NestJS, ExpressJS, TypeORM, Prisma,{" "}
              </strong>{" "}
              e a gestão de bancos de dados utilizando{" "}
              <strong className="font-bold"> PostgreSQL</strong> e um pouco de{" "}
              <strong className="font-bold"> MongoDB.</strong> Já trabalhei com
              projetos - individuais e em equipe - web com a criação de
              protótipos de interface UI Design, desenvolvimento front end e
              desenvolvimento back end.
            </span>
          ) : (
            <span className="py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/70">
              Hello! My name is{" "}
              <strong className="font-bold">Daniel Neves Fonseca</strong>, and I
              have expertise in{" "}
              <strong className="font-bold">
                {" "}
                JavaScript, TypeScript, Python
              </strong>{" "}
              and advanced front-end technologies such as
              <strong className="font-bold">
                {" "}
                Angular, React.js, and Tailwind CSS.
              </strong>{" "}
              I am also familiar with back-end frameworks like
              <strong className="font-bold">
                {" "}
                NodeJS, Django, NestJS, ExpressJS, TypeORM, Prisma,{" "}
              </strong>{" "}
              and database management using{" "}
              <strong className="font-bold"> PostgreSQL</strong> and a bit of{" "}
              <strong className="font-bold"> MongoDB.</strong> I have experience
              working on both individual and team web projects, involving UI
              Design interface prototyping, front-end development, and back-end
              development.
            </span>
          )}
        </>
      </section>
    </div>
  );
};
