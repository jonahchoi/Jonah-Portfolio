import React from "react";
import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  collaborators?: string;
  stack: string[];
  image: string;
  liveLink?: string;
  githubLink: string;
}

const ProjectBox = ({
  title,
  description,
  collaborators,
  stack,
  image,
  liveLink,
  githubLink,
}: ProjectProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full xl:px-20 xl:flex-row gap-0 xl:gap-10 p-2">
      <div className="w-[80%] md:w-[70%] xl:w-auto">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Screenshot of project website"
        ></Image>
      </div>
      <div className="w-[75%] xl:w-[50%]">
        <h3 className="text-3xl py-5  ">{title}</h3>
        <p className="pb-5">{description}</p>
        {collaborators && (
          <p className="pb-5">
            Collaborators: <span className="italic">{collaborators}</span>
          </p>
        )}
        <div className="pb-5">
          Stack:{" "}
          {stack.map((tech, i) => (
            <span key={i}>
              {tech}
              {i < stack.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="flex text-2xl gap-5 justify-end">
          {liveLink && (
            <a
              title="Live Link"
              href={liveLink}
              target="_blank"
              className="cursor-pointer p-2 hover:text-primary-color"
            >
              <CgWebsite />
            </a>
          )}
          <a
            title="Github"
            href={githubLink}
            target="_blank"
            className="cursor-pointer p-2 hover:text-primary-color"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
