(this["webpackJsonpreact-certification-2020"]=this["webpackJsonpreact-certification-2020"]||[]).push([[0],{15:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,l,d,s,p,u,m,f,h,b,x,g,y,j,v,w,E,O,k,B,C,z,D,S,V,H,L,I=t(0),T=t.n(I),J=t(10),N=t.n(J),R=t(3),A=t(1),M=Object(I.createContext)(),P=t(4),W="search",q="showVideoDetails",G="showVideoList",K="theme",U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W:return Object(P.a)(Object(P.a)({},e),n.payload);case q:return Object(P.a)(Object(P.a)({},e),{},{showVideoDetails:!0});case G:return Object(P.a)(Object(P.a)({},e),{},{showVideoDetails:!1});case K:return Object(P.a)(Object(P.a)({},e),{},{theme:!e.theme});default:return e}},X=t(2),Y=Object(A.b)(a||(a=Object(X.a)(['\n    body{\n        margin: 0;\n        padding: 0;\n        font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n    }\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        list-style: none;\n    }\n']))),F=t(7),Q=t.n(F),Z=t(14),$=A.c.button(r||(r=Object(X.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  width: 345px;\n  min-height: 345px;\n  margin: 10px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.cardBg}),(function(e){return e.theme.color}),(function(e){return e.theme.cardBgHover})),_=A.c.div(i||(i=Object(X.a)(["\n  display: block;\n  width: 100%;\n  height: 140px;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"])),(function(e){return e.src})),ee=A.c.p(c||(c=Object(X.a)(["\n  text-align: left;\n  margin-bottom: 0.35em;\n\n  ","\n"])),(function(e){if("h2"===e.as)return"font-weight: 500;"})),ne=A.c.div(o||(o=Object(X.a)(["\n  padding: 16px;\n"]))),te=function(e){var n=e.item,t=e.onClick;return T.a.createElement($,{onClick:t},T.a.createElement(_,{src:n.snippet.thumbnails.medium.url}),T.a.createElement(ne,null,T.a.createElement(ee,{as:"h2"},n.snippet.title),T.a.createElement(ee,{as:"p"},n.snippet.description)))},ae=A.c.div(l||(l=Object(X.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 0 auto;\n\n  @media only screen and (max-width: 960px) {\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.color})),re=A.c.div(d||(d=Object(X.a)(["\n  @media only screen and (max-width: 960px) {\n    ","\n  }\n\n  @media only screen and (min-width: 960px) {\n    ","\n\n    ","\n  }\n"])),(function(e){if(12===e.xs)return"width: 100%;"}),(function(e){if(8===e.md)return"width: 70%"}),(function(e){if(4===e.md)return"width: 30%; margin-left: 24px;"})),ie=A.c.div(s||(s=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ce=A.c.div(p||(p=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100px;\n  cursor: pointer;\n  padding: 10px;\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n      0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  }\n"])),(function(e){return e.theme.cardBgHover})),oe=A.c.img(u||(u=Object(X.a)(["\n  width: 120px;\n  height: 80px;\n  display: block;\n  background-size: cover;\n  background-position: center;\n"]))),le=A.c.div(m||(m=Object(X.a)(["\n  margin-left: 16px;\n  > h5 {\n    font-size: 14px;\n    margin-bottom: 10px;\n    font-weight: 600;\n  }\n  > p {\n    font-size: 12px;\n    color: ",";\n  }\n"])),(function(e){return e.theme.textTiny})),de=A.c.p(f||(f=Object(X.a)(["\n  margin: 20px 0;\n  ","\n"])),(function(e){if("h2"===e.as)return"font-weight: 500;"})),se=function(e){var n=e.video,t=e.videoList,a=void 0===t?[]:t,r=e.selectVideo,i=n.id,c=n.snippet;return T.a.createElement(ae,{container:!0},T.a.createElement(re,{xs:12,md:8},T.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(i.videoId),frameBorder:"0",title:"video",width:"100%",height:"600px"}),T.a.createElement(de,{as:"h2"},c.title),T.a.createElement("p",null,c.description)),T.a.createElement(re,{xs:12,md:4},T.a.createElement(ie,null,a.map((function(e){return T.a.createElement(ce,{key:e.id.videoId,type:"button",onClick:function(){return r(e)}},T.a.createElement(oe,{src:e.snippet.thumbnails.medium.url,alt:e.snippet.title}),T.a.createElement(le,null,T.a.createElement("h5",null,e.snippet.title),T.a.createElement("p",null,e.snippet.channelTitle)))})))))},pe=A.c.div(h||(h=Object(X.a)(["\n  background-color: ",";\n  padding-top: 30px;\n  min-height: calc(100vh - 64px);\n"])),(function(e){return e.theme.body})),ue=A.c.div(b||(b=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),me=A.c.div(x||(x=Object(X.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0px auto;\n  box-sizing: border-box;\n\n  @media only screen and (min-width: 0px) {\n    width: 100%;\n    justify-content: center;\n  }\n  @media only screen and (min-width: 770px) {\n    width: 770px;\n  }\n  @media only screen and (min-width: 1135px) {\n    width: 1135px;\n  }\n  @media only screen and (min-width: 1500px) {\n    width: 1500px;\n  }\n"]))),fe=A.c.p(g||(g=Object(X.a)(["\n  text-align: center;\n  font-size: 3.75rem;\n  font-weight: 300;\n  line-height: 1.2;\n  letter-spacing: -0.00833em;\n  padding: 12px;\n  color: ",";\n"])),(function(e){return e.theme.color})),he=Object(A.d)(y||(y=Object(X.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),be=A.c.div(j||(j=Object(X.a)(["\n  border: 8px solid ",";\n  border-top: 8px solid #ccc;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  animation: "," 2s linear infinite;\n"])),(function(e){return e.theme.headerBg}),he),xe=function(){var e=Object(I.useContext)(M),n=e.state,t=e.dispatch,a=n.showVideoDetails,r=function(){var e=Object(I.useContext)(M).state.search,n=Object(I.useState)([]),t=Object(R.a)(n,2),a=t[0],r=t[1],i=Object(I.useState)(!0),c=Object(R.a)(i,2),o=c[0],l=c[1],d=Object(I.useState)(),s=Object(R.a)(d,2),p=s[0],u=s[1],m=function(){var n=Object(Z.a)(Q.a.mark((function n(){var t,a;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyB4emm7HLDp7mMWLbBDJyGnt0YtHcoUHE0","&type=video&part=snippet&maxResults=24&q=").concat(e));case 4:return t=n.sent,n.next=7,t.json();case 7:a=n.sent,r(a.items),l(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),u(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}();return Object(I.useEffect)((function(){m()}),[e]),{videoList:a,loading:o,error:p}}(),i=r.videoList,c=r.loading,o=Object(I.useState)({}),l=Object(R.a)(o,2),d=l[0],s=l[1],p=function(e){s(e),a||t({type:q})};return T.a.createElement(pe,null,a?T.a.createElement(se,{video:d,videoList:i,selectVideo:p}):T.a.createElement(ue,null,T.a.createElement(fe,{as:"h2"},"Welcome to the Challenge!"),T.a.createElement(me,null,c?T.a.createElement(be,{"data-testid":"loader"}):i.map((function(e){return"youtube#video"===e.id.kind&&T.a.createElement(te,{key:e.id.videoId,item:e,onClick:function(){return p(e)}})})))))},ge=A.c.div(v||(v=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n"]))),ye=A.c.label(w||(w=Object(X.a)(["\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n\n  > input {\n    display: none;\n  }\n"]))),je=A.c.span(E||(E=Object(X.a)(["\n  position: absolute;\n  cursor: pointer;\n  background-color: #1e1e2f;\n  border-radius: 25px;\n  top: 5px;\n  bottom: 5px;\n  right: 0;\n  left: 0;\n  transition: background-color 0.2s ease;\n\n  &:before {\n    position: absolute;\n    content: '';\n    left: 0;\n    top: -5px;\n    width: 25px;\n    height: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n\n    ","\n  }\n"])),(function(e){return e.dark&&"transform: translateX(25px);"})),ve=A.c.p(O||(O=Object(X.a)(["\n  margin-right: 10px;\n"]))),we=function(e){var n=e.text,t=e.checked,a=e.setChecked;return T.a.createElement(ge,null,T.a.createElement(ve,null,n),T.a.createElement(ye,null,T.a.createElement("input",{type:"checkbox",checked:t,onChange:function(e){return a(e.target.checked)}}),T.a.createElement(je,{dark:t})))},Ee=A.c.nav(k||(k=Object(X.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.headerBg})),Oe=A.c.ul(B||(B=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 24px;\n  padding-right: 24px;\n  height: 64px;\n"]))),ke=A.c.li(C||(C=Object(X.a)(["\n  padding: 0 12px;\n  cursor: pointer;\n\n  > i {\n    color: #fff;\n    font-size: 1.5rem;\n    margin-right: 16px;\n  }\n"]))),Be=A.c.div(z||(z=Object(X.a)(["\n  flex: 1;\n"]))),Ce=A.c.form(D||(D=Object(X.a)(["\n  width: 248px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.15);\n  height: 35px;\n  border-radius: 4px;\n"]))),ze=A.c.button(S||(S=Object(X.a)(["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  background: transparent;\n  padding: 0px 16px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n\n  > i {\n    width: 16px;\n    height: auto;\n  }\n"]))),De=A.c.button(V||(V=Object(X.a)(["\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  background: transparent;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n"]))),Se=A.c.input(H||(H=Object(X.a)(["\n  position: absolute;\n  left: 48px;\n  top: 0;\n  outline: 0;\n  color: inherit;\n  color: #fff;\n  background: transparent;\n  width: 200px;\n  height: 100%;\n  border: 0;\n  font-size: 16px;\n"]))),Ve=A.c.div(L||(L=Object(X.a)(["\n  @media only screen and (max-width: 600px) {\n    ","\n  }\n  @media only screen and (max-width: 960px) {\n    ","\n  }\n  @media only screen and (max-width: 1280px) {\n    ","\n  }\n"])),(function(e){if("sm"===e.on)return"display: none;"}),(function(e){if("md"===e.on)return"display: none;"}),(function(e){if("lg"===e.on)return"display: none;"})),He=function(){var e=Object(I.useContext)(M),n=e.state,t=e.dispatch,a=Object(I.useState)(n.search),r=Object(R.a)(a,2),i=r[0],c=r[1],o=function(e){e.preventDefault(),i?(t({type:W,payload:{search:i}}),n.showVideoDetails&&t({type:G})):console.log("empty")};return T.a.createElement(Ee,null,T.a.createElement(Oe,null,T.a.createElement(ke,null,T.a.createElement(De,null,T.a.createElement("i",{className:"fas fa-bars fa-lg"}))),T.a.createElement(ke,null,T.a.createElement(Ce,{onSubmit:o},T.a.createElement(ze,{type:"submit"},T.a.createElement("i",{className:"fas fa-search fa-lg"})),T.a.createElement(Se,{placeholder:"Search",type:"text",value:i,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&o}}))),T.a.createElement(Be,null),T.a.createElement(Ve,{on:"md"},T.a.createElement(ke,null,T.a.createElement(we,{text:"Dark mode",checked:n.theme,setChecked:function(){t({type:K})}}))),T.a.createElement(Ve,{on:"md"},T.a.createElement(ke,null,T.a.createElement(De,null,T.a.createElement("i",{className:"fas fa-user-circle fa-3x"}))))))},Le={body:"#E5E5E5",cardBg:"#fff",cardBgHover:"rgb(240, 240, 240)",color:"#000",headerBg:"#1C5476",textTiny:"rgb(70, 70, 70)"},Ie={body:"#1e1e2f",cardBg:"#27293d",cardBgHover:"#7b1fa2",color:"#fff",headerBg:"#7b1fa2",textTiny:"#fff"};var Te=function(){var e=Object(I.useReducer)(U,{},(function(){return{search:"wizeline",showVideoDetails:!1,theme:!0}})),n=Object(R.a)(e,2),t=n[0],a=n[1];return T.a.createElement(M.Provider,{value:{state:t,dispatch:a}},T.a.createElement(A.a,{theme:t.theme?Le:Ie},T.a.createElement(Y,null),T.a.createElement(He,null),T.a.createElement(xe,null)))};N.a.render(T.a.createElement(T.a.StrictMode,null,T.a.createElement(Te,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5b32bd2e.chunk.js.map