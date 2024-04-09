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
                    ? "https://docs.google.com/document/d/18yx8KMT-hYSBDH54grwHUJYVq-aFMVUL/edit?usp=sharing&ouid=115579138979714586407&rtpof=true&sd=true"
                    : "https://drive.google.com/file/d/1zH4lfPb0-1Fb5Hgl_rY_0T5ghMZyqiG3/view?usp=sharing"
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
                Desenvolvedor Full Stack dedicado e apaixonado, com foco
                contínuo no aprimoramento das habilidades desde março de 2023.
                Proficiente em uma ampla gama de tecnologias e frameworks,
                capacitado para projetar e implementar soluções inovadoras e
                eficientes.
              </span>
              <span className="w-100 py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Experiência sólida em desenvolvimento <strong>frontend</strong>,
                utilizando ferramentas como Figma para prototipagem e{" "}
                <strong>React</strong>, <strong>Angular</strong> e
                <strong>Next.js</strong> para construção de interfaces
                dinâmicas, combinado com um profundo conhecimento em{" "}
                <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                <strong>SCSS</strong> e<strong>Bootstrap</strong> para garantir
                uma experiência de usuário aprimorada. Além disso, expertise em
                desenvolvimento mobile com <strong>React Native</strong>,
                proporcionando experiências nativas em dispositivos móveis.
              </span>
              <span className="py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                No desenvolvimento <strong>backend</strong>, experiência com{" "}
                <strong>Node.js</strong>, <strong>Nest.js</strong>,
                <strong>Express.js</strong>, <strong>TypeScript</strong>, e
                bancos de dados SQL (<strong>PostgreSQL</strong>,
                <strong>MySQL</strong>, <strong>SQLite</strong>), garantindo a
                robustez e eficiência dos sistemas.
              </span>
              <span className="py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Possuo experiência prática em metodologias ágeis, especialmente
                Kanban, garantindo a entrega oportuna e eficaz de projetos.
                Familiarizado com boas práticas de código e arquiteturas de
                projetos tanto <strong>frontend</strong> quanto{" "}
                <strong>backend</strong>, assegurando a escalabilidade e
                manutenção do código. Conhecimento em <strong>Docker</strong>
                para facilitar a implantação e distribuição de aplicativos, além
                de habilidades sólidas em controle de versão utilizando{" "}
                <strong>Git</strong> e<strong>GitHub</strong>.
              </span>
              <span className="py-4 font-thin leading-7 tracking-wide md:col-span-7 md:py-0 text-white/90">
                Além disso, experiência em <strong>Linux</strong> (Debian) e{" "}
                <strong>Windows</strong>, adaptável a diferentes ambientes de
                desenvolvimento.
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
