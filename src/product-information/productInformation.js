/**
 * BLOCK: veldhuizen-nav
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { TextControl, TextareaControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Component } = wp.element;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-veldhuizen-product-information', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Veldhuizen Product Information' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Veldhuizen' ),
		__( 'Product information' ),
		__( 'Information' ),
	],

	attributes: {
		title: {
			type: 'string',
		},
		content: {
			type: 'string',
		},
		products: {
			type: 'array',
			
			productTitle: {
				type: 'string',
			},
			productUrl: {
				type: 'string',
			},
			productId: {
				type: 'number',
			},
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// FORGIVE ME FATHER, FOR I HAVE SINNED
		// const spacing = "<br> <br>"

		// const injectPInfo = () => {
		// 	if ( Object.keys(props.attributes).length === 0 ) {
		// 		const pInfo1 = document.getElementsByTagName("P").item(8).innerHTML.split(']<br>').pop()
		// 		const pInfo2 = document.getElementsByTagName("P").item(9).innerHTML
		// 		const pInfo3 = document.getElementsByTagName("P").item(10).innerHTML.replace('[/av_textblock]', '')
		// 		props.setAttributes({
		// 			content: pInfo1 + spacing + pInfo2 + spacing + pInfo3
		// 		})
		// 		console.log("no attributes")
		// 	} else {
		// 		console.log("attributes found, object has values: " + Object.keys(props.attributes).length)
		// 		console.log(props.attributes)
		// 	}
		// }
		
		// FUNCTIONS
        const updateContent = (value) => {
            props.setAttributes({
                content: value,
            });
        }

		// window.addEventListener('load', injectPInfo, false)
		
		// RETURN TO BACKEND
		return (
			<div className="veldhuizen__product-information">
				<div className="wrapper-richtext">
					<RichText
					placeholder="Informatie over het product gaat hier"
					label="Productinformatie"
					preserveWhiteSpace={ false }
					value={ props.attributes.content }
					onChange={ (value) => updateContent(value) }
					/>
				</div>
				
			</div>
		)
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * i nto the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return props.attributes;
	},
} );
