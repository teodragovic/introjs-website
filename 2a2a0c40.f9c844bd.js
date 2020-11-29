(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,j=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(j,l(l({ref:t},s),{},{components:n})):a.a.createElement(j,l({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(122)),i={title:"Install"},l={unversionedId:"getting-started/install",id:"getting-started/install",isDocsHomePage:!1,title:"Install",description:"In this page you can find different ways to obtain an Introjs version and install it.",source:"@site/docs/getting-started/install.md",slug:"/getting-started/install",permalink:"/docs/getting-started/install",editUrl:"https://github.com/usablica/introjs-website/edit/master/docs/getting-started/install.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1606561642,sidebar:"someSidebar",previous:{title:"Intro.js",permalink:"/docs/"},next:{title:"Quick Start",permalink:"/docs/getting-started/start"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Download",id:"download",children:[{value:"CDN",id:"cdn",children:[]},{value:"Bower",id:"bower",children:[]},{value:"NPM",id:"npm",children:[]},{value:"Git",id:"git",children:[]}]},{value:"Setup",id:"setup",children:[]},{value:"RTL",id:"rtl",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this page you can find different ways to obtain an Introjs version and install it."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"Intro.js doesn\u2019t have any dependencies and you don\u2019t need to install anything else. Follow the instruction in next steps to download and install Introjs."),Object(o.b)("h2",{id:"download"},"Download"),Object(o.b)("p",null,"Now that you\u2019ve got everything installed, let\u2019s get to work!"),Object(o.b)("p",null,"You can obtain your local copy of Intro.js from:"),Object(o.b)("h3",{id:"cdn"},"CDN"),Object(o.b)("p",null,"Download it from CDN:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cdnjs.com/libraries/intro.js"}),"CDNJS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.jsdelivr.com/projects/intro.js"}),"JSDelivr")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.bootcdn.cn/intro.js/"}),"BootCDN"))),Object(o.b)("h3",{id:"bower"},"Bower"),Object(o.b)("p",null,"Using bower:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"bower install intro.js --save\n")),Object(o.b)("h3",{id:"npm"},"NPM"),Object(o.b)("p",null,"Using npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install intro.js --save\n")),Object(o.b)("h3",{id:"git"},"Git"),Object(o.b)("p",null,"Download the source from git repository, using git clone ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/usablica/intro.js.git"}),"Git repo")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We don\u2019t recommend to download the source from the Git because it might have some unstable changes.")),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"After download the source, you need to add it to the page. Introjs has two main parts, the css and js files."),Object(o.b)("p",null,"You need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"JS")," file (",Object(o.b)("inlineCode",{parentName:"p"},"intro.js"),") before closing the body tag (",Object(o.b)("inlineCode",{parentName:"p"},"</body>"),") and adding the CSS file (",Object(o.b)("inlineCode",{parentName:"p"},"introjs.css"),") to the header (",Object(o.b)("inlineCode",{parentName:"p"},"<head>"),")."),Object(o.b)("p",null,"That\u2019s it! Now follow next steps or go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/start"}),"Quick Start")," page."),Object(o.b)("h2",{id:"rtl"},"RTL"),Object(o.b)("p",null,"You can use Introjs for RTL websites as well (e.g. Farsi). What you need to do is adding ",Object(o.b)("inlineCode",{parentName:"p"},"introjs-rtl.css")," file after the main CSS file (",Object(o.b)("inlineCode",{parentName:"p"},"introjs.css"),")"))}b.isMDXComponent=!0}}]);