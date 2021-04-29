/**
 * BLOCK: veldhuizen-nav
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const {
	__
} = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks
import {
	TextControl,
	TextareaControl
} from '@wordpress/components';

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
registerBlockType('cgb/block-veldhuizen-product-footer', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Veldhuizen Product Footer'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Veldhuizen'),
		__('Product footer'),
		__('Footer'),
	],

	attributes: {
		fetched: {
			type: 'boolean',
			default: false,
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
	edit: (props) => {
		// FUNCTIONS

        // FETCH ALL PRODUCTS ON WORDPRESS SITE
		const fetchProducts = () => {
			if (!props.attributes.fetched) {
				wp.apiFetch({
					url: '/wp-json/wp/v2/producten?per_page=100'
				}).then((res) => {
					props.setAttributes({
						fetched: true,
					})
					props.setAttributes({
						products: res.map((res) => {
							return {
								productId: res.id,
								productTitle: res.title['rendered'],
								productUrl: res.link,
							}
						})
					})
				}).catch(err => {
					throw err;
				})
			}
		}

        // RESET FETCHED VALUE, SO FETCH FUNCTIONS GETS ALL PRODUCTS AGAIN
        window.onload = () => {
            props.setAttributes({
                fetched: false,
            })
        }


        console.log(props.attributes.fetched)
		fetchProducts();

		// RETURN TO BACKEND
		return ( 
            <div className = "veldhuizen__product-footer">
			<h4> Footer </h4> 
            </div>
		)
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return null;
	},
});