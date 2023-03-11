import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import aboutData from "../public/json/about.json";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item fullpage-item--scrollable scrollbar-hide px-4 md:px-12 py-8 md:py-16 flex flex-col gap-12">
        <Link href="/">
          <header className="flex items-center md:mb-4 cursor-pointer self-start">
            <MdChevronLeft className="w-8 h-8" />
            <h2 className="text-title-lg md:text-display-sm text-code">
              About
            </h2>
          </header>
        </Link>
        <article className="flex p-6 px-8 flex-col-reverse gap-8 md:gap-12 md:flex-row md:px-20">
          <div className="flex flex-col flex-1 self-center">
            <header className="hidden md:block !font-semibold text-display-sm text-code mb-4">
              Me?
            </header>
            <summary className="list-none text-title-lg tracking-wide">
              {aboutData.intro}
            </summary>
          </div>
          <div className="lg:mx-20 xl:grow xl:mx-0 flex gap-12 justify-evenly items-center scale-[0.8] md:scale-100">
            <Image
              objectFit="contain"
              width={200}
              height={200}
              src={`/imgs/bubble_profile.png`}
            />
            <header className="md:hidden !font-semibold text-display-sm text-code">
              Me?
            </header>
          </div>
        </article>
        <article className="flex flex-col gap-16 p-6 px-8">
          <header className="ml-6 md:ml-24">{aboutData.goal_transition}</header>
          <summary className="list-none text-right self-end w-full sm:w-2/3">
            {aboutData.goal}
          </summary>
        </article>
        <article className="p-6 px-8">{aboutData.why}</article>
        <article className="p-6 px-8">{aboutData.hobby}</article>
      </section>
    </>
  );
};

export default About;