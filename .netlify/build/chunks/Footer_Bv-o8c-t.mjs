import { a as createComponent, b as renderTemplate, e as renderComponent, m as maybeRenderHead, g as createAstro, u as unescapeHTML, F as Fragment } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro();
const $$IconCollection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IconCollection;
  const { icon, className } = Astro2.props;
  const icons = {
    home: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9-2v12M21 12l-2-2m-6 6v4M9 16v4"/></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A7.5 7.5 0 0112 3.5a7.5 7.5 0 016.879 14.304M12 15v4"/></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3.5a6 6 0 014.5 0M5.25 5.5a6 6 0 0113.5 0M9 6v12m6-12v12"/></svg>`,
    linkdineIcon: `<svg
            xmlns='http://www.w3.org/2000/svg'
            class=${className}
            viewBox='0 0 25 24'
            fill='none'
          >
            <g clip-path='url(#clip0_5096_3099)'>
              <path
                d='M20.9222 20.2213H17.3707V14.7144C17.3707 13.4012 17.3471 11.7107 15.5236 11.7107C13.6739 11.7107 13.3909 13.1415 13.3909 14.6188V20.2209H9.83943V8.89645H13.2488V10.4441H13.2965C13.6377 9.86642 14.1308 9.39123 14.7232 9.06909C15.3155 8.74696 15.9851 8.58994 16.6604 8.61476C20.26 8.61476 20.9236 10.9591 20.9236 14.0089L20.9222 20.2213ZM5.83222 7.34847C5.4246 7.34854 5.02611 7.22893 4.68715 7.00476C4.34819 6.78059 4.08399 6.46193 3.92794 6.08908C3.77188 5.71623 3.73098 5.30593 3.81043 4.91007C3.88988 4.51421 4.08611 4.15056 4.37429 3.86512C4.66246 3.57968 5.02966 3.38526 5.42943 3.30645C5.8292 3.22764 6.24358 3.26798 6.6202 3.42236C6.99682 3.57675 7.31874 3.83825 7.54526 4.17379C7.77178 4.50933 7.89273 4.90385 7.8928 5.30745C7.89285 5.57544 7.83958 5.8408 7.73606 6.0884C7.63253 6.336 7.48078 6.56099 7.28943 6.75052C7.09809 6.94004 6.8709 7.0904 6.62088 7.19299C6.37085 7.29559 6.10287 7.34842 5.83222 7.34847ZM7.60794 20.2213H4.0528V8.89645H7.60794V20.2213ZM22.6927 0.0016169H2.26821C1.80463 -0.00356306 1.35792 0.173702 1.02627 0.49446C0.694621 0.815217 0.505169 1.25322 0.499512 1.71223V22.0195C0.504976 22.4787 0.694316 22.917 1.02595 23.2381C1.35759 23.5592 1.8044 23.7368 2.26821 23.7319H22.6927C23.1574 23.7377 23.6055 23.5606 23.9384 23.2395C24.2714 22.9184 24.462 22.4796 24.4684 22.0195V1.71077C24.4618 1.25085 24.2711 0.812343 23.9381 0.491594C23.6051 0.170844 23.1572 -0.00591465 22.6927 0.000151116'
                fill='white'></path>
            </g>
            <defs>
              <clipPath id='clip0_5096_3099'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(0.5)'></rect>
              </clipPath>
            </defs>
          </svg>`,
    gitHubIcon: `  <svg
            xmlns='http://www.w3.org/2000/svg'
            class=${className}
            viewBox='0 0 29 28'
            fill='none'
          >
            <g clip-path='url(#clip0_5096_3095)'>
              <path
                d='M14.5001 0.373047C6.76908 0.373047 0.5 6.64097 0.5 14.3732C0.5 20.5588 4.51146 25.8066 10.0741 27.6578C10.7738 27.7874 11.0307 27.3541 11.0307 26.9843C11.0307 26.6505 11.0177 25.5477 11.0117 24.3778C7.11683 25.2247 6.29497 22.726 6.29497 22.726C5.65812 21.1078 4.74051 20.6775 4.74051 20.6775C3.47028 19.8086 4.83626 19.8264 4.83626 19.8264C6.24212 19.9252 6.98237 21.2691 6.98237 21.2691C8.23104 23.4094 10.2575 22.7907 11.0564 22.4329C11.1821 21.5281 11.5449 20.9105 11.9453 20.5609C8.83567 20.2069 5.56678 19.0064 5.56678 13.642C5.56678 12.1135 6.11368 10.8646 7.00926 9.88412C6.8639 9.5315 6.38469 8.10756 7.14489 6.17915C7.14489 6.17915 8.32053 5.80288 10.9959 7.61421C12.1127 7.30402 13.3103 7.14846 14.5001 7.14312C15.6899 7.14846 16.8885 7.30402 18.0073 7.61421C20.6795 5.80288 21.8535 6.17915 21.8535 6.17915C22.6155 8.10756 22.1361 9.5315 21.9907 9.88412C22.8884 10.8646 23.4316 12.1135 23.4316 13.642C23.4316 19.0192 20.1565 20.2031 17.039 20.5497C17.5411 20.9842 17.9886 21.8362 17.9886 23.1424C17.9886 25.0156 17.9723 26.5232 17.9723 26.9843C17.9723 27.3569 18.2243 27.7935 18.934 27.656C24.4936 25.8027 28.5 20.5567 28.5 14.3732C28.5 6.64097 22.2318 0.373047 14.5001 0.373047ZM5.7435 20.3165C5.71266 20.3861 5.60324 20.4069 5.50355 20.3592C5.402 20.3135 5.34497 20.2187 5.37789 20.1489C5.40803 20.0773 5.51769 20.0573 5.619 20.1053C5.72078 20.151 5.77874 20.2467 5.7435 20.3165ZM6.43215 20.931C6.36538 20.9929 6.23486 20.9641 6.1463 20.8663C6.05472 20.7687 6.03756 20.6382 6.10526 20.5753C6.17412 20.5134 6.3007 20.5424 6.3925 20.64C6.48408 20.7388 6.50193 20.8684 6.43215 20.931ZM6.90459 21.7172C6.81881 21.7768 6.67855 21.7209 6.59184 21.5964C6.50606 21.4719 6.50606 21.3226 6.5937 21.2628C6.68063 21.203 6.81881 21.2568 6.90668 21.3803C6.99222 21.5069 6.99222 21.6562 6.90459 21.7172ZM7.70359 22.6277C7.62685 22.7123 7.4634 22.6896 7.34378 22.5742C7.22137 22.4612 7.18729 22.301 7.26426 22.2164C7.34192 22.1316 7.50629 22.1555 7.62685 22.27C7.74833 22.3827 7.78542 22.544 7.70359 22.6277ZM8.73621 22.9351C8.70236 23.0447 8.54495 23.0946 8.38637 23.048C8.22803 23 8.1244 22.8716 8.15639 22.7607C8.18931 22.6504 8.34742 22.5985 8.50716 22.6483C8.66527 22.6961 8.76913 22.8236 8.73621 22.9351ZM9.91138 23.0655C9.91533 23.1809 9.78086 23.2767 9.6144 23.2788C9.44702 23.2825 9.31162 23.189 9.30977 23.0754C9.30977 22.9588 9.44122 22.864 9.60861 22.8612C9.77507 22.858 9.91138 22.9507 9.91138 23.0655ZM11.0659 23.0212C11.0858 23.1339 10.9701 23.2496 10.8048 23.2804C10.6423 23.3101 10.4918 23.2405 10.4712 23.1288C10.451 23.0133 10.5688 22.8977 10.7311 22.8677C10.8966 22.839 11.0448 22.9067 11.0659 23.0212Z'
                fill='white'></path>
            </g>
            <defs>
              <clipPath id='clip0_5096_3095'>
                <rect
                  width='28'
                  height='28'
                  fill='white'
                  transform='translate(0.5)'></rect>
              </clipPath>
            </defs>
          </svg>`,
    hackerIcon: `<svg class=${className}  viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.03 36.7294L8.14004 47.2094C7.47004 49.0094 7.79004 51.0294 8.98004 52.5294L12.05 56.4284C12.33 56.7884 12.77 56.9984 13.23 56.9984H16.05C15.91 56.2984 16.07 55.5684 16.5 54.9984C16.18 54.5684 16 54.0384 16 53.4984V36.4984C16 35.1184 17.12 33.9984 18.5 33.9984H19.71C18.87 33.1884 18.08 32.3184 17.35 31.3984L14.8 33.1684C13.53 34.0394 12.57 35.2894 12.03 36.7294Z" fill="white"/>
  <path d="M46.5 56H18.5C17.85 56 17.85 57 18.5 57H46.5C47.15 57 47.15 56 46.5 56Z" fill="white"/>
  <path d="M52.95 56.4294L56.02 52.5304C57.21 51.0304 57.53 49.0094 56.86 47.2104L52.97 36.7294C52.43 35.2894 51.47 34.0394 50.2 33.1684L47.65 31.3984C46.92 32.3184 46.13 33.1884 45.29 33.9984H46.5C47.88 33.9984 49 35.1184 49 36.4984V53.4984C49 54.0384 48.82 54.5684 48.5 54.9984C48.93 55.5684 49.09 56.2984 48.95 56.9984H51.77C52.23 56.9994 52.67 56.7894 52.95 56.4294Z" fill="white"/>
  <path d="M47 36.5C47 36.22 46.78 36 46.5 36H18.5C18.22 36 18 36.22 18 36.5V53.5C18 53.78 18.22 54 18.5 54H46.5C46.78 54 47 53.78 47 53.5V36.5ZM34.97 48.64H30.03C28.89 48.64 28.16 47.37 28.73 46.39L31.2 42.111C31.77 41.131 33.23 41.131 33.8 42.111L36.27 46.39C36.84 47.37 36.1 48.64 34.97 48.64Z" fill="white"/>
  <path d="M47.49 27.7292C45.35 26.1992 43 25.0092 40.5 24.1992V24.9992C40.5 29.3592 36.86 32.9992 32.5 32.9992C28.14 32.9992 24.5 29.3592 24.5 24.9992V24.1992C22.31 24.9092 20.24 25.9092 18.32 27.1692C18.05 27.3492 17.78 27.5392 17.51 27.7302C17.75 28.4292 18.09 29.0802 18.54 29.6692C19.75 31.2792 21.16 32.7392 22.74 33.9992H32.5H42.26C43.84 32.7392 45.25 31.2792 46.46 29.6692C46.91 29.0792 47.25 28.4292 47.49 27.7292Z" fill="white"/>
  <path d="M17.1299 25.5609C24.3099 20.7909 33.1599 19.7019 41.1099 22.2909C43.4599 23.0609 45.7399 24.1509 47.8699 25.5609C47.8799 24.7419 47.7499 23.9309 47.4799 23.1519C45.8099 18.3619 43.1899 13.9619 39.7699 10.2119C35.9199 5.99188 29.0799 5.99188 25.2299 10.2119C21.8099 13.9619 19.1899 18.3619 17.5199 23.1519C17.2499 23.9309 17.1199 24.7409 17.1299 25.5609Z" fill="white"/>
</svg>
`,
    arrowDown: `<svg   class=${className}  viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6004 41.6985L42.3994 41.6985M42.3994 41.6985L42.3994 21.8995M42.3994 41.6985L22.6004 21.8995" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
    arrowRight: `<svg class=${className} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5 45.7988L46.5 31.7988M46.5 31.7988L32.5 17.7988M46.5 31.7988H18.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    eyeIcon: `<svg class=${className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5096_3251)">
<mask id="mask0_5096_3251" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
<path d="M24.5 0H0.5V24H24.5V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_5096_3251)">
<mask id="mask1_5096_3251" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
<path d="M0.5 1.90735e-06H24.5V24H0.5V1.90735e-06Z" fill="white"/>
</mask>
<g mask="url(#mask1_5096_3251)">
<path d="M23.5156 12C23.5156 12 19.9531 19.5 12.4531 19.5C4.95312 19.5 1.39062 12 1.39062 12C1.39062 12 4.95312 4.5 12.4531 4.5C19.9531 4.5 23.5156 12 23.5156 12Z" stroke="white" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2031 12C16.2031 9.92892 14.5242 8.25 12.4531 8.25C10.382 8.25 8.70312 9.92892 8.70312 12C8.70312 14.0711 10.382 15.75 12.4531 15.75C14.5242 15.75 16.2031 14.0711 16.2031 12Z" stroke="white" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_5096_3251">
<rect width="24" height="24" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
`,
    arrowRight2: `<svg class=${className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>`,
    arrowLeft: `<svg class=${className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>`,
    searchIcon: `<svg class=${className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0625 2.5C6.05742 2.5 2 6.55742 2 11.5625C2 16.5676 6.05742 20.625 11.0625 20.625C13.2331 20.625 15.2255 19.8619 16.786 18.5893C16.7951 18.6008 16.8046 18.6122 16.8145 18.6233L20.8145 23.1233C21.0896 23.4329 21.5637 23.4608 21.8733 23.1856C22.1829 22.9104 22.2108 22.4363 21.9356 22.1267L17.9356 17.6267C17.9123 17.6006 17.8876 17.5764 17.8617 17.5543C19.2704 15.957 20.125 13.8596 20.125 11.5625C20.125 6.55742 16.0676 2.5 11.0625 2.5ZM3.5 11.5625C3.5 7.38585 6.88585 4 11.0625 4C15.2392 4 18.625 7.38585 18.625 11.5625C18.625 15.7392 15.2392 19.125 11.0625 19.125C6.88585 19.125 3.5 15.7392 3.5 11.5625Z" fill="white"/>
</svg>
`,
    clockIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.919 13.9424L12.8516 11.6418V6.95559C12.8516 6.48439 12.4707 6.10352 11.9995 6.10352C11.5283 6.10352 11.1475 6.48439 11.1475 6.95559V12.0679C11.1475 12.3363 11.2736 12.5894 11.4883 12.7496L14.8965 15.3057C15.0498 15.4208 15.2288 15.4762 15.4069 15.4762C15.6667 15.4762 15.9224 15.3594 16.0894 15.1345C16.3723 14.7587 16.2956 14.2244 15.919 13.9424Z" fill="white"/>
<path d="M12 1C5.93423 1 1 5.93423 1 12C1 18.0658 5.93423 23 12 23C18.0658 23 23 18.0658 23 12C23 5.93423 18.0658 1 12 1ZM12 21.2959C6.8749 21.2959 2.7041 17.1251 2.7041 12C2.7041 6.8749 6.8749 2.7041 12 2.7041C17.126 2.7041 21.2959 6.8749 21.2959 12C21.2959 17.1251 17.1251 21.2959 12 21.2959Z" fill="white"/>
</svg>
`,
    arrowRight3: `<svg class=${className}  viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 45.7988L46 31.7988M46 31.7988L32 17.7988M46 31.7988H18" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowRightUp: `<svg class=${className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 26L26 6M26 6H6M26 6L6 26" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowRightDown: `<svg class=${className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 6L26 26M26 26H6M26 26L6 6" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    closeIcon: `<svg class=${className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4852 7.51381L7.51465 24.4844" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
<path d="M7.51479 7.51381L24.4854 24.4844" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
</svg>
`,
    barIcon: `<svg class=${className}  viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 1H1.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
<path d="M25.5 9H1.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
<path d="M25.5 17H1.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
</svg>
`,
    settings2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3.5a6 6 0 014.5 0M5.25 5.5a6 6 0 0113.5 0M9 6v12m6-12v12"/></svg>`
    // Add more icons as needed
  };
  const selectedIcon = icons[icon];
  return renderTemplate`${selectedIcon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(selectedIcon)}` })}` : renderTemplate`${maybeRenderHead()}<p>Icon not found</p>`}`;
}, "C:/upwork/matthew-portfolio/src/IconCollection/IconCollection.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-8 relative z-20" data-astro-cid-4xssziem> <div class="max-w-[1344px] relative z-10 w-full h-[68px] px-7 py-4 bg-neutral-900/40 rounded-[20px] shadow border border-neutral-300/10 backdrop-blur-[28px] justify-between items-center inline-flex" data-astro-cid-4xssziem> <a href="/" class="hacked-text text-white text-xl font-bold font-plusJakartaSans leading-normal" data-astro-cid-4xssziem>
Xynaptik
</a> <div class="hidden md:flex gap-16 items-center" data-astro-cid-4xssziem> <div class="flex gap-8 items-center" data-astro-cid-4xssziem> <a href="/projects" class="text-white text-base font-medium font-generalSans px-3 py-2 leading-none" data-astro-cid-4xssziem>
Projects Page
</a> <a href="/about" class="text-white text-base font-medium font-generalSans px-3 py-2 leading-none" data-astro-cid-4xssziem>
About me
</a> <a href="/blog" class="text-white text-base font-medium font-generalSans px-3 py-2 leading-none" data-astro-cid-4xssziem>
Blog
</a> </div> <div class="flex gap-4 items-center" data-astro-cid-4xssziem> <a href="" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "gitHubIcon", "className": "w-7 h-7", "data-astro-cid-4xssziem": true })} </a> <a href="" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "linkdineIcon", "className": "w-6 h-6", "data-astro-cid-4xssziem": true })} </a> </div> </div> <div class="md:hidden" id="menuToggle" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "id": "barIcon", "icon": "barIcon", "className": "w-[27px] h-[18px]", "data-astro-cid-4xssziem": true })} </div> </div> <div id="menu" class="menu hidden absolute top-8 left-0 right-0 bg-neutral-900/40 rounded-[20px] shadow border border-neutral-300/10 backdrop-blur-[28px] p-6 z-30" data-astro-cid-4xssziem> <div class="flex justify-between items-center pb-9" data-astro-cid-4xssziem> <a href="/" class="hacked-text text-white text-xl font-bold font-plusJakartaSans leading-normal" data-astro-cid-4xssziem>
Xynaptik
</a> <div id="closeIcon" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "closeIcon", "className": "w-6 h-6", "data-astro-cid-4xssziem": true })} </div> </div> <div class="flex flex-col items-center gap-y-4" data-astro-cid-4xssziem> <a href="/projects" class="text-white/95 text-sm font-medium font-generalSans leading-none p-3" data-astro-cid-4xssziem>
Projects Page
</a> <a href="/about" class="text-white/95 text-sm font-medium font-generalSans leading-none p-3" data-astro-cid-4xssziem>
About me
</a> <a href="/blog" class="text-white/95 text-sm font-medium font-generalSans leading-none p-3" data-astro-cid-4xssziem>
Blog
</a> <div class="flex gap-4 items-center mt-8" data-astro-cid-4xssziem> <a href="" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "gitHubIcon", "className": "w-7 h-7", "data-astro-cid-4xssziem": true })} </a> <a href="" data-astro-cid-4xssziem> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "linkdineIcon", "className": "w-6 h-6", "data-astro-cid-4xssziem": true })} </a> </div> </div> </div> </div>  `;
}, "C:/upwork/matthew-portfolio/src/component/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-[1344px] w-full h-auto md:h-32 px-7 py-6 bg-neutral-900/40 rounded-[20px] shadow border border-neutral-300/10 backdrop-blur-[28px] justify-start items-start gap-6 flex-col md:flex-row inline-flex"> <div class="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex"> <div class="w-[100px] justify-start items-center gap-2 inline-flex"> <div class="text-white text-xl font-bold font-plusJakartaSans leading-normal">
Xynaptik
</div> </div> <div class="text-zinc-400 text-base hidden md:block font-normal font-sFProDisplay">
© 2023 Xynaptik. All rights reserved.
</div> </div> <div class="grow shrink basis-0 h-auto md:h-20 justify-start items-start gap-6 flex-col md:flex-row flex"> <div class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"> <a href="/projects" class="text-white/95 text-base font-medium font-generalSans leading-none">Projects Page</a> <a href="/about" class="text-white/95 text-base font-medium font-generalSans leading-none">About me</a> <a href="/blog" class="text-white/95 text-base font-medium font-generalSans leading-none">Blog</a> </div> <div class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex"> <div class="text-white/95 text-base font-medium font-generalSans leading-none">
hireme@kaladin.dev
</div> <div class="justify-end items-center gap-3 inline-flex"> <a href=""> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "gitHubIcon", "className": "w-7 h-7" })} </a> <a href=""> ${renderComponent($$result, "IconCollection", $$IconCollection, { "icon": "linkdineIcon", "className": "w-6 h-6" })} </a> </div> </div> </div> <div class="text-zinc-400 text-base font-normal block md:hidden font-sFProDisplay">
© 2023 Xynaptik. All rights reserved.
</div> </div> `;
}, "C:/upwork/matthew-portfolio/src/component/Footer.astro", void 0);

export { $$IconCollection as $, $$Navbar as a, $$Footer as b };
