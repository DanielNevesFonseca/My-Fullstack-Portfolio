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
      <main className="grid items-center gap-10 translate-y-3 md:grid-cols-2 mt-5">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="uppercase font-marlinge text-primary">
              {translation
                ? "Desenvolvedor Web Full Stack"
                : "Fullstack Web Developer"}
            </span>
            <h1 className="text-5xl font-bold">
              {translation ? "Seja Bem Vindo!" : "Welcome!"}
            </h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 font-thin leading-7 text-white/90">
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
                    ? "https://drive.google.com/file/d/1hueC5x4H6tFnHAyA6YBu7gb9jnqJzFMf/view?usp=sharing"
                    : "https://drive.google.com/file/d/1hueC5x4H6tFnHAyA6YBu7gb9jnqJzFMf/view?usp=sharing"
                }
                className="inline-flex tracking-widest transition-all duration-300 rounded btn btn-outline w-fit"
              >
                {translation ? "Currículo" : "Resume"}
              </a>
            </div>
          </HeroDivider>
        </div>
        <div className="relative mx-auto z-10">
          <div className="overflow-hidden rounded-full ">
            <img
              className="transition-all duration-1000 hover:scale-95 w-50 rounded-full"
              src="https://avatars.githubusercontent.com/u/107806928?v=4"
            />
          </div>
        </div>
      </main>
      <section className="grid grid-cols-1 col-span-2 gap-3 md:grid-cols-7 md:gap-10">
        <h2 className="text-5xl font-bold md:col-span-2">
          {translation ? "Sobre mim" : "About me"}
        </h2>
        <>
          {translation ? (
            <>
              <span className="w-100 py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/90">
                Desde a infância, tive uma forte imersão no mundo da tecnologia,
                graças ao meu pai, que trabalhava com manutenção de
                computadores. Essa experiência me permitiu montar e desmontar
                PCs, entender sobre sistemas operacionais e utilizar aplicativos
                como o pacote Office, estabelecendo uma base sólida para minha
                carreira como desenvolvedor.
              </span>
              <span className="w-100 py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Em 2018, concluí um curso no SENAI, com instrutores certificados
                da Cisco, de Instalação e Reparação de Redes de Computadores,
                que aborda disciplinas como Cabeamento Estruturado, Arquitetura
                de Redes, Informática Aplicada, Montagem e Manutenção de Redes
                de Microcomputadores, Projetos de Redes, Sistemas Operacionais,
                Serviços de Redes, Roteamento e Comutação de Dados, entre
                outros.
              </span>
              <span className="py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Atualmente, como desenvolvedor Full Stack formado e possuo
                habilidades abrangentes em uma variedade de tecnologias,
                frameworks e sistemas operacionais, incluindo{" "}
                <strong>React</strong>, <strong>Angular</strong>,
                <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
                <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                <strong>SCSS</strong>, <strong>Bootstrap</strong>,{" "}
                <strong>TypeScript</strong>, <strong>Express.js</strong>,{" "}
                <strong>Nest.js</strong>, <strong>TypeORM</strong>,
                <strong>Prisma</strong>, <strong>PostgreSQL</strong>,{" "}
                <strong>MySQL</strong>, <strong>SQLite</strong>,{" "}
                <strong>Docker</strong>, <strong>Docker Compose</strong>,{" "}
                <strong>Git</strong>, <strong>GitHub</strong>,{" "}
                <strong>Python</strong>, <strong>Django</strong>,
                <strong>Django Rest Framework</strong>, <strong>PHP</strong>,{" "}
                <strong>Windows</strong> e <strong>Linux</strong>.
              </span>
              <span className="py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Meu objetivo agora é concluir minha faculdade e aprimorar ainda
                mais minhas habilidades em desenvolvimento de software.
              </span>
            </>
          ) : (
            <span className="py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/90">
              Hello! My name is{" "}
              <strong className="font-bold">Daniel Neves Fonseca</strong>, and I
              have expertise in{" "}
              <strong className="font-bold">
                {" "}
                JavaScript, TypeScript, Python
              </strong>{" "}
              and advanced front-end technologies such as
              <strong className="font-bold"> Angular e React.js.</strong> I am
              also familiar with back-end frameworks like
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
