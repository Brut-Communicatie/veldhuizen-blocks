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
const { Button, RadioControl } = wp.components;
const { withState } = wp.compose;



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

 registerBlockType( 'cgb/veldhuizen-product-button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Veldhuizen Product Button' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Veldhuizen' ),
		__( 'Product button' ),
		__( 'Button' ),
	],

	attributes: {
		functionality: {
			type: 'string'
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
		// const print = ['Print lijst', 'print-button-icon', 'print-button']
		// const back = ['Terug naar overzicht', '', 'terug-button']

		const print = 'print'
		const back = 'back'



		const saveFunc = (value) => {
			props.setAttributes({
				functionality: value,
			})
			console.log(props.attributes.functionality)
		}

		const MyControlledRadioRadioGroup = () => {
			const [ checked, setChecked ] = useState( '25' );
			<RadioGroup label="Width" onChange={ setChecked } checked={ checked }>
					<Radio value="25">25%</Radio>
					<Radio value="50">50%</Radio>
					<Radio value="75">75%</Radio>
					<Radio value="100">100%</Radio>
			</RadioGroup>
		};

		// RETURN TO BACKEND
		return (
			<div className="veldhuizen-product-button-wrapper">
				{/* <Button onClick={ (value) => saveFunc(print) } >Print</Button>
				<Button value={back} onClick={saveFunc} >Terug</Button> */}
				MyControlledRadioRadioGroup()
				
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
        return props.attributes;
    },
} );
