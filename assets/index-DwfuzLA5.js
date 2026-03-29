(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:ee}=Object,m=globalThis,h=m.trustedTypes,te=h?h.emptyScript:``,ne=m.reactiveElementPolyfillSupport,g=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},v=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(g(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??v)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:`open`},b[g(`elementProperties`)]=new Map,b[g(`finalized`)]=new Map,ne?.({ReactiveElement:b}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var x=globalThis,S=e=>e,C=x.trustedTypes,w=C?C.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,T=`$lit$`,E=`lit$${Math.random().toFixed(9).slice(2)}$`,D=`?`+E,O=`<${D}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,M=Array.isArray,re=e=>M(e)||typeof e?.[Symbol.iterator]==`function`,N=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,I=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),R=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),H=Symbol.for(`lit-noChange`),U=Symbol.for(`lit-nothing`),W=new WeakMap,G=k.createTreeWalker(k,129);function K(e,t){if(!M(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return w===void 0?t:w.createHTML(t)}var ie=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=P;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===P?c[1]===`!--`?o=F:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=L):(B.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=L):o=I:o===L?c[0]===`>`?(o=i??P,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?L:c[3]===`"`?z:R):o===z||o===R?o=L:o===F||o===I?o=P:(o=L,i=void 0);let d=o===L&&e[t+1].startsWith(`/>`)?` `:``;a+=o===P?n+O:l>=0?(r.push(s),n.slice(0,l)+T+n.slice(l)+E+d):n+E+(l===-2?t:d)}return[K(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},q=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ie(t,n);if(this.el=e.createElement(l,r),G.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=G.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(T)){let t=u[o++],n=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?oe:r[1]===`?`?se:r[1]===`@`?ce:X}),i.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(B.test(i.tagName)){let e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),G.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8)if(i.data===D)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(E,e+1))!==-1;)c.push({type:7,index:a}),e+=E.length-1}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function J(e,t,n=e,r){if(t===H)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=J(e,i._$AS(e,t.values),i,r)),t}var ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);G.currentNode=r;let i=G.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Y(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new le(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=G.nextNode(),a++)}return G.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Y=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),j(e)?e===U||e==null||e===``?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==H&&this._(e):e._$litType$===void 0?e.nodeType===void 0?re(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=q.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ae(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return t===void 0&&W.set(e.strings,t=new q(e)),t}k(t){M(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=J(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==H,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=J(this,r[n+o],t,o),s===H&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===U?e=U:e!==U&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},oe=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},se=class extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},ce=class extends X{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??U)===H)return;let n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},le=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}},ue=x.litHtmlPolyfillSupport;ue?.(q,Y),(x.litHtmlVersions??=[]).push(`3.3.2`);var de=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Y(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},Z=globalThis,Q=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=de(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};Q._$litElement$=!0,Q.finalized=!0,Z.litElementHydrateSupport?.({LitElement:Q});var fe=Z.litElementPolyfillSupport;fe?.({LitElement:Q}),(Z.litElementVersions??=[]).push(`4.2.2`);var pe=[{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788257/cartel_Summer_Vibes_zu9lll.jpg`,title:`Arcasiles - Summer Edition`,date:`03-06-2026`,venue:`Copa Cabana`,link:`https://luma.com/arcasilesgroup?period=past`,description:`Un evento para dar la bienvenida al verano y reunir a la comunidad antes de las vacaciones estivales.`},{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788256/cartel_IA_Engineering_wfhimu.jpg`,title:`IA Engineering - Arcasiles Open Code`,date:`20-05-2026`,venue:`Celonis`,link:`https://luma.com/arcasilesgroup?period=past`,description:`Un Workshop práctico para mostrar el primer proyecto Open Source de Arcasiles.`},{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788257/cartel_Batalla_IAS_jjj9za.jpg`,title:`La Batalla de las IAS`,date:`23-04-2026`,venue:`ERNI`,link:`https://luma.com/arcasilesgroup?period=past`,description:`El gran evento de las batallas de las IAS. Un evento donde tres expertos en IA compararán sus modelos y sus resultados.`},{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788256/cartel_Alcachofa_Laboral_wwqve0.jpg`,title:`Tu media alcachofa laboral`,date:`25-02-2026`,venue:`Celonis`,link:`https://luma.com/arcasilesgroup?period=past&e=evt-AboyTTYkUU1PG6H`,description:`​Un evento para quienes buscan conectar con su carrera ideal. Entre San Valentín y carnaval, febrero es el mes perfecto para hablar de compatibilidad. Pero no solo en el amor: también en el trabajo.`},{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788256/cartel_fintech_usgfqw.jpg`,title:`Fintech CONF 2026`,date:`28-01-2026`,venue:`Celonis`,link:`https://luma.com/arcasilesgroup?period=past&e=evt-AboyTTYkUU1PG6H`,description:`​Fintech CONF 2026 es un encuentro presencial en Madrid para hablar de cómo está cambiando el sector financiero desde dentro: ingeniería, diseño y agentes de IA aplicados a producto, operaciones y equipos.`},{image:`https://res.cloudinary.com/djbnr1n5p/image/upload/v1774788257/cartel_XMAS_Edition_fe5j1w.jpg`,title:`ARCASILES XMAS EDITION`,date:`16-12-2025`,venue:`Level Bar`,link:`https://entradium.com/events/arcasiles-xmas-edition`,description:`​El encuentro de cierre de año de la comunidad tech-creativa de Madrid. Cerramos 2025 reuniendo a las mejores comunidades de Madrid en una noche diseñada para conectar, celebrar y proyectar lo que viene.`}],me=class extends Q{static get properties(){return{image:{type:String},title:{type:String},date:{type:String},venue:{type:String},link:{type:String},description:{type:String}}}constructor(){super(),this.image=``,this.title=``,this.date=``,this.venue=``,this.link=``,this.description=``}render(){return V`
        <section class="card">
            <img class="card-image" src=${this.image} alt="" >
            <div class="card-content">
            <h2 class="card-title">${this.title}</h2>
            <h3 class="card-date">${this.date}</h3>
            <h3 class="card-venue">${this.venue}</h3>
            <a href=${this.link} target="_blank" class="card-link">Enlace para registrarse</a>
            <p class="card-description">${this.description}</p>
            </div>
        </section>
`}static get styles(){return o`
       :host {
  * { box-sizing: border-box; }
  
  display: flex;
  flex-direction: column;

  min-width: 30%;
  max-width: 360px;
  flex: 1;

  background: var(--white);
  color: var(--primary-dark);

  border: 1px solid var(--gray);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  
  padding: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:host(:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  font-size: 1.1rem;
  margin: 0;
}

.card-date, .card-venue {
  font-size: 0.85rem;
  margin: 0;
  color: var(--dark-gray);
}

.card-link {
  display: inline-block;
  margin-top: 8px;
  padding: 8px 16px;
  background: var(--yellow);
  color: var(--primary-dark);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
}

.card-description {
  font-size: 0.85rem;
  color: var(--dark-gray);
  margin: 0;
}
        `}};window.customElements.define(`event-card`,me);var he=class extends Q{render(){return V`
        <div class="event-list">
            ${pe.map(e=>V`
                <event-card
                    title=${e.title}
                    date=${e.date}
                    venue=${e.venue}
                    link=${e.link}
                    description=${e.description}
                    image=${e.image}
                ></event-card>
            `)}
        </div>
    `}static get styles(){return o`
        :host{
        *{box-sizing: border-box;}
        }
       .event-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 40px;
        }
        `}};window.customElements.define(`event-list`,he);var $=`/arcasiles_eventapp/assets/logo-arcasiles-DIbshuia.png`,ge=class extends Q{render(){return V`
            <nav class="nav-bar">
                <img src="${$}" alt="logo arcasiles" class="logo">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#agenda">Agenda</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        `}static get styles(){return o`
        :host {
            display: block;
            width: 100%;
            background: var(--white);
            border-bottom: 2px solid var(--yellow);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .nav-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 40px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            height: 40px;
            width: auto;
        }

        ul {
            display: flex;
            list-style: none;
            gap: 32px;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: var(--primary-dark);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }

        a:hover {
            color: var(--yellow);
        }
                `}};window.customElements.define(`nav-bar`,ge);var _e=`/arcasiles_eventapp/assets/icono-instagram-lVktrCg7.png`,ve=`/arcasiles_eventapp/assets/icono-linkedin-iepHrnDq.png`,ye=class extends Q{render(){return V`
            <footer class="footer">
                <img src="${$}" alt="logo arcasiles" class="logo">
                <div class="socials">
                    <img src="${_e}" alt="logo arcasiles" class="icono-social">
                    <img src="${ve}" alt="logo arcasiles" class="icono-social">
                </div>
                <p>© Arcasiles Group. All Rights Reserved. Licensing</p>
                
            </footer>
        `}static get styles(){return o`
            :host {
                display: block;
                width: 100%;
                background: var(--primary-dark);
                color: var(--white);
                border-top: 3px solid var(--yellow);
                margin-top: 60px;
            }

            .footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 32px 40px;
                max-width: 1200px;
                margin: 0 auto;
            }

            .logo {
                height: 40px;
                width: auto;
                filter: brightness(0) invert(1);
            }

            .socials {
                display: flex;
                gap: 16px;
            }

            .icono-social {
                height: 24px;
                width: 24px;
                filter: brightness(0) invert(1);
                transition: opacity 0.2s ease;
                cursor: pointer;
            }

            .icono-social:hover {
                opacity: 0.7;
            }

            p {
                font-size: 0.8rem;
                color: var(--dark-gray);
                margin: 0;
            }

 
                `}};window.customElements.define(`arc-footer`,ye);