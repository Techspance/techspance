import React from "react";
import Image from "next/image";
import vline from '../assets/images/home/vline.svg'
import ArticleSection from "./ArticleSection";
import FAQSection from "./FAQSection";

const JournalFaqsSection = () => {
  return (
    <section className=" p-5 md:py-5 md:px-[140px] flex flex-wrap md:justify-between bg-background">
      <ArticleSection />
      <Image width={10} height={550} src={vline} alt="vline" className="hidden md:flex w-auto h-[550px] self-center " />
      <FAQSection />
    </section>
  );
};

export default JournalFaqsSection;
