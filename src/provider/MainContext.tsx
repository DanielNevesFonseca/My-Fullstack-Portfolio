/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRef, useState } from "react";
import { createContext } from "react";
import { TContactFormValues } from "../schema/ContactFormSchema";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { IMainContext, IMainContextProps } from "../interface";
import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoDjango,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiBootstrap, SiDocker, SiFigma, SiNextdotjs, SiPrisma, SiSwagger } from "react-icons/si";
import {
  SiExpress,
  SiNodedotjs,
  SiNestjs,
  SiJest,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const MainContext = createContext({} as IMainContext);

export const ContextProvider = ({ children }: IMainContextProps) => {
  const NavbarDrawerRef = useRef<HTMLInputElement>(null);
  const NavbarElementRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = !NavbarDrawerRef.current.checked;
  };

  const sendEmail = async (formData: TContactFormValues) => {
    try {
      emailjs.init("BDHk6JZ3_PxfonCVD");
      const params = {
        from_name: formData.name,
        email_id: formData.email,
        message: formData.message,
      };
      const res = await emailjs.send(
        "service_82rvxzf",
        "template_faj9lbk",
        params
      );
      if (res.status === 200) {
        toast.success("Email sent successfully.");
      } else {
        toast.error("There was an error. Try again.");
      }
    } catch (error: any) {
      toast.error("There was an error. Try again.");
    }
  };

  const stacks = [
    {
      name: "HTML",
      Icon: BiLogoHtml5,
    },
    {
      name: "CSS",
      Icon: BiLogoCss3,
    },
    {
      name: "Sass",
      Icon: BiLogoSass,
    },
    {
      name: "Tailwind CSS",
      Icon: BiLogoTailwindCss,
    },
    {
      name: "Python",
      Icon: BiLogoPython,
    },
    {
      name: "Django",
      Icon: BiLogoDjango,
    },
    {
      name: "NestJS",
      Icon: SiNestjs,
    },
    {
      name: "JavaScript",
      Icon: BiLogoJavascript,
    },
    {
      name: "TypeScript",
      Icon: BiLogoTypescript,
    },
    {
      name: "React.js",
      Icon: BiLogoReact,
    },
    {
      name: "Angular",
      Icon: BiLogoAngular,
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      name: "Express.js",
      Icon: SiExpress,
    },
    {
      name: "PostgreSQL",
      Icon: BiLogoPostgresql,
    },
    {
      name: "MongoDB",
      Icon: BiLogoMongodb,
    },
    {
      name: "PrismaORM",
      Icon: SiPrisma,
    },
    {
      name: "Docker",
      Icon: SiDocker,
    },
    {
      name: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      name: "VS Code",
      Icon: TbBrandVscode,
    },
    {
      name: "Swagger",
      Icon: SiSwagger,
    },
    {
      name: "Jest",
      Icon: SiJest,
    },
    {
      name: "Figma",
      Icon: SiFigma,
    },
  ];

  const [translation, setTranslation] = useState<boolean>(true);

  return (
    <>
      <MainContext.Provider
        value={{
          sendEmail,
          NavbarDrawerRef,
          NavbarElementRef,
          toggleDrawer,
          translation,
          setTranslation,
          stacks,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
