(this["webpackJsonpdo-it-lazy"]=this["webpackJsonpdo-it-lazy"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),i=n.n(r),c=(n(14),n(1)),l=n(2),s=n(4),d=n(3),u=(n(15),n(8)),f=n.n(u),h=(n(16),n(5)),v=(n(17),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).contentwrap=void 0,a.donebtn=void 0,a.removebtn=void 0,a.state={render:!0},a.handleDone=a.handleDone.bind(Object(h.a)(a)),a.handleRemove=a.handleRemove.bind(Object(h.a)(a)),a.contentwrap=Object(o.createRef)(),a}return Object(l.a)(n,[{key:"handleRemove",value:function(){var e=this,t=this.contentwrap.current.parentNode;t instanceof HTMLElement&&t.classList.add("delete"),setTimeout((function(){"toast-wrapper"===t.parentElement.className&&t.parentElement.parentElement.removeChild(t.parentElement),e.setState({render:!1})}),1e3)}},{key:"handleDone",value:function(){var e=this.contentwrap.current;"none"!==e.style.textDecoration&&e.style.textDecoration?e.style.textDecoration="none":e.style.textDecoration="line-through"}},{key:"render",value:function(){var e=this;return this.state.render?a.a.createElement("div",{id:"todo-item-toast"},a.a.createElement("h2",{ref:this.contentwrap,className:"content"},this.props.todo),a.a.createElement("small",{className:"date"},this.props.date),a.a.createElement("button",{ref:this.donebtn,className:"done",onClick:function(){e.handleDone()}},"\u2713"),a.a.createElement("button",{ref:this.removebtn,className:"remove",onClick:function(){e.handleRemove()}},"\u2715")):null}}]),n}(o.Component)),m=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={},o}return Object(l.a)(n,[{key:"handleClick",value:function(){var e=this;f.a.fire({title:"Add Todo",text:"Enter Todo text",input:"text",confirmButtonText:"Add",confirmButtonColor:"green",cancelButtonColor:"red",showCancelButton:!0,cancelButtonText:"Cancel"}).then((function(t){if(t.value){var n=document.createElement("div");n.className="toast-wrapper",Object(r.render)(a.a.createElement(v,{date:(new Date).toDateString(),todo:t.value}),n),e.props.appendContainer.footerref.current.appendChild(n)}else t.value||t.dismiss||e.handleClick()}))}},{key:"render",value:function(){var e=this;return a.a.createElement("button",{onClick:function(){e.handleClick()},id:"add-todo"},"+")}}]),n}(o.Component),p=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).footerref=void 0,o.DateObject=new Date,o.footerref=a.a.createRef(),o.state={time:"".concat(o.DateObject.getHours(),":").concat(o.DateObject.getMinutes()),date:"".concat(o.DateObject.toDateString())},o}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"card"},a.a.createElement("header",{id:"cool-header"},a.a.createElement("pre",{id:"date"},this.state.date),a.a.createElement(m,{appendContainer:this})),a.a.createElement("footer",{ref:this.footerref}))}}]),n}(a.a.Component);n(18);var b=function(){return a.a.createElement(p,null)},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/do-it-lazy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/do-it-lazy","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}({})}],[[9,1,2]]]);
//# sourceMappingURL=main.da5286e0.chunk.js.map