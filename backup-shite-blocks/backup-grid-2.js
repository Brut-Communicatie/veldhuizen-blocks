/**
 * BLOCK: veldhuizen-imagegrid
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { InnerBlocks } from '@wordpress/block-editor';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.blockEditor;
const { Button } = wp.components;
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

 registerBlockType( 'cgb/veldhuizen-product-grid', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Veldhuizen Product Grid' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Veldhuizen' ),
		__( 'Product grid' ),
		__( 'Product' ),
	],

	attributes: {
		imgArray: {
			type: 'array',

			imgURL: {
				type: 'string',
			},
			imgID: {
				type: 'number',
			},
			imgAlt: {
				type: 'string',
			}
		}
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

		// FUNCTIONS
		const onFileSelect = ( img ) => {
			for (let i = 0; i < img.length; i++) {
				props.setAttributes({
					imgArray: {
						imgURL: img[i]['url'],
						imgID: img[i]['id'],
						imgAlt: img[i]['alt']
					}
				});
			}
		}

		const onRemoveImg = ( ) => {
			props.setAttributes({
				imgURL: null,
				imgID: null,
				imgAlt: null
			});
		}

		console.log(props.attributes);

		// RETURN TO BACKEND
		return (
		
			<div className="veldhuizen__gallery">
				{
					(props.attributes.imgArray) ? (
						<div className="img-upload-wrapper" >
							
							<img 
								src={props.attributes.imgArray['imgURL']}
								alt={props.attributes.imgArray['imgAlt']} 
							/>
							{ 
								(props.isSelected) ? (
									<Button 
										onClick={onRemoveImg}
									>Remove Image</Button>
								) : null 
							}
						</div>
					) : (
						<MediaUpload 
							onSelect={ onFileSelect } 
							value={ props.attributes.imgID }
							multiple={ true }
							render={({open}) => <Button onClick={open} > Open Library </Button> } 
						/>
					)
				}
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
	save: ( props ) => {
        return null;
		// <img 
		// 	src={props.attributes.imgURL}
		// 	alt={props.attributes.imgAlt} 
		// />
    },
} );
