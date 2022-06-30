(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("vOnD"),i=a("boz2"),l=a("ma3e"),s=a("U0YC"),c=a.n(s),m=a("Wbzz"),p=a("MKeS"),u=a("wtQ5"),d=a("xlbW"),h=o.default.div.withConfig({displayName:"about__IntroText",componentId:"f95ytf-0"})(["a{color:#000;}"]),g=function(e){var t=e.title,a=void 0===t?"about":t;e.text;return n.a.createElement(h,null,n.a.createElement("h2",null,a),n.a.createElement("p",null,"I'm a Blockchain and Backend developer focused on JavaScript, Python and Solidity. I build APIs in Node.js that interacts with smart contracts using ethers.js and decentralized storage such as IPFS."," "))},f=(a("VRzm"),a("Btvt"),a("o0o1")),b=a.n(f),v=(a("Z2Ku"),a("L9s1"),a("f3/d"),a("ls82"),a("u0/0")),x=a.n(v),E=Object(o.default)((function(e){var t=e.className;return n.a.createElement("div",{className:t},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))})).withConfig({displayName:"loader",componentId:"sc-1b8g8um-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid ",";border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:"," transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}));function _(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(r,n)}var k="https://api.github.com/users/"+c.a.githubUsername+"/repos?type=owner&per_page=100",y=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){var e,t=(e=b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()(k);case 2:if(!(t=e.sent).json||!t.json.length){e.next=8;break}if((a=t.json.filter((function(e){e.fork;var t=e.name;return t!==c.a.githubUsername&&c.a.githubReposToShow.includes(t)}))).length===c.a.githubReposToShow.length){e.next=7;break}throw new Error("Loaded Repos are missing a few from github");case 7:this.setState({repos:a,status:"ready"});case 8:case"end":return e.stop()}}),e,this)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function i(e){_(o,r,n,i,l,"next",e)}function l(e){_(o,r,n,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),o.render=function(){var e=this.state.status;return n.a.createElement("div",{className:this.props.className},n.a.createElement("h2",null,"Github Projects"),"loading"===e&&n.a.createElement("div",{className:"repositories__loader"},n.a.createElement(E,null)),"ready"===e&&this.state.repos&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"repositories__content"},this.state.repos.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.name},n.a.createElement("div",{className:"repositories__repo"},n.a.createElement("a",{className:"repositories__repo-link",href:e.html_url,target:"_blank",rel:"noreferrer"},n.a.createElement("strong",null,e.name)),n.a.createElement("p",null,e.description),n.a.createElement("div",{className:"repositories__repo-star"},e.stargazers_count>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l.e,null)," ",e.stargazers_count))),n.a.createElement("hr",null))}))),n.a.createElement("div",{className:"repositories_user-link"},n.a.createElement("a",{href:"https://github.com/"+c.a.githubUsername,target:"_blank",rel:"noreferrer",className:"ext-link"},n.a.createElement("strong",null,"All my repositories"),n.a.createElement(l.b,{style:{marginLeft:8}})))))},r}(n.a.Component),w=Object(o.default)(y).withConfig({displayName:"repositories",componentId:"sc-1t8wyxl-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link,.repositories_user-link a{color:",";display:flex;align-items:center;}.repositories_user-link{display:flex;justify-content:flex-end;}.repositories__repo-date{font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;display:flex;align-items:center;svg{margin-right:4px;}}.repositories__loader{display:flex;}.ext-link:hover{svg{color:#005e8f;}}hr{margin-top:16px;background-color:",";opacity:0.2;}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.fontColor})),N=Object(p.a)((function(){return Promise.all([a.e(2),a.e(1),a.e(0)]).then(a.bind(null,"I/Ru"))})),z=o.default.div.withConfig({displayName:"pages__Separator",componentId:"sc-10gmczo-0"})(["&:after{content:'...';font-size:40px;display:block;text-align:center;letter-spacing:10px;color:",";padding-top:30px;padding-bottom:70px;}"],(function(e){return e.theme.colors.fontColor}));t.default=Object(o.default)((function(e){var t=e.className,a=e.location,r=c.a.keywords,o=c.a.siteTitle,s=c.a.authorAvatar,p=c.a.social,h=c.a.githubUsername;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{title:o,keywords:r}),n.a.createElement(N,{location:a.pathname},n.a.createElement(d.a,{className:t},n.a.createElement(i.Container,{className:"page-content",fluid:!0},n.a.createElement(i.Row,null,n.a.createElement(i.Col,{xs:4,className:"avatar"},n.a.createElement("img",{className:"avatar__image",src:Object(m.withPrefix)(s),alt:"user avatar"}),n.a.createElement("div",{className:"social"},p.github&&n.a.createElement("a",{className:"social-link github",href:p.github,target:"_blank",rel:"noreferrer"},n.a.createElement(l.c,{className:"social-icon",size:"26"})),p.linkedin&&n.a.createElement("a",{className:"social-link linkedin",href:p.linkedin,target:"_blank",rel:"noreferrer"},n.a.createElement(l.d,{className:"social-icon",size:"26"})),p.twitter&&n.a.createElement("a",{className:"social-link twitter",href:p.twitter,target:"_blank",rel:"noreferrer"},n.a.createElement(l.f,{className:"social-icon",size:"26"})),p.email&&n.a.createElement("a",{className:"social-link email",href:"mailto:"+p.email,target:"_blank",rel:"noreferrer"},n.a.createElement(l.a,{className:"social-icon",size:"26"}))))),n.a.createElement(i.Row,null,n.a.createElement(i.Col,null,n.a.createElement(g,{title:"About"}))),n.a.createElement(z,null),h&&n.a.createElement(w,null)))))})).withConfig({displayName:"pages",componentId:"sc-10gmczo-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;flex-direction:column;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.15);width:200px;height:200px;border-radius:50%;margin:0 auto 35px;object-fit:cover;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;transition:color 75ms ease-in;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077b5;}a.social-link.email:hover{color:#c23a2b;}"])}}]);
//# sourceMappingURL=component---src-pages-index-js-6e6683fe55a6d6c55efb.js.map