(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"15/o":function(K,N,i){},AOa7:function(K,N,i){},DnfT:function(K,N,i){},FRQA:function(K,N,i){"use strict";var L=i("GNNt"),U=i("wEI+"),E=i("DnfT"),R=i.n(E),S=i("q1tI"),W=i.n(S),J=i("TSYQ"),j=i.n(J),$=i("jYQm"),s=function(T){var _=Object(S.useContext)($.a),H=T.children,Y=T.contentWidth,M=T.className,Z=T.style,f=Object(S.useContext)(U.b.ConfigContext),o=f.getPrefixCls,c=T.prefixCls||o("pro"),d=Y||_.contentWidth,m="".concat(c,"-grid-content");return W.a.createElement("div",{className:j()(m,M,{wide:d==="Fixed"}),style:Z},W.a.createElement("div",{className:"".concat(c,"-grid-content-children")},H))};N.a=s},"YV/h":function(K,N,i){},gDlH:function(K,N,i){"use strict";var L=i("wx14"),U=i("q1tI"),E=i.n(U),R=i("4IlW"),S=function(j,$){var s={};for(var h in j)Object.prototype.hasOwnProperty.call(j,h)&&$.indexOf(h)<0&&(s[h]=j[h]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,h=Object.getOwnPropertySymbols(j);T<h.length;T++)$.indexOf(h[T])<0&&Object.prototype.propertyIsEnumerable.call(j,h[T])&&(s[h[T]]=j[h[T]]);return s},W={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},J=U.forwardRef(function(j,$){var s=function(f){var o=f.keyCode;o===R.a.ENTER&&f.preventDefault()},h=function(f){var o=f.keyCode,c=j.onClick;o===R.a.ENTER&&c&&c()},T=j.style,_=j.noStyle,H=j.disabled,Y=S(j,["style","noStyle","disabled"]),M={};return _||(M=Object(L.a)({},W)),H&&(M.pointerEvents="none"),M=Object(L.a)(Object(L.a)({},M),T),U.createElement("div",Object(L.a)({role:"button",tabIndex:0,ref:$},Y,{onKeyDown:s,onKeyUp:h,style:M}))});N.a=J},jRje:function(K,N,i){"use strict";var L=i("GNNt"),U=i("wEI+"),E=i("q1tI"),R=i.n(E),S=i("TSYQ"),W=i.n(S),J=i("jWeX"),j=i("rsCp"),$=i.n(j),s=i("jYQm"),h=["children","className","extra","style","renderContent"];function T(){return T=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(o[m]=d[m])}return o},T.apply(this,arguments)}function _(o,c){var d=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);c&&(m=m.filter(function(D){return Object.getOwnPropertyDescriptor(o,D).enumerable})),d.push.apply(d,m)}return d}function H(o){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?_(Object(d),!0).forEach(function(m){Y(o,m,d[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(d)):_(Object(d)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(d,m))})}return o}function Y(o,c,d){return c in o?Object.defineProperty(o,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[c]=d,o}function M(o,c){if(o==null)return{};var d=Z(o,c),m,D;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(D=0;D<A.length;D++)m=A[D],!(c.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,m)||(d[m]=o[m]))}return d}function Z(o,c){if(o==null)return{};var d={},m=Object.keys(o),D,A;for(A=0;A<m.length;A++)D=m[A],!(c.indexOf(D)>=0)&&(d[D]=o[D]);return d}var f=function(c){var d=c.children,m=c.className,D=c.extra,A=c.style,Q=c.renderContent,F=M(c,h),ve=Object(E.useContext)(U.b.ConfigContext),ae=ve.getPrefixCls,le=c.prefixCls||ae("pro"),k="".concat(le,"-footer-bar"),C=Object(E.useContext)(s.a),I=Object(E.useMemo)(function(){var G=C.hasSiderMenu,me=C.isMobile,ce=C.siderWidth;if(!!G)return ce?me?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[C.collapsed,C.hasSiderMenu,C.isMobile,C.siderWidth]),q=R.a.createElement(R.a.Fragment,null,R.a.createElement("div",{className:"".concat(k,"-left")},D),R.a.createElement("div",{className:"".concat(k,"-right")},d));return Object(E.useEffect)(function(){return!C||!(C==null?void 0:C.setHasFooterToolbar)?function(){}:(C==null||C.setHasFooterToolbar(!0),function(){var G;C==null||(G=C.setHasFooterToolbar)===null||G===void 0||G.call(C,!1)})},[]),R.a.createElement("div",T({className:W()(m,"".concat(k)),style:H({width:I},A)},Object(J.a)(F,["prefixCls"])),Q?Q(H(H(H({},c),C),{},{leftWidth:I}),q):q)};N.a=f},jWeX:function(K,N,i){"use strict";function L(U,E){for(var R=Object.assign({},U),S=0;S<E.length;S+=1){var W=E[S];delete R[W]}return R}N.a=L},jYQm:function(K,N,i){"use strict";var L=i("q1tI"),U=i.n(L),E=Object(L.createContext)({});N.a=E},rsCp:function(K,N,i){},tMyG:function(K,N,i){"use strict";var L=i("cIOH"),U=i("15/o"),E=i("wx14"),R=i("rePB"),S=i("1OyB"),W=i("vuIU"),J=i("Ji7U"),j=i("LK+K"),$=i("U8pU"),s=i("q1tI"),h=i.n(s),T=i("TSYQ"),_=i.n(T),H=i("bT9E"),Y=i("6ner"),M=i("H84U"),Z=i("KQm4"),f=i("wgJM");function o(a){var e,r=function(l){return function(){e=null,a.apply(void 0,Object(Z.a)(l))}},t=function(){if(e==null){for(var l=arguments.length,v=new Array(l),u=0;u<l;u++)v[u]=arguments[u];e=Object(f.a)(r(v))}};return t.cancel=function(){return f.a.cancel(e)},t}function c(){return function(e,r,t){var n=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return n;var u=o(n.bind(this));return l=!0,Object.defineProperty(this,r,{value:u,configurable:!0,writable:!0}),l=!1,u}}}}var d=i("zT1h");function m(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function D(a,e,r){if(r!==void 0&&e.top>a.top-r)return r+e.top}function A(a,e,r){if(r!==void 0&&e.bottom<a.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var Q=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],F=[];function ve(){return F}function ae(a,e){if(!!a){var r=F.find(function(t){return t.target===a});r?r.affixList.push(e):(r={target:a,affixList:[e],eventHandlers:{}},F.push(r),Q.forEach(function(t){r.eventHandlers[t]=Object(d.a)(a,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function le(a){var e=F.find(function(r){var t=r.affixList.some(function(n){return n===a});return t&&(r.affixList=r.affixList.filter(function(n){return n!==a})),t});e&&e.affixList.length===0&&(F=F.filter(function(r){return r!==e}),Q.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var k=function(a,e,r,t){var n=arguments.length,l=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":Object($.a)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,r,t);else for(var u=a.length-1;u>=0;u--)(v=a[u])&&(l=(n<3?v(l):n>3?v(e,r,l):v(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l};function C(){return typeof window!="undefined"?window:null}var I;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(I||(I={}));var q=function(a){Object(J.a)(r,a);var e=Object(j.a)(r);function r(){var t;return Object(S.a)(this,r),t=e.apply(this,arguments),t.state={status:I.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props.offsetBottom,l=t.props.offsetTop;return n===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,l=n.status,v=n.lastAffix,u=t.props.onChange,g=t.getTargetFunc();if(!(l!==I.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var x=t.getOffsetTop(),p=t.getOffsetBottom(),y=g();if(!!y){var O={status:I.None},P=m(y),b=m(t.placeholderNode),w=D(b,P,x),z=A(b,P,p);w!==void 0?(O.affixStyle={position:"fixed",top:w,width:b.width,height:b.height},O.placeholderStyle={width:b.width,height:b.height}):z!==void 0&&(O.affixStyle={position:"fixed",bottom:z,width:b.width,height:b.height},O.placeholderStyle={width:b.width,height:b.height}),O.lastAffix=!!O.affixStyle,u&&v!==O.lastAffix&&u(O.lastAffix),t.setState(O)}}},t.prepareMeasure=function(){if(t.setState({status:I.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t.render=function(){var n=t.context.getPrefixCls,l=t.state,v=l.affixStyle,u=l.placeholderStyle,g=t.props,x=g.prefixCls,p=g.children,y=_()(Object(R.a)({},n("affix",x),!!v)),O=Object(H.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return s.createElement(Y.a,{onResize:function(){t.updatePosition()}},s.createElement("div",Object(E.a)({},O,{ref:t.savePlaceholderNode}),v&&s.createElement("div",{style:u,"aria-hidden":"true"}),s.createElement("div",{className:y,ref:t.saveFixedNode,style:v},s.createElement(Y.a,{onResize:function(){t.updatePosition()}},p))))},t}return Object(W.a)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:n||C}},{key:"componentDidMount",value:function(){var n=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){ae(l(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var l=this.state.prevTarget,v=this.getTargetFunc(),u=null;v&&(u=v()||null),l!==u&&(le(this),u&&(ae(u,this),this.updatePosition()),this.setState({prevTarget:u})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),le(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),l=this.state.affixStyle;if(n&&l){var v=this.getOffsetTop(),u=this.getOffsetBottom(),g=n();if(g&&this.placeholderNode){var x=m(g),p=m(this.placeholderNode),y=D(p,x,v),O=A(p,x,u);if(y!==void 0&&l.top===y||O!==void 0&&l.bottom===O)return}}this.prepareMeasure()}}]),r}(s.Component);q.contextType=M.b,k([c()],q.prototype,"updatePosition",null),k([c()],q.prototype,"lazyUpdatePosition",null);var G=q,me=i("GNNt"),ce=i("wEI+"),Pe=i("YV/h"),Ee=i("AOa7"),we=i("lUTK"),Le=i("qVdP"),Ue=i("Telt"),Ce=i("ODXe"),xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},je=xe,ge=i("6VBw"),he=function(e,r){return s.createElement(ge.a,Object.assign({},e,{ref:r,icon:je}))};he.displayName="ArrowLeftOutlined";var Te=s.forwardRef(he),Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},De=Re,pe=function(e,r){return s.createElement(ge.a,Object.assign({},e,{ref:r,icon:De}))};pe.displayName="ArrowRightOutlined";var We=s.forwardRef(pe),Ke=i("Zm9Q"),He=i("8Skl"),Ne=i("XBQK"),Fe=function(a,e){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(r[t[n]]=a[t[n]]);return r},Be=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.children,v=e.overlay,u=e.dropdownProps,g=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),x=s.useContext(M.b),p=x.getPrefixCls,y=p("breadcrumb",r),O=function(w){return v?s.createElement(Ne.a,Object(E.a)({overlay:v,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(y,"-overlay-link")},w,s.createElement(He.a,null))):w},P;return"href"in g?P=s.createElement("a",Object(E.a)({className:"".concat(y,"-link")},g),l):P=s.createElement("span",Object(E.a)({className:"".concat(y,"-link")},g),l),P=O(P),l?s.createElement("span",null,P,n&&s.createElement("span",{className:"".concat(y,"-separator")},n)):null};Be.__ANT_BREADCRUMB_ITEM=!0;var Me=Be,be=function(e){var r=e.children,t=s.useContext(M.b),n=t.getPrefixCls,l=n("breadcrumb");return s.createElement("span",{className:"".concat(l,"-separator")},r||"/")};be.__ANT_BREADCRUMB_SEPARATOR=!0;var ze=be,Oe=i("BvKs"),se=i("uaoM"),ee=i("0n0R"),ne=function(a,e){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(r[t[n]]=a[t[n]]);return r};function $e(a,e){if(!a.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=a.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,l){return e[l]||n});return t}function Ye(a,e,r,t){var n=r.indexOf(a)===r.length-1,l=$e(a,e);return n?s.createElement("span",null,l):s.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Ae=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Qe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,n=Object(Z.a)(e),l=Ae(r,t);return l&&n.push(l),n},ye=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.style,v=e.className,u=e.routes,g=e.children,x=e.itemRender,p=x===void 0?Ye:x,y=e.params,O=y===void 0?{}:y,P=ne(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),b=s.useContext(M.b),w=b.getPrefixCls,z=b.direction,te,ie=w("breadcrumb",r);if(u&&u.length>0){var oe=[];te=u.map(function(B){var X=Ae(B.path,O);X&&oe.push(X);var Ie;return B.children&&B.children.length&&(Ie=s.createElement(Oe.a,null,B.children.map(function(de){return s.createElement(Oe.a.Item,{key:de.path||de.breadcrumbName},p(de,O,u,Qe(oe,de.path,O)))}))),s.createElement(Me,{overlay:Ie,separator:n,key:X||B.breadcrumbName},p(B,O,u,oe))})}else g&&(te=Object(Ke.a)(g).map(function(B,X){return B&&(Object(se.a)(B.type&&(B.type.__ANT_BREADCRUMB_ITEM===!0||B.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(ee.a)(B,{separator:n,key:X}))}));var re=_()(ie,Object(R.a)({},"".concat(ie,"-rtl"),z==="rtl"),v);return s.createElement("div",Object(E.a)({className:re,style:l},P),te)};ye.Item=Me,ye.Separator=ze;var Se=ye,fe=Se,Ge=i("Tckk"),qe=i("gDlH"),et=i("YMnH"),tt=function(e,r,t){return!r||!t?null:s.createElement(et.a,{componentName:"PageHeader"},function(n){var l=n.back;return s.createElement("div",{className:"".concat(e,"-back")},s.createElement(qe.a,{onClick:function(u){t==null||t(u)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},rt=function(e){return s.createElement(fe,e)},at=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?s.createElement(We,null):s.createElement(Te,null)},nt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,l=r.avatar,v=r.subTitle,u=r.tags,g=r.extra,x=r.onBack,p="".concat(e,"-heading"),y=n||v||u||g;if(!y)return null;var O=at(r,t),P=tt(e,O,x),b=P||l||y;return s.createElement("div",{className:p},b&&s.createElement("div",{className:"".concat(p,"-left")},P,l&&s.createElement(Ge.a,l),n&&s.createElement("span",{className:"".concat(p,"-title"),title:typeof n=="string"?n:void 0},n),v&&s.createElement("span",{className:"".concat(p,"-sub-title"),title:typeof v=="string"?v:void 0},v),u&&s.createElement("span",{className:"".concat(p,"-tags")},u)),g&&s.createElement("span",{className:"".concat(p,"-extra")},g))},ot=function(e,r){return r?s.createElement("div",{className:"".concat(e,"-footer")},r):null},it=function(e,r){return s.createElement("div",{className:"".concat(e,"-content")},r)},lt=function(e){var r=s.useState(!1),t=Object(Ce.a)(r,2),n=t[0],l=t[1],v=function(g){var x=g.width;l(x<768)};return s.createElement(M.a,null,function(u){var g,x=u.getPrefixCls,p=u.pageHeader,y=u.direction,O=e.prefixCls,P=e.style,b=e.footer,w=e.children,z=e.breadcrumb,te=e.breadcrumbRender,ie=e.className,oe=!0;"ghost"in e?oe=e.ghost:p&&"ghost"in p&&(oe=p.ghost);var re=x("page-header",O),B=function(){var Ve;return((Ve=z)===null||Ve===void 0?void 0:Ve.routes)?rt(z):null},X=B(),Ie=z&&"props"in z,de=(te==null?void 0:te(e,X))||X,ke=Ie?z:de,Et=_()(re,ie,(g={"has-breadcrumb":!!ke,"has-footer":!!b},Object(R.a)(g,"".concat(re,"-ghost"),oe),Object(R.a)(g,"".concat(re,"-rtl"),y==="rtl"),Object(R.a)(g,"".concat(re,"-compact"),n),g));return s.createElement(Y.a,{onResize:v},s.createElement("div",{className:Et,style:P},ke,nt(re,e,y),w&&it(re,w),ot(re,b)))})},ct=lt,Ct=i("Znn+"),Xe=i("ZTPi"),st=i("jYQm"),ft=i("FRQA"),ut=i("jRje"),xt=i("u/V1"),dt=i("95SA"),vt=i("yxHc"),mt=["title","content","pageHeaderRender","header","extraContent","style","prefixCls"];function Je(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),r.push.apply(r,t)}return r}function V(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Je(Object(r),!0).forEach(function(t){Ze(a,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}function Ze(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function gt(a,e){if(a==null)return{};var r=ht(a,e),t,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,t)||(r[t]=a[t]))}return r}function ht(a,e){if(a==null)return{};var r={},t=Object.keys(a),n,l;for(l=0;l<t.length;l++)n=t[l],!(e.indexOf(n)>=0)&&(r[n]=a[n]);return r}function ue(){return ue=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},ue.apply(this,arguments)}function _e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_e=function(r){return typeof r}:_e=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_e(a)}function pt(a){return _e(a)==="object"?a:{spinning:a}}var bt=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,l=e.tabBarExtraContent,v=e.tabProps,u=e.prefixedClassName;return r&&r.length?h.a.createElement(Xe.a,ue({className:"".concat(u,"-tabs"),activeKey:t,onChange:function(x){n&&n(x)},tabBarExtraContent:l},v),r.map(function(g,x){return h.a.createElement(Xe.a.TabPane,ue({},g,{tab:g.tab,key:g.key||x}))})):null},Ot=function(e,r,t){return!e&&!r?null:h.a.createElement("div",{className:"".concat(t,"-detail")},h.a.createElement("div",{className:"".concat(t,"-main")},h.a.createElement("div",{className:"".concat(t,"-row")},e&&h.a.createElement("div",{className:"".concat(t,"-content")},e),r&&h.a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},yt=function(e,r){var t,n=e.title,l=e.content,v=e.pageHeaderRender,u=e.header,g=e.extraContent,x=e.style,p=e.prefixCls,y=gt(e,mt);if(v===!1)return null;if(v)return v(V(V({},e),r));var O=n;!n&&n!==!1&&(O=r.title);var P=V(V(V({},r),{},{title:O},y),{},{footer:bt(V(V({},y),{},{prefixedClassName:r.prefixedClassName}))},u),b=P.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(w){return!P[w]})&&(!b||!(b==null?void 0:b.itemRender)&&!(b==null||(t=b.routes)===null||t===void 0?void 0:t.length))&&!l&&!g?null:h.a.createElement(ct,ue({},P,{breadcrumb:V(V({},P.breadcrumb),r.breadcrumbProps),prefixCls:p}),(u==null?void 0:u.children)||Ot(l,g,r.prefixedClassName))},Pt=function(e){var r=e.children,t=e.loading,n=t===void 0?!1:t,l=e.style,v=e.footer,u=e.affixProps,g=e.ghost,x=e.fixedHeader,p=Object(s.useContext)(st.a),y=Object(s.useContext)(ce.b.ConfigContext),O=y.getPrefixCls,P=e.prefixCls||O("pro"),b="".concat(P,"-page-container"),w=_()(b,e.className,Ze({},"".concat(P,"-page-container-ghost"),g)),z=r?h.a.createElement("div",null,h.a.createElement("div",{className:"".concat(b,"-children-content")},r),p.hasFooterToolbar&&h.a.createElement("div",{style:{height:48,marginTop:24}})):null,te=yt(e,V(V({},p),{},{prefixCls:void 0,prefixedClassName:b})),ie=te?h.a.createElement("div",{className:"".concat(b,"-warp")},te):null,oe=function(){var B=pt(n),X=B.spinning?h.a.createElement(dt.a,B):z;return e.waterMarkProps||p.waterMarkProps?h.a.createElement(vt.a,e.waterMarkProps||p.waterMarkProps,X):X};return h.a.createElement("div",{style:l,className:w},x&&ie?h.a.createElement(G,ue({offsetTop:p.hasHeader&&p.fixedHeader?p.headerHeight:0},u),ie):ie,h.a.createElement(ft.a,null,oe()),v&&h.a.createElement(ut.a,{prefixCls:P},v))},jt=N.a=Pt},"u/V1":function(K,N,i){},yxHc:function(K,N,i){"use strict";var L=i("GNNt"),U=i("wEI+"),E=i("q1tI"),R=i.n(E),S=i("TSYQ"),W=i.n(S);function J(f,o){var c=Object.keys(f);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(f);o&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(f,m).enumerable})),c.push.apply(c,d)}return c}function j(f){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?J(Object(c),!0).forEach(function(d){$(f,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(c)):J(Object(c)).forEach(function(d){Object.defineProperty(f,d,Object.getOwnPropertyDescriptor(c,d))})}return f}function $(f,o,c){return o in f?Object.defineProperty(f,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):f[o]=c,f}function s(f,o){return Y(f)||H(f,o)||T(f,o)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(f,o){if(!!f){if(typeof f=="string")return _(f,o);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return _(f,o)}}function _(f,o){(o==null||o>f.length)&&(o=f.length);for(var c=0,d=new Array(o);c<o;c++)d[c]=f[c];return d}function H(f,o){var c=f&&(typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"]);if(c!=null){var d=[],m=!0,D=!1,A,Q;try{for(c=c.call(f);!(m=(A=c.next()).done)&&(d.push(A.value),!(o&&d.length===o));m=!0);}catch(F){D=!0,Q=F}finally{try{!m&&c.return!=null&&c.return()}finally{if(D)throw Q}}return d}}function Y(f){if(Array.isArray(f))return f}var M=function(o){if(!o)return 1;var c=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/c},Z=function(o){var c=o.children,d=o.style,m=o.className,D=o.markStyle,A=o.markClassName,Q=o.zIndex,F=Q===void 0?9:Q,ve=o.gapX,ae=ve===void 0?212:ve,le=o.gapY,k=le===void 0?222:le,C=o.width,I=C===void 0?120:C,q=o.height,G=q===void 0?64:q,me=o.rotate,ce=me===void 0?-22:me,Pe=o.image,Ee=o.content,we=o.offsetLeft,Le=o.offsetTop,Ue=o.fontStyle,Ce=Ue===void 0?"normal":Ue,xe=o.fontWeight,je=xe===void 0?"normal":xe,ge=o.fontColor,he=ge===void 0?"rgba(0,0,0,.15)":ge,Te=o.fontSize,Re=Te===void 0?16:Te,De=o.fontFamily,pe=De===void 0?"sans-serif":De,We=o.prefixCls,Ke=Object(E.useContext)(U.b.ConfigContext),He=Ke.getPrefixCls,Ne=He("pro-layout-watermark",We),Fe=W()("".concat(Ne,"-wrapper"),m),Be=W()(Ne,A),Me=Object(E.useState)(""),be=s(Me,2),ze=be[0],Oe=be[1];return Object(E.useEffect)(function(){var se=document.createElement("canvas"),ee=se.getContext("2d"),ne=M(ee),$e="".concat((ae+I)*ne,"px"),Ye="".concat((k+G)*ne,"px"),Ae=we||ae/2,Qe=Le||k/2;if(se.setAttribute("width",$e),se.setAttribute("height",Ye),ee){ee.translate(Ae*ne,Qe*ne),ee.rotate(Math.PI/180*Number(ce));var ye=I*ne,Se=G*ne;if(Pe){var fe=new Image;fe.crossOrigin="anonymous",fe.referrerPolicy="no-referrer",fe.src=Pe,fe.onload=function(){ee.drawImage(fe,0,0,ye,Se),Oe(se.toDataURL())}}else if(Ee){var Ge=Number(Re)*ne;ee.font="".concat(Ce," normal ").concat(je," ").concat(Ge,"px/").concat(Se,"px ").concat(pe),ee.fillStyle=he,ee.fillText(Ee,0,0),Oe(se.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ae,k,we,Le,ce,Ce,je,I,G,pe,he,Pe,Ee,Re]),R.a.createElement("div",{style:j({position:"relative"},d),className:Fe},c,R.a.createElement("div",{className:Be,style:j({zIndex:F,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ae+I,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(ze,"')")},D)}))};N.a=Z}}]);
