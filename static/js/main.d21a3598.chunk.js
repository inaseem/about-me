(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){e.exports=t(176)},111:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),c=(t(110),t(37)),l=t(43),s=t(42),m=t(27),u=t(38),p=(t(111),t(33)),d=t(25),g=t(40),f=t(4),h=t(178),b=t(68),E=t(234),w=t(226),x=t(227),v=t(228),y=t(230),j=t(70),k=t(229),N=t(218),O=t(98),C=t.n(O),A=t(99),S=t.n(A),I=t(100),T=t.n(I),F=t(231),B=t(232),W=t(233),L=t(29),P=t(219),_=t(220),D=t(221),H=t(222),G=t(223),q=t(224),z=t(225),U=t(44),M=t.n(U),V=t(59),J=t(90),R=t.n(J)()({auth:"23dc12658e3ca56d36d064375ee95eca4e088382",userAgent:"about-me v0.1.0",baseUrl:"https://api.github.com",log:{debug:function(){},info:function(){},warn:console.warn,error:console.error},request:{agent:"about-me v0.1.0",fetch:void 0,timeout:0}});window.octokit=R;var X=R,$=t(212),K=t(211),Q=t(213),Y=t(102),Z=t(179),ee=t(164),ae={image:"user/naseem.png",name:"Naseem"},te=Object(h.a)({bigAvatar:{margin:16,width:124,height:124}}),ne=function(e){return"/about-me/static/"+e};function re(e){var a=te();return ae=Object.keys(e.user).length>0?e.user:ae,r.a.createElement(K.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(ee.a,{alt:ae.name,src:Object.keys(e.user).length>0?ae.image:ne(ae.image),className:a.bigAvatar}))}var ie=t(94),oe=Object(Z.a)(function(e){return{heading:{marginTop:"16px",fontSize:"18px",color:"#242424"},imgResponse:{margin:"16px",width:"72px",height:"72px"},textFlow:{width:"100px",textAlign:"center",overflow:"hidden",textOverflow:"ellipsis"},flexItem:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}});function ce(e){var a=oe(),t=r.a.useState([]),n=Object(d.a)(t,2),i=n[0],o=n[1];return r.a.useEffect(function(){var e=new AbortController,a=e.signal;return function(){var e=Object(V.a)(M.a.mark(function e(){var t,n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=ie.names.map(function(e){return X.orgs.get({org:e.owner,request:{signal:a}})}),e.next=3,Promise.all(t);case 3:n=e.sent,o(n.map(function(e){return e.data}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),function(){e.abort()}},[]),(i=i.map(function(e,t){return r.a.createElement(K.a,{item:!0,key:t,xs:6,md:2,className:a.flexItem,title:e.name?e.name:e.login},r.a.createElement(K.a,{item:!0},r.a.createElement("img",{src:e.avatar_url,alt:e.name?e.name:e.login,className:a.imgResponse})),r.a.createElement(K.a,{item:!0},r.a.createElement(j.a,{variant:"body2",component:"div",className:a.textFlow},e.name?e.name:e.login)))})).length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h6",className:a.heading},"Contributed To"),r.a.createElement(K.a,{container:!0,justify:"flex-start",direction:"row"},i)):""}var le=t(30),se=t(95),me=t.n(se),ue=Object(Z.a)(function(e){return{icon:{width:"16px",height:"auto"}}});function pe(){var e=ue();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{container:!0,justify:"center",alignContent:"center",spacing:2},r.a.createElement(K.a,{item:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/thisismenaseem/"},r.a.createElement(le.a,{icon:["fab","linkedin"],color:"#0077B5"}))),r.a.createElement(K.a,{item:!0},r.a.createElement("a",{href:"https://github.com/naseemali925",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(le.a,{icon:["fab","github"],color:"#161616"}))),r.a.createElement(K.a,{item:!0},r.a.createElement("a",{href:"https://www.instagram.com/naseem.ali.925/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(le.a,{icon:["fab","instagram"],color:"#e4405f"}))),r.a.createElement(K.a,{item:!0},r.a.createElement("a",{href:"https://www.facebook.com/naseem.ali.1466",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(le.a,{icon:["fab","facebook-f"],color:"#3b5999"}))),r.a.createElement(K.a,{item:!0},r.a.createElement("a",{href:"https://twitter.com/thisismenaseem",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(le.a,{icon:["fab","twitter"],color:"#55acee"}))),r.a.createElement(K.a,{item:!0},r.a.createElement("a",{href:"mailto:naseem.ali.925@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(me.a,{className:e.icon})))))}var de=Object(Z.a)(function(e){return{gridContainer:{flexGrow:1},gridItemFlex:{display:"flex",flexDirection:"column",alignItems:"center"},textCaps:{fontVariant:"all-petite-caps",color:"rgba(0,0,0,0.5)",fontSize:"18px",fontWeight:"bold"},hello:{color:"rgba(0,0,0,0.5)",fontWeight:"bold",fontVariant:"all-petite-caps"},hire:{marginTop:"16px",color:"white",backgroundColor:"#4BB543"},marginTop:{marginTop:"16px"},marginTop20:{marginTop:"20px"},marginTop24:{marginTop:"24px"},heading:{marginTop:"16px",fontSize:"18px",color:"#242424"},bold:{fontWeight:"bold"}}});function ge(e){var a=Object(n.useState)({}),t=Object(d.a)(a,2),i=t[0],o=t[1],c=Object(n.useState)([]),l=Object(d.a)(c,2),s=l[0],m=l[1],u=de();return Object(n.useEffect)(function(){var e=new AbortController,a=e.signal;return function(){var e=Object(V.a)(M.a.mark(function e(){var t,n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.users.getAuthenticated({request:{signal:a}});case 3:return t=e.sent,o(Object(g.a)({},t.data,{name:t.data.name,image:t.data.avatar_url})),e.next=7,X.orgs.listForAuthenticatedUser({request:{signal:a}});case 7:n=e.sent,m(n.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.debug(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}()(),function(){e.abort()}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{maxWidth:"md"},r.a.createElement(K.a,{direction:"row",container:!0,spacing:2,className:u.gridContainer},r.a.createElement(K.a,{item:!0,xs:6,style:{display:"flex",alignItems:"center"}},r.a.createElement(K.a,{direction:"column",container:!0,className:u.gridContainer,justify:"flex-start"},r.a.createElement(K.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"body2",className:u.hello},"Hello")),r.a.createElement(K.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"h3",style:{fontWeight:"bold"}},"I'm ",i.name?i.name.split(" ")[0]:"Naseem")),i.hireable?r.a.createElement(K.a,{item:!0,md:12},r.a.createElement(Q.a,{size:"medium",variant:"contained",color:"primary",className:u.hire},"Hire Me")):"")),r.a.createElement(K.a,{item:!0,xs:6},r.a.createElement(re,{user:i}),r.a.createElement(pe,null)))),r.a.createElement($.a,{maxWidth:"md",className:u.marginTop24},r.a.createElement(Y.a,null,r.a.createElement(K.a,{direction:"row",container:!0,spacing:2,justify:"space-around"},r.a.createElement(K.a,{item:!0,md:3,className:u.gridItemFlex},r.a.createElement(j.a,{variant:"body2",className:u.textCaps},"Repositories"),r.a.createElement(j.a,{className:u.bold},i.public_repos?i.public_repos:"...")),r.a.createElement(K.a,{item:!0,md:3,className:u.gridItemFlex},r.a.createElement(j.a,{variant:"body2",className:u.textCaps},"Followers"),r.a.createElement(j.a,{className:u.bold},i.followers?i.followers:"...")),r.a.createElement(K.a,{item:!0,md:3,className:u.gridItemFlex},r.a.createElement(j.a,{variant:"body2",className:u.textCaps},"Gists"),r.a.createElement(j.a,{className:u.bold},i.public_gists?i.public_gists:"...")),r.a.createElement(K.a,{item:!0,md:3,className:u.gridItemFlex},r.a.createElement(j.a,{variant:"body2",className:u.textCaps},"Collaborators"),r.a.createElement(j.a,{className:u.bold},i.collaborators?i.collaborators:"..."))))),r.a.createElement($.a,{maxWidth:"md",className:u.marginTop},r.a.createElement(K.a,{container:!0,justify:"flex-start",direction:"column"},r.a.createElement(K.a,{item:!0,md:12},r.a.createElement(j.a,{variant:"h6",className:u.heading},"About me")),r.a.createElement(K.a,{item:!0,md:12},r.a.createElement(j.a,{paragraph:!0,style:{fontStyle:"italic",marginTop:"8px"}},i.bio?i.bio:"")))),s.length>0?r.a.createElement($.a,{maxWidth:"md"},r.a.createElement(ce,{orgs:s})):"")}var fe=t(214),he=t(215),be=t(216),Ee=t(217),we=t(235),xe=t(77),ve=new window.ColorThief,ye=Object(h.a)({card:{maxWidth:280,display:"flex",height:"100%",flexDirection:"column",boxShadow:"0 30px 40px 0 rgba(16, 36, 94, 0.2)"},media:{height:160,objectFit:"contain",backgroundSize:"contain"},description:{flexGrow:"1"},root:{backgroundColor:"#4BB543"}}),je=function(e){return"/about-me/static/"+e},ke=function(e,a){return new Promise(function(t,n){var r=new Image;r.src=je(a),r.crossOrigin="",r.addEventListener("load",function(){try{var a=ve.getColor(r,90);t({index:e,color:a})}catch(i){n()}},!1)})};function Ne(){var e=ye(),a=r.a.useState({}),t=Object(d.a)(a,2),n=t[0],i=t[1];return r.a.useEffect(function(){var e=xe.map(function(e,a){return ke(a,e.image)});return Promise.all(e).then(function(e){e.forEach(function(e){i(function(a){return Object(g.a)({},a,Object(p.a)({},e.index,e.color))})})}).catch(function(e){console.log(e)}),function(){}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{container:!0,justify:"center",alignItems:"stretch",spacing:2},xe.map(function(a,t){return r.a.createElement(K.a,{item:!0,key:t},r.a.createElement(fe.a,{className:e.card},r.a.createElement(he.a,{style:n[t]?{backgroundColor:"rgb(".concat(n[t][0],",").concat(n[t][1],",").concat(n[t][2],")")}:{},className:e.media,image:je(a.image),title:a.title}),r.a.createElement(be.a,{className:e.description},r.a.createElement(j.a,{gutterBottom:!0,variant:"h6"},a.title),r.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},a.description)),r.a.createElement(Ee.a,null,r.a.createElement(N.a,{"aria-label":"GitHub",onClick:function(){window.open(a.github,"_blank")}},r.a.createElement(le.a,{icon:["fab","github"],color:"#161616"})),r.a.createElement(we.a,{size:"small",label:a.type.toUpperCase()}),a.isLive?r.a.createElement(we.a,{size:"small",label:"It's Live!",clickable:!0,className:e.root,color:"primary",onClick:function(){window.open(a.url,"_blank")}}):"")))})))}var Oe=t(96),Ce=Object(h.a)({paper:{boxShadow:"0 30px 40px 0 rgba(16, 36, 94, 0.2)"},img:{width:"100%",height:"auto"},anchor:{display:"flex",flexDirection:"column",textDecoration:"none"}}),Ae=function(e){return"/about-me/static/"+e};function Se(){var e=Ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{container:!0,justify:"center",alignItems:"stretch",spacing:3},Oe.map(function(a,t){return r.a.createElement(K.a,{item:!0,key:t},r.a.createElement(Y.a,{className:e.paper},r.a.createElement("a",{href:a.url,className:e.anchor,onClick:function(e){a.url||e.preventDefault()}},r.a.createElement(Q.a,{variant:"outlined"},a.name),r.a.createElement("img",{src:Ae(a.image),alt:a.name,className:e.img,title:a.name}))))})))}function Ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,component:ge}),r.a.createElement(L.a,{path:"/projects",component:Ne}),r.a.createElement(L.a,{path:"/cert",component:Se})))}var Te=[{title:"About Me",icon:P.a,to:"/"},{title:"Projects",icon:_.a,to:"/projects"},{title:"Certifications",icon:D.a,to:"/cert"},{title:"Achievements",icon:H.a}],Fe=[{title:"Education",icon:G.a},{title:"Skills",icon:q.a},{title:"Languages",icon:z.a}],Be=Object(h.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(g.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},gridContainer:{flexGrow:1},colorPrimary:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}});var We=Object(L.f)(function(e){var a=Be(),t=Object(b.a)(),n=r.a.useState(!1),i=Object(d.a)(n,2),o=i[0],c=i[1],l=r.a.useState(0),s=Object(d.a)(l,2),m=s[0],u=s[1];return r.a.createElement("div",{className:a.root},r.a.createElement(w.a,null),r.a.createElement(x.a,{color:"primary",position:"fixed",className:Object(f.a)(a.appBar,Object(p.a)({},a.appBarShift,o)),classes:{colorPrimary:a.colorPrimary}},r.a.createElement(v.a,{variant:"regular"},r.a.createElement(N.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){c(!0)},edge:"start",className:Object(f.a)(a.menuButton,o&&a.hide)},r.a.createElement(C.a,null)),r.a.createElement(j.a,{variant:"h6",noWrap:!0},"About Naseem"))),r.a.createElement(E.a,{className:a.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(N.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(S.a,null):r.a.createElement(T.a,null))),r.a.createElement(k.a,null),r.a.createElement(y.a,null,Te.map(function(a,t){return r.a.createElement(F.a,{button:!0,key:t,selected:m===t,onClick:function(){u(t),e.history.push(a.to)}},r.a.createElement(B.a,null,r.a.createElement(a.icon,null)),r.a.createElement(W.a,{primary:a.title}))})),r.a.createElement(k.a,null),r.a.createElement(y.a,null,Fe.map(function(e,a){return r.a.createElement(F.a,{button:!0,key:a+Te.length,selected:m===a+Te.length,onClick:function(){return u(a+Te.length)}},r.a.createElement(B.a,null,r.a.createElement(e.icon,null)),r.a.createElement(W.a,{primary:e.title}))}))),r.a.createElement("main",{className:Object(f.a)(a.content,Object(p.a)({},a.contentShift,o))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Ie,null)))}),Le=t(52),Pe=t(101),_e=t(58);Le.b.add(Pe.a);var De=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(_e.a,{basename:"/"},r.a.createElement(We,null))}}]),a}(r.a.Component);t(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e){e.exports=[{title:"AbhiTak News App",image:"projects/abhitak.jpg",url:"https://play.google.com/store/apps/details?id=softpro.abhitak",isLive:!0,type:"app",description:"Abhitak News is best defined as a responsible channel with a fair and balanced approach that combines prompt reporting with insightful analysis of news and current affairs.",github:"https://github.com/naseemali925/Acmez",contributers:[{name:"Naseem Ali",avatar:""}]},{title:"Oyebooks",image:"projects/oyebooks.webp",url:"https://play.google.com/store/apps/details?id=com.obiquos.oyebooksapp",isLive:!0,type:"app",description:"Oyebooks is an E-commerce Platform where we sell any pre-owned book at just Rs. 100 to make knowledge more economical and easily accessible, which no other platform does.",github:"",contributers:[{name:"Naseem Ali",avatar:""}]},{title:"Graphing Module",image:"projects/graphing.png",url:"https://play.google.com/store/apps/details?id=com.obiquos.oyebooksapp",isLive:!1,type:"module",description:"A module to plot the essentials of an HVAC system to facilitate monitoring for better effeciency of the overall system",github:"",contributers:[{name:"Naseem Ali",avatar:""},{name:"Shouvik Mitra",avatar:""}]},{title:"Lumos",image:"projects/lumos.png",url:"https://github.com/naseemali925/Lumos",isLive:!0,type:"app",description:"An Android Application Which Is Designed To Help People Communicate With The Differently Abled, Thus Making This World A More Connected Place.",github:"https://github.com/naseemali925/Lumos",contributers:[{name:"Naseem Ali",avatar:""}]}]},94:function(e){e.exports={names:[{owner:"octokit",repo:"rest.js"},{owner:"elastic",repo:"elasticsearch-js"},{owner:"gscdit",repo:"betterpledge-frontend"},{owner:"namica",repo:"nn_digits"},{owner:"SmartJoules",repo:"sjpl-graph-ql, Devops, JouleTrack-API"},{owner:"eclipse",repo:"mosquitto"},{owner:"mozilla",repo:"mozilla-campus-clubs"},{owner:"dialogflow",repo:"dialogflow-fulfillment-nodejs"},{owner:"fastify",repo:"fastify, fastify-jwt"},{owner:"UdacityAndroidBasicsScholarship",repo:"audacity"},{owner:"jitpack",repo:"jitpack.io"},{owner:"Devlight",repo:"ArcProgressStackView"}]}},96:function(e){e.exports=[{name:"AWS Fundamentals: Going Cloud-Native",issuer:"Coursera",image:"cert/aws.png",expires:!1,type:"Certification",issueDates:{start:"Jan, 2019",end:""},credentialId:"HDHU7HWUPA9L",url:"https://www.coursera.org/account/accomplishments/verify/HDHU7HWUPA9L"},{name:"Android Basics Nanodegree by Google",issuer:"Udacity",image:"cert/nano_android.png",expires:!1,type:"Certification",issueDates:{start:"Nov, 2018",end:""},credentialId:"TMSE4GVX",url:"https://confirm.udacity.com/TMSE4GVX"},{name:"Obiquos Technologies Private Limited - Internship (Virtual)",issuer:"Obiquos",image:"cert/internshala.png",expires:!1,type:"Internship",issueDates:{start:"Jun, 2018",end:""},credentialId:"",url:""}]}},[[105,1,2]]]);
//# sourceMappingURL=main.d21a3598.chunk.js.map