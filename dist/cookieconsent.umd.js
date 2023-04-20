/*!
* CookieConsent 3.0.0-rc.13
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,v:null,h:null,C:null,S:'',T:!0,M:!1,D:!1,A:!1,k:!1,N:!1,H:[],V:!1,F:!0,I:[],P:!1,j:'',O:!1,R:[],B:[],G:[],J:[],L:!1,U:!1,$:!1,q:[],K:[],W:null,X:[],Y:[],Z:{},ee:{},te:{},oe:{},ne:{},ae:[],se:[]},this.ce={re:{},ie:{}},this.le={},this.de={fe:'cc:onFirstConsent',_e:'cc:onConsent',ue:'cc:onChange',pe:'cc:onModalShow',me:'cc:onModalHide',ge:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),y=(e,t)=>-1!==b(e,t),v=e=>Array.isArray(e),h=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!v(e),w=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),T=()=>document.activeElement,M=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),E=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},k=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),V=(e,t)=>e.appendChild(t),F=(e,t)=>e.classList.add(t),I=(e,t)=>F(e,'cm__'+t),P=(e,t)=>F(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=O(n)}return t},R=()=>{const e={},{R:t,Z:o,ee:n}=g.o;for(const a of t)e[a]=L(n[a],S(o[a]));return e},B=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({be:e,ye:t,ve:o})},J=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.j):e},L=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!y(n,e))).concat(n.filter((e=>!y(o,e))))},U=e=>{g.o.B=x(e),g.o.j=(()=>{let e='custom';const{B:t,R:o,G:n}=g.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>D(d,`[data-cc="${e}"]`),u=(e,t)=>{M(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(a+'all'),y=_(a+'necessary'),v=_(a+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)k(e,'aria-haspopup','dialog'),G(e,f,(e=>{M(e),c()})),h&&G(e,'mouseenter',(e=>{M(e),g.o.k||o(t,n)}),!0);for(let e of m)k(e,'aria-haspopup','dialog'),G(e,f,(e=>{M(e),s(!0)}),!0);for(let e of b)G(e,f,(e=>{u(e,'all')}),!0);for(let e of v)G(e,f,(e=>{u(e)}),!0);for(let e of y)G(e,f,(e=>{u(e,[])}),!0)},$=(e,t)=>{e?.focus(),t&&(g.o.W=e,g.o.X=1===t?g.o.q:g.o.K)};let q;const K=e=>{clearTimeout(q),e?F(g.ce.he,s):q=setTimeout((()=>{j(g.ce.he,s)}),500)},Q=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),W=e=>{const{o:t,ce:o}=g,n=(e,t)=>{const o=D(e,Q);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.M&&n(o.Ce,t.q),2===e&&t.k&&n(o.we,t.K)},X=(e,t,o)=>{const{ue:n,_e:a,fe:s,me:c,ge:r,pe:i}=g.le,l=g.de,d={cookie:g.o.p};if(t){const n={modalName:t};return e===l.pe?w(i)&&i(n):e===l.me?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),B(e,n)}e===l.fe?w(s)&&s(O(d)):e===l._e?w(a)&&a(O(d)):(d.changedCategories=g.o.I,d.changedServices=g.o.oe,w(n)&&n(O(d))),B(e,O(d))},Y=e=>{const{ee:t,oe:o,R:n,Z:a,ae:s,se:r,p:i,I:l}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&y(t[e],o)&&w(s)?(n.Se=!0,s()):n.Se&&!y(t[e],o)&&w(c)&&(n.Se=!1,c())}}if(!g.t.manageScriptTags)return;const d=s,f=e||i.categories||[],_=(e,n)=>{if(n<e.length){const a=e[n],s=r[n],i=s.xe,d=s.Te,u=y(f,i),p=!!d&&y(t[i],d);if(!s.Me){let t=!d&&!s.De&&u,r=d&&!s.De&&p,f=!d&&s.De&&!u&&y(l,i),m=d&&s.De&&!p&&y(o[i]||[],d);if(t||f||r||m){s.Me=!0;const t=H(a,'type',!0);N(a,'type',!!t),N(a,c);let o=H(a,'src',!0);o&&N(a,'src',!0);const r=A('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)k(r,e,a[e]||H(a,e));if(t&&(r.type=t),o?r.src=o:o=a.src,o&&(r.onload=r.onerror=()=>{_(e,++n)}),a.replaceWith(r),o)return}}_(e,++n)}};_(d,0)},Z='bottom',ee='left',te='center',oe='right',ne='inline',ae='wide',se='pm--',ce=['middle','top',Z],re=[ee,te,oe],ie={box:{Ee:[ae,ne],Ae:ce,ke:re,Ne:Z,He:oe},cloud:{Ee:[ne],Ae:ce,ke:re,Ne:Z,He:te},bar:{Ee:[ne],Ae:ce.slice(1),ke:[],Ne:Z,He:''}},le={box:{Ee:[],Ae:[],ke:[],Ne:'',He:''},bar:{Ee:[ae],Ae:[],ke:[ee,oe],Ne:'',He:ee}},de=e=>{const t=g.o.i.guiOptions,o=t?.consentModal,n=t?.preferencesModal;0===e&&fe(g.ce.Ce,ie,o,'cm--','box','cm'),1===e&&fe(g.ce.we,le,n,se,'box','pm')},fe=(e,t,o,n,a,s)=>{e.className=s;const c=o?.layout,r=o?.position,i=o?.flipButtons,l=!1!==o?.equalWeightButtons,d=c?.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=y(p.Ee,_)&&_,b=r?.split(' ')||[],v=b[0],h=n===se?b[0]:b[1],C=y(p.Ae,v)?v:p.Ne,w=y(p.ke,h)?h:p.He,S=t=>F(e,n+t);S(u),S(m),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Ve:e,Fe:t}=g.ce;e&&(l?j(e,x):F(e,x)),t&&(l?j(t,x):F(t,x))}else{const{Ie:e}=g.ce;e&&(l?j(e,x):F(e,x))}},_e=(e,t)=>{const o=g.o,n=g.ce,{hide:a,hidePreferences:s,acceptCategory:c}=e,u=e=>{c(e),s(),a()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,y=m.closeIconLabel,v=m.acceptAllBtn,w=m.acceptNecessaryBtn,x=m.savePreferencesBtn,T=m.sections,M=v||w||x;if(n.Pe)n.je=A(r),P(n.je,'body');else{n.Pe=A(r),F(n.Pe,'pm-wrapper'),n.Pe.tabIndex=-1,n.we=A(r),n.we.style.visibility='hidden',F(n.we,'pm'),k(n.we,'role','dialog'),k(n.we,l,!0),k(n.we,'aria-modal',!0),k(n.we,'aria-labelledby','pm__title'),G(n.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=A(r),P(n.Oe,'header'),n.Re=A(r),P(n.Re,'title'),n.Re.id='pm__title',k(n.Re,'role','heading'),k(n.Re,'aria-level','2'),n.Be=A(i),P(n.Be,'close-btn'),k(n.Be,'aria-label',m.closeIconLabel||''),G(n.Be,f,s),n.Ge=A('span'),n.Ge.tabIndex=-1,V(n.Be,n.Ge),n.Je=A(r),P(n.Je,'body'),n.Le=A(r),P(n.Le,'footer');var D=A(r);F(D,'btns');var E=A(r),N=A(r);P(E,d),P(N,d),V(n.Le,E),V(n.Le,N),V(n.Oe,n.Re),V(n.Oe,n.Be),V(n.we,n.Oe),V(n.we,n.Je),M&&V(n.we,n.Le),V(n.Pe,n.we)}let H;b&&(n.Re.innerHTML=b,y&&k(n.Be,'aria-label',y)),T?.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&o.O[c],_=e.cookieTable,u=_?.body,p=_?.caption,g=u?.length>0,b=!!d,y=b&&o.Z[c],v=C(y)&&S(y)||[],w=b&&(!!s||!!g||S(y).length>0);var x=A(r);if(P(x,'section'),w||s){var T=A(r);P(T,'section-desc-wrapper')}let M=v.length;if(w&&M>0){const e=A(r);P(e,'section-services');for(const t of v){const o=y[t],n=o?.label||t,a=A(r),s=A(r),i=A(r),l=A(r);P(a,'service'),P(l,'service-title'),P(s,'service-header'),P(i,'service-icon');const f=ue(n,t,d,!0,c);l.innerHTML=n,V(s,i),V(s,l),V(a,s),V(a,f),V(e,a)}V(T,e)}if(a){var D=A(r),E=A(b?i:r);if(P(D,'section-title-wrapper'),P(E,'section-title'),E.innerHTML=a,V(D,E),b){const e=A('span');P(e,'section-arrow'),V(D,e),x.className+='--toggle';const t=ue(a,c,d);let o=m.serviceCounterLabel;if(M>0&&h(o)){let e=A('span');P(e,'badge'),P(e,'service-counter'),k(e,l,!0),k(e,'data-servicecounter',M),o&&(o=o.split('|'),o=o.length>1&&M>1?o[1]:o[0],k(e,'data-counterlabel',o)),e.innerHTML=M+(o?' '+o:''),V(E,e)}if(w){P(x,'section--expandable');var N=c+'-desc';k(E,'aria-expanded',!1),k(E,'aria-controls',N)}V(D,t)}else k(E,'role','heading'),k(E,'aria-level','3');V(x,D)}if(s){var I=A(r);P(I,'section-desc'),I.innerHTML=s,V(T,I)}if(w&&(k(T,l,'true'),T.id=N,((e,t,o)=>{G(E,f,(()=>{t.classList.contains('is-expanded')?(j(t,'is-expanded'),k(o,'aria-expanded','false'),k(e,l,'true')):(F(t,'is-expanded'),k(o,'aria-expanded','true'),k(e,l,'false'))}))})(T,x,E),g)){const e=A('table'),o=A('thead'),a=A('tbody');if(p){const t=A('caption');P(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}P(e,'section-table'),P(o,'table-head'),P(a,'table-body');const s=_.headers,c=S(s),i=n.Ue.createDocumentFragment(),l=A('tr');k(l,'role','row');for(const e of c){const o=s[e],n=A('th');n.id='cc__row-'+o+t,k(n,'scope','col'),P(n,'table-th'),n.innerHTML=o,V(i,n)}V(l,i),V(o,l);const d=n.Ue.createDocumentFragment();for(const e of u){const o=A('tr');k(o,'role','row'),P(o,'table-tr');for(const n of c){const a=s[n],c=e[n],i=A('td'),l=A(r);P(i,'table-td'),k(i,'data-column',a),k(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),V(i,l),V(o,i)}V(d,o)}V(a,d),V(e,o),V(e,a),V(T,e)}(w||s)&&V(x,T);const O=n.je||n.Je;b?(H||(H=A(r),P(H,'section-toggles')),H.appendChild(x)):H=null,V(O,H||x)})),(v||w)&&(w&&(n.Ie||(n.Ie=A(i),P(n.Ie,'btn'),k(n.Ie,_,'necessary'),V(E,n.Ie),G(n.Ie,f,(()=>u([])))),n.Ie.innerHTML=w),v&&(n.ze||(n.ze=A(i),P(n.ze,'btn'),k(n.ze,_,'all'),V(E,n.ze),G(n.ze,f,(()=>u('all')))),n.ze.innerHTML=v)),x&&(n.$e||(n.$e=A(i),P(n.$e,'btn'),P(n.$e,'btn--secondary'),k(n.$e,_,'save'),V(N,n.$e),G(n.$e,f,(()=>u()))),n.$e.innerHTML=x),n.je&&(n.we.replaceChild(n.je,n.Je),n.Je=n.je),de(1),o.k||(o.k=!0,X(g.de.ge,p,n.we),t(e),W(2),V(n.qe,n.Pe),setTimeout((()=>F(n.Pe,'cc--anim')),100))};function ue(e,t,n,a,s){const r=g.o,i=g.ce,d=A('label'),_=A('input'),u=A('span'),p=A('span'),m=A('span'),b=A('span');if(_.type='checkbox',F(d,'section__toggle-wrapper'),F(_,'section__toggle'),F(m,'toggle__icon-on'),F(b,'toggle__icon-off'),F(u,'toggle__icon'),F(p,'toggle__label'),k(u,l,'true'),a?(F(d,'toggle-service'),k(_,c,s),i.ie[s][t]=_):i.re[t]=_,a?(e=>{G(_,'change',(()=>{const t=i.ie[e],o=i.re[e];r.te[e]=[];for(let o in t){const n=t[o];n.checked&&r.te[e].push(n.value)}o.checked=r.te[e].length>0}))})(s):(e=>{G(_,f,(()=>{const t=i.ie[e],o=_.checked;r.te[e]=[];for(let n in t)t[n].checked=o,o&&r.te[e].push(n)}))})(t),_.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),V(u,b),V(u,m),r.T)(n.readOnly||r.i.mode===o&&n.enabled)&&(_.checked=!0);else if(a){const e=r.ee[s];_.checked=n.readOnly||y(e,t)}else y(r.B,t)&&(_.checked=!0);return n.readOnly&&(_.disabled=!0),V(d,_),V(d,u),V(d,p),d}const pe=()=>{const e=A('span');return e.tabIndex=-1,g.ce.Ke||(g.ce.Ke=e),e},me=(e,t)=>{const o=g.o,n=g.ce,{hide:a,showPreferences:s,acceptCategory:c}=e,p=o.u&&o.u.consentModal;if(!p)return;const m=p.acceptAllBtn,b=p.acceptNecessaryBtn,y=p.showPreferencesBtn,v=p.closeIconLabel,h=p.footer,C=p.label,w=p.title,S=e=>{a(),c(e)};if(!n.Qe){n.Qe=A(r),n.Ce=A(r),n.We=A(r),n.Xe=A(r),n.Ye=A(r),F(n.Qe,'cm-wrapper'),F(n.Ce,'cm'),I(n.We,'body'),I(n.Xe,'texts'),I(n.Ye,'btns'),n.Qe.tabIndex=-1,k(n.Ce,'role','dialog'),k(n.Ce,'aria-modal','true'),k(n.Ce,l,'false'),k(n.Ce,'aria-describedby','cm__desc'),C?k(n.Ce,'aria-label',C):w&&k(n.Ce,'aria-labelledby','cm__title'),n.Ce.style.visibility='hidden';const e='box',t=o.i.guiOptions,a=t?.consentModal,s=(a?.layout||e).split(' ')[0]===e;w&&v&&s&&(n.Fe||(n.Fe=A(i),I(n.Fe,'btn'),I(n.Fe,'btn--close'),G(n.Fe,f,(()=>{S([])})),V(n.We,n.Fe)),k(n.Fe,'aria-label',v)),V(n.We,n.Xe),(m||b||y)&&V(n.We,n.Ye),V(n.Ce,n.We),V(n.Qe,n.Ce)}w&&(n.Ze||(n.Ze=A(r),n.Ze.className=n.Ze.id='cm__title',k(n.Ze,'role','heading'),k(n.Ze,'aria-level','2'),V(n.Xe,n.Ze)),n.Ze.innerHTML=w);let x=p.description;if(x&&(o.V&&(x=x.replace('{{revisionMessage}}',o.F?'':p.revisionMessage||'')),n.et||(n.et=A(r),n.et.className=n.et.id='cm__desc',V(n.Xe,n.et)),n.et.innerHTML=x),m&&(n.tt||(n.tt=A(i),V(n.tt,pe()),I(n.tt,'btn'),k(n.tt,_,'all'),G(n.tt,f,(()=>{S('all')}))),n.tt.firstElementChild.innerHTML=m),b&&(n.Ve||(n.Ve=A(i),V(n.Ve,pe()),I(n.Ve,'btn'),k(n.Ve,_,'necessary'),G(n.Ve,f,(()=>{S([])}))),n.Ve.firstElementChild.innerHTML=b),y&&(n.ot||(n.ot=A(i),V(n.ot,pe()),I(n.ot,'btn'),I(n.ot,'btn--secondary'),k(n.ot,_,'show'),G(n.ot,'mouseenter',(()=>{o.k||_e(e,t)})),G(n.ot,f,s)),n.ot.firstElementChild.innerHTML=y),n.nt||(n.nt=A(r),I(n.nt,d),b&&V(n.nt,n.Ve),m&&V(n.nt,n.tt),(m||b)&&V(n.We,n.nt),V(n.Ye,n.nt)),n.ot&&!n.st&&(n.st=A(r),n.Ve&&n.tt?(I(n.st,d),V(n.st,n.ot),V(n.Ye,n.st)):(V(n.nt,n.ot),I(n.nt,d+'--uneven'))),h){if(!n.ct){let e=A(r),t=A(r);n.ct=A(r),I(e,'footer'),I(t,'links'),I(n.ct,'link-group'),V(t,n.ct),V(e,t),V(n.Ce,e)}n.ct.innerHTML=h}de(0),o.M||(o.M=!0,X(g.de.ge,u,n.Ce),t(e),W(1),V(n.qe,n.Qe),setTimeout((()=>F(n.Qe,'cc--anim')),100)),z(n.We,e,_e,t)},ge=e=>h(e)&&e in g.o._,be=()=>g.o.l||g.o.i.language.default,ye=e=>{e&&(g.o.l=e)},ve=async e=>{const t=g.o;let o;o=e&&ge(e)?e:be();let n=t._[o];if(!n)return!1;if(h(n)){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(n);if(!e)return!1;n=e}return t.u=n,ye(o),!0},he=()=>{let e=g.o.i.language.rtl,t=g.ce.qe;e&&t&&(v(e)||(e=[e]),y(e,g.o.l)?F(t,'cc--rtl'):j(t,'cc--rtl'))},Ce=e=>{const t=g.ce;if(!t.qe){t.qe=A(r),t.qe.id='cc-main',t.qe.style.position='fixed',he();let o=g.o.i.root;o&&h(o)&&(o=document.querySelector(o)),(o||t.Ue.body).appendChild(t.qe),(({hidePreferences:e})=>{const t=g.ce;G(t.qe,f,(o=>{g.o.N&&(t.we.contains(o.target)||e())}))})(e)}},we=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c}=g.t.cookie,r=encodeURIComponent(JSON.stringify(g.o.p)),i=e?(()=>{const e=g.o.C,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i);let d=n+'='+r+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;y(t,'.')&&(d+='; Domain='+s),'https:'===o&&(d+='; Secure'),document.cookie=d,g.o.p},Se=(e,t,o)=>{const n=o||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},xe=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(Te(e||g.t.cookie.name,!0)),Te=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Me=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},De=(e,n=[])=>{((e,t)=>{const{R:o,B:n,G:a,k:s,te:c,Z:r}=g.o;let i=[];if(e){v(e)?i.push(...e):h(e)&&(i='all'===e?o:[e]);for(const e of o)c[e]=y(i,e)?S(r[e]):[]}else i=s?(()=>{const e=g.ce.re;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;i=i.filter((e=>!y(o,e)||!y(t,e))),i.push(...a),U(i)})(e,n),(e=>{const t=g.o,{te:o,G:n,ee:a,Z:s,R:c}=t,r=c;t.ne=O(a);for(const e of r){const t=s[e],c=S(t),r=o[e]?.length>0,i=y(n,e);if(0!==c.length){if(a[e]=[],i)a[e].push(...c);else if(r){const t=o[e];a[e].push(...t)}else a[e]=[];a[e]=x(a[e])}}})(),(()=>{const e=g.o;g.t.mode===o&&e.T?e.I=L(e.J,e.B):e.I=L(e.B,e.p.categories);let n=e.I.length>0,a=!1;for(const t of e.R)e.oe[t]=L(e.ee[t],e.ne[t]),e.oe[t].length>0&&(a=!0);const s=g.ce.re;for(let t in s)s[t].checked=y(e.B,t);for(const t of e.R){const o=g.ce.ie[t],n=e.ee[t];for(const e in o)o[e].checked=y(n,e)}e.h||(e.h=new Date),e.S||(e.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:O(e.B),revision:g.t.revision,data:e.v,consentTimestamp:e.h.toISOString(),consentId:e.S,services:O(e.ee)};let c=!1;(e.T||n||a)&&(e.T&&(e.T=!1,c=!0),e.C?e.C=new Date:e.C=e.h,e.p.lastConsentTimestamp=e.C.toISOString(),we(),g.t.autoClearCookies&&(c||!e.T&&n)&&(e=>{const t=g.o,o=Me();t.P=!1;let n=e?t.R:t.I;n=n.filter((e=>{let o=t.O[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const a of n){const n=t.O[a].autoClear,s=n?.cookies||[],c=y(t.I,a),r=!y(t.B,a),i=c&&r;if(e&&r||!e&&i){!0===n.reloadPage&&i&&(t.P=!0);for(const e of s){let t=[];const n=e.name,a=e.domain,s=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=b(o,n);e>-1&&t.push(o[e])}t.length>0&&Se(t,s,a)}}}})(c),Y()),c&&(X(g.de.fe),X(g.de._e),g.t.mode===t)||((n||a)&&X(g.de.ue),e.P&&location.reload())})()},Ee=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=Te(e);''!==t&&n.push(t)}else n.push(...Me(e))};if(v(e))for(let t of e)a(t);else a(e);Se(n,t,o)},Ae=e=>{const{ce:t,o:o}=g;if(!o.D){if(!o.M){if(!e)return;me(Ve,Ce)}o.D=!0,o.U=T(),o.g&&K(!0),F(t.he,n),k(t.Ce,l,'false'),$(t.Qe,1),X(g.de.pe,u)}},ke=()=>{const{ce:e,o:t,de:o}=g;t.D&&(t.D=!1,t.g&&K(),j(e.he,n),k(e.Ce,l,'true'),$(e.Ke),$(t.U),t.U=null,X(o.me,u))},Ne=()=>{const e=g.o;e.A||(e.k||_e(Ve,Ce),e.A=!0,F(g.ce.he,a),k(g.ce.we,l,'false'),setTimeout((()=>{e.N=!0}),1),e.D?e.$=T():e.U=T(),$(g.ce.Pe,2),X(g.de.pe,p))},He=()=>{const e=g.o;e.A&&(e.A=!1,j(g.ce.he,a),k(g.ce.we,l,'true'),setTimeout((()=>{e.N=!1}),1),e.D?($(e.$),e.$=null):($(g.ce.Ge),$(e.U),e.U=null),X(g.de.me,p))};var Ve={show:Ae,hide:ke,showPreferences:Ne,hidePreferences:He,acceptCategory:De};const Fe=(e,t)=>{const o=xe(t);return e?o[e]:o},Ie=()=>!g.o.T;e.acceptCategory=De,e.acceptService=(e,t)=>{const{R:o,Z:n}=g.o;if(!(e&&t&&h(t)&&y(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=g.o,{Z:n,te:a,k:s}=o,c=g.ce.ie[t]||{},r=g.ce.re[t]||{},i=S(n[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,E(c[e])}else if(y(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,E(c[t])}else if(v(e))for(let o of i){const n=y(e,o);n&&a[t].push(o),s&&(c[o].checked=n,E(c[o]))}const l=0===a[t].length;o.B=l?o.B.filter((e=>e!==t)):x([...o.B,t]),s&&(r.checked=!l,E(r))})(e,t),De()},e.acceptedCategory=e=>{const t=g.o.T?[]:g.o.B;return y(t,e)},e.acceptedService=(e,t)=>{const o=g.o.T?[]:g.o.ee[t];return y(o,e)},e.eraseCookies=Ee,e.getConfig=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Fe,e.getUserPreferences=()=>{const{j:e,ee:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,B:t,R:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!y(t,e)))}})();return O({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:R()})},e.hide=ke,e.hidePreferences=He,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),C(t))for(const e in t)k(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,V(document.head,o)}))},e.reset=e=>{const{qe:t,he:o}=g.ce,{name:c,path:r,domain:i}=g.t.cookie;e&&Ee(c,r,i);for(const{be:e,ye:t,ve:o}of g.o.m)e.removeEventListener(t,o);t?.remove(),o?.classList.remove(s,a,n);const l=new m;for(const e in g)g[e]=l[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,de:a}=g,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ce:t,t:n,o:a}=g,s=n,r=a,{cookie:i}=s,l=g.le,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.Ue=p,t.he=p.documentElement,i.domain=location.hostname,r.i=e,r.O=f,r.R=_,r._=e.language.translations,r.g=!!e.disablePageInteraction,l.fe=e.onFirstConsent,l._e=e.onConsent,l.ue=e.onChange,l.me=e.onModalHide,l.pe=e.onModalShow,l.ge=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:v,autoClearCookies:h,revision:w,manageScriptTags:x,hideFromBots:T}=e;m===o&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof x&&(s.manageScriptTags=x),'number'==typeof w&&w>=0&&(s.revision=w,r.V=!0),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof v&&(s.lazyHtmlGeneration=v),!1===T&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(r.L=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.V,s.manageScriptTags,(e=>{const{O:t,Z:o,ee:n,te:a,G:s}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&S(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),g.ce.ie[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o;e.ae=D(g.ce.Ue,'script['+c+']'),e.se=[];for(const t of e.ae){let o=H(t,c),n=t.dataset.service||'',a=!1;if(o&&'!'===o.charAt(0)&&(o=o.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),y(e.R,o)&&(e.se.push({Me:!1,De:a,xe:o,Te:n}),n)){const t=e.Z[o];t[n]||(t[n]={Se:!1})}}})(),ye((()=>{const e=g.o.i.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),ge(t))return t}return be()})())})(e),t.L)return;(()=>{const e=g.o,t=g.t,n=xe(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.p=n,e.S=c;const _=!!c&&h(c);e.h=r,e.h&&(e.h=new Date(r)),e.C=i,e.C&&(e.C=new Date(i)),e.v=void 0!==l?l:null,e.V&&_&&d!==t.revision&&(e.F=!1),e.T=!(_&&e.F&&e.h&&e.C&&f),e.T,e.T?t.mode===o&&((()=>{const e=g.o;for(const t of e.R){const o=e.O[t];if(o.enabled||o.readOnly){e.J.push(t);const o=e.Z[t]||{};for(let n in o)e.ee[t].push(n)}}})(),e.B=[...e.J]):(e.ee={...e.ee,...s},U([...e.G,...a])),e.te={...e.ee}})();const r=Ie();if(!await ve())return!1;if(await(async e=>{z(null,e,_e,Ce),g.o.T&&me(e,Ce),g.t.lazyHtmlGeneration||_e(e,Ce),(()=>{const e=g.ce,t=g.o;G(e.he,'keydown',(e=>{if('Tab'!==e.key)return;if(!t.A&&!t.D)return;const o=t.X,n=t.W;if(o.length>0){const t=T();e.shiftKey?t!==o[0]&&n.contains(t)||(M(e),$(o[1])):t!==o[1]&&n.contains(t)||(M(e),$(o[0]))}}),!0)})()})(Ve),n.autoShow&&!r&&Ae(!0),r)return Y(),X(a._e);n.mode===o&&Y(t.J)}},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=g.o;if('update'===n){s.v=t=Fe('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.v=t,s.p.data=t,we(!0)),a},e.setLanguage=async(e,t)=>{if(!ge(e))return!1;const o=g.o;return!(e===be()&&!0!==t||!await ve(e)||(ye(e),o.M&&me(Ve,Ce),o.k&&_e(Ve,Ce),he(),0))},e.show=Ae,e.showPreferences=Ne,e.validConsent=Ie,e.validCookie=e=>''!==Te(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
