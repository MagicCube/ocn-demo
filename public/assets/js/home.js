webpackJsonp([0],{138:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(16),l=r(c),f=n(210),s=r(f);n(402);var p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"handleMoClick",value:function(e){"function"==typeof this.props.onMoClick&&this.props.onMoClick(e)}},{key:"render",value:function(){var e=this;return l.default.createElement("ul",{className:"ocn-lo-mo"},this.props.data&&this.props.data.length?this.props.data.map(function(t){return l.default.createElement("li",{key:t.id,onClick:function(){return e.handleMoClick(t)},className:t.selected?"selected":""},l.default.createElement(s.default,{data:t}),l.default.createElement("div",{className:"mark"}))}):l.default.createElement("li",{className:"empty"},"(无)"))}}]),t}(l.default.Component);p.defaultProps={data:[]},t.default=p},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(16),f=r(l),s=n(65),p=n(214),d=r(p),h=n(216),y=r(h),v=n(215),m=r(v),b=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={user:null},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.initialLoad()}},{key:"initialLoad",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getUser)();case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state.user;return e?f.default.createElement("div",{className:"scene-container"},this.renderScene(e)):null}},{key:"renderScene",value:function(e){var t=this;return e.ocnId?e.favs&&e.favs.length>=3?(document.body.scrollTop=0,f.default.createElement(y.default,{user:e})):f.default.createElement(m.default,{user:e,nextStep:function(){return t.forceUpdate()}}):f.default.createElement(d.default,{user:e,nextStep:function(){return t.forceUpdate()}})}}]),t}(f.default.Component);t.default=b},201:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0;var o=(t.config=function(){var e=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).getTime(),e.t0=wx,e.t1=n,e.t2=u,e.next=6,o(n);case 6:e.t3=e.sent,e.t4=["scanQRCode"],e.t5={debug:!1,appId:"wxcd1ad2cfb81d38ef",timestamp:e.t1,nonceStr:e.t2,signature:e.t3,jsApiList:e.t4},e.t0.config.call(e.t0,e.t5),wx.ready(t);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(){var e=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.get)("/oauth/wechat/signature?noncestr="+u+"&timestamp="+t+"&rnd="+Math.random);case 2:if(n=e.sent,n.errcode){e.next=7;break}return e.abrupt("return",n.code);case 7:console.error(n);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),a=n(139),u="Mm3MZYTPz0wzccnM"},204:function(e,t){},207:function(e,t,n){e.exports=n.p+"index.html"},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(16),l=r(c),f=n(138),s=r(f);n(401);var p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"handleMoClick",value:function(e){"function"==typeof this.props.onMoClick&&this.props.onMoClick(e)}},{key:"render",value:function(){var e=this;return l.default.createElement("ul",{className:"ocn-lo-lo-mo"},this.props.data.map(function(t,n){return l.default.createElement("li",{key:"cluster-"+n},l.default.createElement("div",{className:"title"},t._tags.join(", ")),l.default.createElement(s.default,{data:t.movies,displayCheck:e.props.displayCheck,onMoClick:function(t){return e.handleMoClick(t)}}))}))}}]),t}(l.default.Component);t.default=p},210:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(16),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(404);var l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ocn-mo-cover",style:{backgroundImage:"url("+this.props.data.img+")"}})}}]),t}(c.default.PureComponent);t.default=l},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(16),a=r(o),u=n(64),i=n(200),c=r(i);n(207),n(204),(0,n(201).config)(function(){(0,u.render)(a.default.createElement(c.default,null),document.getElementById("ocn-home"))})},214:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(16),l=function(e){return e&&e.__esModule?e:{default:e}}(c),f=n(65);n(399);var s=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),i(t,[{key:"handleBindButtonClick",value:function(){var e=this;wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(){var t=r(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.resultStr,t.next=3,(0,f.bindTv)(r);case 3:e.props.user.ocnId=r,e.forceUpdate();case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}},{key:"handleNextButtonClick",value:function(){this.props.nextStep&&this.props.nextStep()}},{key:"render",value:function(){var e=this.props.user;return l.default.createElement("div",{className:"ocn-bind-tv-scene ocn-scene"},l.default.createElement("div",{className:"bottom"},this.renderMain(e)))}},{key:"renderMain",value:function(e){var t=this;return e.ocnId?l.default.createElement("div",{className:"main"},l.default.createElement("div",{className:"thumbnail",style:{backgroundImage:"url("+e.headimgurl+")"}}),l.default.createElement("h3",null,"太棒了，",l.default.createElement("br",null),"你已经可以在手机上选片了！"),l.default.createElement("div",{className:"ocn-id"},"您的机顶盒唯一识别码为 ","{"+e.ocnId+"}"),l.default.createElement("button",{className:"success button",onClick:function(){return t.handleNextButtonClick()}},"下一步")):l.default.createElement("div",{className:"main"},l.default.createElement("div",{className:"thumbnail",style:{backgroundImage:"url("+e.headimgurl+")"}}),l.default.createElement("h3",null,"终于等到你了，",e.nickname),l.default.createElement("div",{className:"hint"},"打开机顶盒，在东方有线主界面中点击“我的二维码”"),l.default.createElement("button",{className:"primary button",onClick:function(){return t.handleBindButtonClick()}},"扫码绑定我的机顶盒"))}}]),t}(l.default.Component);t.default=s},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(16),s=r(f),p=n(65),d=n(138),h=r(d);n(400);var y=function(e){function t(e){var n;u(this,t);var r=i(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a(e))));return r.state={data:[]},r}return c(t,e),l(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.getMovies)();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"handleMoClick",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.user,n.favs||(n.favs=[]),-1===n.favs.indexOf(t.id)?(t.selected=!0,n.favs.push(t.id)):(t.selected=!1,n.favs.splice(n.favs.indexOf(t.id),1)),e.next=5,(0,p.favs)(n.favs);case 5:this.forceUpdate();case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"handleNextButtonClick",value:function(){this.props.nextStep&&this.props.nextStep()}},{key:"render",value:function(){var e=this,t=this.props.user;t.favs||(t.favs=[]);var n=t.favs;return s.default.createElement("div",{className:"fav-scene ocn-scene"},s.default.createElement("div",{className:"fix-top"},s.default.createElement("h4",null,"请挑选出你最喜欢的3部电影，当然多多益善哦~"),s.default.createElement("button",{className:n.length>=3?"success button full":"default button full",onClick:function(t){return e.handleNextButtonClick()}},n.length>=3?"选好了":"还差 "+(3-n.length)+" 部")),s.default.createElement(h.default,{data:this.state.data,onMoClick:function(t){return e.handleMoClick(t)}}))}}]),t}(s.default.Component);t.default=y},216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(16),s=r(f),p=n(65),d=n(209),h=r(d);n(403);var y=function(e){function t(e){var n;u(this,t);var r=i(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a(e))));return r.state={data:[]},r}return c(t,e),l(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.getMovieClusters)();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"handleMoClick",value:function(e){location.href="/detail.html?id="+e.id}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"ocn-main-scene ocn-scene"},s.default.createElement(h.default,{data:this.state.data,onMoClick:function(t){return e.handleMoClick(t)}}))}}]),t}(s.default.Component);t.default=y},399:function(e,t){},400:function(e,t){},401:function(e,t){},402:function(e,t){},403:function(e,t){},404:function(e,t){}},[213]);