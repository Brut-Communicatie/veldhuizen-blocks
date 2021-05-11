const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
 
const BLOCKS_TEMPLATE = [
    [ 'core/image', {} ],
    [ 'core/paragraph', { placeholder: 'Image Details' } ],
];
 
registerBlockType( 'myplugin/template', {
    title: 'My Template Block',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE,
            templateLock: false,
        } );
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
} );


// DEZE VIEZE FUNCTIE WOLLAH
// window.onclick = (e) => {
//     clickedImage = e.target.src
//     return clickedImage
// }

// window.onload = () => {
//     productImages = document.getElementsByClassName('gallery-pictures')
//     // console.log(productImages)

//     // const entries = Object.entries(productImages)
//     // console.log(entries)

//     const entries= Object.entries(productImages)
//     console.log(productImages[1].currentSrc)
//     console.log(entries)
  
//     // FOR OF LOOP
//     // for (const [key, value] of Object.entries(productImages)) {
//     //     console.log(`${key}:${productImages[key]}`);
//     // }

//     // FOR IN LOOP WITH HASOWNPROPERTY
//     // for (const key in productImages) {
//     //     if (productImages.hasOwnProperty(key)) {
//     //         console.log("hasOwnProperty method" + `${key}:${productImages[key]}`)
//     //     }
//     // }
//     return productImages
// }


// jQuery code for adding table to product description
(function($){
	"use strict";
$('.product-beschrijving2').each(function() {
});
$('.product-beschrijving5').each(function() {
	 $('.product-beschrijving5 p').after('closeDiv');
	 $('.product-beschrijving5 p').before ('openDiv');
	  var text = $(this).html();
   $(this).html(text.replace(/openDiv/g, '<div class="productText">'));
    var text = $(this).html();
   $(this).html(text.replace(/closeDiv/g, '</div><p class="separator">&nbsp;</p>'));
      var text = $(this).html();
   $(this).html(text.replace(/¬/g, ''));
	  var text = $(this).html();
   $(this).html(text.replace(/Meerprijs voor:/g, '<div class="meerprijs"><b>Meerprijs voor:</b>'));
     var text = $(this).html();
   $(this).html(text.replace(/Meerprijzen:/g, '<div class="meerprijs"><b>Meerprijzen:</b>'));
   var text = $(this).html();
   $(this).html(text.replace(/Minderprijs voor:/g, '<div class="meerprijs"><b>Minderprijs voor:</b>'));
   var text = $(this).html();
   $(this).html(text.replace(/Minderprijzen:/g, '<div class="meerprijs"><b>Minderprijzen:</b>'));
   var text = $(this).html();
   $(this).html(text.replace(/Minderprijs:/g, '<div class="meerprijs"><b>Minderprijs:</b>'));
});
$('.meerprijs').each(function() {
   var text = $(this).html();
   $(this).html(text.replace(/–/g, '<table width="100%" cellpadding="0" cellspacing="0" border="0" class="new-line2"><tr><td class="seperate-tab">-</td><td class="text-tab">'));
   var text = $(this).html();
   $(this).html(text.replace(/€/g, '</td><td class="euro-tab">'));
    var text = $(this).html();
   $(this).html(text.replace(/,=/g, ',=</td></tr></table><br>'));
	 var text = $(this).html();
	$(this).html(text.replace(/nvt/g, 'nvt</td></tr></table><br>'));
	var text = $(this).html();
 $(this).html(text.replace(/n.v.t./g, 'nvt</td></tr></table><br>'));
     var text = $(this).html();
   $(this).html(text.replace(/\/stuk/g, ''));
   var text = $(this).html();
   $(this).html(text.replace(/<br>/g, ''));
//    $('.meerprijs .new-line2:last-of-type').after('close');
   var text = $(this).html();
   $(this).html(text.replace(/close/g, '</div>'));
});
$('.product-beschrijving5 .productText').each(function() {
   var text = $(this).html();
   $(this).html(text.replace(/€/g, '<span><b>'));
    var text = $(this).html();
   $(this).html(text.replace(/,=/g, ',=</b></span>'));
    var text = $(this).html();
   $(this).html(text.replace(/–/g, '<table width="100%" cellpadding="0" cellspacing="0" border="0" class="new-line"><tr><td class="seperate-tab">-</td><td class="line-tab">'));
	 $(this).html(text.replace(/<br>/g, '</td></tr></table><br>'));
      var text = $(this).html();
   $(this).html(text.replace(/afsluiten voor <span><b>/g, 'afsluiten voor <b>'));
});
/*
$('.product-disclaimer-print').each(function() {
   var text = $(this).html();
   $(this).html(text.replace(/www.veldhuizen.nl/g, 'www.veldhuizen.nl'));
   var text = $(this).html();
   $(this).html(text.replace(/[prijs_disclaimer_print]/g, 'Geldig vanaf maart 2017 tot 1 februari 2018'));
   $(this).html(text.replace(/oktober 2016/g, 'maart 2017 tot 1 februari 2018'));
});
*/
$('.product-disclaimer').each(function() {
   var text = $(this).html();
   $(this).html(text.replace(")</div>", ')<span class="product-disclaimer-print"><br>Voor actuele prijzen: http://www.veldhuizen.nl of bel naar: 088 6259600</span></div>'));
});
	$('.inscription-checkbox input[type="checkbox"]').on('click', function () {
        $('.inscription-text').slideToggle();
});
jQuery('.inner-entry').click(function(){
});
	jQuery('#onderhoudsgegevens .av-masonry-container a').attr('target', '_blank');
// Mega Menu Nav
$(".twelve .menu-item").hover(
  function () {
	$(this).find('.sub-menu').addClass('contentHover');
	$('.contentHover li:first-child a').addClass('menu-fx');
},
function () {
 $(this).find('.sub-menu').removeClass('contentHover');
 $('.contentHover li:first-child a').removeClass('menu-fx');
	}
);
// Aanbod
$(".av-masonry-entry").hover(
  function () {
	$(this).find('.av-inner-masonry-content').addClass('orangeBackground');
	$(this).find('.avia-arrow').addClass('orangeBackground');
	$(this).find('.av-masonry-entry-title').addClass('colorWhite');
},
function () {
$(this).find('.av-inner-masonry-content').removeClass('orangeBackground');
$(this).find('.avia-arrow').removeClass('orangeBackground');
$(this).find('.av-masonry-entry-title').removeClass('colorWhite');
	}
);
}(jQuery));

// QUERY WP EXPORTER
// 'post_type' => 'page', 'author' => 8