# Veldhuizen Wordpress Guten Blocks for custom theme
This theme is developed in combination with a fork of Gutenberg Blocks for the website of [Veldhuizen](https://veldhuizen.nl). The code for this theme was a group effort from a team of 2:
* Andres Pinto
* Leroy Leipe gast


## Table of contents
1. Getting started
2. Guten Blocks
3. Folder structure
4. License


## Getting started
> 
> This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).
> Below you will find some information on how to run scripts.
>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).
> 
> ## 👉  `npm start`
> - Use to compile and run the block in development mode.
> - Watches for any changes and reports back any errors in your code.
> 
> ## 👉  `npm run build`
> - Use to build production code for your block inside `dist` folder.
> - Runs once and reports back the gzip file sizes of the produced code.
> 
> ## 👉  `npm run eject`
> - Use to eject your plugin out of `create-guten-block`.
> - Provides all the configurations so you can customize the project as you want.
> - It's a one-way street, `eject` and you have to maintain everything yourself.
> - You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
> 
> ---
> 
> ###### Feel free to tweet and say 👋 at me [@MrAhmadAwais](https://twitter.com/mrahmadawais/)
> 
> [![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block)  [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ahmadawais/create-guten-block) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)

### Guten Blocks
Here is a short description of what the blocks made in this repo do and where they are used.

#### `banner`
Creates a green banner used mostly as page title. The element this block creates is used practially everywhere on the website. The guten block itself, is used often on the `wp-admin` when making pages. Defaulted in the templated for `producten` and `verhuur`

#### `container-block`
This block is used as wrapper-block for `producten` detail pages.

#### `film-youtube`
Block made for showing youtube video embeds in `home/film`. The script `iframeLazy.js` is used on the elements created in this block. 
Asks for a video title and the youtube link. 

#### `product-contact`
This block makes a contact button for in `product/detail` & `verhuur/detail`. Now not used.

#### `product-footer`
Originally making a footer to show products next in array, when browsing detail pages. Now creates a navigation element on the top side of the `producten/detail` & `verhuur/detail`. The chevrons take you to either the next or previous product in the category.

#### `product-information`
Glorified rich-text editor. `productEuro.js` cleans up a lot of potential mess on the frontend. It is specifically made/designed so that client can copy paste the content from a word document. Used in `producten/detail` & `verhuur/detail`.

#### `verhuur-container`
Used as wrapper for other GB's on `verhuur/detail`.

#### `verhuur-table`
Another glorified text-editor, specifically made/designed so that client can copy word tables into the page editor and still looks good. A lot of the actual frontend content is cleanup with `verhuurTable.js` on the main theme.