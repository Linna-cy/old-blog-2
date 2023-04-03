(()=>{var f=class{constructor(t,n=1){this.items=[];if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=n,f.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let n=t.querySelectorAll("figure.gallery-image");for(let r of n){let i=r.querySelector("figcaption"),o=r.querySelector("img"),s={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:r};i&&(s.title=i.innerHTML),this.items.push(s)}}static createGallery(t){let n=t.querySelectorAll("img.gallery-image");for(let o of Array.from(n)){let s=o.closest("p");if(!s||!t.contains(s)||(s.textContent.trim()==""&&s.classList.add("no-text"),!s.classList.contains("no-text")))continue;let d=o.parentElement.tagName=="A",m=o,c=document.createElement("figure");if(c.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),c.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),d&&(m=o.parentElement),m.parentElement.insertBefore(c,m),c.appendChild(m),o.hasAttribute("alt")){let l=document.createElement("figcaption");l.innerText=o.getAttribute("alt"),c.appendChild(l)}if(!d){c.className="gallery-image";let l=document.createElement("a");l.href=o.src,l.setAttribute("target","_blank"),o.parentNode.insertBefore(l,o),l.appendChild(o)}}let r=t.querySelectorAll("figure.gallery-image"),i=[];for(let o of r)i.length?o.previousElementSibling===i[i.length-1]?i.push(o):i.length&&(f.wrap(i),i=[o]):i=[o];i.length>0&&f.wrap(i)}static wrap(t){let n=document.createElement("div");n.className="gallery";let r=t[0].parentNode,i=t[0];r.insertBefore(n,i);for(let o of t)n.appendChild(o)}open(t){let n=document.querySelector(".pswp");new window.PhotoSwipe(n,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:i=>{let o=this.items[i].el.getElementsByTagName("img")[0],s=window.pageYOffset||document.documentElement.scrollTop,a=o.getBoundingClientRect();return{x:a.left,y:a.top+s,w:a.width}}}).init()}bindClick(){for(let[t,n]of this.items.entries())n.el.querySelector("a").addEventListener("click",i=>{i.preventDefault(),this.open(t)})}},w=f;var h={};if(localStorage.hasOwnProperty("StackColorsCache"))try{h=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{h={}}async function b(e,t,n){if(!e)return await Vibrant.from(n).getPalette();if(!h.hasOwnProperty(e)||h[e].hash!==t){let r=await Vibrant.from(n).getPalette();h[e]={hash:t,Vibrant:{hex:r.Vibrant.hex,rgb:r.Vibrant.rgb,bodyTextColor:r.Vibrant.bodyTextColor},DarkMuted:{hex:r.DarkMuted.hex,rgb:r.DarkMuted.rgb,bodyTextColor:r.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(h))}return h[e]}var q=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},N=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let n=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=n+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},O=(e,t=500)=>{let n=document.getElementById("toc-top"),r=document.getElementsByClassName("main-article")[0];return window.getComputedStyle(e).display==="none"?(n.style.display="block",N(e,t)):(n.style.display="none",q(e,t))};function S(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),O(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function V(e,t,n){var r=document.createElement(e);for(let i in t)if(i&&t.hasOwnProperty(i)){let o=t[i];i=="dangerouslySetInnerHTML"?r.innerHTML=o.__html:o===!0?r.setAttribute(i,i):o!==!1&&o!=null&&r.setAttribute(i,o.toString())}for(let i=2;i<arguments.length;i++){let o=arguments[i];o&&r.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return r}var v=V;var E=class{constructor(t){this.localStorageKey="StackColorScheme";this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",n=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let n=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(n)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},T=E;function y(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var U=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",L="#TableOfContents",C="#TableOfContents li",k="active-class";function W(e,t){let n=e.querySelector("a").offsetHeight,r=e.offsetTop-t.offsetHeight/2+n/2-t.offsetTop;r<0&&(r=0),t.scrollTo({top:r,behavior:"smooth"})}function $(e){let t={};return e.forEach(n=>{let i=n.querySelector("a").getAttribute("href");i.startsWith("#")&&(t[i.slice(1)]=n)}),t}function M(e){let t=[];return e.forEach(n=>{t.push({id:n.id,offset:n.offsetTop})}),t.sort((n,r)=>n.offset-r.offset),t}function P(){let e=document.querySelectorAll(U);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(L);if(!t){console.warn("No toc matched query",L);return}let n=document.querySelectorAll(C);if(!n){console.warn("No navigation matched query",C);return}let r=M(e),i=!1;t.addEventListener("mouseenter",y(()=>i=!0)),t.addEventListener("mouseleave",y(()=>i=!1));let o,s=$(n);function a(){let m=document.documentElement.scrollTop||document.body.scrollTop,c;r.forEach(p=>{m>=p.offset-20&&(c=document.getElementById(p.id))});let l;c&&(l=s[c.id]),c&&!l?console.debug("No link found for section",c):l!==o&&(o&&o.classList.remove(k),l&&(l.classList.add(k),i||W(l,t)),o=l)}window.addEventListener("scroll",y(a));function d(){r=M(e),a()}window.addEventListener("resize",y(d))}var z="a[href]";function x(){document.querySelectorAll(z).forEach(e=>{!e.getAttribute("href").startsWith("#")||e.addEventListener("click",n=>{n.preventDefault();let r=decodeURI(e.getAttribute("href").substring(1)),i=document.getElementById(r),o=i.getBoundingClientRect().top-document.documentElement.getBoundingClientRect().top;window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:o,behavior:"smooth"})})})}var I={init:()=>{S();let e=document.querySelector(".article-content");e&&(new w(e),x(),P());let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(s,a)=>{s.forEach(d=>{if(!d.isIntersecting)return;a.unobserve(d.target),d.target.querySelectorAll("article.has-image").forEach(async c=>{let l=c.querySelector("img"),p=l.src,A=l.getAttribute("data-key"),B=l.getAttribute("data-hash"),D=c.querySelector(".article-details"),u=await b(A,B,p);D.style.background=`
                        linear-gradient(0deg, 
                            rgba(${u.DarkMuted.rgb[0]}, ${u.DarkMuted.rgb[1]}, ${u.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${u.Vibrant.rgb[0]}, ${u.Vibrant.rgb[1]}, ${u.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(t);let n=document.querySelectorAll(".article-content div.highlight"),r="Copy",i="Copied!";n.forEach(o=>{let s=document.createElement("button");s.innerHTML=r,s.classList.add("copyCodeButton"),o.appendChild(s);let a=o.querySelector("code[data-lang]");!a||s.addEventListener("click",()=>{navigator.clipboard.writeText(a.textContent).then(()=>{s.textContent=i,setTimeout(()=>{s.textContent=r},1e3)}).catch(d=>{alert(d),console.log("Something went wrong",d)})})}),new T(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){I.init()},0)});window.Stack=I;window.createElement=v;tocbot.init({tocSelector:".js-toc",contentSelector:".article-content",headingSelector:"h1, h2, h3, h4, h5, h6",hasInnerContainers:!0,orderedList:!1});var H=document.getElementById("toc-list"),g=document.getElementsByClassName("main-article")[0];if(H!=null){let e=H.cloneNode(!0);e.setAttribute("id","toc-top"),e.style.display="none",g.before(e)}function R(){let e=document.getElementById("toc-top"),t=document.getElementById("main-menu");window.innerWidth<1024&&window.innerWidth>=768?(g.before(e),e.style.display="block"):window.innerWidth>=1024?(g.before(e),e.style.display="none"):window.innerWidth<=768&&t.appendChild(e)}window.addEventListener("resize",R);window.addEventListener("load",()=>{window.dispatchEvent(new Event("resize"))});})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
