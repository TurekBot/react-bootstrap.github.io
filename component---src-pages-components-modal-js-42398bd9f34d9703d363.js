(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1052:function(e,t){e.exports='<Modal.Dialog>\n  <Modal.Header closeButton>\n    <Modal.Title>Modal title</Modal.Title>\n  </Modal.Header>\n\n  <Modal.Body>\n    <p>Modal body text goes here.</p>\n  </Modal.Body>\n\n  <Modal.Footer>\n    <Button variant="secondary">Close</Button>\n    <Button variant="primary">Save changes</Button>\n  </Modal.Footer>\n</Modal.Dialog>;\n'},1053:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false,\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.Title>Modal heading</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n          <Modal.Footer>\n            <Button variant="secondary" onClick={this.handleClose}>\n              Close\n            </Button>\n            <Button variant="primary" onClick={this.handleClose}>\n              Save Changes\n            </Button>\n          </Modal.Footer>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n'},1054:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false,\n    };\n  }\n\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button onClick={() => this.setState({ smShow: true })}>\n          Small modal\n        </Button>\n        <Button onClick={() => this.setState({ lgShow: true })}>\n          Large modal\n        </Button>\n\n        <Modal\n          size="sm"\n          show={this.state.smShow}\n          onHide={smClose}\n          aria-labelledby="example-modal-sizes-title-sm"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-modal-sizes-title-sm">\n              Small Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n\n        <Modal\n          size="lg"\n          show={this.state.lgShow}\n          onHide={lgClose}\n          aria-labelledby="example-modal-sizes-title-lg"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-modal-sizes-title-lg">\n              Large Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>...</Modal.Body>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n'},1055:function(e,t){e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      show: false,\n    };\n\n    this.handleShow = () => {\n      this.setState({ show: true });\n    };\n\n    this.handleHide = () => {\n      this.setState({ show: false });\n    };\n  }\n\n  render() {\n    return (\n      <>\n        <Button variant="primary" onClick={this.handleShow}>\n          Custom Width Modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="modal-90w"\n          aria-labelledby="example-custom-modal-styling-title"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="example-custom-modal-styling-title">\n              Custom Modal Styling\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem!\n            </p>\n          </Modal.Body>\n        </Modal>\n      </>\n    );\n  }\n}\n\nrender(<Example />);\n'},1056:function(e,t){e.exports='class MyVerticallyCenteredModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        size="lg"\n        aria-labelledby="contained-modal-title-vcenter"\n        centered\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-vcenter">\n            Modal heading\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Centered Modal</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch vertically centered modal\n        </Button>\n\n        <MyVerticallyCenteredModal\n          show={this.state.modalShow}\n          onHide={modalClose}\n        />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n'},1057:function(e,t){e.exports='class MydModalWithGrid extends React.Component {\n  render() {\n    return (\n      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-vcenter">\n            Using Grid in Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <Container>\n            <Row className="show-grid">\n              <Col xs={12} md={8}>\n                <code>.col-xs-12 .col-md-8</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n\n            <Row className="show-grid">\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n              <Col xs={6} md={4}>\n                <code>.col-xs-6 .col-md-4</code>\n              </Col>\n            </Row>\n          </Container>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(...args) {\n    super(...args);\n\n    this.state = { modalShow: false };\n  }\n\n  render() {\n    let modalClose = () => this.setState({ modalShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          variant="primary"\n          onClick={() => this.setState({ modalShow: true })}\n        >\n          Launch modal with grid\n        </Button>\n\n        <MydModalWithGrid show={this.state.modalShow} onHide={modalClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n'},1058:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return w});var a=n(0),o=n.n(a),r=n(295),l=n(120),s=n(312),i=n(1052),c=n.n(i),d=n(1053),u=n.n(d),m=n(1054),p=n.n(m),h=n(1055),f=n.n(h),b=n(1056),y=n.n(b),g=n(1057),v=n.n(g),E=n(297),M=n(1058);t.default=Object(E.a)(function(e){var t=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.default,{h:"1",id:"modals"},"Modals"),o.a.createElement("p",{className:"lead"},"Add dialogs to your site for lightboxes, user notifications, or completely custom content."),o.a.createElement(l.default,{h:"2",id:"modals-overview"},"Overview"),o.a.createElement("ul",null,o.a.createElement("li",null,"Modals are positioned over everything else in the document and remove scroll from the ",o.a.createElement("code",null,"<body>")," so that modal content scrolls instead."),o.a.createElement("li",null,"Modals are ",o.a.createElement("em",null,"unmounted")," when closed."),o.a.createElement("li",null,"Bootstrap only supports ",o.a.createElement("strong",null,"one")," modal window at a time. Nested modals aren’t supported, but if you really need them the underlying ",o.a.createElement("code",null,"react-overlays")," can support them if you're willing."),o.a.createElement("li",null,'Modal\'s "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.'),o.a.createElement("li",null,"Unlike vanilla Bootstrap, ",o.a.createElement("code",null,"autoFocus")," works in Modals because React handles the implementation.")),o.a.createElement(l.default,{h:"2",id:"modals-examples"},"Examples"),o.a.createElement(l.default,{h:"3",id:"modals-static"},"Static Markup"),o.a.createElement("p",null,"Below is a ",o.a.createElement("em",null,"static")," modal dialog (without the positioning) to demostrate the look and feel of the Modal."),o.a.createElement(s.a,{codeText:c.a}),o.a.createElement(l.default,{h:"3",id:"modals-live"},"Live demo"),o.a.createElement("p",null,"A modal with header, body, and set of actions in the footer. Use"," ",o.a.createElement("code",null,"<Modal/>")," in combination with other components to show or hide your Modal. The ",o.a.createElement("code",null,"<Modal/>"),' Component comes with a few convenient "sub components": ',o.a.createElement("code",null,"<Modal.Header/>"),","," ",o.a.createElement("code",null,"<Modal.Title/>"),", ",o.a.createElement("code",null,"<Modal.Body/>"),", and"," ",o.a.createElement("code",null,"<Modal.Footer/>"),", which you can use to build the Modal content."),o.a.createElement(s.a,{codeText:u.a}),o.a.createElement("div",{className:"bs-callout bs-callout-info"},o.a.createElement("div",{className:"h4"},"Additional Import Options"),o.a.createElement("p",null,"The Modal Header, Title, Body, and Footer components are available as static properties the ",o.a.createElement("code",null,"<Modal/>")," component, but you can also, import them directly like:"," ",o.a.createElement("code",null,'require("react-bootstrap/ModalHeader")'),".")),o.a.createElement(l.default,{h:"3",id:"modal-vertically-centered"},"Vertically centered"),o.a.createElement("p",null,'You can vertically center a modal by passing the "verticallyCenter" prop.'),o.a.createElement(s.a,{codeText:y.a}),o.a.createElement(l.default,{h:"3",id:"modal-grid"},"Using the grid"),o.a.createElement("p",null,"You can use grid layouts within a model using regular grid components inside the modal content."),o.a.createElement(s.a,{codeText:v.a}),o.a.createElement(l.default,{h:"2",id:"modal-default-sizing"},"Optional Sizes"),o.a.createElement("p",null,'You can specify a bootstrap large or small modal by using the "size" prop.'),o.a.createElement(s.a,{codeText:p.a}),o.a.createElement(l.default,{h:"3",id:"modal-custom-sizing"},"Sizing modals using custom CSS"),o.a.createElement("p",null,'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'),o.a.createElement(s.a,{codeText:f.a,exampleClassName:M.custom}),o.a.createElement(l.default,{h:"2",id:"modals-props"},"API"),o.a.createElement(r.a,{metadata:t.Modal}),o.a.createElement(r.a,{metadata:t.ModalDialog}),o.a.createElement(r.a,{metadata:t.ModalHeader}),o.a.createElement(r.a,{metadata:t.ModalTitle}),o.a.createElement(r.a,{metadata:t.ModalBody}),o.a.createElement(r.a,{metadata:t.ModalFooter}))});var w="3111835207"},264:function(e,t,n){var a=n(12).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(13)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},270:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"yarn changelog && rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.2.0","@babel/cli":"^7.2.0","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.1","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.7.13","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-transform-react-remove-prop-types":"^0.4.21",chai:"^4.2.0",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.11","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.7.1",eslint:"^5.10.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^3.0.0","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.0",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.0",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.15.3",react:"^16.6.3","react-dom":"^16.6.3","react-test-renderer":"^16.6.3","release-script":"^1.0.2",sinon:"^7.2.2","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.28.0"},dependencies:{"@babel/runtime":"^7.2.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.6","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^2.0.2","react-overlays":"^1.0.0","react-prop-types":"^0.4.0","react-transition-group":"^2.5.1",uncontrollable:"^6.0.0",warning:"^4.0.1"},release:{publishDir:"lib"}}},271:function(e,t,n){var a=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},272:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},273:function(e,t,n){var a=n(274),o=n(276),r=n(283),l=n(290),s=r(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),o(e,a(t,1),[])});e.exports=s},274:function(e,t,n){var a=n(304),o=n(275);e.exports=function e(t,n,r,l,s){var i=-1,c=t.length;for(r||(r=o),s||(s=[]);++i<c;){var d=t[i];n>0&&r(d)?n>1?e(d,n-1,r,l,s):a(s,d):l||(s[s.length]=d)}return s}},275:function(e,t,n){var a=n(47),o=n(305),r=n(114),l=a?a.isConcatSpreadable:void 0;e.exports=function(e){return r(e)||o(e)||!!(l&&e&&e[l])}},276:function(e,t,n){var a=n(117),o=n(306),r=n(277),l=n(280),s=n(303),i=n(281),c=n(263);e.exports=function(e,t,n){var d=-1;t=a(t.length?t:[c],s(o));var u=r(e,function(e,n,o){return{criteria:a(t,function(t){return t(e)}),index:++d,value:e}});return l(u,function(e,t){return i(e,t,n)})}},277:function(e,t,n){var a=n(278),o=n(262);e.exports=function(e,t){var n=-1,r=o(e)?Array(e.length):[];return a(e,function(e,a,o){r[++n]=t(e,a,o)}),r}},278:function(e,t,n){var a=n(308),o=n(279)(a);e.exports=o},279:function(e,t,n){var a=n(262);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!a(n))return e(n,o);for(var r=n.length,l=t?r:-1,s=Object(n);(t?l--:++l<r)&&!1!==o(s[l],l,s););return n}}},280:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},281:function(e,t,n){var a=n(282);e.exports=function(e,t,n){for(var o=-1,r=e.criteria,l=t.criteria,s=r.length,i=n.length;++o<s;){var c=a(r[o],l[o]);if(c)return o>=i?c:c*("desc"==n[o]?-1:1)}return e.index-t.index}},282:function(e,t,n){var a=n(115);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,r=e==e,l=a(e),s=void 0!==t,i=null===t,c=t==t,d=a(t);if(!i&&!d&&!l&&e>t||l&&s&&c&&!i&&!d||o&&s&&c||!n&&c||!r)return 1;if(!o&&!l&&!d&&e<t||d&&n&&r&&!o&&!l||i&&n&&r||!s&&r||!c)return-1}return 0}},283:function(e,t,n){var a=n(263),o=n(284),r=n(286);e.exports=function(e,t){return r(o(e,t,a),e+"")}},284:function(e,t,n){var a=n(285),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var r=arguments,l=-1,s=o(r.length-t,0),i=Array(s);++l<s;)i[l]=r[t+l];l=-1;for(var c=Array(t+1);++l<t;)c[l]=r[l];return c[t]=n(i),a(e,this,c)}}},285:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},286:function(e,t,n){var a=n(287),o=n(289)(a);e.exports=o},287:function(e,t,n){var a=n(288),o=n(311),r=n(263),l=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:r;e.exports=l},288:function(e,t){e.exports=function(e){return function(){return e}}},289:function(e,t){var n=800,a=16,o=Date.now;e.exports=function(e){var t=0,r=0;return function(){var l=o(),s=a-(l-r);if(r=l,s>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},290:function(e,t,n){var a=n(302),o=n(262),r=n(307),l=n(299);e.exports=function(e,t,n){if(!l(n))return!1;var s=typeof t;return!!("number"==s?o(n)&&r(t,n.length):"string"==s&&t in n)&&a(n[t],e)}},291:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},292:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},293:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},294:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},295:function(e,t,n){"use strict";n(118),n(264);var a=n(271),o=n.n(a),r=n(0),l=n.n(r),s=n(28),i=n.n(s),c=n(49),d=n(79),u=n(300),m=n(301),p=n(270),h=i()("a",null,"Link",n(272),"link","link"),f=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+p.version+"/src/"+t+".js";return l.a.createElement(u.a,{overlay:l.a.createElement(m.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(h,{href:n,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},b=(n(78),n(5)),y=n.n(b),g=(n(48),n(273)),v=n.n(g),E=n(119),M=n.n(E),w=n(1),x=n.n(w),C=n(309),k=n(310),B=i()("code",null,"Code",n(291),"code","code"),S=i()("div",null,"PropDescription",n(292),"prop-description","propDescription");function T(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function N(e){return"func"===e?"function":"bool"===e?"boolean":e}var H=function(e){function t(){return e.apply(this,arguments)||this}y()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=N(n.name),o=e.doclets||{};switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,o){var r=t.getType({type:n});return l.a.isValidElement(r)&&(r=l.a.cloneElement(r,{key:a})),e=e.concat(r),a===o.length-1?e:e.concat(" | ")},[]);case"array":var r=this.getType({type:n.value});return l.a.createElement("span",null,"array<",r,">");case"enum":return this.renderEnum(n);case"custom":return T(o.type||n.raw);default:return a}},n._renderRows=function(e){var t=this;return v()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,o=e.doclets,r=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,o.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+o.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement(S,{dangerouslySetInnerHTML:{__html:r}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=N(t.name),a=e.doclets||{};return"custom"===n?T(a.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(B,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,a="function"===N(e.type.name);if(!n)return!1;var o=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(B,null,n),", initial prop:"," ",l.a.createElement(B,null,"default"+M()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},o)))},n.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var n=[];return t.forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(C.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(k.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);H.propTypes={metadata:x.a.object.isRequired};var q=H,z=i()("span",null,"Keyword",n(293),"keyword","keyword"),R=i()("code",null,"Code",n(294),"code","code"),D=function(e){var t=e.name;return l.a.createElement(R,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(z,null,"import")," ",t," ",l.a.createElement(z,null,"from")," 'react-bootstrap/",t,"'")};function A(e){var t=e.heading,n=e.metadata,a=e.exportedBy,r=n.description,s=n.displayName,i=r&&r.childMarkdownRemark.html,u=s;a&&(s=a.displayName+"."+s.split(a.displayName).pop(),u=a.displayName);var m=o()(s)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.default,{h:t||"3",id:m,title:s,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(d.a,{target:m},l.a.createElement("span",{className:" text-monospace"},s)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(f,{component:s}))),l.a.createElement(D,{name:u}),i&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),l.a.createElement(q,{metadata:n}))}A.propTypes={};t.a=A},297:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(313);var a=n(0),o=n.n(a),r=n(298),l=n(314);function s(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=r.a),o.a.createElement(a,{location:t.location},o.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-components-modal-js-42398bd9f34d9703d363.js.map