!function(){function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})}var b=document,c=window,d=c.location,e=d.hash,f=e.indexOf("#!");if(-1!==f){for(var g=e.match(/(#!|%23!)([^(#!|%23!)]*)/g),h={},i=0;g&&i<g.length;i+=1)if(""!==g){var j=g[i].replace(/(#!|%23!)/g,""),k=j.match(/([^=]*)=(.*)/);k&&3===k.length&&""!==k[1]?h[k[1]]=k[2]:h[j]=""}if(d.hash=e.substring(0,f),"undefined"!=typeof h.fps){var l=function(){function a(a,b,c,d){var e=document.createElement(a);return b&&(e.id=b),e.style.cssText=c,d&&d.appendChild(e),e}function b(b,c){for(;b.children.length<94;)a(s,null,l+"1px;"+m+"30px;float:left;"+n+c,b)}function c(a,b,c){a.appendChild(a.firstChild).style.height=(30*Math.min(1,1-b/c)).toFixed(0)+"px"}function d(a){k=a,x.display=k?u:t,B.display=k?t:u}var e=performance?performance:Date,f=e.now(),g=f,h=0,i=0,j=0,k=!1,l="width:",m="height:",n="background-color:",o="font-family:sans-serif;font-size:9px;font-weight:bold;line-"+m+"15px;color:#0f",p="padding:0 0 3px 3px;text-align:left;"+n+"#0",q="position:relative;"+l+"94px;"+m+"30px;"+n+"#0f",r="div",s="span",t="block",u="none",v=a(r,"stats",l+"100px;opacity:0.9");v.addEventListener("mousedown",function(a){a.preventDefault(),d(!k)},!1);var w=a(r,"fps",p+"02",v),x=w.style,y=a(r,"fpsText",o+"f;",w);y.innerHTML="FPS";var z=a(r,"fpsGraph",q+"f",w);b(z,"#113");var A=a(r,"ms",p+"20;",v),B=A.style,C=a(r,"msText",o+"0;",A);C.innerHTML="MS";var D=a(r,"msGraph",q+"0",A);return b(D,"#131"),{domElement:v,setMode:d,begin:function(){f=e.now()},end:function(){var a=e.now();h=a-f,C.textContent=h.toFixed(2)+" MS",c(D,h,200),j++,a>g+1e3&&(i=1e3*j/(a-g),y.textContent=i.toFixed(1)+" FPS",c(z,i,100),g=a,j=0)}}},m=new l;m.setMode(!1);var n=m.domElement.style;n.position="absolute",n.left=n.top="0px",n.zIndex="99999";var o=c.requestAnimationFrame,p=[];c.requestAnimationFrame=function(a){p.push(a)};var q=function(){m.begin();var a=p;p=[];for(var b=0;b<a.length;b++)a[b]();m.end(),o(q)};q();var r=setInterval(function(){b.body&&(clearInterval(r),b.body.appendChild(m.domElement))},100)}}var s=new function(){!function(a){function b(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}}function c(a){var b=++d+"";return a?a+b:b}var d=0,e=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[b.length]=c);return b},f=/\s+/,g=function(a,b,c,d){if(!c)return!0;if("object"==typeof c)for(var e in c)a[b].apply(a,[e,c[e]].concat(d));else{if(!f.test(c))return!0;for(var g=c.split(f),h=0,i=g.length;i>h;h++)a[b].apply(a,[g[h]].concat(d))}},h=function(a,b){var c,d=-1,e=a.length;switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0]);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1]);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1],b[2]);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}};a.Events={on:function(a,b,c){if(!g(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,c,d){if(!g(this,"once",a,[c,d])||!c)return this;var e=this,f=b(function(){e.off(a,f),c.apply(this,arguments)});return f._callback=c,this.on(a,f,d),this},off:function(a,b,c){var d,f,h,i,j,k,l,m;if(!this._events||!g(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;for(i=a?[a]:e(this._events),j=0,k=i.length;k>j;j++)if(a=i[j],d=this._events[a]){if(h=[],b||c)for(l=0,m=d.length;m>l;l++)f=d[l],(b&&b!==f.callback&&b!==f.callback._callback||c&&c!==f.context)&&h.push(f);this._events[a]=h}return this},trigger:function(a){if(!this._events)return this;var b=slice.call(arguments,1);if(!g(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;return c&&h(c,b),d&&h(d,arguments),this},listenTo:function(a,b,d){var e=this._listeners||(this._listeners={}),f=a._listenerId||(a._listenerId=c("l"));return e[f]=a,a.on(b,"object"==typeof b?this:d,this),this},stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,"object"==typeof b?this:c,this),b||c||delete d[a._listenerId];else{"object"==typeof b&&(c=this);for(var e in d)d[e].off(b,c,this);this._listeners={}}return this}}}}(this),function(){function a(a){if(!a)return[];if("toArray"in Object(a))return a.toArray();for(var b=a.length||0,c=new Array(b);b--;)c[b]=a[b];return c}var b=this,c={Version:"1.7.1",Browser:function(){var a=navigator.userAgent,b="[object Opera]"==Object.prototype.toString.call(window.opera);return{IE:!!window.attachEvent&&!b,Opera:b,WebKit:a.indexOf("AppleWebKit/")>-1,Gecko:a.indexOf("Gecko")>-1&&-1===a.indexOf("KHTML"),MobileSafari:/Apple.*Mobile/.test(a)}}(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:function(){var a=window.Element||window.HTMLElement;return!(!a||!a.prototype)}(),SpecificElementExtensions:function(){if("undefined"!=typeof window.HTMLDivElement)return!0;var a=document.createElement("div"),b=document.createElement("form"),c=!1;return a.__proto__&&a.__proto__!==b.__proto__&&(c=!0),a=b=null,c}()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)</script\\s*>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(a){return a}};c.Browser.MobileSafari&&(c.BrowserFeatures.SpecificElementExtensions=!1);var d=function(){function b(a,b){for(var c in b)a[c]=b[c];return a}function e(a){return r.call(a)===o}function f(a){return"undefined"==typeof a}function g(){}function h(){function f(){this.initialize.apply(this,arguments)}var h=null,i=a(arguments);e(i[0])&&(h=i.shift()),b(f,d.Methods),f.superclass=h,f.subclasses=[],h&&(g.prototype=h.prototype,f.prototype=new g,h.subclasses.push(f));for(var j=0,k=i.length;k>j;j++)f.addMethods(i[j]);return f.prototype.initialize||(f.prototype.initialize=c.emptyFunction),f.prototype.constructor=f,f}function i(a){var b=a.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return 1!=b.length||b[0]?b:[]}function j(a,b){for(var c=a.length,d=b.length;d--;)a[c+d]=b[d];return a}function k(a,b){return function(){var c=j([m(a,this)],arguments);return b.apply(this,c)}}function l(a,b){return a=p.call(a,0),j(a,b)}function m(a,b){if(arguments.length<3&&f(arguments[1]))return a;if(!e(a))throw new TypeError("The object is not callable.");var c=function(){},d=a,g=p.call(arguments,2),h=function(){var c=l(g,arguments),e=b,e=a instanceof h?a:b;return d.apply(e,c)};return c.prototype=a.prototype,h.prototype=new c,h}function n(a){var b=this.superclass&&this.superclass.prototype,c=Object.keys(a);q&&(a.toString!=Object.prototype.toString&&c.push("toString"),a.valueOf!=Object.prototype.valueOf&&c.push("valueOf"));for(var d=0,f=c.length;f>d;d++){var g=c[d],h=a[g];if(b&&e(h)&&"$super"==i(h)[0]){var j=h;h=function(a){return function(){return b[a].apply(this,arguments)}}(g),h=k(h,j),h.valueOf=function(a){return function(){return a.valueOf.call(a)}}(j),h.toString=function(a){return function(){return a.toString.call(a)}}(j)}this.prototype[g]=h}return this}var o="[object Function]",p=Array.prototype.slice,q=function(){for(var a in{toString:1})if("toString"===a)return!1;return!0}(),r=Object.prototype.toString;return{create:h,Methods:{addMethods:n}}}();return b.Class=d,b.Prototype=c,d}.call(this),function(a,b,c,d,e,f,g){function h(a,b){var c=typeof a[b];return"function"==c||!("object"!=c||!a[b])||"unknown"==c}function i(a,b){return!("object"!=typeof a[b]||!a[b])}function j(a){return"[object Array]"===Object.prototype.toString.call(a)}function k(){var a="Shockwave Flash",b="application/x-shockwave-flash";if(!u(navigator.plugins)&&"object"==typeof navigator.plugins[a]){var c=navigator.plugins[a].description;c&&!u(navigator.mimeTypes)&&navigator.mimeTypes[b]&&navigator.mimeTypes[b].enabledPlugin&&(D=c.match(/\d+/g))}if(!D){var d;try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),D=Array.prototype.slice.call(d.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),d=null}catch(e){}}if(!D)return!1;var f=parseInt(D[0],10),g=parseInt(D[1],10);return E=f>9&&g>0,!0}function l(){if(!T){T=!0;for(var a=0;a<U.length;a++)U[a]();U.length=0}}function m(a,b){return T?void a.call(b):void U.push(function(){a.call(b)})}function n(){var a=parent;if(""!==N)for(var b=0,c=N.split(".");b<c.length;b++)a=a[c[b]];return a.easyXDM}function o(a){return b.easyXDM=P,N=a,N&&(Q="easyXDM_"+N.replace(".","_")+"_"),O}function p(a){return a.match(K)[3]}function q(a){return a.match(K)[4]||""}function r(a){var b=a.toLowerCase().match(K),c=b[2],d=b[3],e=b[4]||"";return("http:"==c&&":80"==e||"https:"==c&&":443"==e)&&(e=""),c+"//"+d+e}function s(a){if(a=a.replace(M,"$1/"),!a.match(/^(http||https):\/\//)){var b="/"===a.substring(0,1)?"":d.pathname;"/"!==b.substring(b.length-1)&&(b=b.substring(0,b.lastIndexOf("/")+1)),a=d.protocol+"//"+d.host+b+a}for(;L.test(a);)a=a.replace(L,"");return a}function t(a,b){var c="",d=a.indexOf("#");-1!==d&&(c=a.substring(d),a=a.substring(0,d));var e=[];for(var f in b)b.hasOwnProperty(f)&&e.push(f+"="+g(b[f]));return a+(R?"#":-1==a.indexOf("?")?"?":"&")+e.join("&")+c}function u(a){return"undefined"==typeof a}function v(a,b,c){var d;for(var e in b)b.hasOwnProperty(e)&&(e in a?(d=b[e],"object"==typeof d?v(a[e],d,c):c||(a[e]=b[e])):a[e]=b[e]);return a}function w(){var a=c.body.appendChild(c.createElement("form")),b=a.appendChild(c.createElement("input"));b.name=Q+"TEST"+I,C=b!==a.elements[b.name],c.body.removeChild(a)}function x(a){u(C)&&w();var b;C?b=c.createElement('<iframe name="'+a.props.name+'"/>'):(b=c.createElement("IFRAME"),b.name=a.props.name),b.id=b.name=a.props.name,delete a.props.name,"string"==typeof a.container&&(a.container=c.getElementById(a.container)),a.container||(v(b.style,{position:"absolute",top:"-2000px",left:"0px"}),a.container=c.body);var d=a.props.src;if(a.props.src=a.blankUrl?a.blankUrl:"javascript:false",v(b,a.props),b.border=b.frameBorder=0,b.allowTransparency=!0,a.container.appendChild(b),a.onLoad&&F(b,"load",a.onLoad),a.usePost){var e,f=a.container.appendChild(c.createElement("form"));if(f.target=b.name,f.action=d,f.method="POST","object"==typeof a.usePost)for(var g in a.usePost)a.usePost.hasOwnProperty(g)&&(C?e=c.createElement('<input name="'+g+'"/>'):(e=c.createElement("INPUT"),e.name=g),e.value=a.usePost[g],f.appendChild(e));f.submit(),f.parentNode.removeChild(f)}else b.src=d;return a.props.src=d,b}function y(a,b){"string"==typeof a&&(a=[a]);for(var c,d=a.length;d--;)if(c=a[d],c=new RegExp("^"==c.substr(0,1)?c:"^"+c.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),c.test(b))return!0;return!1}function z(a){var e,f=a.protocol;if(a.isHost=a.isHost||u(W.xdm_p),R=a.hash||!1,a.props||(a.props={}),a.isHost)a.remote=s(a.remote),a.channel=a.channel||"default"+I++,a.secret=Math.random().toString(16).substring(2),u(f)&&(f=r(d.href)==r(a.remote)?"4":h(b,"postMessage")||h(c,"postMessage")?"1":a.swf&&h(b,"ActiveXObject")&&k()?"6":"Gecko"===navigator.product&&"frameElement"in b&&-1==navigator.userAgent.indexOf("WebKit")?"5":a.remoteHelper?"2":"0");else if(a.channel=W.xdm_c.replace(/["'<>\\]/g,""),a.secret=W.xdm_s,a.remote=W.xdm_e.replace(/["'<>\\]/g,""),f=W.xdm_p,a.acl&&!y(a.acl,a.remote))throw new Error("Access denied for "+a.remote);switch(a.protocol=f,f){case"0":if(v(a,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),a.isHost){if(!a.local){for(var g,i=d.protocol+"//"+d.host,j=c.body.getElementsByTagName("img"),l=j.length;l--;)if(g=j[l],g.src.substring(0,i.length)===i){a.local=g.src;break}a.local||(a.local=b)}var m={xdm_c:a.channel,xdm_p:0};a.local===b?(a.usePolling=!0,a.useParent=!0,a.local=d.protocol+"//"+d.host+d.pathname+d.search,m.xdm_e=a.local,m.xdm_pa=1):m.xdm_e=s(a.local),a.container&&(a.useResize=!1,m.xdm_po=1),a.remote=t(a.remote,m)}else v(a,{channel:W.xdm_c,remote:W.xdm_e,useParent:!u(W.xdm_pa),usePolling:!u(W.xdm_po),useResize:a.useParent?!1:a.useResize});e=[new O.stack.HashTransport(a),new O.stack.ReliableBehavior({}),new O.stack.QueueBehavior({encode:!0,maxLength:4e3-a.remote.length}),new O.stack.VerifyBehavior({initiate:a.isHost})];break;case"1":e=[new O.stack.PostMessageTransport(a)];break;case"2":a.remoteHelper=s(a.remoteHelper),e=[new O.stack.NameTransport(a),new O.stack.QueueBehavior,new O.stack.VerifyBehavior({initiate:a.isHost})];break;case"3":e=[new O.stack.NixTransport(a)];break;case"4":e=[new O.stack.SameOriginTransport(a)];break;case"5":e=[new O.stack.FrameElementTransport(a)];break;case"6":D||k(),e=[new O.stack.FlashTransport(a)]}return e.push(new O.stack.QueueBehavior({lazy:a.lazy,remove:!0})),e}function A(a){for(var b,c={incoming:function(a,b){this.up.incoming(a,b)},outgoing:function(a,b){this.down.outgoing(a,b)},callback:function(a){this.up.callback(a)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},d=0,e=a.length;e>d;d++)b=a[d],v(b,c,!0),0!==d&&(b.down=a[d-1]),d!==e-1&&(b.up=a[d+1]);return b}function B(a){a.up.down=a.down,a.down.up=a.up,a.up=a.down=null}var C,D,E,F,G,H=this,I=Math.floor(1e4*Math.random()),J=Function.prototype,K=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,L=/[\-\w]+\/\.\.\//,M=/([^:])\/\//g,N="",O={},P=b.easyXDM,Q="easyXDM_",R=!1;if(h(b,"addEventListener"))F=function(a,b,c){a.addEventListener(b,c,!1)},G=function(a,b,c){a.removeEventListener(b,c,!1)};else{if(!h(b,"attachEvent"))throw new Error("Browser not supported");F=function(a,b,c){a.attachEvent("on"+b,c)},G=function(a,b,c){a.detachEvent("on"+b,c)}}var S,T=!1,U=[];if("readyState"in c?(S=c.readyState,T="complete"==S||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==S||"interactive"==S)):T=!!c.body,!T){if(h(b,"addEventListener"))F(c,"DOMContentLoaded",l);else if(F(c,"readystatechange",function(){"complete"==c.readyState&&l()}),c.documentElement.doScroll&&b===top){var V=function(){if(!T){try{c.documentElement.doScroll("left")}catch(a){return void e(V,1)}l()}};V()}F(b,"load",l)}var W=function(a){a=a.substring(1).split("&");for(var b,c={},d=a.length;d--;)b=a[d].split("="),c[b[0]]=f(b[1]);return c}(/xdm_e=/.test(d.search)?d.search:d.hash),X=function(){var a={},b={a:[1,2,3]},c='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(b).replace(/\s/g,"")===c?JSON:(Object.toJSON&&Object.toJSON(b).replace(/\s/g,"")===c&&(a.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(b=c.evalJSON(),b.a&&3===b.a.length&&3===b.a[2]&&(a.parse=function(a){return a.evalJSON()})),a.stringify&&a.parse?(X=function(){return a},a):null)};v(O,{version:"2.4.16.3",query:W,stack:{},apply:v,getJSONObject:X,whenReady:m,noConflict:o}),O.DomHelper={on:F,un:G,requiresJSON:function(a){i(b,"JSON")||c.write('<script type="text/javascript" src="'+a+'"></script>')}},function(){var a={};O.Fn={set:function(b,c){a[b]=c},get:function(b,c){var d=a[b];return c&&delete a[b],d}}}(),O.Socket=function(a){var b=A(z(a).concat([{incoming:function(b,c){a.onMessage(b,c)},callback:function(b){a.onReady&&a.onReady(b)}}])),c=r(a.remote);this.origin=r(a.remote),this.destroy=function(){b.destroy()},this.postMessage=function(a){b.outgoing(a,c)},b.init()},O.Rpc=function(a,b){if(b.local)for(var c in b.local)if(b.local.hasOwnProperty(c)){var d=b.local[c];"function"==typeof d&&(b.local[c]={method:d})}var e=A(z(a).concat([new O.stack.RpcBehavior(this,b),{callback:function(b){a.onReady&&a.onReady(b)}}]));this.origin=r(a.remote),this.destroy=function(){e.destroy()},e.init()},O.stack.SameOriginTransport=function(a){var b,c,f,g;return b={outgoing:function(a,b,c){f(a),c&&c()},destroy:function(){c&&(c.parentNode.removeChild(c),c=null)},onDOMReady:function(){g=r(a.remote),a.isHost?(v(a.props,{src:t(a.remote,{xdm_e:d.protocol+"//"+d.host+d.pathname,xdm_c:a.channel,xdm_p:4}),name:Q+a.channel+"_provider"}),c=x(a),O.Fn.set(a.channel,function(a){return f=a,e(function(){b.up.callback(!0)},0),function(a){b.up.incoming(a,g)}})):(f=n().Fn.get(a.channel,!0)(function(a){b.up.incoming(a,g)}),e(function(){b.up.callback(!0)},0))},init:function(){m(b.onDOMReady,b)}}},O.stack.FlashTransport=function(a){function b(a){e(function(){g.up.incoming(a,i)},0)}function f(b){var d=a.swf+"?host="+a.isHost,e="easyXDM_swf_"+Math.floor(1e4*Math.random());O.Fn.set("flash_loaded"+b.replace(/[\-.]/g,"_"),function(){O.stack.FlashTransport[b].swf=j=k.firstChild;for(var a=O.stack.FlashTransport[b].queue,c=0;c<a.length;c++)a[c]();a.length=0}),a.swfContainer?k="string"==typeof a.swfContainer?c.getElementById(a.swfContainer):a.swfContainer:(k=c.createElement("div"),v(k.style,E&&a.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),c.body.appendChild(k));var f="callback=flash_loaded"+b.replace(/[\-.]/g,"_")+"&proto="+H.location.protocol+"&domain="+p(H.location.href)+"&port="+q(H.location.href)+"&ns="+N;k.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+e+"' data='"+d+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+d+"'></param><param name='flashvars' value='"+f+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+f+"' allowScriptAccess='always' wmode='transparent' src='"+d+"' height='1' width='1'></embed></object>"}var g,h,i,j,k;return g={outgoing:function(b,c,d){j.postMessage(a.channel,b.toString()),d&&d()},destroy:function(){try{j.destroyChannel(a.channel)}catch(b){}j=null,h&&(h.parentNode.removeChild(h),h=null)},onDOMReady:function(){i=a.remote,O.Fn.set("flash_"+a.channel+"_init",function(){e(function(){g.up.callback(!0)})}),O.Fn.set("flash_"+a.channel+"_onMessage",b),a.swf=s(a.swf);var c=p(a.swf),k=function(){O.stack.FlashTransport[c].init=!0,j=O.stack.FlashTransport[c].swf,j.createChannel(a.channel,a.secret,r(a.remote),a.isHost),a.isHost&&(E&&a.swfNoThrottle&&v(a.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),v(a.props,{src:t(a.remote,{xdm_e:r(d.href),xdm_c:a.channel,xdm_p:6,xdm_s:a.secret}),name:Q+a.channel+"_provider"}),h=x(a))};O.stack.FlashTransport[c]&&O.stack.FlashTransport[c].init?k():O.stack.FlashTransport[c]?O.stack.FlashTransport[c].queue.push(k):(O.stack.FlashTransport[c]={queue:[k]},f(c))},init:function(){m(g.onDOMReady,g)}}},O.stack.PostMessageTransport=function(a){function c(a){if(a.origin)return r(a.origin);if(a.uri)return r(a.uri);if(a.domain)return d.protocol+"//"+a.domain;throw"Unable to retrieve the origin of the event"}function f(b){var d=c(b);d==j&&b.data.substring(0,a.channel.length+1)==a.channel+" "&&g.up.incoming(b.data.substring(a.channel.length+1),d)}var g,h,i,j;return g={outgoing:function(b,c,d){i.postMessage(a.channel+" "+b,c||j),d&&d()},destroy:function(){G(b,"message",f),h&&(i=null,h.parentNode.removeChild(h),h=null)},onDOMReady:function(){if(j=r(a.remote),a.isHost){var c=function(d){d.data==a.channel+"-ready"&&(i="postMessage"in h.contentWindow?h.contentWindow:h.contentWindow.document,G(b,"message",c),F(b,"message",f),e(function(){g.up.callback(!0)},0))};F(b,"message",c),v(a.props,{src:t(a.remote,{xdm_e:r(d.href),xdm_c:a.channel,xdm_p:1}),name:Q+a.channel+"_provider"}),h=x(a)}else F(b,"message",f),i="postMessage"in b.parent?b.parent:b.parent.document,i.postMessage(a.channel+"-ready",j),e(function(){g.up.callback(!0)},0)},init:function(){m(g.onDOMReady,g)}}},O.stack.FrameElementTransport=function(a){var f,g,h,i;return f={outgoing:function(a,b,c){h.call(this,a),c&&c()},destroy:function(){g&&(g.parentNode.removeChild(g),g=null)},onDOMReady:function(){i=r(a.remote),a.isHost?(v(a.props,{src:t(a.remote,{xdm_e:r(d.href),xdm_c:a.channel,xdm_p:5}),name:Q+a.channel+"_provider"}),g=x(a),g.fn=function(a){return delete g.fn,h=a,e(function(){f.up.callback(!0)},0),function(a){f.up.incoming(a,i)}}):(c.referrer&&r(c.referrer)!=W.xdm_e&&(b.top.location=W.xdm_e),h=b.frameElement.fn(function(a){f.up.incoming(a,i)}),f.up.callback(!0))},init:function(){m(f.onDOMReady,f)}}},O.stack.NameTransport=function(a){function b(b){var c=a.remoteHelper+(h?"#_3":"#_2")+a.channel;i.contentWindow.sendMessage(b,c)}function c(){h?2!==++k&&h||g.up.callback(!0):(b("ready"),g.up.callback(!0))}function d(a){g.up.incoming(a,n)}function f(){l&&e(function(){l(!0)},0)}var g,h,i,j,k,l,n,o;return g={outgoing:function(a,c,d){l=d,b(a)},destroy:function(){i.parentNode.removeChild(i),i=null,h&&(j.parentNode.removeChild(j),j=null)},onDOMReady:function(){h=a.isHost,k=0,n=r(a.remote),a.local=s(a.local),h?(O.Fn.set(a.channel,function(b){h&&"ready"===b&&(O.Fn.set(a.channel,d),c())}),o=t(a.remote,{xdm_e:a.local,xdm_c:a.channel,xdm_p:2}),v(a.props,{src:o+"#"+a.channel,name:Q+a.channel+"_provider"}),j=x(a)):(a.remoteHelper=a.remote,O.Fn.set(a.channel,d));var b=function(){var d=i||this;G(d,"load",b),O.Fn.set(a.channel+"_load",f),function g(){"function"==typeof d.contentWindow.sendMessage?c():e(g,50)}()};i=x({props:{src:a.local+"#_4"+a.channel},onLoad:b})},init:function(){m(g.onDOMReady,g)}}},O.stack.HashTransport=function(a){function c(b){if(p){var c=a.remote+"#"+n++ +"_"+b;(i||!q?p.contentWindow:p).location=c}}function d(a){l=a,h.up.incoming(l.substring(l.indexOf("_")+1),s)}function f(){if(o){var a=o.location.href,b="",c=a.indexOf("#");-1!=c&&(b=a.substring(c)),b&&b!=l&&d(b)}}function g(){j=setInterval(f,k)}var h,i,j,k,l,n,o,p,q,s;return h={outgoing:function(a){c(a)},destroy:function(){b.clearInterval(j),(i||!q)&&p.parentNode.removeChild(p),p=null},onDOMReady:function(){if(i=a.isHost,k=a.interval,l="#"+a.channel,n=0,q=a.useParent,s=r(a.remote),i){if(v(a.props,{src:a.remote,name:Q+a.channel+"_provider"}),q)a.onLoad=function(){o=b,g(),h.up.callback(!0)};else{var c=0,d=a.delay/50;!function f(){if(++c>d)throw new Error("Unable to reference listenerwindow");try{o=p.contentWindow.frames[Q+a.channel+"_consumer"]}catch(b){}o?(g(),h.up.callback(!0)):e(f,50)}()}p=x(a)}else o=b,g(),q?(p=parent,h.up.callback(!0)):(v(a,{props:{src:a.remote+"#"+a.channel+new Date,name:Q+a.channel+"_consumer"},onLoad:function(){h.up.callback(!0)}}),p=x(a))},init:function(){m(h.onDOMReady,h)}}},O.stack.ReliableBehavior=function(){var a,b,c=0,d=0,e="";return a={incoming:function(f,g){var h=f.indexOf("_"),i=f.substring(0,h).split(",");f=f.substring(h+1),i[0]==c&&(e="",b&&(b(!0),b=null)),f.length>0&&(a.down.outgoing(i[1]+","+c+"_"+e,g),d!=i[1]&&(d=i[1],a.up.incoming(f,g)))},outgoing:function(f,g,h){e=f,b=h,a.down.outgoing(d+","+ ++c+"_"+f,g)}}},O.stack.QueueBehavior=function(a){function b(){if(a.remove&&0===h.length)return void B(c);if(!i&&0!==h.length&&!d){i=!0;var f=h.shift();c.down.outgoing(f.data,f.origin,function(a){i=!1,f.callback&&e(function(){f.callback(a)},0),b()})}}var c,d,h=[],i=!0,j="",k=0,l=!1,m=!1;return c={init:function(){u(a)&&(a={}),a.maxLength&&(k=a.maxLength,m=!0),a.lazy?l=!0:c.down.init()},callback:function(a){i=!1;var d=c.up;b(),d.callback(a)},incoming:function(b,d){if(m){var e=b.indexOf("_"),g=parseInt(b.substring(0,e),10);j+=b.substring(e+1),0===g&&(a.encode&&(j=f(j)),c.up.incoming(j,d),j="")}else c.up.incoming(b,d)},outgoing:function(d,e,f){a.encode&&(d=g(d));var i,j=[];if(m){for(;0!==d.length;)i=d.substring(0,k),d=d.substring(i.length),j.push(i);for(;i=j.shift();)h.push({data:j.length+"_"+i,origin:e,callback:0===j.length?f:null})}else h.push({data:d,origin:e,callback:f});l?c.down.init():b()},destroy:function(){d=!0,c.down.destroy()}}},O.stack.VerifyBehavior=function(a){function b(){d=Math.random().toString(16).substring(2),c.down.outgoing(d)}var c,d,e;return c={incoming:function(f,g){var h=f.indexOf("_");-1===h?f===d?c.up.callback(!0):e||(e=f,a.initiate||b(),c.down.outgoing(f)):f.substring(0,h)===e&&c.up.incoming(f.substring(h+1),g)},outgoing:function(a,b,e){c.down.outgoing(d+"_"+a,b,e)},callback:function(){a.initiate&&b()}}},O.stack.RpcBehavior=function(a,b){function c(a){a.jsonrpc="2.0",f.down.outgoing(g.stringify(a))}function d(a,b){var d=Array.prototype.slice;return function(){var e,f=arguments.length,g={method:b};f>0&&"function"==typeof arguments[f-1]?(f>1&&"function"==typeof arguments[f-2]?(e={success:arguments[f-2],error:arguments[f-1]},g.params=d.call(arguments,0,f-2)):(e={success:arguments[f-1]},g.params=d.call(arguments,0,f-1)),i[""+ ++h]=e,g.id=h):g.params=d.call(arguments,0),a.namedParams&&1===g.params.length&&(g.params=g.params[0]),c(g)}}function e(a,b,d,e){if(!d)return void(b&&c({id:b,error:{code:-32601,message:"Procedure not found."}}));var f,error;b?(f=function(a){f=J,c({id:b,result:a})},error=function(a,d){error=J;var e={id:b,error:{code:-32099,message:a}};d&&(e.error.data=d),c(e)}):f=error=J,j(e)||(e=[e]);try{var g=d.method.apply(d.scope,e.concat([f,error]));u(g)||f(g)}catch(h){error(h.message)}}var f,g=b.serializer||X(),h=0,i={};return f={incoming:function(a){var d=g.parse(a);if(d.method)b.handle?b.handle(d,c):e(d.method,d.id,b.local[d.method],d.params);else{var f=i[d.id];d.error?f.error&&f.error(d.error):f.success&&f.success(d.result),delete i[d.id]}},init:function(){if(b.remote)for(var c in b.remote)b.remote.hasOwnProperty(c)&&(a[c]=d(b.remote[c],c));f.down.init()},destroy:function(){for(var c in b.remote)b.remote.hasOwnProperty(c)&&a.hasOwnProperty(c)&&delete a[c];f.down.destroy()}}},a.easyXDM=O}(this,window,document,d,window.setTimeout,decodeURIComponent,encodeURIComponent),function(a){slice=Array.prototype.slice,a.extend=function(a){return slice.call(arguments,1).forEach(function(b){if(b)for(var c in b)a[c]=b[c]}),a}}(this)},t=s.Events,u=s.Class,v=s.easyXDM,w=function(){var a=function(){function a(a){return null==a?a+"":"number"==typeof a.length&&"object"==typeof a?"array":typeof a}function b(a){return null!=a&&a===a.window}function c(c){var d=c.length,e=a(c);return"function"===e||b(c)?!1:1===c.nodeType&&d?!0:"array"===e||0===d||"number"==typeof d&&d>0&&d-1 in c}function d(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a}this._initialize=function(a){this._handlers={};for(var b=0;b<a.length;b++)this.addPromise(a[b])},this.addPromise=function(a){this.hasOwnProperty(a)||(this[a]=function(){if(arguments.length>0&&"function"==typeof arguments[0]){var b=arguments.length>1?arguments[1]:null,c=arguments.length>2?arguments[2]:!1,d=arguments.length>3?Array.prototype.slice.call(arguments,3):null;this._addHandler(a,arguments[0],b,c,d)}else this._invokeHandler(a,Array.prototype.slice.call(arguments));return this},this._handlers[a]=[])},this.removePromise=function(a){delete this._handlers[a],delete this[a]},this._addHandler=function(a,b,c,d,e){var f=this._handlers[a];e||(e=[]),d||(d=!1),f.push({handler:b,context:c,args:e,once:d})},this._invokeHandler=function(a,b){var c=this._handlers[a],e=[];d(c,function(a,c){c.handler.apply(c.context,c.args.concat(b)),c.once||e.push(c)}),this._handlers[a]=e},this._initialize(1==arguments.length&&"[object Array]"===Object.prototype.toString.call(arguments[0])?arguments[0]:arguments)};return a}(),x=function(){var a=1;return function(b,c){var d,e,f,g=[].slice;return"string"==typeof c&&(f=b[c],c=b,b=f),"function"!=typeof b?void 0:(d=g.call(arguments,2),e=function(){return b.apply(c||this,d.concat(g.call(arguments)))},e.guid=b.guid=b.guid||a++,e)}}(),y=s.extend({modules:[],install:function(a,b){this[a]=b,this.modules.push(b)},uninstall:function(){},isInDebugMode:function(){return!0},init:function(a){for(var b=0;b<this.modules.length;b++)this.modules[b].init(a)},initializeModules:function(a){this.data=a;for(var b=0;b<this.modules.length;b++)this.modules[b].initModule(a)}},t),z=function(a,b){var c=b.create({initModule:function(){},init:function(){}});return c}(y,u);!function(b,c,d,e,f){var g=d.create(e,{initModule:function($super,a){$super(a),this.requests={}},init:function($super,a){return $super(a),this.socket=new f.Socket({namespace:"window.iwin.xdm",onMessage:b(function(a){var b=this.getRequestFromMessage(a);this.handleCommand(b)},this)}),this},sendReady:function(a){return this.sendCommand("game:ready",a,"request")},sendLoadProgress:function(a){return this.sendCommand("game:load:progress",a,"request")},sendLoadComplete:function(a){return this.sendCommand("game:load:complete",a,"request")},sendGetLevelData:function(a){return this.sendCommand("game:level:get",a,"request")},sendSetLevelData:function(a){return this.sendCommand("game:level:set",a,"request")},sendGetGameData:function(a){return this.sendCommand("game:data:get",a,"request")},sendSetGameData:function(a){return this.sendCommand("game:data:set",a,"request")},sendPostHighScore:function(a){return this.sendCommand("game:highscore:post",a,"request")},sendGameOver:function(a){return this.sendCommand("game:over",a,"request")},sendShowAdvert:function(a){return this.sendCommand("advert:show",a,"request")},sendGetPeriodicalData:function(a){return this.sendCommand("periodical:getdata",a,"request")},sendGetPeriodicalPeriods:function(a){return this.sendCommand("periodical:getperiods",a,"request")},sendPurchase:function(a){return this.sendCommand("iap:purchase",a,"request")},sendUpdateHomeWidgetLabel:function(a){return this.sendCommand("game:sethomewidgetlabel",a,"request")},sendHideConsoleWindow:function(a){return this.sendCommand("game:hideconsolewindow",a,"request")},testRequest:function(a){return this.sendCommand("request.test",a,"request")},sendCommand:function(c,d,e){d||(d={});var f=new w("result");if(this.socket){var g={id:a(),command:c,type:e,data:d},h=JSON.stringify(g);g.promise=f,this.requests[g.id]=g,setTimeout(b(function(){this.socket.postMessage(h)},this),.001)}else console.warn("iConsole:sendCommand - no socket opened");return f},handleCommand:function(a){var b=a.command;switch(b){case"onCommandResult":this.handleResult(a);break;case"event":c.game.eventReceived(a.data.type,a.data.event),delete this.requests[a.id];break;case"ads:midgame:start":c.ads.consoleNotifyMidGameAdvertStarting(a);break;case"ads:midgame:finish":c.ads.consoleNotifyMidGameAdvertFinished(a);break;case"iap:initialise":c.iap.internal.initializeIAP(a.data),delete this.requests[a.id];break;case"provider:info":c.iap.internal.provider=a.data.provider,delete this.requests[a.id];break;default:c.trigger(b,a.data)}},handleResult:function(a){var b=this.requests[a.id];b.promise.result(a.data),delete this.requests[a.id]},cacheRequest:function(){},getRequestFromMessage:function(a){var b=JSON.parse(a),c=this;return b.result=function(a){c.sendResponse(b,a)},b},sendResponse:function(a,b){b||(b={});var c={command:"onConsoleCommandResult",type:"response",id:a.id,data:b,requestData:a.data};this.socket.postMessage(JSON.stringify(c))}}),h=new g;return c.install("XDM",h),h}(x,y,u,z,v),function(a,b,c){var d=b.create(c,{callbacks:[],initModule:function($super,a){$super(a)},init:function($super,a){$super(a)},ready:function(b){return a.XDM.sendReady(b)},loadProgress:function(b){return a.XDM.sendLoadProgress(b)},loaded:function(b){return a.XDM.sendLoadComplete(b)},getLevelData:function(b){return a.XDM.sendGetLevelData(b)},setLevelData:function(b){return a.XDM.sendSetLevelData(b)},getGameData:function(b){return a.XDM.sendGetGameData(b)},setGameData:function(b){return a.XDM.sendSetGameData(b)},postHighScore:function(b){return a.XDM.sendPostHighScore(b)},gameOver:function(){return a.XDM.sendGameOver()},levelStarted:function(b){var c,d,e,f=!1,g=!1,h={result:function(a,b){d=a,e=b,this.trigger()},trigger:function(){c&&f&&d&&!g&&(g=!0,d.apply(e,[c]))}};return a.game.getLevelData(b).result(function(a){c=a,h.trigger()}),a.ads.show({type:"levelStart",level:b.level}).result(function(){f=!0,h.trigger()}),h},levelFinished:function(b){return a.game.setGameData(b.data),a.game.setLevelData(b)},onEvent:function(b,c){switch(b){case"signedIn":a.on("signed.in",c);break;case"signedOut":a.on("signed.out",c);break;default:void 0===a.game.callbacks[b]&&(a.game.callbacks[b]=[]);
var d=a.game.callbacks[b];-1===$.inArray(c,d)&&d.push(c)}},offEvent:function(b,c){switch(b){case"signedIn":a.off("signed.in",c);break;case"signedOut":a.off("signed.out",c);break;default:if(void 0!==a.game.callbacks[b]){var d=a.game.callbacks[b],e=$.inArray(c,d);-1!==e&&d.splice(e,1)}}},getWidth:function(){var a=window.parent.document.getElementById("iconsole-plugin-session_iframe__");return a.parentNode&&a.parentNode.parentNode?a.parentNode.parentNode.offsetWidth:0},getHeight:function(){var a=window.parent.document.getElementById("iconsole-plugin-session_iframe__");return a.parentNode&&a.parentNode.parentNode?a.parentNode.parentNode.offsetHeight:0},setHomeWidgetLabel:function(b){return a.XDM.sendUpdateHomeWidgetLabel({label:b})},hideConsoleWindow:function(){return a.XDM.sendHideConsoleWindow()},eventReceived:function(b,c){if(void 0!==b&&void 0!==c&&(c.stopPropagationSet=!1,c.stopPropagation=function(){this.stopPropagationSet=!0},void 0!==a.game.callbacks[b]))for(var d=a.game.callbacks[b],e=0;e<d.length&&c.stopPropagationSet===!1;)d[e](c),e++}}),e=new d;return a.install("game",new d),e}(y,u,z),function(a,b,c){var d=b.create(c,{initModule:function($super,a){$super(a)},init:function($super,a){$super(a)},show:function(b){return a.XDM.sendShowAdvert(b)},registerMidGameAdvertStartedListener:function(b,c){a.ads.midGameAdvertStartedCallbacks.push([b,c])},registerMidGameAdvertFinishedListener:function(b,c){a.ads.midGameAdvertFinishedCallbacks.push([b,c])},unregisterMidGameAdvertStartedListener:function(b){for(var c=0;c<a.ads.midGameAdvertStartedCallbacks.length;c++)a.ads.midGameAdvertStartedCallbacks[c][0]===b&&(a.ads.midGameAdvertStartedCallbacks=a.ads.midGameAdvertStartedCallbacks.splice(c,1),c--)},unregisterMidGameAdvertFinishedListener:function(b){for(var c=0;c<a.ads.midGameAdvertFinishedCallbacks.length;c++)a.ads.midGameAdvertFinishedCallbacks[c][0]===b&&(a.ads.midGameAdvertFinishedCallbacks=a.ads.midGameAdvertFinishedCallbacks.splice(c,1),c--)},midGameAdvertStartedCallbacks:[],midGameAdvertFinishedCallbacks:[],consoleNotifyMidGameAdvertStarting:function(b){for(var c=0;c<a.ads.midGameAdvertStartedCallbacks.length;c++){var d=a.ads.midGameAdvertStartedCallbacks[c];d[0].call(d[1],b)}},consoleNotifyMidGameAdvertFinished:function(b){for(var c=0;c<a.ads.midGameAdvertFinishedCallbacks.length;c++){var d=a.ads.midGameAdvertFinishedCallbacks[c];d[0].call(d[1],b)}}}),e=new d;return a.install("ads",new d),e}(y,u,z),function(a,b,c){var d=b.create(c,{initModule:function($super,a){$super(a)},init:function($super,a){$super(a)},getData:function(b){b&&"number"==typeof b&&b===Math.floor(b)||(b=0);var c=null,d=null,e=function(a){c=a,d&&(c(d.data,d.period),d=null)};return a.XDM.sendGetPeriodicalData({periodsBack:b}).result(function(a){d=a,c&&e(c)}),{result:e}},getPeriods:function(){var b=null,c=null,d=function(a){b=a,c&&(b(c.periods),c=null)};return a.XDM.sendGetPeriodicalPeriods().result(function(a){c=a,b&&d(b)}),{result:d}},getFileURI:function(a){var b=window.location.pathname,c=/^(.+\/).+\/?$/;return b.match(c)&&(b=c.exec(b)[1]),b+"periodical/"+a}}),e=new d;return a.install("periodical",new d),e}(y,u,z),function(a,b,c){var d=b.create(c,{initModule:function($super,a){$super(a)},init:function($super,a){$super(a)},isSupported:function(){return a.iap.internal.supported},purchase:function(b){return function(){var c=null,d=null;a.XDM.sendPurchase(b).result(function(a){a.success&&c?c(b):d&&d(b)});var e={success:function(a){return c=a,e},failure:function(a){return d=a,e}};return e}()},isAnalyticsSupported:function(){return a.iap.internal.analyticsSupported},getConsoleProvider:function(){return a.iap.internal.provider},internal:{supported:!1,analyticsSupported:!1,provider:"",initializeIAP:function(b){a.iap.internal.supported=!0,b&&b.analytics&&(a.iap.internal.analyticsSupported=b.analytics)}}}),e=new d;return a.install("iap",new d),e}(y,u,z),window.iConsole=y,y.initializeModules({}),y.init({})}();