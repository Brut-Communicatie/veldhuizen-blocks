!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.components},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2),n(5),n(9),n(12)},function(e,t,n){"use strict";var i=n(3),r=(n.n(i),n(4)),__=(n.n(r),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-veldhuizen-nav",{title:__("Veldhuizen Navigatie Blok"),icon:"shield",category:"common",keywords:[__("Veldhuizen"),__("Navigatie blok"),__("Navigatie")],attributes:{title:{type:"string"},pages:{type:"object"},selectedPage:{type:"string"},loaded:{type:"boolean"},link:{type:"string"},image:{type:"string"}},edit:function(e){var t=function(t){console.log(t),e.setAttributes({selectedPage:t,loaded:!1})};return e.attributes.pages||wp.apiFetch({url:"/wp-json/wp/v2/producten?per_page=100"}).then(function(t){e.setAttributes({pages:t})}),e.attributes.loaded||wp.apiFetch({url:"/wp-json/wp/v2/producten/"+e.attributes.selectedPage+"?_embed"}).then(function(t){t._embedded["wp:featuredmedia"]?e.setAttributes({image:t._embedded["wp:featuredmedia"][0].source_url}):e.setAttributes({image:null}),e.setAttributes({title:t.title.rendered,link:t.link,loaded:!0})}),e.attributes.pages?e.attributes.pages&&0===e.attributes.pages.length?"Geen paginas gevonden":wp.element.createElement("div",{className:"truckblock"},wp.element.createElement("div",{className:"truckblock__left"},wp.element.createElement("select",{onChange:function(e){return t(e.target.value)},value:e.attributes.selectedPage?e.attributes.selectedPage:null},e.attributes.pages.map(function(e){return wp.element.createElement("option",{value:e.id,key:e.id},e.title.rendered)}))),wp.element.createElement("div",{className:"truckblock__right"},e.attributes.selectedPage?null:"Selecteer een pagina",e.attributes.selectedPage&&e.attributes.loaded?wp.element.createElement("div",{className:"block"},e.attributes.image?wp.element.createElement("img",{src:e.attributes.image}):"Geen afbeelding gevonden",wp.element.createElement("div",{className:"block__title"},wp.element.createElement("h4",null,e.attributes.title))):null)):"Ophalen van gegevens..."},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var i=n(6),r=(n.n(i),n(7)),l=(n.n(r),n(8)),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/veldhuizen-nav-container",{title:__("Veldhuizen Navigatie"),icon:"shield",category:"common",keywords:[__("Veldhuizen"),__("Navigatie container"),__("Navigatie")],attributes:{},edit:function(e){return wp.element.createElement("div",{className:"vh__container"},wp.element.createElement(l.InnerBlocks,null))},save:function(e){return wp.element.createElement(l.InnerBlocks.Content,null)}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.blockEditor},function(e,t,n){"use strict";var i=n(10),r=(n.n(i),n(11)),l=(n.n(r),n(0)),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/veldhuizen-intro",{title:__("Veldhuizen Intro Blok"),icon:"shield",category:"common",keywords:[__("Veldhuizen"),__("Navigatie blok"),__("Navigatie")],attributes:{title:{type:"string"},content:{type:"string"}},edit:function(e){var t=function(t){e.setAttributes({title:t})},n=function(t){e.setAttributes({content:t})};return wp.element.createElement("div",{className:"veldhuizen__intro"},wp.element.createElement(l.TextControl,{label:"Heading",value:e.attributes.title,onChange:function(e){return t(e)}}),wp.element.createElement(l.TextareaControl,{label:"Content",value:e.attributes.content,onChange:function(e){return n(e)}}))},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var i=n(13),r=(n.n(i),n(14)),l=(n.n(r),n(0)),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/veldhuizen-banner",{title:__("Veldhuizen Banner"),icon:"shield",category:"common",keywords:[__("Veldhuizen"),__("Banner"),__("Veldhuizen Banner")],attributes:{title:{type:"string"}},edit:function(e){var t=function(t){e.setAttributes({title:t})};return wp.element.createElement("div",{className:"veldhuizen__banner"},wp.element.createElement(l.TextControl,{label:"Titel",value:e.attributes.title,onChange:function(e){return t(e)}}))},save:function(e){return null}})},function(e,t){},function(e,t){}]);