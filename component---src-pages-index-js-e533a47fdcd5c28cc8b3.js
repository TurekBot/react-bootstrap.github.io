(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1098:function(e,t,a){e.exports={mastHead:"index-MastHead-module--mast-head--1Njqj"}},1099:function(e,t,a){e.exports={content:"index-Content-module--content---IH1T px-4"}},1100:function(e,t,a){e.exports={heading:"index-Heading-module--heading--2gtPj"}},1101:function(e,t,a){e.exports={subHeading:"index-SubHeading-module--sub-heading--n4XOT lead"}},1102:function(e,t,a){e.exports={brandButton:"index-BrandButton-module--brand-button--3mMb8",focus:"index-BrandButton-module--focus--j1D5K",disabled:"index-BrandButton-module--disabled--3vLzP",active:"index-BrandButton-module--active--1iX6b",show:"index-BrandButton-module--show--134sZ",dropdownToggle:"index-BrandButton-module--dropdown-toggle---Z_bV"}},1103:function(e,t,a){e.exports={featureCard:"index-FeatureCard-module--feature-card--3ynRH px-4 py-3"}},1104:function(e,t,a){e.exports={buttonToolbar:"index-ButtonToolbar-module--button-toolbar--3vmwU"}},240:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(0),l=a.n(o),s=a(328),i=a(362),c=a(364),u=a(342),p=a(363),d=a(28),m=a.n(d),b=a(391),h=a.n(b),g=a(270),f=a(297),y=m()(p.a,null,"MastHead",a(1098),"mast-head","mastHead"),v=m()("div",null,"Content",a(1099),"content","content"),x=m()("h1",null,"Heading",a(1100),"heading","heading"),w=m()("p",null,"SubHeading",a(1101),"sub-heading","subHeading"),E=m()(s.a,null,"BrandButton",a(1102),"brand-button","brandButton"),k=h()({md:4})(m()(u.a,null,"FeatureCard",a(1103),"feature-card","featureCard")),B=m()("div",null,"ButtonToolbar",a(1104),"button-toolbar","buttonToolbar");t.default=Object(f.a)(function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("main",{id:"rb-docs-content"},l.a.createElement(y,{fluid:!0},l.a.createElement(v,null,l.a.createElement(x,null,"React Bootstrap"),l.a.createElement(w,null,"The most popular front-end framework",l.a.createElement("br",null),l.a.createElement("strong",null,"Rebuilt")," for React."),l.a.createElement(B,null,l.a.createElement(E,{size:"lg",variant:"brand",className:"mr-3 px-5",href:"/getting-started/introduction"},"Get started"),l.a.createElement(s.a,{size:"lg",href:"/components/alerts",className:"px-5",variant:"outline-light"},"Components")),l.a.createElement("div",{className:"text-muted mt-3"},"Current version: ",g.version))),l.a.createElement(i.a,null,l.a.createElement(c.a,null,l.a.createElement(k,null,l.a.createElement("h2",null,"Rebuilt with React"),l.a.createElement("p",null,"React bootstrap replaces the Bootstrap javascript. Each component has been built from scratch as true React components, without uneeded dependencies like jQuery."),l.a.createElement("p",null,"As one of the oldest React libraries, react bootstrap has evolved and grown along-side React, making it an exellent choice as your UI foundation.")),l.a.createElement(k,null,l.a.createElement("h2",null,"Bootstrap at its core"),l.a.createElement("p",null,"Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem."),l.a.createElement("p",null,"By relying entirely on the Bootstrap stylesheet, React bootstrap, just works with the thousands of bootstrap themes you already love."),l.a.createElement("p",null)),l.a.createElement(k,null,l.a.createElement("h2",null,"Accessible by default"),l.a.createElement("p",null,"The React component model gives us more control over form and function of each component."),l.a.createElement("p",null,"Each component is implemented with accessibilty in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.")))))},t}(l.a.Component))},270:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"yarn changelog && rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.2.0","@babel/cli":"^7.2.0","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.1","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.7.13","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-transform-react-remove-prop-types":"^0.4.21",chai:"^4.2.0",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.11","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.7.1",eslint:"^5.10.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^3.0.0","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.0",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.0",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.15.3",react:"^16.6.3","react-dom":"^16.6.3","react-test-renderer":"^16.6.3","release-script":"^1.0.2",sinon:"^7.2.2","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.28.0"},dependencies:{"@babel/runtime":"^7.2.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.6","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^2.0.2","react-overlays":"^1.0.0","react-prop-types":"^0.4.0","react-transition-group":"^2.5.1",uncontrollable:"^6.0.0",warning:"^4.0.1"},release:{publishDir:"lib"}}},297:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(313);var n=a(0),r=a.n(n),o=a(298),l=a(314);function s(e){return function(t){var a=t.location.pathname,n=l.a;return(a.startsWith("/getting-started")||a.startsWith("/layout")||a.startsWith("/components")||a.startsWith("/utilities"))&&(n=o.a),r.a.createElement(n,{location:t.location},r.a.createElement(e,t))}}},363:function(e,t,a){"use strict";var n=a(265),r=a(266),o=a(267),l=a(0),s=a.n(l),i=a(261),c=a.n(i),u=a(268),p=a.n(u),d=a(296),m=a(269),b={as:d.elementType,fluid:c.a.bool,bsPrefix:c.a.string},h=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.as,o=t.className,l=t.fluid,i=t.bsPrefix,c=Object(r.a)(t,["as","className","fluid","bsPrefix"]),u=((e={})[i]=!0,e[i+"-fluid"]=l,e);return s.a.createElement(a,Object(n.a)({},c,{className:p()(o,u),__source:{fileName:"/Users/jason/src/react-bootstrap/src/Jumbotron.js",lineNumber:28},__self:this}))},t}(s.a.Component);h.propTypes=b,h.defaultProps={as:"div",fluid:!1},t.a=Object(m.a)(h,"jumbotron")}}]);
//# sourceMappingURL=component---src-pages-index-js-e533a47fdcd5c28cc8b3.js.map