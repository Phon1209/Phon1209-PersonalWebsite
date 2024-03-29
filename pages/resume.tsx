import React, { useState, FC } from "react";
import Link from "next/link";
import { MdCheck, MdViewSidebar, MdChevronLeft } from "react-icons/md";
import { motion } from "framer-motion";

const languageList = ["English", "Thai"];
const contactList = ["US", "Thailand"];

const Resume: FC = () => {
  const [languageState, setLanguageState] = useState<string>(languageList[0]);
  const [contactState, setContactState] = useState<string>(contactList[0]);

  const changeLang: (lang: string) => void = (lang) => {
    setLanguageState(lang);
  };

  const changeContact: (contact: string) => void = (contact) => {
    setContactState(contact);
  };

  const resumePath = `/docs/${languageState}/${contactState}/resume.pdf`;

  return (
    <div className="grow flex flex-col-reverse md:flex-row gap-20 px-10 py-12 fullpage-item">
      <iframe className="md:w-[60%] h-full" src={resumePath} />
      <div className="flex flex-col h-full">
        <header className="flex flex-col items-center md:items-start gap-4 text-code mb-10">
          <h2 className="text-display-sm">Résumé</h2>
          <Link href="/">
            <div className="cursor-pointer text-xl text-teal-200 flex gap-4 items-center self-start">
              <MdChevronLeft className="w-6 h-6" />
              Back to Main
            </div>
          </Link>
        </header>
        <div className="flex flex-row md:flex-col gap-8 flex-wrap items-end md:items-start">
          <div className="grid grid-flow-row gap-3">
            <h4 className="text-title-md text-white">Language</h4>
            <div className="flex gap-7">
              {languageList.map((lang) => {
                const checked = lang === languageState;
                return (
                  <motion.div
                    layout
                    key={lang}
                    className={`cursor-pointer py-2 px-4 border-2 border-teal-200 flex gap-3 text-button-lg font-bold rounded-xl text-white items-center ${
                      checked ? "bg-teal-800" : "bg-transparent"
                    }`}
                    onClick={() => changeLang(lang)}
                  >
                    {checked && <MdCheck className="w-6 h-6" />}
                    <motion.p layout="position">{lang}</motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-flow-row gap-3">
            <h4 className="text-title-md text-white">Contact</h4>
            <div className="flex gap-7">
              {contactList.map((contact) => {
                const checked = contact === contactState;
                return (
                  <motion.div
                    layout
                    key={contact}
                    className={`cursor-pointer py-2 px-4 border-2 border-teal-200 flex gap-3 text-button-lg font-bold rounded-xl text-white items-center ${
                      checked ? "bg-teal-800" : "bg-transparent"
                    }`}
                    onClick={() => changeContact(contact)}
                  >
                    {checked && <MdCheck className="w-6 h-6" />}
                    <motion.p layout="position">{contact}</motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div
            onClick={() => {
              window.open(resumePath);
            }}
            className="button button--icon"
          >
            <MdViewSidebar />
            View PDF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
