(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=a(2),c=a(3),u=a(5),l=a(4),m=(a(13),a(1)),p=a(17),f=(a(14),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={imagesOrder:Object(m.a)(t.props.images),gap:50,shift:0,transitionNeed:!0,direction:null,shiftCounter:1,shiftLimit:Math.ceil(t.props.images.length/t.props.step)},t.blockButtons=function(t){var e=document.querySelectorAll(".Carousel__button");e.forEach((function(t){return t.setAttribute("disabled","disabled")})),setTimeout((function(){e.forEach((function(t){return t.removeAttribute("disabled")}))}),t)},t.prevImage=function(){var e=t.props,a=e.step,n=e.itemWidth,i=e.animationDuration,r=e.infinite;r?(t.blockButtons(i),t.setState((function(t){var e=t.imagesOrder,i=t.gap,r=t.shift;return{imagesOrder:[].concat(Object(m.a)(e.slice(-a)),Object(m.a)(e)),shift:r-n*a-a*i,transitionNeed:!1,direction:"left"}}))):r||0===t.state.shift||t.setState((function(t){var e=t.gap,i=t.shift,r=t.shiftCounter;return{shift:i+n*a+a*e,shiftCounter:r-1}}))},t.nextImage=function(){var e=t.props,a=e.step,n=e.itemWidth,i=e.animationDuration,r=e.infinite,s=t.state,o=s.shiftCounter,c=s.shiftLimit;r?(t.blockButtons(i),t.setState((function(t){var e=t.imagesOrder,i=t.shift,r=t.gap;return{imagesOrder:[].concat(Object(m.a)(e),Object(m.a)(e.slice(0,a))),shift:i-n*a-a*r,direction:"right",transitionNeed:!0}}))):r||o===c||t.setState((function(t){var e=t.gap,i=t.shift,r=t.shiftCounter;return{shift:i-n*a-a*e,shiftCounter:r+1}}))},t}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t){var e=this;"left"===this.state.direction&&setTimeout((function(){e.setState((function(e){var a=e.imagesOrder;return{imagesOrder:Object(m.a)(a.slice(0,-t.step)),shift:0,transitionNeed:!0,direction:null}}))}),0),"right"===this.state.direction&&setTimeout((function(){e.setState((function(e){var a=e.imagesOrder;return{imagesOrder:Object(m.a)(a.slice(t.step)),shift:0,transitionNeed:!1,direction:null}}))}),this.props.animationDuration)}},{key:"render",value:function(){var t=this.props,e=t.frameSize,a=t.itemWidth,n=t.animationDuration,r=this.state,s=r.shift,o=r.imagesOrder,c=r.transitionNeed,u=r.gap,l={width:a*e+(e-1)*u},m=c?{transform:"translateX(".concat(s,"px)"),transition:"transform linear ".concat(n,"ms"),gap:"".concat(u,"px")}:{transform:"translateX(".concat(s,"px)"),gap:"".concat(u,"px")},f={width:a,height:a};return i.a.createElement("div",{className:"Carousel"},i.a.createElement("div",{className:"Carousel__list-wrapper",style:l},i.a.createElement("ul",{className:"Carousel__list",style:m},o.map((function(t,e){return i.a.createElement("li",{key:Object(p.a)(),className:"Carousel__item"},i.a.createElement("img",{className:"Carousel__img",src:t,alt:"".concat(e),style:f}))})))),i.a.createElement("button",{type:"button",className:"Carousel__button Carousel__button_prev",onClick:this.prevImage,disabled:1===this.state.shiftCounter&&!this.props.infinite},"<"),i.a.createElement("button",{type:"button",className:"Carousel__button Carousel__button_next",onClick:this.nextImage,disabled:this.state.shiftCounter===this.state.shiftLimit&&!this.props.infinite},">"))}}]),a}(i.a.Component)),h=3,g=3,d=130,b=1e3,v=!1;function C(){window.location.reload()}var O=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state.images,e=h,a=g,n=d,r=b,s=e,o=a,c=n,u=r,l=v;return function(){if(confirm("Do you want set custom params of carousel?")){var i=Math.floor(t.length/2),m=Math.abs(+prompt("Set scroll step, maximum - ".concat(i))),p=Math.abs(+prompt("Set number of displayed images, maximum - ".concat(i))),f=Math.abs(+prompt("Set image width")),h=Math.abs(+prompt("Set scroll duration"));s=m<=i&&m||e,console.log(s),o=p<=i&&p||a,c=f||n,u=h||r,l=confirm("Do you want infinite carousel?")}}(),i.a.createElement("div",{className:"App"},i.a.createElement("h1",{className:"title"},"Carousel with ".concat(t.length," images")),i.a.createElement(f,{images:t,step:s,frameSize:o,itemWidth:c,animationDuration:u,infinite:l}),i.a.createElement("button",{className:"changing-button",type:"button",onClick:C},"Change Carousel"))}}]),a}(i.a.Component);s.a.render(i.a.createElement(O,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e796ea68.chunk.js.map