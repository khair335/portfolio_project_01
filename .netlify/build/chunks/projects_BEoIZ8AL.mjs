/* empty css                         */
import { a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, g as createAstro, d as renderHead } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
/* empty css                         */
import { a as $$Navbar, $ as $$IconCollection, b as $$Footer } from './Footer_Bv-o8c-t.mjs';
import { $ as $$Image } from './_astro_assets_DDnsZ6mG.mjs';
/* empty css                            */
import { $ as $$AnimatedText } from './AnimatedText_DY7edSIZ.mjs';

const project1 = new Proxy({"src":"/_astro/project1.VtAf7jyR.jpeg","width":1192,"height":794,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/assets/project1.jpeg";
							}
							
							return target[name];
						}
					});

const project2 = new Proxy({"src":"/_astro/project2.vq7L2kCW.jpeg","width":864,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/assets/project2.jpeg";
							}
							
							return target[name];
						}
					});

const jsImg = new Proxy({"src":"/_astro/js.BMJKnIFD.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/assets/js.png";
							}
							
							return target[name];
						}
					});

const reactImg = new Proxy({"src":"/_astro/react.-bADff7i.png","width":40,"height":36,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/assets/react.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { image, title, description, icons, links, projectLength } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative p-1 group max-w-full md:max-w-[46%] ${projectLength > 2 ? "lg:max-w-[400px]" : "lg:max-w-1/2"} w-full `, "class")} data-astro-cid-zn4xi7ej> <span class="absolute top-0 right-0 left-0 bottom-0 group-hover:bg-gradient-to-r from-lime-400 to-blue-700 z-[2] rounded-3xl" data-astro-cid-zn4xi7ej></span> <div class="rounded-3xl bg-black z-[3] opacity-100  relative h-[284px]" data-astro-cid-zn4xi7ej> <div${addAttribute(`relative max-w-full md:max-w-full ${projectLength > 2 ? "lg:max-w-[400px]" : "lg:max-w-1/2"} w-full h-[284px] rounded-3xl relative z-[3] overflow-hidden`, "class")} data-astro-cid-zn4xi7ej> ${renderComponent($$result, "Image", $$Image, { "src": image, "width": 400, "height": 284, "decoding": "async", "loading": "lazy", "alt": "project image", "class": `relative object-cover rounded-3xl max-w-full md:max-w-full ${projectLength > 2 ? "lg:max-w-[400px]" : "lg:max-w-full"} w-full h-[284px]`, "data-astro-cid-zn4xi7ej": true })} <div${addAttribute(`max-w-full md:max-w-full ${projectLength > 2 ? "lg:max-w-[400px]" : "lg:max-w-full"} w-full bottom-0 top-[35%] md:top-[40%] lg:top-[35%] group-hover:top-0 absolute left-0 cursor-pointer right-0 p-6 md:p-3 lg:p-6 hover-transition bg-black/40 rounded-tl-3xl rounded-tr-3xl backdrop-blur-[28px] flex-col justify-start items-start gap-8 inline-flex`, "class")} data-astro-cid-zn4xi7ej> <div class="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-5 flex" data-astro-cid-zn4xi7ej> <div class="self-stretch text-white text-2xl font-semibold font-craftworkGrotesk leading-7" data-astro-cid-zn4xi7ej> ${title} </div> <div class="self-stretch text-white/90 text-lg font-normal font-generalSans leading-[27px] line-clamp-3" data-astro-cid-zn4xi7ej> ${description} </div> </div> <div class="self-stretch justify-between items-center inline-flex" data-astro-cid-zn4xi7ej> <div class="justify-start items-center gap-4 flex" data-astro-cid-zn4xi7ej> ${icons.map((icon, index) => renderTemplate`<a${addAttribute(index, "key")}${addAttribute(icon.link, "href")} class="w-12 h-12 relative bg-neutral-800 rounded-xl flex justify-center items-center"${addAttribute(icon.alt, "aria-label")} data-astro-cid-zn4xi7ej> ${renderComponent($$result, "Image", $$Image, { "src": icon.src, "width": 40, "height": 40, "decoding": "async", "loading": "lazy", "alt": icon.alt, "class": "relative object-cover rounded-xl", "data-astro-cid-zn4xi7ej": true })} </a>`)} </div> <div class="justify-start items-center gap-3 flex" data-astro-cid-zn4xi7ej> ${links.map((link, index) => renderTemplate`<div${addAttribute(index, "key")}${addAttribute(`px-5 py-3 md:px-3 md:py-2 lg:px-5 lg:py-3 ${index === 0 ? "bg-indigo-950" : "bg-blue-800"} rounded-[20px] justify-start items-center gap-2.5 flex`, "class")} data-astro-cid-zn4xi7ej> <a${addAttribute(link.href, "href")} class="text-white/90 text-lg md:text-base lg:text-lg font-light font-generalSans leading-[18px]" data-astro-cid-zn4xi7ej> ${link.label} </a> </div>`)} </div> </div> </div> </div> </div> </div> `;
}, "C:/upwork/matthew-portfolio/src/component/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projectsPerPage = 6;
  const projects = Array.from({ length: 30 }, (_, index) => ({
    image: index % 2 === 0 ? project1 : project2,
    title: `Project Name ${index + 1}`,
    description: "Lorem ipsum dolor sit amet consectetur. Posuere iaculis ultrices elementum eget dictum et urna. Molestie tincidunt sem imperdiet adipiscing nunc ac vestibulum.",
    icons: [
      { src: reactImg, alt: "React icon", link: "#" },
      { src: jsImg, alt: "JS icon", link: "#" }
    ],
    links: [
      { href: "#", label: "GitHub" },
      { href: "#", label: "Demo" }
    ]
  }));
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  JSON.stringify(projects);
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Projects</title><link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">${renderHead()}</head> <body class="bg-stone-950 mx-auto w-full"> <div class="bg-stone-950 px-4 md:px-12 flex justify-center items-center w-full overflow-y-hidden"> <section class="max-w-[673px] lg:max-w-[928px] xxl:max-w-[1344px] w-full mx-auto relative"> <div class="top-bg-section relative z-10"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "AnimatedText", $$AnimatedText, { "text": "projects_", "dataValue": "projects_", "className": "text-white text-[38px] relative z-10 md:text-7xl lg:text-[100px] font-black font-craftworkGrotesk py-10 md:py-20 uppercase leading-[45px] md:leading-[86px] lg:leading-[120px]", "style": "" })} <div id="project-cards" class="flex flex-wrap gap-6 mb-20 relative z-10"> ${projects.slice(0, projectsPerPage).map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "projectLength": projects.length, ...project })}`)} </div> <div class="flex justify-center items-center space-x-4 text-white pb-24"> <button id="prev-page" class="w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group" disabled> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowLeft", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </button> <div class="flex items-center space-x-2"> <div id="current-page">1</div> <div>of</div> <div>${totalPages}</div> </div> <button id="next-page" class="w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group"> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowRight2", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </button> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </section> </div>  </body> </html>`;
}, "C:/upwork/matthew-portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/upwork/matthew-portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
