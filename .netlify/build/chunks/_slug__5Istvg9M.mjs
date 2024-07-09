/* empty css                         */
import { a as createComponent, b as renderTemplate, d as renderHead, e as renderComponent, f as addAttribute, g as createAstro } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
import { g as getCollection, a as getEntryBySlug } from './_astro_content_Fx88fYso.mjs';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_DDnsZ6mG.mjs';
import { a as $$Navbar, b as $$Footer } from './Footer_Bv-o8c-t.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getEntryBySlug("blog", slug);
  const post = posts;
  const { Content } = await post.render();
  const { title, pubDate, views, pubTime, authorImg, readTime, author, image } = post.data;
  const formatViewCount = (view) => {
    if (views >= 1e3) {
      return `${(views / 1e3).toFixed(1)}K`;
    }
    return views;
  };
  const formatPostTime = (time) => {
    if (pubTime >= 60) {
      const hours = (pubTime / 60).toFixed(2);
      return `${hours} h`;
    }
    return `${pubTime} min`;
  };
  return renderTemplate`<html> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body class="mx-auto bg-stone-950 w-full"> <div class="bg-stone-950 px-4 md:px-12 flex justify-center items-center w-full "> <section class="max-w-[673px] lg:max-w-[928px] xxl:max-w-[1344px] w-full mx-auto relative"> <div class="top-bg-section pb-12 relative z-10"> <!-- Navbar Component --> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Banner Section --> <div${addAttribute({ backgroundImage: `url(${image.src.src})` }, "style")} class="blogBanner bg-no-repeat bg-cover py-10 md:py-20 my-10 rounded-lg relative z-10 flex justify-center items-center"> <div class="max-w-[1000px] w-full px-10"> <p class="font-craftworkGrotesk text-white text-lg lg:text-3xl font-bold pb-5">Article</p> <h1 id="blog-title" class="text-white text-3xl lg:text-7xl font-generalSans text-left font-medium">${title}</h1> <div class="flex mt-10 items-center gap-3"> <div> ${renderComponent($$result, "Image", $$Image, { "src": authorImg.src, "alt": authorImg.alt, "width": 34, "height": 34, "class": "max-w-9 w-full h-9 rounded-full border-2 border-white" })} </div> <div> <a class="font-plusJakartaSans text-white text-lg hover:underline" href="">${author}</a> <div class="flex gap-2 text-xs text-white font-plusJakartaSans"> <p> ${new Date(pubDate).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p> <p><span class="pr-2">-</span> ${formatPostTime()} read</p> <p><span class="pr-2">-</span> ${formatViewCount()} view</p> </div> </div> </div> </div> </div> <!-- Main Content Grid --> <div class="grid grid-cols-12 relative z-10 px-4"> <!-- Markdown Content --> <div class="col-span-12 md:col-span-9 pr-0 md:pr-10 mb-20"> <div class="markdown-container"> <!-- <slot /> --> ${renderComponent($$result, "Content", Content, {})} </div> </div> <!-- Sidebar Navigation --> <div class="col-span-3 sidebar mt-6 w-full sticky top-[50px] hidden md:block h-max"> <nav class="flex flex-col"> <!-- Dynamically Generated Links --> </nav> </div> </div> <!-- Footer Component --> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </section> </div> <!-- JavaScript for Navigation and Copy Buttons -->  </body> </html>`;
}, "C:/upwork/matthew-portfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/upwork/matthew-portfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
