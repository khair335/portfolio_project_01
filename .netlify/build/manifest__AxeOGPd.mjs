import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_E_GASDw3.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BfPmMF3T.js"}],"styles":[{"type":"external","src":"/_astro/about.DIFxXwST.css"},{"type":"external","src":"/_astro/about.ChJLCS1O.css"},{"type":"inline","content":".slick-slider[data-astro-cid-2zzhuavb]{width:100%;height:100%}.slick-slide[data-astro-cid-2zzhuavb]{display:flex;justify-content:center;align-items:center;border-radius:8px;padding:10px;box-shadow:0 2px 10px #0000001a}.slick-next[data-astro-cid-2zzhuavb]:before,.slick-prev[data-astro-cid-2zzhuavb]:before{opacity:0!important}#slideRange[data-astro-cid-2zzhuavb]{-webkit-appearance:none;width:100%;height:2px;background:#2d2d2d;outline:none;transition:opacity .2s}#slideRange[data-astro-cid-2zzhuavb]:hover{opacity:1}#slideRange[data-astro-cid-2zzhuavb]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:84px;height:36px;border-radius:16px;background:#0056b3;cursor:pointer;border:none}#slideRange[data-astro-cid-2zzhuavb]::-moz-range-thumb{width:84px;height:36px;border-radius:16px;background:#0056b3;cursor:pointer;border:none}#slideRange[data-astro-cid-2zzhuavb]::-ms-thumb{width:84px;height:36px;border-radius:16px;background:#0056b3;cursor:pointer;border:none}@media (max-width: 767px){.slick-slide[data-astro-cid-2zzhuavb]{padding:4px}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BzfCfWDW.js"}],"styles":[{"type":"external","src":"/_astro/about.DIFxXwST.css"},{"type":"external","src":"/_astro/about.ChJLCS1O.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.KUkCJ14J.js"}],"styles":[{"type":"external","src":"/_astro/about.DIFxXwST.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DI2KzhHx.js"}],"styles":[{"type":"external","src":"/_astro/about.DIFxXwST.css"},{"type":"external","src":"/_astro/about.ChJLCS1O.css"},{"type":"inline","content":".hover-transition[data-astro-cid-zn4xi7ej]{transition:top .3s ease,background .3s ease}.group[data-astro-cid-zn4xi7ej]:hover .hover-transition[data-astro-cid-zn4xi7ej]{top:0!important}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJSKJRmD.js"}],"styles":[{"type":"external","src":"/_astro/about.DIFxXwST.css"},{"type":"external","src":"/_astro/index.Br4KAaIH.css"},{"type":"external","src":"/_astro/about.ChJLCS1O.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/upwork/matthew-portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/upwork/matthew-portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/upwork/matthew-portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/upwork/matthew-portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/upwork/matthew-portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/upwork/matthew-portfolio/src/component/RecentPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest__AxeOGPd.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_DxQu9Rih.mjs","/src/pages/about.astro":"chunks/about_C1HOxzCT.mjs","/src/pages/blog/[slug].astro":"chunks/_slug__5Istvg9M.mjs","/src/pages/blog/index.astro":"chunks/index_BwLi3dYJ.mjs","/src/pages/projects.astro":"chunks/projects_BEoIZ8AL.mjs","/src/pages/index.astro":"chunks/index_BDCT1PKg.mjs","C:/upwork/matthew-portfolio/src/content/blog/post1.md?astroContentCollectionEntry=true":"_astro/post1.B9mVv33L.js","C:/upwork/matthew-portfolio/src/content/blog/post10.md?astroContentCollectionEntry=true":"_astro/post10.ClQPlxvk.js","C:/upwork/matthew-portfolio/src/content/blog/post11.md?astroContentCollectionEntry=true":"_astro/post11.214WnOrL.js","C:/upwork/matthew-portfolio/src/content/blog/post12.md?astroContentCollectionEntry=true":"_astro/post12.Dxakk0wW.js","C:/upwork/matthew-portfolio/src/content/blog/post2.md?astroContentCollectionEntry=true":"_astro/post2.BlG5RbF8.js","C:/upwork/matthew-portfolio/src/content/blog/post3.md?astroContentCollectionEntry=true":"_astro/post3.CbmBrmvg.js","C:/upwork/matthew-portfolio/src/content/blog/post4.md?astroContentCollectionEntry=true":"_astro/post4.BZ5aHJLI.js","C:/upwork/matthew-portfolio/src/content/blog/post5.md?astroContentCollectionEntry=true":"_astro/post5.DfaLe1Df.js","C:/upwork/matthew-portfolio/src/content/blog/post6.md?astroContentCollectionEntry=true":"_astro/post6.DLWJTOP9.js","C:/upwork/matthew-portfolio/src/content/blog/post7.md?astroContentCollectionEntry=true":"_astro/post7.DJS2yXAz.js","C:/upwork/matthew-portfolio/src/content/blog/post8.md?astroContentCollectionEntry=true":"_astro/post8.Clgv0Mzk.js","C:/upwork/matthew-portfolio/src/content/blog/post9.md?astroContentCollectionEntry=true":"_astro/post9.BZ_T6ZJj.js","C:/upwork/matthew-portfolio/src/content/blog/post1.md?astroPropagatedAssets":"_astro/post1.YzXkGIOK.js","C:/upwork/matthew-portfolio/src/content/blog/post10.md?astroPropagatedAssets":"_astro/post10.BXpINJ3x.js","C:/upwork/matthew-portfolio/src/content/blog/post11.md?astroPropagatedAssets":"_astro/post11.Db2o7pZ0.js","C:/upwork/matthew-portfolio/src/content/blog/post12.md?astroPropagatedAssets":"_astro/post12.CIYKsL8C.js","C:/upwork/matthew-portfolio/src/content/blog/post2.md?astroPropagatedAssets":"_astro/post2.Bmc9-czQ.js","C:/upwork/matthew-portfolio/src/content/blog/post3.md?astroPropagatedAssets":"_astro/post3.DC4VETpG.js","C:/upwork/matthew-portfolio/src/content/blog/post4.md?astroPropagatedAssets":"_astro/post4.czXVnj9t.js","C:/upwork/matthew-portfolio/src/content/blog/post5.md?astroPropagatedAssets":"_astro/post5.CcS1pnE-.js","C:/upwork/matthew-portfolio/src/content/blog/post6.md?astroPropagatedAssets":"_astro/post6.DU3LEL7i.js","C:/upwork/matthew-portfolio/src/content/blog/post7.md?astroPropagatedAssets":"_astro/post7.DE3zw173.js","C:/upwork/matthew-portfolio/src/content/blog/post8.md?astroPropagatedAssets":"_astro/post8.DraCo9UR.js","C:/upwork/matthew-portfolio/src/content/blog/post9.md?astroPropagatedAssets":"_astro/post9.BMByH3NK.js","C:/upwork/matthew-portfolio/src/content/blog/post1.md":"_astro/post1.BO7b_zIt.js","C:/upwork/matthew-portfolio/src/content/blog/post10.md":"_astro/post10.CgLfL8hO.js","C:/upwork/matthew-portfolio/src/content/blog/post11.md":"_astro/post11.BUY4hrDy.js","C:/upwork/matthew-portfolio/src/content/blog/post12.md":"_astro/post12.DidbyEpl.js","C:/upwork/matthew-portfolio/src/content/blog/post2.md":"_astro/post2.Dn9-Xjxm.js","C:/upwork/matthew-portfolio/src/content/blog/post3.md":"_astro/post3.CkoiwfPx.js","C:/upwork/matthew-portfolio/src/content/blog/post4.md":"_astro/post4.grdGOuqL.js","C:/upwork/matthew-portfolio/src/content/blog/post5.md":"_astro/post5.CZvOaP29.js","C:/upwork/matthew-portfolio/src/content/blog/post6.md":"_astro/post6.Bde4KQtH.js","C:/upwork/matthew-portfolio/src/content/blog/post7.md":"_astro/post7.DXvdrdvk.js","C:/upwork/matthew-portfolio/src/content/blog/post8.md":"_astro/post8.CA24Nhel.js","C:/upwork/matthew-portfolio/src/content/blog/post9.md":"_astro/post9.A1e5s-sR.js","/astro/hoisted.js?q=0":"_astro/hoisted.BzfCfWDW.js","/astro/hoisted.js?q=3":"_astro/hoisted.BfPmMF3T.js","/astro/hoisted.js?q=2":"_astro/hoisted.DI2KzhHx.js","/astro/hoisted.js?q=4":"_astro/hoisted.DJSKJRmD.js","/astro/hoisted.js?q=1":"_astro/hoisted.KUkCJ14J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/project1.VtAf7jyR.jpeg","/_astro/js.BMJKnIFD.png","/_astro/project2.vq7L2kCW.jpeg","/_astro/react.-bADff7i.png","/_astro/ajax-loader.BcnMEykj.gif","/_astro/slick.BlzDm7g2.svg","/_astro/heroImg.wjpfyEle.svg","/_astro/about.DIFxXwST.css","/_astro/about.ChJLCS1O.css","/_astro/index.Br4KAaIH.css","/favicon.svg","/_astro/AnimatedText.astro_astro_type_script_index_0_lang.O6ry_jS-.js","/_astro/hoisted.BfPmMF3T.js","/_astro/hoisted.BzfCfWDW.js","/_astro/hoisted.DI2KzhHx.js","/_astro/hoisted.DJSKJRmD.js","/_astro/hoisted.KUkCJ14J.js","/_astro/jquery.CuBwpEPI.js","/_astro/Navbar.astro_astro_type_script_index_0_lang.BoGXNcgq.js","/_astro/post1.B9mVv33L.js","/_astro/post1.BO7b_zIt.js","/_astro/post1.YzXkGIOK.js","/_astro/post10.BXpINJ3x.js","/_astro/post10.CgLfL8hO.js","/_astro/post10.ClQPlxvk.js","/_astro/post11.214WnOrL.js","/_astro/post11.BUY4hrDy.js","/_astro/post11.Db2o7pZ0.js","/_astro/post12.CIYKsL8C.js","/_astro/post12.DidbyEpl.js","/_astro/post12.Dxakk0wW.js","/_astro/post2.BlG5RbF8.js","/_astro/post2.Bmc9-czQ.js","/_astro/post2.Dn9-Xjxm.js","/_astro/post3.CbmBrmvg.js","/_astro/post3.CkoiwfPx.js","/_astro/post3.DC4VETpG.js","/_astro/post4.BZ5aHJLI.js","/_astro/post4.czXVnj9t.js","/_astro/post4.grdGOuqL.js","/_astro/post5.CcS1pnE-.js","/_astro/post5.CZvOaP29.js","/_astro/post5.DfaLe1Df.js","/_astro/post6.Bde4KQtH.js","/_astro/post6.DLWJTOP9.js","/_astro/post6.DU3LEL7i.js","/_astro/post7.DE3zw173.js","/_astro/post7.DJS2yXAz.js","/_astro/post7.DXvdrdvk.js","/_astro/post8.CA24Nhel.js","/_astro/post8.Clgv0Mzk.js","/_astro/post8.DraCo9UR.js","/_astro/post9.A1e5s-sR.js","/_astro/post9.BMByH3NK.js","/_astro/post9.BZ_T6ZJj.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
