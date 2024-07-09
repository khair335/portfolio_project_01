/* empty css                         */
import { a as createComponent, b as renderTemplate, d as renderHead, e as renderComponent, m as maybeRenderHead, f as addAttribute, g as createAstro } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$IconCollection, a as $$Navbar, b as $$Footer } from './Footer_Bv-o8c-t.mjs';
import { $ as $$AnimatedText } from './AnimatedText_DY7edSIZ.mjs';
/* empty css                         */

const $$SummarySection = createComponent(($$result, $$props, $$slots) => {
  const skillCategories = [
    {
      category: "Digital Forensics",
      skills: [
        "Digital Forensics",
        "Cloud Forensics",
        "Threat Hunting",
        "Enterprise IR",
        "Communication"
      ]
    },
    {
      category: "Programming & Development",
      skills: [
        "HTML/CSS/Javascript",
        "AWS",
        "Python/C++/Jupyter",
        "Reverse Engineering",
        "Networking"
      ]
    },
    {
      category: "Systems & Networks",
      skills: ["Bash/Batch", "Linux", "Windows AD", "VSphere/ESXI", "Docker"]
    },
    {
      category: "DevSecOps",
      skills: ["DevSecOps", "Cyber Tool Dev", "Azure", "Git", "CI/CD Pipelines"]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Timeline Explorer",
        "Volatility",
        "KAPE",
        "Elastic/ELK (SIEM)",
        "Endgame/Aurora (EDR)"
      ]
    }
  ];
  return renderTemplate`<head>${renderHead()}</head> <div data-astro-cid-2zzhuavb> ${renderComponent($$result, "AnimatedText", $$AnimatedText, { "text": "Summary_", "dataValue": "Summary_", "className": "text-white text-[38px] md:text-7xl lg:text-[100px] font-black font-craftworkGrotesk py-10 md:py-20 uppercase leading-[45px] md:leading-[120px]", "style": "", "data-astro-cid-2zzhuavb": true })} <div class="flex flex-col md:flex-row gap-4" data-astro-cid-2zzhuavb> <div class="max-w-[800px] w-full px-8 py-9 bg-white/5 rounded-3xl backdrop-blur-[44px] flex-col justify-start items-start gap-8 inline-flex" data-astro-cid-2zzhuavb> <div class="self-stretch text-white/90 text-lg font-medium font-generalSans leading-7" data-astro-cid-2zzhuavb>
Highly experienced Digital Forensics and Incident Response (DFIR) with 8 years of programming, tool development experience, within various cybersecurity domains, with a particular focus against Advanced Persistent Threats (APTs).
</div> <div class="self-stretch text-white/90 text-lg font-medium font-generalSans leading-7" data-astro-cid-2zzhuavb>
Skilled at performing forensics for large scale intrusions, incident response, detection engineering, cloud forensics, tool development, malware triage and reverse engineering.
</div> <div class="self-stretch text-white/90 text-lg font-medium font-generalSans leading-7" data-astro-cid-2zzhuavb>
Strong, proven critical thinking leader who challenges root problems and others with innovative and future driven solutions. Bringing forth prior experience and knowledge from working in the Intelligence Community (IC) married with experience from enterprise engagements.
</div> </div> <div class="flex flex-col gap-6 max-w-[580px] w-full flex-1" data-astro-cid-2zzhuavb> <div class="w-full h-auto p-8 bg-sky-600/5 rounded-3xl flex-col justify-center items-start gap-5 inline-flex" data-astro-cid-2zzhuavb> <div class="self-stretch text-blue-800 text-2xl font-bold font-craftworkGrotesk leading-7" data-astro-cid-2zzhuavb>
Certifications
</div> <ul class="self-stretch text-white/90 text-lg font-medium list-disc pl-6 font-generalSans leading-7" data-astro-cid-2zzhuavb> <li class="" data-astro-cid-2zzhuavb>CISSP</li> <li class="" data-astro-cid-2zzhuavb>GCFA, GCED, GCIH</li> <li class="" data-astro-cid-2zzhuavb>COMPTIA Security+</li> </ul> </div> <div class="w-full h-auto p-8 bg-sky-600/5 rounded-3xl flex-col justify-center items-start gap-5 inline-flex" data-astro-cid-2zzhuavb> <div class="self-stretch text-blue-800 text-2xl font-bold font-craftworkGrotesk leading-7" data-astro-cid-2zzhuavb>
Certifications
</div> <ul class="self-stretch text-white/90 text-lg font-medium list-disc pl-6 font-generalSans leading-7" data-astro-cid-2zzhuavb> <li class="" data-astro-cid-2zzhuavb>CISSP</li> <li class="" data-astro-cid-2zzhuavb>GCFA, GCED, GCIH</li> <li class="" data-astro-cid-2zzhuavb>COMPTIA Security+</li> </ul> </div> </div> </div> <div class="" data-astro-cid-2zzhuavb> <div class="hidden lg:flex gap-5 mt-6 mb-10" data-astro-cid-2zzhuavb> ${skillCategories.map((category) => renderTemplate`<div class="max-w-[252px] w-full px-6 flex-1 py-10 bg-white/5 rounded-xl border border-white/10 flex-col justify-center items-center gap-8 inline-flex" data-astro-cid-2zzhuavb> ${category.skills.map((skill) => renderTemplate`<div style="word-break: break-all;" class="self-stretch text-center break-words text-white/90 text-lg font-normal font-generalSans leading-[18px]" data-astro-cid-2zzhuavb> ${skill} </div>`)} </div>`)} </div> <div class="slider-container summary-slider block lg:hidden mt-6 mb-10" data-astro-cid-2zzhuavb> <div class="slider-skill" data-astro-cid-2zzhuavb> ${skillCategories.map((category, index) => renderTemplate`<div class="slick-slide" data-astro-cid-2zzhuavb> <div class=" w-full h-full px-6 flex-1 py-10 bg-white/5 rounded-xl border border-white/10 flex-col justify-center items-center gap-8 inline-flex" data-astro-cid-2zzhuavb> ${category.skills.map((skill) => renderTemplate`<div style="word-break: break-all;" class="self-stretch text-center break-words text-white/90 text-lg font-normal font-generalSans leading-[18px]" data-astro-cid-2zzhuavb> ${skill} </div>`)} </div> </div>`)} </div> <input type="range" class="my-10" id="slideRange" min="0" max="4" value="0" data-astro-cid-2zzhuavb> </div> <a href="/projects" class="w-full mb-40 h-24 pl-8 pr-4 py-4 bg-blue-800 rounded-3xl backdrop-blur-[44px] justify-start items-center gap-5 inline-flex" data-astro-cid-2zzhuavb> <div class="grow shrink basis-0 text-white/90 text-[28px] font-bold font-craftworkGrotesk leading-7" data-astro-cid-2zzhuavb>
Checkout my projects
</div> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowRight3", "className": "w-16 h-16", "data-astro-cid-2zzhuavb": true })} </a> </div>  </div>`;
}, "C:/upwork/matthew-portfolio/src/component/SummarySection.astro", void 0);

