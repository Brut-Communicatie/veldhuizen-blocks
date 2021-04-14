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
registerBlockType( 'cgb/block-veldhuizen-nav', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Veldhuizen Navigatie Blok' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Veldhuizen' ),
		__( 'Navigatie blok' ),
		__( 'Navigatie' ),
	],

	attributes: {
		title: {
			type: 'string'
		},
		pages: {
			type: 'object'
		},
		selectedPage:  {
			type: 'string'
		},
		loaded: {
			type: 'boolean'
		},
		link: {
			type: 'string'
		},
		image: {
			type: 'string'
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
		// Creates a <p class='wp-block-cgb-block-veldhuizen-nav'></p>.

		const setPage = (page) => {
			console.log(page)
			props.setAttributes(
				{
					selectedPage: page,
					loaded: false
				}
			)
		}

		if (!props.attributes.pages) {
			wp.apiFetch({
				url: '/wp-json/wp/v2/producten?per_page=100'
			}).then(result => {
				props.setAttributes(
					{
						pages: result
					}
				)
			})
		}

		if (!props.attributes.loaded){
			wp.apiFetch({
				url: `/wp-json/wp/v2/producten/${props.attributes.selectedPage}?_embed`
			}).then(result => {
				if (result._embedded['wp:featuredmedia']){
					props.setAttributes({
						image: result._embedded['wp:featuredmedia'][0].source_url
					})
				} else {
					props.setAttributes({
						image: null
					})
				}
				props.setAttributes(
					{
						title: result.title.rendered,
						link: result.link,
						loaded: true
					}
				)
			})
		}

		if (!props.attributes.pages) {
			return 'Ophalen van gegevens...';
		}

		if (props.attributes.pages && props.attributes.pages.length === 0) {
			return 'Geen paginas gevonden';
		}

		return (
			<div className="truckblock">
				<div className="truckblock__left">
				<select onChange={e => setPage(e.target.value)} value={props.attributes.selectedPage ? props.attributes.selectedPage : null}>
					{
						props.attributes.pages.map(page => {
							return (
								<option value={page.id} key={page.id}>
									{/* {console.log(page)} */}
									{page.title.rendered}
								</option>
							)
						})
					}
				</select>
				</div>
				<div className="truckblock__right">
					{props.attributes.selectedPage ? 
						null : 'Selecteer een pagina'
					}
					{ props.attributes.selectedPage && props.attributes.loaded ? 
					(
						<div className="block">
							{props.attributes.image ? (
								<img src={props.attributes.image} />
							) : 'Geen afbeelding gevonden'}
							<div className="block__title">
								<h4>{props.attributes.title}</h4> 
							</div>
						</div>
					)
					: null}

				</div>
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
