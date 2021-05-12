/**
 * BLOCK: veldhuizen-imagegrid
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.blockEditor;
const { Button } = wp.components;
import { TextControl, TextareaControl } from '@wordpress/components';

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
		title: {
			type: 'string',
		},
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
		// FUNCTIONS
		// const getTitle = () => {
		// 	if (! props.attributes.title ) {
		// 		const pTitle = document.getElementById('post-title-0').innerHTML
		// 		console.log(pTitle)
		// 		props.setAttributes({
		// 			title: pTitle
		// 		})
		// 	}
		// }

		// const pushImages = (id) => {
		// 	props.setAttributes({
		// 		imgArray: id.map( (id) => {
		// 			return {
		// 				imgID: id,
		// 				imgURL: baseUrl + id
		// 			}
		// 		})
		// 	})
		// }
		
		// const getImagesId = () => {
		// 	EVERYDAY WE STRAY FURTHER FROM GOD
		// 	const imgDataStr = (document.getElementsByTagName("P").item(2).innerText.split("[av_gallery ids='").pop()).replace("' style='big_thumb' preview_size='no scaling' crop_big_preview_thumbnail='avia-gallery-big-crop-thumb' thumb_size='portfolio' columns='5' imagelink='lightbox' lazyload='avia_lazyload' custom_class='product-gallerij']", "")
		// 	const imgDataArr = imgDataStr.split(",")
		// 	const baseUrl = "https://veldhuizen.nl/?attachment_id="

		// 	props.setAttributes({
		// 		imgArray: imgDataArr.map( (id) => {
		// 			return {
		// 				imgID: id,
		// 				imgURL: baseUrl + id
		// 			}
		// 		})
		// 	})
		// 	console.log(props.attributes.imgArray)
		// }

		if (props.attributes.title.length === 0) {
			console.log("Triggered title statement in gridblock")
			const title = document.getElementById("post-title-0").innerHTML
			updateTitle(title)
		}

		
		const onFileSelect = ( img ) => {
			props.setAttributes({ 
					imgArray: img.map( ( img ) => { 
						return {
							imgID: img.id,
							imgURL: img.url,
							imgAlt: img.alt	
						}
				})
			});
		}

		const onRemoveImg = () => {
			props.setAttributes({
				imgArray: null
			});
		}
		
		const updateTitle = (value) => {
            props.setAttributes({
                title: value,
            });
        }

		const imgList = props.attributes.imgArray;
		// window.addEventListener('load', getTitle, false)
		// window.addEventListener('load', getImagesId, false)

		// RETURN TO BACKEND
		return (
			<div className="veldhuizen__gallery">
				<TextControl 
                    label="Heading"
                    value={ props.attributes.title }
                    onChange={ (value) => updateTitle(value) }
                />
				{
					(props.attributes.imgArray) ? (
						<div className="img-upload-wrapper" >
							
							{
								imgList.map((img)  => 
									<img src={img.imgURL} alt={img.imgAlt} />
								)
							}

							<Button className="remove-button"
									onClick={onRemoveImg}
							>Remove All Images</Button>
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
    },
} );