const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      date: "12/2024 - Current",
      title: "Forensics Escalation Engineer - Varonis Systems",
      description: "Forensics and incident commander for escalated cases, involving a wide range of malicious threats. Provided live incident triage with customers, forensics analysis, recommendations and remediation advice based on analysis. Developed the below projects for work between cases over many months, as the lead architect and primary developer.",
      projects: [
        "Extensible wizard allowing the team to fully customize what artefacts we want to collect, including 3rd party binaries;",
        "Designed and engineered a complete pipeline for converting raw forensics artefacts and ingesting it to SIEMs."
      ]
    },
    {
      date: "12/2021 - 11/2023",
      title: "Senior Cyber Threat Hunter - USCYBERCOM/USAF",
      description: "Forensics and incident commander for escalated cases, involving a wide range of malicious threats. Provided live incident triage with customers, forensics analysis, recommendations and remediation advice based on analysis. Developed the below projects for work between cases over many months, as the lead architect and primary developer.",
      projects: [
        "Extensible wizard allowing the team to fully customize what artefacts we want to collect, including 3rd party binaries;",
        "Designed and engineered a complete pipeline for converting raw forensics artefacts and ingesting it to SIEMs."
      ]
    },
    {
      date: "06/2020 - 12/2021",
      title: "Cyber Threat Hunter - USCYBERCOM/USAF",
      description: "Forensics and incident commander for escalated cases, involving a wide range of malicious threats. Provided live incident triage with customers, forensics analysis, recommendations and remediation advice based on analysis. Developed the below projects for work between cases over many months, as the lead architect and primary developer.",
      projects: [
        "Extensible wizard allowing the team to fully customize what artefacts we want to collect, including 3rd party binaries;",
        "Designed and engineered a complete pipeline for converting raw forensics artefacts and ingesting it to SIEMs."
      ]
    },
    {
      date: "09/2016 - 05/2020",
      title: "Senior Data Link & Threat Intelligence Analyst",
      description: "Forensics and incident commander for escalated cases, involving a wide range of malicious threats. Provided live incident triage with customers, forensics analysis, recommendations and remediation advice based on analysis. Developed the below projects for work between cases over many months, as the lead architect and primary developer.",
      projects: [
        "Extensible wizard allowing the team to fully customize what artefacts we want to collect, including 3rd party binaries;",
        "Designed and engineered a complete pipeline for converting raw forensics artefacts and ingesting it to SIEMs."
      ]
    }
    // Add more items as needed
  ];
  return renderTemplate`${maybeRenderHead()}<div class="pb-20"> ${renderComponent($$result, "AnimatedText", $$AnimatedText, { "text": "Experience_", "dataValue": "Experience_", "className": "text-white  text-[38px] md:text-7xl   lg:text-[100px] font-black font-craftworkGrotesk py-20 uppercase leading-[120px]", "style": "" })} <div class="space-y-4"> ${faqItems.map((item, index) => renderTemplate`<details${addAttribute(` rounded-3xl p-6 md:p-8 group bg-white/5`, "class")}> <summary class="flex justify-between items-start md:items-center cursor-pointer"> <div> <p class="text-blue-500 text-lg md:text-xl font-normal font-generalSans pb-2"> ${item.date} </p> <p class="text-white text-xl md:text-2xl font-medium font-generalSans pb-6"> ${item.title} </p> </div> <svg class="min-w-6 min-h-6 text-white group-open:-rotate-90 transform transition-transform" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26 6L26 26M26 26H6M26 26L6 6" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </summary> ${item.description && renderTemplate`<div class="mt-4 text-white text-sm"> <p class="text-white/90 text-base md:text-lg font-normal font-generalSans leading-[27px] pb-8"> ${item.description} </p> ${item.projects.length > 0 && renderTemplate`<div class="mt-2"> <h4 class="text-white text-base md:text-lg font-medium font-generalSans pb-4 leading-[25.20px]">
Projects:
</h4> <ul class="list-disc list-inside text-white/90 text-base md:text-lg font-normal font-generalSans leading-[27px]"> ${item.projects.map((project) => renderTemplate`<li>${project}</li>`)} </ul> </div>`} </div>`} </details>`)} </div> </div> `;
}, "C:/upwork/matthew-portfolio/src/component/ExperienceSection.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Blog</title><link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">${renderHead()}</head> <body class="bg-stone-950  mx-auto w-full "> <div class="px-4 md:px-12 flex justify-center items-center w-full overflow-y-hidden"> <section class="max-w-[900px] lg:max-w-[928px] xxl:max-w-[1344px] w-full mx-auto relative"> <div class="top-bg-section relative pb-12"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "SummarySection", $$SummarySection, {})} ${renderComponent($$result, "ExperienceSection", $$ExperienceSection, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </section> </div> </body></html>`;
}, "C:/upwork/matthew-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/upwork/matthew-portfolio/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
