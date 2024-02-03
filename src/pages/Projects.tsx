import { useState, useEffect, useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";
import { MainContext } from "../provider/MainContext";

export const Projects = () => {
  const { translation } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
      <PageTitle title={translation ? "Projetos" : "Projects"} />
      <main>
        <div className="flex flex-col gap-20">
          <ProjectCard
            imgSource="https://i.ibb.co/31629pW/mockup-Web-Contacts.png"
            title="WebContacts"
            description={
              translation
                ? "WebContacts é uma plataforma fullstack para os usuários criarem sua agenda de contatos de forma simples."
                : "WebContacts is a full-stack platform for users to create their contact agenda in a simple way."
            }
            reverse={false}
            technologies={[
              "TypeScript",
              "React.js",
              "Docker",
              "NestJS",
              "Sass",
              "Figma",
              "PostgreSQL",
            ]}
            features={
              translation
                ? [
                    "API REST, CRUD",
                    "Validação dinâmica de formulários com Zod",
                    "Design responsivo em todas as resoluções",
                  ]
                : [
                    "REST API, CRUD",
                    "Dynamic form validation",
                    "Responsive design in all resolutions",
                  ]
            }
            liveDemo=""
            repo="https://linktr.ee/danielfonsecadeveloper"
          />
          <ProjectCard
            imgSource="https://i.ibb.co/1zL7pDP/Mockup-Global-News.png"
            title="Global News"
            description={
              translation
                ? "Global News é uma plataforma de notícias em formato de rede social, onde você mesmo pode contribuir com as notícias do portal."
                : "Global News is a social media-style news platform where users can contribute to the portal's news content themselves."
            }
            reverse
            technologies={[
              "JavaScript",
              "React",
              "Sass",
              "Json-web-server",
              "Other Libraries: React Hook Form, ZOD, Toastify, React Icons, Axios",
            ]}
            features={
              translation
                ? [
                    "API REST Fake, CRUD",
                    "Proteção de rotas, autenticação automática",
                    "Validação dinâmica de formulários",
                    "Design responsivo em todas as resoluções",
                    "Sistema de likes com validação",
                  ]
                : [
                    "Fake REST API, CRUD",
                    "Route protection, automatic authentication,",
                    "Dynamic form validation",
                    "Responsive design across all resolutions",
                    "Like system with validation",
                  ]
            }
            liveDemo="https://global-news-arfzkekh9-danielnevesfonseca.vercel.app/"
            repo="https://github.com/DanielNevesFonseca/React__GlobalNews"
          />
          <ProjectCard
            imgSource="https://i.ibb.co/RQq9rgP/mockup-Dev-Hub.png"
            reverse={false}
            title="Dev Hub"
            description={
              translation
                ? "O Dev Hub é uma aplicação web onde desenvolvedores podem registar-se e cadastrar as tecnologias que dominam e buscar por outros desenvolvedores cadastrados."
                : "The Dev Hub is a web application where developers can register, list the technologies the master, and search for other registered developers."
              }

            technologies={[
              "React.js",
              "JavaScript",
              "Sass",
              "Figma",
              "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
            ]}
            features={
              translation
                ? [
                    "API REST, CRUD",
                    "Proteção de rotas",
                    "Validação dinâmica de formulários",
                    "Design responsivo em todas as resoluções",
                  ]
                : [
                    "REST API, CRUD",
                    "Route protection",
                    "Dynamic form validation",
                    "Responsive design in all resolutions",
                  ]
            }
            liveDemo="https://kenzie-hub-rho-tawny.vercel.app"
            repo="https://github.com/DanielNevesFonseca/React__DevHub"
          />
          
        </div>
      </main>
    </div>
  );
};
