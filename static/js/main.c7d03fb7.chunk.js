(this["webpackJsonptocc-map"]=this["webpackJsonptocc-map"]||[]).push([[0],{183:function(e,t,n){e.exports=n(421)},418:function(e,t,n){},419:function(e,t,n){},420:function(e,t,n){},421:function(e,t,n){"use strict";n.r(t);n(184),n(234);var a=n(17),o=n.n(a),c=n(182),s=n.n(c),r=n(81),i=n(82),l=n(83),m=n(85),p=n(84),u=(n(418),n(419),n(420),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"toccmap__item",onClick:this.props.onClick,style:{left:this.props.coords.x,top:this.props.coords.y}},o.a.createElement("i",null,this.props.content.icon))}}]),n}(o.a.Component)),d=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e={className:"oc-overlay"},t="",n={},a={cursor:"pointer"};return this.props.data&&(this.props.data.content.modal.indexOf("www.youtube.com/embed")>=0?(n={background:"none"},a.color="white",t=o.a.createElement("div",{className:"oc-responsive-embed"},o.a.createElement("iframe",{src:this.props.data.content.modal,title:this.props.data.content.icon}))):t=function(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.childNodes,a=n.length;a--;)if(1===n[a].nodeType)return!0;return!1}(this.props.data.content.modal)?o.a.createElement("div",{className:"oc-content"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data.content.modal}})):o.a.createElement("div",{className:"oc-content"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.data.content.modal}}))),this.props.open&&(e.open="open"),o.a.createElement("div",e,o.a.createElement("div",{className:"oc-overlay__container",style:n},o.a.createElement("button",{className:"oc-overlay__close",onClick:this.props.onClose,style:a}),t))}}]),n}(o.a.Component),h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={loading:!0,data:[],theme:"Default",modalItem:!1},a.getMapItems=a.getMapItems.bind(Object(r.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){fetch("https://script.google.com/macros/s/AKfycbx0-06cEJ36cILW7N1QbyRvHJSiNrSCxL9QqHo_Sc90uDDHqA/exec",{mode:"cors",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data,theme:t.theme,loading:!1})}))}))}},{key:"getMapItems",value:function(){var e=this;return this.state.data.map((function(t,n){return o.a.createElement(u,Object.assign({key:n},t,{onClick:function(){e.onClickItem(t)}}))}))}},{key:"onClickItem",value:function(e){this.setState({modalItem:e})}},{key:"onCloseItem",value:function(){this.setState({modalItem:!1})}},{key:"render",value:function(){var e=["toccmap"];this.state.loading&&e.push("loading");var t={onClose:this.onCloseItem.bind(this)};return!1!==this.state.modalItem&&(t.open="open"),o.a.createElement("div",{className:e.join(" ")},this.getMapItems(),o.a.createElement(d,Object.assign({},t,{data:this.state.modalItem})))}}]),n}(o.a.Component);s.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.c7d03fb7.chunk.js.map