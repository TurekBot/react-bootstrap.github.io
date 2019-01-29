(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1041:function(e,t){e.exports='<Image src="holder.js/100px250" fluid />;\n'},1042:function(e,t){e.exports='<Container>\n  <Row>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" rounded />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" roundedCircle />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="holder.js/171x180" thumbnail />\n    </Col>\n  </Row>\n</Container>;\n'},229:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return d});var n=r(0),a=r.n(n),o=r(295),l=r(120),c=r(312),i=r(1041),s=r.n(i),u=r(1042),p=r.n(u),m=r(297);t.default=Object(m.a)(function(e){var t=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.default,{h:"1",id:"images"},"Images"),a.a.createElement(l.default,{h:"2",id:"image-shape"},"Shape"),a.a.createElement("p",null,"Use the ",a.a.createElement("code",null,"rounded"),", ",a.a.createElement("code",null,"roundedCircle")," and"," ",a.a.createElement("code",null,"thumbnail")," props to customise the image."),a.a.createElement(c.a,{codeText:p.a}),a.a.createElement(l.default,{h:"2",id:"image-fluid"},"Fluid"),a.a.createElement("p",null,"Use the ",a.a.createElement("code",null,"fluid")," to scale image nicely to the parent element."),a.a.createElement(c.a,{codeText:s.a}),a.a.createElement(l.default,{h:"2",id:"image-api"},"API"),a.a.createElement(o.a,{metadata:t.Image}))});var d="1200151953"},264:function(e,t,r){var n=r(12).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(13)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},270:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"yarn changelog && rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.2.0","@babel/cli":"^7.2.0","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.1","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.7.13","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-transform-react-remove-prop-types":"^0.4.21",chai:"^4.2.0",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.11","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.7.1",eslint:"^5.10.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^3.0.0","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.0",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.0",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.15.3",react:"^16.6.3","react-dom":"^16.6.3","react-test-renderer":"^16.6.3","release-script":"^1.0.2",sinon:"^7.2.2","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.28.0"},dependencies:{"@babel/runtime":"^7.2.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.6","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^2.0.2","react-overlays":"^1.0.0","react-prop-types":"^0.4.0","react-transition-group":"^2.5.1",uncontrollable:"^6.0.0",warning:"^4.0.1"},release:{publishDir:"lib"}}},271:function(e,t,r){var n=r(116)(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});e.exports=n},272:function(e,t,r){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},273:function(e,t,r){var n=r(274),a=r(276),o=r(283),l=r(290),c=o(function(e,t){if(null==e)return[];var r=t.length;return r>1&&l(e,t[0],t[1])?t=[]:r>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),a(e,n(t,1),[])});e.exports=c},274:function(e,t,r){var n=r(304),a=r(275);e.exports=function e(t,r,o,l,c){var i=-1,s=t.length;for(o||(o=a),c||(c=[]);++i<s;){var u=t[i];r>0&&o(u)?r>1?e(u,r-1,o,l,c):n(c,u):l||(c[c.length]=u)}return c}},275:function(e,t,r){var n=r(47),a=r(305),o=r(114),l=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(l&&e&&e[l])}},276:function(e,t,r){var n=r(117),a=r(306),o=r(277),l=r(280),c=r(303),i=r(281),s=r(263);e.exports=function(e,t,r){var u=-1;t=n(t.length?t:[s],c(a));var p=o(e,function(e,r,a){return{criteria:n(t,function(t){return t(e)}),index:++u,value:e}});return l(p,function(e,t){return i(e,t,r)})}},277:function(e,t,r){var n=r(278),a=r(262);e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,function(e,n,a){o[++r]=t(e,n,a)}),o}},278:function(e,t,r){var n=r(308),a=r(279)(n);e.exports=a},279:function(e,t,r){var n=r(262);e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,l=t?o:-1,c=Object(r);(t?l--:++l<o)&&!1!==a(c[l],l,c););return r}}},280:function(e,t){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},281:function(e,t,r){var n=r(282);e.exports=function(e,t,r){for(var a=-1,o=e.criteria,l=t.criteria,c=o.length,i=r.length;++a<c;){var s=n(o[a],l[a]);if(s)return a>=i?s:s*("desc"==r[a]?-1:1)}return e.index-t.index}},282:function(e,t,r){var n=r(115);e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,l=n(e),c=void 0!==t,i=null===t,s=t==t,u=n(t);if(!i&&!u&&!l&&e>t||l&&c&&s&&!i&&!u||a&&c&&s||!r&&s||!o)return 1;if(!a&&!l&&!u&&e<t||u&&r&&o&&!a&&!l||i&&r&&o||!c&&o||!s)return-1}return 0}},283:function(e,t,r){var n=r(263),a=r(284),o=r(286);e.exports=function(e,t){return o(a(e,t,n),e+"")}},284:function(e,t,r){var n=r(285),a=Math.max;e.exports=function(e,t,r){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,c=a(o.length-t,0),i=Array(c);++l<c;)i[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=r(i),n(e,this,s)}}},285:function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},286:function(e,t,r){var n=r(287),a=r(289)(n);e.exports=a},287:function(e,t,r){var n=r(288),a=r(311),o=r(263),l=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:o;e.exports=l},288:function(e,t){e.exports=function(e){return function(){return e}}},289:function(e,t){var r=800,n=16,a=Date.now;e.exports=function(e){var t=0,o=0;return function(){var l=a(),c=n-(l-o);if(o=l,c>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},290:function(e,t,r){var n=r(302),a=r(262),o=r(307),l=r(299);e.exports=function(e,t,r){if(!l(r))return!1;var c=typeof t;return!!("number"==c?a(r)&&o(t,r.length):"string"==c&&t in r)&&n(r[t],e)}},291:function(e,t,r){e.exports={code:"PropTable-Code-module--code--FStF3"}},292:function(e,t,r){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},293:function(e,t,r){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},294:function(e,t,r){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},295:function(e,t,r){"use strict";r(118),r(264);var n=r(271),a=r.n(n),o=r(0),l=r.n(o),c=r(28),i=r.n(c),s=r(49),u=r(79),p=r(300),m=r(301),d=r(270),f=i()("a",null,"Link",r(272),"link","link"),b=function(e){var t=e.component,r="//github.com/react-bootstrap/react-bootstrap/tree/v"+d.version+"/src/"+t+".js";return l.a.createElement(p.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(f,{href:r,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},v=(r(78),r(5)),h=r.n(v),g=(r(48),r(273)),y=r.n(g),E=r(119),x=r.n(E),w=r(1),k=r.n(w),N=r(309),C=r(310),j=i()("code",null,"Code",r(291),"code","code"),T=i()("div",null,"PropDescription",r(292),"prop-description","propDescription");function D(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function I(e){return"func"===e?"function":"bool"===e?"boolean":e}var A=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var r=t.prototype;return r.getType=function(e){var t=this,r=e.type||{},n=I(r.name),a=e.doclets||{};switch(n){case"object":return n;case"union":return r.value.reduce(function(e,r,n,a){var o=t.getType({type:r});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:n})),e=e.concat(o),n===a.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:r.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(r);case"custom":return D(a.type||r.raw);default:return n}},r._renderRows=function(e){var t=this;return y()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var r=e.name,n=e.description,a=e.doclets,o=n&&n.childMarkdownRemark.html;return l.a.createElement("tr",{key:r,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},r," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,a.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+a.deprecated+" ")),t.renderControllableNote(e,r),l.a.createElement(T,{dangerouslySetInnerHTML:{__html:o}})))})},r.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},r=I(t.name),n=e.doclets||{};return"custom"===r?D(n.type||t.raw):r}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(j,null,t))},r.renderControllableNote=function(e,t){var r=e.doclets.controllable,n="function"===I(e.type.name);if(!r)return!1;var a=n?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,r)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(j,null,r),", initial prop:"," ",l.a.createElement(j,null,"default"+x()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},a)))},r.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var r=[];return t.forEach(function(e,t){var n=e.value;t>0&&r.push(l.a.createElement("span",{key:t+"c"}," | ")),r.push(l.a.createElement("code",{key:t},n))}),l.a.createElement("span",null,r)},r.renderRequiredBadge=function(e){return e.required?l.a.createElement(N.a,null,"required"):null},r.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(C.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);A.propTypes={metadata:k.a.object.isRequired};var L=A,R=i()("span",null,"Keyword",r(293),"keyword","keyword"),z=i()("code",null,"Code",r(294),"code","code"),S=function(e){var t=e.name;return l.a.createElement(z,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(R,null,"import")," ",t," ",l.a.createElement(R,null,"from")," 'react-bootstrap/",t,"'")};function q(e){var t=e.heading,r=e.metadata,n=e.exportedBy,o=r.description,c=r.displayName,i=o&&o.childMarkdownRemark.html,p=c;n&&(c=n.displayName+"."+c.split(n.displayName).pop(),p=n.displayName);var m=a()(c)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:t||"3",id:m,title:c,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(u.a,{target:m},l.a.createElement("span",{className:" text-monospace"},c)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(b,{component:c}))),l.a.createElement(S,{name:p}),i&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),l.a.createElement(L,{metadata:r}))}q.propTypes={};t.a=q},297:function(e,t,r){"use strict";r.d(t,"a",function(){return c});r(313);var n=r(0),a=r.n(n),o=r(298),l=r(314);function c(e){return function(t){var r=t.location.pathname,n=l.a;return(r.startsWith("/getting-started")||r.startsWith("/layout")||r.startsWith("/components")||r.startsWith("/utilities"))&&(n=o.a),a.a.createElement(n,{location:t.location},a.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-components-images-js-424b3ca2b1f901f765a3.js.map