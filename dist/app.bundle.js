!function(r){var n={};function t(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return r[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)t.d(e,i,function(n){return r[n]}.bind(null,i));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=4)}([function(r,n,t){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t=function(r,n){var t=r[1]||"",e=r[3];if(!e)return t;if(n&&"function"==typeof btoa){var i=(a=e,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(r,t,e){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<r.length;s++){var c=[].concat(r[s]);e&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(r,n,t){var e=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[r.i,i,""]]);var o={insert:"head",singleton:!1};e(i,o);r.exports=i.locals||{}},function(r,n,t){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},o=function(){var r={};return function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[n]=t}return r[n]}}(),a=[];function s(r){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===r){n=t;break}return n}function c(r,n){for(var t={},e=[],i=0;i<r.length;i++){var o=r[i],c=n.base?o[0]+n.base:o[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var m=s(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(a[m].references++,a[m].updater(u)):a.push({identifier:d,updater:N(u,n),references:1}),e.push(d)}return e}function l(r){var n=document.createElement("style"),e=r.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(r){n.setAttribute(r,e[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,m=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function u(r,n,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(r.styleSheet)r.styleSheet.cssText=m(n,i);else{var o=document.createTextNode(i),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(o,a[n]):r.appendChild(o)}}function g(r,n,t){var e=t.css,i=t.media,o=t.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),o&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var M=null,p=0;function N(r,n){var t,e,i;if(n.singleton){var o=p++;t=M||(M=l(n)),e=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=l(n),e=g.bind(null,t,n),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return e(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e(r=n)}else i()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<t.length;e++){var i=s(t[e]);a[i].references--}for(var o=c(r,n),l=0;l<t.length;l++){var d=s(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=o}}}},function(r,n,t){"use strict";t.r(n);var e=t(0),i=t.n(e)()(!1);i.push([r.i,":root {\r\n  --primary-color: #221f3b;\r\n  --second-color: #6f4a8e;\r\n  --thirty-color: #f6f6f6;\r\n  --title-color: #fddb3a;\r\n  --muted-color: #a5a5a5;\r\n  --items-featuring: #081c22;\r\n  --dark-color: #333;\r\n  --light-color: #fff;\r\n  --success-color: #1da060;\r\n  --warning-color: #c8cb2e;\r\n  --bad-color: #db2360;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n  background-color: var(--thirty-color);\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Oswald', sans-serif;\r\n  color: var(--light-color);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  transition: all ease .3s;\r\n}\r\n\r\ninput {\r\n  min-height: 36px;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  padding: .5rem;\r\n  font-size: .9rem;\r\n  outline: none;\r\n  color: var(--muted-color);\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  border-radius: 3px;\r\n  background-color: var(--primary-color);\r\n  color: var(--light-color);\r\n  padding: .5rem 1rem;\r\n}\r\n\r\nimg {\r\n  animation: 1s blurAnimation ease;\r\n}\r\n\r\n.wrapper {\r\n  position: relative;\r\n  padding: 1rem;\r\n}\r\n\r\n/* SIDEBARS */\r\n.sidebar__left, .sidebar__rigth {\r\n  background-color: var(--primary-color);\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 66px;\r\n  z-index: 4;\r\n  overflow: auto;\r\n  transition: all .3s ease-in;\r\n}\r\n\r\n.sidebar__left {\r\n  right: 100%;\r\n  left: 0;\r\n}\r\n\r\n.sidebar__rigth {\r\n  left: 100%;\r\n  right: 0;\r\n}\r\n\r\n.sidebar__left.show {\r\n  left: 0;\r\n  right: 15%;\r\n}\r\n\r\n.sidebar__rigth.show {\r\n  right: 0;\r\n  left: 15%;\r\n}\r\n\r\n.sidebar__left--title {\r\n  font-size: 30px;\r\n  color: var(--light-color);\r\n  letter-spacing: 1px;\r\n  line-height: 1;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar__left--title span {\r\n  color: var(--title-color);\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .sidebar__left, .sidebar__rigth {\r\n    display: block;\r\n    background-color: var(--primary-color);\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n  .sidebar__left {\r\n    right: 80%;\r\n    left: 0;\r\n  }\r\n  .sidebar__rigth {\r\n    left: 80%;\r\n    right: 0;\r\n  }\r\n  .sidebar__left--title {\r\n    margin-bottom: 4rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .sidebar__left {\r\n    right: 85%;\r\n  }\r\n\r\n  .sidebar__rigth {\r\n    left: 85%;\r\n  }\r\n}\r\n\r\n/* NAV */\r\n.nav__item {\r\n  margin-bottom: 1rem;\r\n  list-style: none;\r\n}\r\n\r\n.nav__item a {\r\n  padding: .5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--muted-color);\r\n}\r\n\r\n.nav__item.selected a {\r\n  background-color: rgba(255,255,255,.2);\r\n  border-left: 3px solid var(--light-color);\r\n  color: var(--light-color);\r\n}\r\n\r\n.nav__item.selected a:hover {\r\n  background-color: rgba(255,255,255,.4);\r\n}\r\n\r\n.nav__item img {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-right: 1rem;\r\n}\r\n\r\n/* PLAYLIST */\r\n.playList__content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.playList__info {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.playList__info > img {\r\n  width: 35px;\r\n  height: 35px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.playList__title {\r\n  margin-right: .2rem;\r\n}\r\n\r\n.playList__deleted img {\r\n  width: 15px;\r\n  height: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* USER */\r\n.user {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.user__image {\r\n  position: relative;\r\n  margin-right: .5rem;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  background: var(--light-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n.user__image::after {\r\n  content: '\\025cf';\r\n  color: #ddd;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  background:var(--primary-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 8px;\r\n  height: 8px;\r\n  padding: .2rem 0 .1rem .3rem;\r\n  border-top-left-radius: 12px;\r\n}\r\n\r\n.user.connected .user__image::after {\r\n  color: var(--success-color);\r\n}\r\n\r\n.user__image img {\r\n  width: 40px;\r\n}\r\n\r\n.user__info {\r\n  line-height: 1;\r\n}\r\n\r\n.user__name {\r\n  display: block;\r\n  margin-bottom: .1rem;\r\n  color: var(--light-color);\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.user__social {\r\n  color: var(--muted-color);\r\n  font-size: 12px;\r\n}\r\n\r\n.user__list--title {\r\n  color: var(--muted-color);\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.users__list {\r\n  color: var(--light-color);\r\n}\r\n\r\n.users__list .user {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.users__list .user__image {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.users__list .user__image img {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .user {\r\n    margin-bottom: 4rem;\r\n  }\r\n}\r\n\r\n/* MAIN */\r\n.content {\r\n  background-color: var(--second-color);\r\n}\r\n\r\n.content__background {\r\n  position: absolute;\r\n  height: 50%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.content__background::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background: linear-gradient(to bottom, transparent, var(--second-color));\r\n}\r\n\r\n.content__background img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.content__overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: rgba(82, 87, 93, .4);\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20%;\r\n    right: 20%;\r\n    min-height: 100vh;\r\n  }\r\n  .content__background {\r\n    height: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .content {\r\n    left: 15%;\r\n    right: 15%;\r\n  }\r\n}\r\n\r\n/* SEARCH */\r\n\r\n.search {\r\n  position: sticky;\r\n  top: 0;\r\n  margin-bottom: 2rem;\r\n  padding: 1rem 1rem .5rem;\r\n  background: rgba(0, 0, 0, .2);\r\n  z-index: 2;\r\n}\r\n\r\n.form__search {\r\n  position: relative;\r\n  display: flex;\r\n  background: var(--light-color);\r\n  padding: 0 .5rem;\r\n  margin-bottom: .5rem;\r\n  border-radius: 20px;\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.form__search form {\r\n  width: 100%;\r\n}\r\n\r\n.form__search img {\r\n  width: 15px;\r\n}\r\n\r\n.search__results {\r\n  display: none;\r\n}\r\n\r\n.search__results.active {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 300px;\r\n  background: var(--light-color);\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n.search__results li {\r\n  list-style: none;\r\n  padding: .5rem;\r\n  border-bottom: 1px solid var(--muted-color);\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n}\r\n\r\n.search__results li:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .search {\r\n    margin-bottom: 4rem;\r\n    position: relative;\r\n    background: transparent;\r\n    padding: 1rem 1rem 0;\r\n  }\r\n  .form__search {\r\n    max-width: 300px;\r\n  }\r\n  .search__results.active {\r\n    min-width: 300px;\r\n  }\r\n}\r\n\r\n/* FEATURING MOVIE */\r\n.featuring {\r\n  min-height: 600px;\r\n}\r\n\r\n.featuring__title {\r\n  margin-bottom: 1rem;\r\n  font-size: 22px;\r\n}\r\n\r\n.featuring__movie {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.featuring__image {\r\n  width: 35%;\r\n  flex-shrink: 0;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.featuring__image img {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 8px;\r\n}\r\n\r\n.featuring__movie--title {\r\n  font-size: 20px;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.featuring__movie--title span {\r\n  color: var(--muted-color);\r\n}\r\n\r\n.featuring__description {\r\n  font-size: 14px;\r\n  color: var(--thirty-color);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.featuring__extra {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 60%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.featuring__extra > div {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.featuring__extra span:first-child {\r\n  font-weight: bold;\r\n  margin-right: .5rem;\r\n  color: var(--light-color);\r\n}\r\n\r\n.featuring__extra--link a {\r\n  padding: .7rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--items-featuring);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.featuring__extra--link img {\r\n  width: 15px;\r\n  transition: transform .3s ease-in-out;\r\n}\r\n\r\n.featuring__rating {\r\n  display: flex;\r\n}\r\n\r\n.featuring__rating--number {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: var(--items-featuring);\r\n  border: 3px solid var(--second-color);\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 10px rgba(0,0,0,.5);\r\n  color: var(--light-color);\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.featuring__rating--number.success {\r\n  border-color: var(--success-color);\r\n}\r\n\r\n.featuring__rating--number.warning {\r\n  border-color: var(--warning-color);\r\n}\r\n\r\n.featuring__rating--number.bad {\r\n  border-color: var(--bad-color);\r\n}\r\n\r\n.featuring__rating--number::before {\r\n  content: '';\r\n  border: 5px solid rgba(8, 28, 34, .7);\r\n  border-radius: 50%;\r\n  position: absolute;\r\n}\r\n\r\n.featuring__rating--number::before {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.featuring__summary {\r\n  margin-bottom: 2rem;\r\n  font-size: 14px;\r\n  color: var(--light-color);\r\n}\r\n\r\n.featuring__time::before {\r\n  content: '\\025cf';\r\n  margin-right: .5rem;\r\n}\r\n\r\n.featuring__genres span {\r\n  margin-right: .3rem;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .featuring {\r\n    min-height: 500px;\r\n  }\r\n  .featuring__movie--title {\r\n    font-size: 30px;\r\n    margin-bottom: 0;\r\n  }\r\n  .featuring__movie {\r\n    display: flex;\r\n  }\r\n  .featuring__image {\r\n    width: 20%;\r\n    flex-shrink: 0;\r\n    margin-right: 2rem;\r\n  }\r\n  .featuring__description {\r\n    font-size: 17px;\r\n    margin-bottom: 2rem;\r\n  }\r\n  .featuring__rating--number {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n  .featuring__rating--number::before {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n  .featuring__extra--link a {\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .featuring__description {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n/* MOVIES LIST */\r\n.movies__list--list {\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.movies__list--list.movies {\r\n  display: flex;\r\n  overflow-x: scroll;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--primary-color) var(--second-color);\r\n}\r\n\r\n.movies__list--list.movies::-webkit-scrollbar-track {\r\n  background: var(--primary-color);\r\n}\r\n\r\n.movies__list--item {\r\n  margin-right: .5rem;\r\n  width: 40%;\r\n  flex-shrink: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.movies__list--item.selected img {\r\n  border: 5px solid var(--primary-color);\r\n}\r\n\r\n.movies__list--item.selected .movies__list--image::before {\r\n  content: '';\r\n  width: 25px;\r\n  height: 25px;\r\n  position: absolute;\r\n  top: -3%;\r\n  background: var(--primary-color);\r\n  left: 50%;\r\n  transform: translateX(-50%) rotate(45deg);\r\n  border-radius: 3px;\r\n}\r\n\r\n.movies__list--title, .movies__list--item-title {\r\n  color: var(--light-color);\r\n}\r\n\r\n.movies__list--image {\r\n  position: relative;\r\n}\r\n\r\n.movies__list--image img {\r\n  width: 100%;\r\n  border-radius: .5rem;\r\n  position: relative;\r\n}\r\n\r\n.movies__list--date {\r\n  color: var(--muted-color);\r\n  font-size: 12px;\r\n}\r\n\r\n.movies__list--summary {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  top: 50%;\r\n  background: rgba(0,0,0,.5);\r\n  padding: .5rem;\r\n  font-size: 13px;\r\n  color: #f5f5f5;\r\n  line-height: 1.3;\r\n}\r\n\r\n/* MODAL */\r\n.overlay {\r\n  display: none;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: rgba(0,0,0,.5);\r\n  z-index: 3;\r\n}\r\n\r\n.modal {\r\n  overflow: hidden;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  background: var(--light-color);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n  transform: translateY(-3000px);\r\n  padding: 1rem;\r\n  border-radius: .5rem;\r\n}\r\n\r\n.modal::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: rgba(255,255, 255, .5);\r\n}\r\n\r\n.modal-content-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.modal-content img {\r\n  margin-bottom: 1rem;\r\n  border-radius: .5rem;\r\n  width: 40%;\r\n}\r\n\r\n.modal h1, .modal-content, .modal-buttons {\r\n  position: relative;\r\n}\r\n\r\n.modal-content h1 {\r\n  margin-bottom: 1rem;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal-content p {\r\n  font-size: 13px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.modal-content-info > div {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.modal-buttons {\r\n  text-align: center;\r\n  padding: 1rem 0 0;\r\n}\r\n\r\n.modal-buttons button {\r\n  cursor: pointer;\r\n}\r\n\r\n.rating__number {\r\n  padding: .5rem;\r\n  border: 3px solid;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 10px rgba(0,0,0,.5);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* NAVBAR MOBILE */\r\n.navbar__mobile {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: var(--primary-color);\r\n  z-index: 3;\r\n}\r\n\r\n.navbar__mobile ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  list-style: none;\r\n  color: var(--light-color);\r\n}\r\n\r\n.navbar__mobile li {\r\n  text-align: center;\r\n}\r\n\r\n.navbar__mobile li.active::after {\r\n  content: '';\r\n  width: 5px;\r\n  height: 5px;\r\n  display: block;\r\n  background-color: var(--light-color);\r\n  border-radius: 50%;\r\n  margin: auto;\r\n  transition: all ease .3s;\r\n}\r\n\r\n.navbar__mobile img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* REPONSIVE MOBILE FIRS */\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movies__list--item {\r\n    width: 20%;\r\n  }\r\n  .modal {\r\n    padding: 2rem;\r\n  }\r\n  .modal-content-container {\r\n    flex-wrap: nowrap;\r\n  }\r\n  .modal-content img {\r\n    margin-right: 1rem;\r\n    margin-bottom: 0;\r\n  }\r\n  .navbar__mobile {\r\n    justify-content: space-around;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  /* .wrapper {\r\n    max-width: 1300px;\r\n    margin: 0 auto;\r\n  } */\r\n  .movies__list--item {\r\n    margin-right: 1rem;\r\n    width: 15%;\r\n  }\r\n  .modal-content p {\r\n    font-size: 15px;\r\n  }\r\n  .navbar__mobile {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* ANIMATIONS */\r\n\r\n/* animationIn {*/\r\n@keyframes modalIn {\r\n  0% {\r\n    transform: translateY(-3000px);\r\n  }\r\n  60% {\r\n    transform: translateY(25px);\r\n  }\r\n  75% {\r\n    transform: translateY(-10px);\r\n  }\r\n  90% {\r\n    transform: translateY(5px);\r\n  }\r\n  100% {\r\n    transform: translateY(-50%);\r\n  }\r\n}\r\n\r\n/* animationOut {*/\r\n@keyframes modalOut {\r\n  0% {\r\n    transform: translateY(-50%);\r\n  }\r\n  60% {\r\n    transform: translateY(-10px);\r\n  }\r\n  75% {\r\n    transform: translateY(25px);\r\n  }\r\n  100% {\r\n    transform: translateY(-3000px);\r\n  }\r\n}\r\n\r\n/* animation blur */\r\n@keyframes blurAnimation {\r\n  from {\r\n    filter: blur(5px);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n",""]),n.default=i},function(r,n,t){"use strict";t.r(n);t(1);const e="https://yts.mx/api/v2",i=document.querySelector("#featuring"),o=document.querySelector(".featuring__title"),a=document.querySelector("#action"),s=document.querySelector("#drama"),c=document.querySelector("#comedy"),l=document.querySelector("#animation"),d=document.getElementById("modal"),m=d.querySelector(".modal-content"),u=document.getElementById("overlay"),g=document.getElementById("hide-modal"),M=document.querySelector(".users__list"),p=document.querySelector("#search"),N=document.querySelector(".search__results"),f=document.querySelector(".playList"),y=document.querySelectorAll(".navbar__mobile li"),h=document.querySelector(".sidebar__left"),x=document.querySelector(".sidebar__rigth"),L=document.querySelector('[data-nav="home"]'),j=async r=>{try{const n=await fetch(r);return await n.json()}catch(r){console.log(r)}},b=r=>{const n=window.sessionStorage.getItem(r);return JSON.parse(n)},v=async(r,n=null)=>{try{const t=n&&b(n);if(t)return t;const e=await j(r),{data:{movies:i,movie_count:o}}=await e;if(n&&window.sessionStorage.setItem(n,JSON.stringify(i)),o>0)return i||[]}catch(r){throw new Error("No results found to movies")}},_=async r=>{try{const n=await j(r),{data:{movie:t}}=await n;return t||{}}catch(r){throw new Error("No results found to movie")}};var w="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0ibTExNC41OTM3NSA0OTEuMTQwNjI1Yy01LjYwOTM3NSAwLTExLjE3OTY4OC0xLjc1LTE1LjkzMzU5NC01LjE4NzUtOC44NTU0NjgtNi40MTc5NjktMTIuOTkyMTg3LTE3LjQ0OTIxOS0xMC41ODIwMzEtMjguMDkzNzVsMzIuOTM3NS0xNDUuMDg5ODQ0LTExMS43MDMxMjUtOTcuOTYwOTM3Yy04LjIxMDkzOC03LjE2Nzk2OS0xMS4zNDc2NTYtMTguNTE5NTMyLTcuOTc2NTYyLTI4LjkwNjI1IDMuMzcxMDkzLTEwLjM2NzE4OCAxMi41NDI5NjgtMTcuNzA3MDMyIDIzLjQwMjM0My0xOC43MTA5MzhsMTQ3Ljc5Njg3NS0xMy40MTc5NjggNTguNDMzNTk0LTEzNi43NDYwOTRjNC4zMDg1OTQtMTAuMDQ2ODc1IDE0LjEyMTA5NC0xNi41MzUxNTYgMjUuMDIzNDM4LTE2LjUzNTE1NiAxMC45MDIzNDMgMCAyMC43MTQ4NDMgNi40ODgyODEgMjUuMDIzNDM3IDE2LjUxMTcxOGw1OC40MzM1OTQgMTM2Ljc2OTUzMiAxNDcuNzczNDM3IDEzLjQxNzk2OGMxMC44ODI4MTMuOTgwNDY5IDIwLjA1NDY4OCA4LjM0Mzc1IDIzLjQyNTc4MiAxOC43MTA5MzggMy4zNzEwOTMgMTAuMzY3MTg3LjI1MzkwNiAyMS43MzgyODEtNy45NTcwMzIgMjguOTA2MjVsLTExMS43MDMxMjUgOTcuOTQxNDA2IDMyLjkzNzUgMTQ1LjA4NTkzOGMyLjQxNDA2MyAxMC42Njc5NjgtMS43MjY1NjIgMjEuNjk5MjE4LTEwLjU3ODEyNSAyOC4wOTc2NTYtOC44MzIwMzEgNi4zOTg0MzctMjAuNjA5Mzc1IDYuODkwNjI1LTI5LjkxMDE1NiAxLjMwMDc4MWwtMTI3LjQ0NTMxMi03Ni4xNjAxNTYtMTI3LjQ0NTMxMyA3Ni4yMDMxMjVjLTQuMzA4NTk0IDIuNTU4NTk0LTkuMTA5Mzc1IDMuODYzMjgxLTEzLjk1MzEyNSAzLjg2MzI4MXptMTQxLjM5ODQzOC0xMTIuODc1YzQuODQzNzUgMCA5LjY0MDYyNCAxLjMwMDc4MSAxMy45NTMxMjQgMy44NTkzNzVsMTIwLjI3NzM0NCA3MS45Mzc1LTMxLjA4NTkzNy0xMzYuOTQxNDA2Yy0yLjIxODc1LTkuNzQ2MDk0IDEuMDg5ODQzLTE5LjkyMTg3NSA4LjYyMTA5My0yNi41MTU2MjVsMTA1LjQ3MjY1Ny05Mi41LTEzOS41NDI5NjktMTIuNjcxODc1Yy0xMC4wNDY4NzUtLjkxNzk2OS0xOC42ODc1LTcuMjM0Mzc1LTIyLjYxMzI4MS0xNi40OTIxODhsLTU1LjA4MjAzMS0xMjkuMDQ2ODc1LTU1LjE0ODQzOCAxMjkuMDY2NDA3Yy0zLjg4MjgxMiA5LjE5NTMxMi0xMi41MjM0MzggMTUuNTExNzE4LTIyLjU0Njg3NSAxNi40Mjk2ODdsLTEzOS41NjI1IDEyLjY3MTg3NSAxMDUuNDY4NzUgOTIuNWM3LjU1NDY4NyA2LjYxMzI4MSAxMC44NTkzNzUgMTYuNzY5NTMxIDguNjIxMDk0IDI2LjUzOTA2MmwtMzEuMDYyNSAxMzYuOTM3NSAxMjAuMjc3MzQzLTcxLjkxNDA2MmM0LjMwODU5NC0yLjU1ODU5NCA5LjEwOTM3Ni0zLjg1OTM3NSAxMy45NTMxMjYtMy44NTkzNzV6bS04NC41ODU5MzgtMjIxLjg0NzY1NnMwIC4wMjM0MzctLjAyMzQzOC4wNDI5Njl6bTE2OS4xMjg5MDYtLjA2MjUuMDIzNDM4LjA0Mjk2OWMwLS4wMjM0MzggMC0uMDIzNDM4LS4wMjM0MzgtLjA0Mjk2OXptMCAwIi8+PC9zdmc+",z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmZmZmIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTExLjI2NywxOTcuMjU4Yy0xLjc2NC01LjQzMS02LjQ1Ny05LjM4OS0xMi4xMDctMTAuMjA5bC0xNTguNzIzLTIzLjA2NUwyNjkuNDUyLDIwLjE1Nw0KCQkJYy0yLjUyNi01LjEyLTcuNzQxLTguMzYxLTEzLjQ1LTguMzYxYy01LjcxLDAtMTAuOTI0LDMuMjQxLTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjdsLTE1OC43MiwyMy4wNjUNCgkJCWMtNS42NDksMC44Mi0xMC4zNDQsNC43NzgtMTIuMTA4LDEwLjIwOGMtMS43NjUsNS40MzEtMC4yOTMsMTEuMzkyLDMuNzk2LDE1LjM3N2wxMTQuODQ4LDExMS45NTRMOTIuMjcxLDQ4Mi42NzENCgkJCWMtMC45NjYsNS42MjgsMS4zNDgsMTEuMzE0LDUuOTY3LDE0LjY3MWMyLjYxMywxLjg5OCw1LjcwOCwyLjg2NCw4LjgxOCwyLjg2NGMyLjM4OCwwLDQuNzg0LTAuNTY5LDYuOTc4LTEuNzIzbDE0MS45NjctNzQuNjM4DQoJCQlsMTQxLjk2MSw3NC42MzdjNS4wNTUsMi42NTcsMTEuMTc4LDIuMjE1LDE1Ljc5Ny0xLjE0MWM0LjYxOS0zLjM1Niw2LjkzNC05LjA0NCw1Ljk2OS0xNC42NzJsLTI3LjExNy0xNTguMDgxbDExNC44NjEtMTExLjk1NQ0KCQkJQzUxMS41NiwyMDguNjQ5LDUxMy4wMzMsMjAyLjY4OCw1MTEuMjY3LDE5Ny4yNTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";const D=r=>{const n=document.implementation.createHTMLDocument();return n.body.innerHTML=r,n.body.children[0]},T=[{category:"action",container:a},{category:"drama",container:s},{category:"comedy",container:c},{category:"animation",container:l}],I=()=>{const r=window.localStorage.getItem("playList");return r?JSON.parse(r):[]};let O=I();const C=r=>O.some(n=>Number(n.id)===Number(r)),E=(r,n)=>{if(C(r))alert("This movie is on the PlayList");else{(async r=>{if(O.length<=10){const n=await _(`${e}/movie_details.json?movie_id=${r}`);O.push(n),window.localStorage.setItem("playList",JSON.stringify(O)),O.length>0&&f.children[0].remove(),Q(O)}else alert("You can't add beyond ten movies to playList")})(n.dataset.id);const r=n.querySelector("img");r.style.transform="rotate(360deg)",r.setAttribute("src",z)}},S=(r,n,t)=>{n.children[0].remove(),n.classList.add("movies"),r.forEach(r=>{const a=((r,n)=>`\n    <div class="movies__list--item" data-id="${r.id}" data-category="${n}">\n      <div class="movies__list--image">\n        <img src="${r.medium_cover_image}">\n      </div>\n      <h4 class="movies__list--item-title">\n        ${r.title}\n      </h4>\n      <p class="movies__list--date">${r.year}</p>\n    </div>\n  `)(r,t),s=D(a);n.append(s),s.addEventListener("click",async()=>{const r=document.querySelector(".movies__list--item.selected");r&&r.classList.remove("selected"),s.classList.add("selected"),window.scroll({top:0,behavior:"smooth"});const n=await(async(r,n)=>(await v(`${e}/list_movies.json?genre=${n}`,n)).find(n=>n.id===Number(r)))(s.dataset.id,s.dataset.category);o&&o.remove(),i.children[0].remove(),A(n)})})},k=(r,n)=>{r?r.forEach(r=>{const t=((r,n)=>{const{name:{first:t,last:e},login:{username:i},picture:{thumbnail:o}}=r;return`\n    <section class="user ${n}">\n      <figure class="user__image">\n        <img src="${o}" alt="User Avatar">\n      </figure>\n      <div class="user__info">\n        <span class="user__name">${t} ${e}</span>\n        <span class="user__social">@${i}</span>\n      </div>\n    </section>\n  `})(r,Math.random()>.5?"connected":"disconnected"),e=D(t);n.append(e)}):n.textContent="We can't get your user list",n.children[0].remove()},A=r=>{const n=C(r.id),{background_image_original:t,genres:e}=r;t&&document.querySelector(".content__background img").setAttribute("src",t);const o=(a=r.rating)<=3?"bad":a>3&&a<8?"warning":"success";var a;const s=((r,n,t=!1)=>`\n      <div class="featuring__movie">\n        <div class="featuring__image">\n          <img src="${r.large_cover_image}" alt="${r.title}"/>\n        </div>\n        <div class="featuring__info">\n          <h3 class="featuring__movie--title">${r.title} <span>(${r.year})</span></h3>\n          <div class="featuring__summary">\n            <span class="featuring__genres"></span>\n            <span class="featuring__time">${r.runtime} min</span>\n          </div>\n          <div class="featuring__extra">\n            <div class="featuring__rating">\n              <span class="featuring__rating--number ${n}">${10*r.rating}%</span>\n            </div>\n            <div class="featuring__extra--link">\n              <a href="https://www.youtube.com/watch?v=${r.yt_trailer_code}" target="_blank">\n                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzOC41MzNweCIgaGVpZ2h0PSI0MzguNTMzcHgiIHZpZXdCb3g9IjAgMCA0MzguNTMzIDQzOC41MzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzOC41MzMgNDM4LjUzMzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiPg0KPGc+DQoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwDQoJCWMtMzkuNzgxLDAtNzYuNDY2LDkuODAxLTExMC4wNjMsMjkuNDA3Yy0zMy41OTUsMTkuNjA0LTYwLjE5Miw0Ni4yMDEtNzkuOCw3OS43OTZDOS44MDEsMTQyLjgsMCwxNzkuNDg5LDAsMjE5LjI2Nw0KCQlzOS44MDQsNzYuNDYzLDI5LjQwNywxMTAuMDYyYzE5LjYwNywzMy41ODUsNDYuMjA0LDYwLjE4OSw3OS43OTksNzkuNzk4YzMzLjU5NywxOS42MDUsNzAuMjgzLDI5LjQwNywxMTAuMDYzLDI5LjQwNw0KCQlzNzYuNDctOS44MDIsMTEwLjA2NS0yOS40MDdjMzMuNTkzLTE5LjYwMiw2MC4xODktNDYuMjA2LDc5Ljc5NS03OS43OThjMTkuNjAzLTMzLjU5OSwyOS40MDMtNzAuMjg3LDI5LjQwMy0xMTAuMDYyDQoJCUM0MzguNTMzLDE3OS40ODksNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTMyOC45MDQsMjM0Ljk2NkwxNzMuNTg4LDMyNi4zM2MtMi44NTYsMS43MTEtNS45MDIsMi41NjctOS4xMzYsMi41NjcNCgkJYy0zLjA0NSwwLTYuMDktMC43NjQtOS4xMzUtMi4yODZjLTYuMDktMy42MTQtOS4xMzYtOC45MzktOS4xMzYtMTUuOTg1VjEyNy45MDdjMC03LjA0MSwzLjA0Ni0xMi4zNzEsOS4xMzYtMTUuOTg3DQoJCWM2LjI4LTMuNDI3LDEyLjM2OS0zLjMzMywxOC4yNzEsMC4yODRsMTU1LjMxNiw5MS4zNmM2LjA4OCwzLjQyNCw5LjEzNCw4LjY2Myw5LjEzNCwxNS43MDMNCgkJQzMzOC4wMzgsMjI2LjMwOCwzMzQuOTkyLDIzMS41MzcsMzI4LjkwNCwyMzQuOTY2eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="Icon Play"/>\n              </a>\n            </div>\n            <div class="featuring__extra--link">\n              <a data-id="${r.id}" id="add-to-fav">\n                <img src="${t?z:w}" alt="Icon Star"/>\n              </a>\n            </div>\n          </div>\n          <p class="featuring__description">${r.description_full}</p>\n        </div>\n      </div>\n    `)(r,o,n),c=D(s);i.appendChild(c);((r,n)=>{n.length>0&&n.forEach(t=>{const e=n[n.length-1]===t?`<span>${t}</span>`:`<span>${t},</span>`,i=D(e);r.append(i)})})(document.querySelector(".featuring__genres"),e);const l=document.getElementById("add-to-fav");l.addEventListener("click",()=>{E(r.id,l)})},Q=r=>{const n=document.createElement("ul");f.append(n),r.forEach(r=>{const t=(r=>`\n    <li class="playList__content">\n      <div class="playList__info">\n        <img src="${r.small_cover_image}" alt="${r.title}"/>\n        <h4 class="playList__title">${r.title}</h4> \n      </div>\n      <span class="playList__deleted" data-deleted="${r.id}">\n        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTUuNTU2IDUxNS41NTYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTE1LjU1NiA1MTUuNTU2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Im02NC40NDQgNDUxLjExMWMwIDM1LjUyNiAyOC45MDIgNjQuNDQ0IDY0LjQ0NCA2NC40NDRoMjU3Ljc3OGMzNS41NDIgMCA2NC40NDQtMjguOTE4IDY0LjQ0NC02NC40NDR2LTMyMi4yMjJoLTM4Ni42NjZ6Ii8+PHBhdGggZD0ibTMyMi4yMjIgMzIuMjIydi0zMi4yMjJoLTEyOC44ODl2MzIuMjIyaC0xNjEuMTExdjY0LjQ0NGg0NTEuMTExdi02NC40NDR6Ii8+PC9zdmc+" alt="Icon Deleted" />\n      </span>\n    </li>\n  `)(r),e=D(t);n.append(e);const i=e.querySelector(".playList__deleted");i.addEventListener("click",()=>{var r;r=i.dataset.deleted,O=O.filter(n=>Number(n.id)!==Number(r)),window.localStorage.setItem("playList",JSON.stringify(O)),f.children[0].remove(),Q(O);const n=document.querySelector("#add-to-fav img");n.src=w,n.style=""})})},Y=(r,n,t)=>{try{r.forEach(r=>{const e=(r=>`\n    <li data-id="${r.id}">\n      ${r.title}\n    </li>\n  `)(r),i=D(e);t.append(i),i.addEventListener("click",()=>{P(n,i)})})}catch(r){n.innerHTML="<ul><li>Oh! We can't find your movie</li></ul>"}},P=async(r,n)=>{r.classList.remove("active");const t=n.dataset.id,a=await _(`${e}/movie_details.json?movie_id=${t}`);o&&o.remove(),i.children[0].remove(),A(a),p.reset(),r.children[0].remove()},U=(r,n)=>{switch(n){case"playlist":x.classList.contains("show")&&x.classList.remove("show"),h.classList.toggle("show"),h.classList.contains("show")?u.classList.add("active"):(r.classList.remove("active"),L.classList.add("active"),u.classList.remove("active"));break;case"user":h.classList.contains("show")&&h.classList.remove("show"),x.classList.toggle("show"),x.classList.contains("show")?u.classList.add("active"):(r.classList.remove("active"),L.classList.add("active"),u.classList.remove("active"));break;case"home":h.classList.contains("show")&&h.classList.remove("show"),x.classList.contains("show")&&x.classList.remove("show"),u.classList.contains("active")&&u.classList.remove("active")}};!async function(){const r=await v(e+"/list_movies.json?sort=seeds&limit=1","featuring");A(r[0]),T.forEach(async r=>{const n=await v(`${e}/list_movies.json?genre=${r.category}`,r.category);S(n,r.container,r.category)});const n=await(async r=>{try{const n=b("users");if(n)return n;const{results:t}=await j(r);return window.sessionStorage.setItem("users",JSON.stringify(t)),t||[]}catch(r){throw new Error("No results found to users")}})("https://randomuser.me/api/?results=10");k(n,M),g.addEventListener("click",()=>{u.classList.remove("active"),d.style.animation="modalOut .8s forwards",setTimeout(()=>{m.innerHTML="",d.style.backgroundImage="url()"},1e3)}),p.addEventListener("submit",async r=>{r.preventDefault(),N.children[0]&&N.children[0].remove();(async(r,n)=>{n.classList.add("active");const t=await v(`${e}/list_movies.json?query_term=${r}`),i=document.createElement("ul");n.append(i),Y(t,n,i)})(p.querySelector("input").value,N)});const t=I();Q(t),y.forEach(r=>{r.addEventListener("click",()=>{(r=>{y.forEach(r=>{r.classList.contains("active")&&r.classList.remove("active")}),!r.classList.contains("active")&&r.classList.add("active");const n=r.dataset.nav;U(r,n)})(r)})}),!window.location.indexOf("localhost")&&document.querySelector(".nav__item.selected a").setAttribute("href","https://yoelribero.github.io/netmov/dist/")}()}]);