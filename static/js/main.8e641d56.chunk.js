(this["webpackJsonptocc-map"]=this["webpackJsonptocc-map"]||[]).push([[0],{184:function(e,t,a){e.exports=a(421)},419:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);a(185),a(235);var n=a(12),o=a.n(n),c=a(182),s=a.n(c),r=a(81),i=a(82),l=a(83),m=a(85),d=a(84),u=(a(419),a(420),a(183)),p=a.n(u),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.content.modal?o.a.createElement("div",{className:"toccmap__item",onClick:this.props.onClick,style:{left:this.props.coords.x,top:this.props.coords.y}},o.a.createElement("i",null,this.props.content.icon)):null}}]),a}(o.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={className:"oc-overlay"},t="",a={},n=["oc-overlay__container"];return this.props.data&&(this.props.data.content.modal.indexOf("www.youtube.com/embed")>=0?(a={background:"none"},n.push("oc-overlay__container--embed"),t=o.a.createElement("div",{className:"oc-responsive-embed"},o.a.createElement("iframe",{src:this.props.data.content.modal,title:this.props.data.content.icon},o.a.createElement("p",{className:"oc-white"},"Loading")))):t=function(e){var t=document.createElement("div");t.innerHTML=e;for(var a=t.childNodes,n=a.length;n--;)if(1===a[n].nodeType)return!0;return!1}(this.props.data.content.modal)?o.a.createElement("div",{className:"oc-content"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data.content.modal}})):o.a.createElement("div",{className:"oc-content"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.data.content.modal}}))),this.props.open&&(e.open="open"),o.a.createElement("div",e,o.a.createElement("div",{className:n.join(" "),style:a},o.a.createElement("button",{className:"oc-overlay__close",onClick:this.props.onClose,style:{cursor:"pointer"}}),t))}}]),a}(o.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loading:!0,loaded:!1,data:[],theme:"Default",modalItem:!1},n.getMapItems=n.getMapItems.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){fetch("https://script.google.com/macros/s/AKfycbx0-06cEJ36cILW7N1QbyRvHJSiNrSCxL9QqHo_Sc90uDDHqA/exec",{mode:"cors",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data,theme:t.theme,loading:!1,loaded:!0})}))}))}},{key:"getMapItems",value:function(){var e=this;return this.state.data.map((function(t,a){return o.a.createElement(h,Object.assign({key:a},t,{onClick:function(){e.onClickItem(t)}}))}))}},{key:"onClickItem",value:function(e){this.setState({modalItem:e})}},{key:"onCloseItem",value:function(){this.setState({modalItem:!1})}},{key:"barrelRole",value:function(){var e=document.body;e.classList.add("barrel-roll"),setTimeout((function(){e.classList.remove("barrel-roll")}),4e3)}},{key:"render",value:function(){var e=["toccmap"];this.state.loading&&e.push("oc-loading"),this.state.loaded&&(e.push("toccmap--"+this.state.theme),e.push("oc-loaded"));var t={onClose:this.onCloseItem.bind(this)};return!1!==this.state.modalItem&&(t.open="open"),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.join(" ")},o.a.createElement("div",{className:"toccmap__inner"}),this.getMapItems(),o.a.createElement(v,Object.assign({},t,{data:this.state.modalItem}))),o.a.createElement(p.a,{action:this.barrelRole,code:[38,40,37,39],timeout:1e3}))}}]),a}(o.a.Component);s.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.8e641d56.chunk.js.map