import { a as createComponent, b as renderTemplate, d as renderHead, f as addAttribute, g as createAstro } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$AnimatedText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimatedText;
  const { text, dataValue, className, style } = Astro2.props;
  const uniqueId = `animated-text-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate`<head><!-- JavaScript for interactive h1 -->${renderHead()}</head> <body> <h1${addAttribute(uniqueId, "id")}${addAttribute(className, "class")}${addAttribute(style, "style")}${addAttribute(dataValue, "data-value")}>${text}</h1> </body>`;
}, "C:/upwork/matthew-portfolio/src/component/AnimatedText.astro", void 0);

export { $$AnimatedText as $ };
