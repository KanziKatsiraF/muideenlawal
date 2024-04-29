import Link from "next/link";
import Image from "next/image";
import { projects } from "../app/json/mainpage";
import Template from "./template";
export default function Home() {
  return (
    <>
      <Template>
        <Hero />
      </Template>
      <Template>
        <About />
      </Template>
      <Template>
        <Experience />
      </Template>
      <Template>
        <Education />
      </Template>
      <Template>
        <Project />
      </Template>
      {/* <Certification /> */}
      <Template>
        <Footer />
      </Template>
    </>
  );
}

function Hero() {
  return (
    <section
      className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(106,207,214,0.16)_0%,rgba(106,207,214,0)_100%)] px-6 py-16 text-[#171618]"
      id="home"
    >
      <div className="mx-auto max-w-3xl">
        <div className="content-center">
          <div className="item space-y-20">
            <div className="text-center">
              <h1 className="text-3xl">Kanzi Katsira Firdausi</h1>
              <p className="mt-3">
                {" "}
                Bina Nusantara Fresh Graduate Majoring in Computer Scince | Ex
                Frontend in Telkom Indonesia
              </p>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="px-6 mt-5 text-[#171618]" id="experience">
      <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0 max-w-3xl mx-auto">
        <h2 className="max-w-3xl text-xl font-medium mx-4">Work Experience</h2>
      </div>
      <div className="container mx-4 max-w-4xl mx-auto justify-center items-center h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-5 py-4">
              <h3 className="font-bold text-gray-800 text-xl">
                Frontend web developer
              </h3>
              <h3 className="font-bold text-white text-md">
                Telkom Indonesia - Internship
              </h3>
              <h3 className="mb-3 font-bold text-white text-[12px] mt[-10px]">
                Mar 2023 - Feb 2024
              </h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                - Develop CMS (Content Management System) Dashboard using
                AlpineJS and NextJS <br />
                <br />- Hands on experience with various third party libraries
                in front end world such as formik for forms, axios for API
                Interaction , and apexcharts for Charts creation - GIT and Jira
                for coordination between team
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="font-bold text-gray-800 text-xl">Owner</h3>
              <h3 className="font-bold text-white text-[11px] md:text-[14px] mt[-10px]">
                BekasiLaptop ( linktr.ee/BekasiLaptop)
              </h3>
              <h3 className="mb-3 font-bold text-white text-[12px] mt[-10px] ">
                June 2020 - now
              </h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Substitute of my organizational experience. I Learned how to
                communicate with client, dealing with complaints, time
                managament, and made sure that clients are satisfied with my
                service and laptops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="px-6 mt-5 text-[#171618]" id="education">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Education</h2>
          </div>
          <ol className="items-center sm:flex">
            {educations.map((education, index) => (
              <li key={index} className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className=" py-4 px-4 z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full dark:bg-blue-900 shadow-lg dark:ring-gray-900 shrink-0">
                    <p className="text-[8px] text-white">{education.year}</p>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-black">
                    {education.name}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {education.description}
                  </time>
                  <p className="text-base font-normal">
                    {education.additional}
                  </p>
                  <div className="flex justify-center rounded-lg bg-gray-50 border border-solid max-w-56 border-[rgb(232,236,241)] px-1 py-1 text-xs text-gray-600 hover:bg-gray-100 mt-3">
                    <p className="text-center ">{education.tag}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="about">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">
              Abo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">
                ut Me
              </span>
            </h2>
          </div>
          <div className="text-md">
            <p className="pt-3 text-zinc-600">
              Fresh graduate from Bina Nusantara University majoring in Computer
              Science, I bring hands-on experience from a one-year internship at
              Telkom Indonesia, where I worked as a Front-End Web Developer
              utilizing technologies like Next.js. Furthermore, my thesis
              project was implemented with Laravel and MySQL as database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const educations = [
  {
    name: "SMA JAKARTA ISLAMIC SCHOOL",
    description: "Natural Science",
    additional: "-",
    tag: "2017-2020",
    year: "2017",
  },
  {
    name: "UNIVERSITAS BINA NUSANTARA",
    description: "Bachelor's Degree - Majoring in Computer Science",
    additional: "Grade: 3,67",
    tag: "Sep 2020 - July 2024",
    year: "2020",
  },
];

const certifications = [
  {
    name: "TOEFL ITP",
    description: "TOEFL ITP with score 533 out of 677",
    tag: "Feb 2024",
  },
  {
    name: "HCIAI Huawei Ai For Junior Developer (FGA Kominfo Training)",
    description: "TOEFL ITP with score 533 out of 677",
    tag: "July 2024",
  },
];

function Project() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="project">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">
              Proj
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">
                ects
              </span>
            </h2>
          </div>
          <section className="mt-5 text-[#171618]" id="education">
            <div className="mx-auto grid grid-cols-12 max-w-4xl gap-3  ">
              {/* Loop through content for the first column */}
              {projects.map((project, index) => (
                <div key={index} className="col-span-4 gap-5 mx-3 mt-5">
                  <Image
                    src={project.images[0]}
                    width={500}
                    height={500}
                    alt="Not Available"
                  />
                  <div className="flex flex-col md:flex-row md:gap-4 gap-3 mb-3 md:mb-0 mt-5">
                    <div>
                      <p className="flex text-sm font-medium leading-6 text-[#171618]">
                        {project.name}
                      </p>
                    </div>
                    <div>
                      <p className="flex-row rounded-lg bg-gray-50 border border-solid border-[rgb(232,236,241)] px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
                        {project.tag}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* <div className="flex items-center justify-center mt-8">
            <Link
              className="flex justify-center items-center align-middle bg-[#171618] text-white text-sm rounded-lg gap-1.5 px-4 py-2"
              href="https://github.com/mdauthentic"
              title="link to project in github repo"
            >
              <span>See all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function Certification() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="project">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">
              Certifi
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">
                cation
              </span>
            </h2>
          </div>
          <section className="mt-5 text-[#171618]" id="education">
            <div className="mx-auto grid grid-cols-12 max-w-3xl px-6 gap-3  ">
              {/* Loop through content for the first column */}
              {projects.map((project, index) => (
                <div key={index} className="col-span-4 gap-5 mx-3 mt-5">
                  <Image
                    src="/img/profile-left.png"
                    width={400}
                    height={300}
                    alt="Not Available"
                  />
                  <div className="flex flex-row gap-4 mt-5">
                    <div>
                      <p className="flex text-sm font-medium leading-6 text-[#171618]">
                        {project.name}
                      </p>
                    </div>
                    <div>
                      <p className="flex rounded-lg bg-gray-50 border border-solid border-[rgb(232,236,241)] px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
                        {project.tag}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* <div className="flex items-center justify-center mt-8">
            <Link
              className="flex justify-center items-center align-middle bg-[#171618] text-white text-sm rounded-lg gap-1.5 px-4 py-2"
              href="https://github.com/mdauthentic"
              title="link to project in github repo"
            >
              <span>See all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-lg">
        <div className="grid gap-12 mx-4 text-center">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-lg text-gray-500">
              "Sacrifices must be made to achieve desirable result."
            </span>
          </div>
          <div className="flex flex-row gap-2 justify-center text-sm">
            <span>Kanzi Katsira Firdausi - {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social() {
  return (
    <div className="flex gap-4 pt-6 justify-center items-center">
      <Link
        className="inline-flex rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline"
        href="https://github.com/KanziKatsiraF"
        title="Github link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </Link>
      <Link
        className="inline-flex rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline"
        href="https://www.linkedin.com/in/kanzi-katsira-firdausi-bb794816b/"
        title="Linkedin page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
        </svg>
      </Link>
      <Link
        className="inline-flex rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline"
        href="mailto:kanzifirdausi@outlook.com"
        title="Email address"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </Link>
      <Link
        className="inline-flex rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline"
        href="wa.me/+6287788200694"
        title="Phone number"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </Link>
    </div>
  );
}
