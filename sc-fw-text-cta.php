<?php
/**
 * Plugin Name:       SC Full Width Text and CTA
 * Description:       Gutenberg Block - Creates a Full-width section with text and a CTA link
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Myles Taylor
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sc-fw-text-cta
 *
 * @package           create-block
 */


// Enqueue editor assets
function sc_fw_text_cta_enqueue_editor_assets() {

	wp_enqueue_script(
		'sc-fw-text-cta-block',
		plugins_url('build/index.js', __FILE__),
		array('wp-blocks', 'wp-element', 'wp-editor'),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
	);

	wp_enqueue_style(
		'sc-fw-text-cta-block-editor-style',
		plugins_url('build/index.css', __FILE__),
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
	);
}
add_action('enqueue_block_editor_assets', 'sc_fw_text_cta_enqueue_editor_assets');



// Enqueue Front End assets
function sc_fw_text_cta_enqueue_front_end_assets() {

	wp_enqueue_style(
		'sc-fw-text-cta-block-front-end-style',
		plugins_url('build/style-index.css', __FILE__),
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
	);
}
add_action('wp_enqueue_scripts', 'sc_fw_text_cta_enqueue_front_end_assets');


