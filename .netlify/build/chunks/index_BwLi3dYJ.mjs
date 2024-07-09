/* empty css                         */
import { a as createComponent, b as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as createAstro, d as renderHead } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_Fx88fYso.mjs';
import { $ as $$IconCollection, a as $$Navbar, b as $$Footer } from './Footer_Bv-o8c-t.mjs';
import { $ as $$AnimatedText } from './AnimatedText_DY7edSIZ.mjs';

const $$Astro$2 = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, description, views, pubTime, href } = Astro2.props;
  const formatViewCount = (views2) => {
    if (views2 >= 1e3) {
      return `${(views2 / 1e3).toFixed(1)}K`;
    }
    return views2;
  };
  const formatPostTime = (pubTime2) => {
    if (pubTime2 >= 60) {
      const hours = (pubTime2 / 60).toFixed(2);
      return `${hours} h`;
    }
    return `${pubTime2} min`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-full md:max-w-[48%] lg:max-w-[420px] w-full  rounded-3xl group overflow-hidden"> <div class="relative p-1 group cursor-pointer max-w-full md:max-w-[320px] lg:max-w-[420px] w-full"> <span class="absolute top-0 right-0 left-0 bottom-0 group-hover:bg-gradient-to-r from-lime-400 to-blue-700 z-[2] rounded-3xl"></span> <div class="rounded-3xl bg-black z-[3] opacity-100 relative"> <div class="w-full relative z-[3] px-6 md:px-5 lg:px-8 py-6 md:py-9 bg-white/5 rounded-3xl backdrop-blur-[44px] group-hover:backdrop-blur-0 group flex-col justify-start items-start gap-7 inline-flex group transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg"> <div class="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-5 flex"> <div class="self-stretch text-white text-2xl font-semibold font-craftworkGrotesk leading-7"> ${title} </div> <div class="self-stretch text-white/90 text-lg font-normal font-generalSans leading-[27px] line-clamp-3"> ${description} </div> </div> <div class="self-stretch justify-between items-center inline-flex"> <div class="justify-start items-start md:items-center gap-2 md:gap-2   flex flex-col md:flex-row"> <div class="flex items-center gap-2"> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "eyeIcon", "className": "h-6 w-6" })} <div class="text-white text-lg md:text-base lg:text-lg font-medium font-generalSans leading-[27px]"> ${formatViewCount(views)} </div> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "clockIcon", "className": "h-6 w-6" })} <div class="text-white text-lg md:text-base lg:text-lg font-medium font-generalSans leading-[27px]"> ${formatPostTime(pubTime)} </div> </div> </div> <div class="justify-start items-center gap-3 flex"> <div class="px-3 md:px-3 lg:px-5 py-3 bg-indigo-950 group-hover:bg-blue-800 rounded-[20px] justify-start items-center gap-2.5 flex"> <a${addAttribute(href, "href")} class="text-white/90 text-lg md:text-xs lg:text-lg font-light font-generalSans leading-[18px]">
Read full article
</a> </div> </div> </div> </div> </div> </div> </div>`;
}, "C:/upwork/matthew-portfolio/src/component/BlogCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, numberOfPosts, postsPerPage, totalPages } = Astro2.props;
  console.log("page", page);
  const hasPreviousPosts = page > 1;
  const hasNextPosts = numberOfPosts > page * postsPerPage;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center space-x-4 text-white pb-24"> <button id="prev-page" class="w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group" disabled> ${hasPreviousPosts ? renderTemplate`<a${addAttribute(`?page=${page - 1}`, "href")}> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowLeft", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </a>` : renderTemplate`<a${addAttribute(`?page=${page}`, "href")}> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowLeft", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </a>`} </button> <div class="flex items-center space-x-2"> <div id="current-page">${page}</div> <div>of</div> <div id="total-pages">${totalPages}</div> </div> <button id="next-page" class="w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group"> ${hasNextPosts ? renderTemplate`<a${addAttribute(`?page=${page + 1}`, "href")}> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowRight2", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </a>` : renderTemplate`<a${addAttribute(`?page=${page}`, "href")}> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "arrowRight2", "className": "w-9 h-9 fill-black group-hover:fill-white" })} </a>`} </button> </div>`;
}, "C:/upwork/matthew-portfolio/src/component/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogPosts = await getCollection("blog");
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPath = Astro2.url;
  console.log(currentPath, "currentPath");
  let currentPage = Number(Astro2.url.searchParams.get("page")) || 1;
  const start = postsPerPage * (currentPage - 1);
  const end = start + postsPerPage;
  const posts = blogPosts.slice(start, end);
  const allCategories = blogPosts.flatMap((post) => post.data.categories);
  Array.from(new Set(allCategories));
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>Blog</title>${renderHead()}</head> <body class="mx-auto bg-stone-950 w-full"> <div class="bg-stone-950 px-4 md:px-12 flex justify-center items-center w-full overflow-y-hidden"> <section class="max-w-[673px] lg:max-w-[928px] xxl:max-w-[1344px] w-full mx-auto relative"> <div class="top-bg-section pb-12 relative z-10"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "AnimatedText", $$AnimatedText, { "text": "blog_", "dataValue": "blog_", "className": "text-white text-[38px] md:text-7xl lg:text-[100px] relative z-10 font-black font-craftworkGrotesk py-10 md:py-20 uppercase leading-[45px] md:leading-[86px] lg:leading-[120px]", "style": "" })} <div class="flex items-center max-w-full md:max-w-[432px] relative z-10 mb-6 justify-between w-full bg-white/5 group hover:bg-blue-500/10 border border-white/20 rounded-full p-1 shadow-lg"> <div class="flex items-center pl-4 pr-2"> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "searchIcon", "className": "w-6 h-6" })} <input type="text" placeholder="Search by name" id="myInput" class="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none ml-2 w-full max-w-[220px]"> </div> <button id="SearchButton" class="text-white max-w-[88px] w-full h-[45px] flex justify-center items-center text-lg font-normal font-generalSans bg-[#162149] group-hover:bg-blue-800 rounded-full mr-1">
Search
</button> </div> <div id="blog-cards" class="flex flex-wrap gap-8 mb-20 relative z-10"> ${posts.slice(0, postsPerPage).map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "views": post.data.views, "pubTime": post.data.pubTime, "href": `/blog/${post.slug}` })}`)} </div> ${renderComponent($$result, "Pagination", $$Pagination, { "totalPages": totalPages, "page": currentPage, "numberOfPosts": blogPosts.length, "postsPerPage": postsPerPage })} <!-- <div
            class='flex justify-center items-center space-x-4 text-white pb-24'
          >
            <button
              id='prev-page'
              class='w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group'
              disabled
            >
              <IconCollection
                icon='arrowLeft'
                className='w-9 h-9 fill-black group-hover:fill-white'
              />
            </button>
            <div class='flex items-center space-x-2'>
              <div id='current-page'>1</div>
              <div>of</div>
              <div id='total-pages'>{totalPages}</div>
            </div>
            <button
              id='next-page'
              class='w-12 h-12 flex justify-center items-center rounded-full bg-white/20 hover:bg-white group'
            >
              <IconCollection
                icon='arrowRight2'
                className='w-9 h-9 fill-black group-hover:fill-white'
              />
            </button>
          </div> --> <div id="blogPostsContainer"></div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </section> </div>  </body> </html>`;
}, "C:/upwork/matthew-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "C:/upwork/matthew-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
