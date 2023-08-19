import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, ColorPalette} from '@wordpress/block-editor';

import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';


import './style.scss';
import './editor.scss';

registerBlockType('sc-fw/text-cta', {
  title: 'Full Width - Text With CTA',
  icon: 'button',
  category: 'common',
  attributes: {
    text: {
      type: 'string',
      default: '',
    },
    buttonText: {
      type: 'string',
      default: '',
    },
    buttonLink: {
      type: 'string',
      default: '',
    },
    bg_color: {
      type: 'string',
      default: '#6b0010'  
    }
  },

  edit: function TextWithCTAEdit({ attributes, setAttributes }) {

    const blockProps = useBlockProps({
      className: 'sc-fw-text-cta-root',
      style: { backgroundColor: attributes.bg_color }
    });

    const onChangeBGColor = ( hexColor ) => {
      setAttributes( { bg_color: hexColor } );
    }
    
    return (
      <div {...blockProps}>       
      	<InspectorControls>      		  		      		
  			<fieldset>
  				<legend>Select link for Button</legend>
        		<LinkControl
        			settings={[
        				{
        					id: 'opensInNewTab',
        					title: 'New Tab?'
        				}
        			]}
        			onChange={ ( nextValue ) => {
        				setAttributes({
        					buttonLink: nextValue.url,
        					opensInNewTab: nextValue.opensInNewTab
        				});
        			}}   
        		/>
        	</fieldset>
          <fieldset>
            <legend>Select background color</legend>
            <ColorPalette
              onChange={ onChangeBGColor }
            />
          </fieldset> 	
	    </InspectorControls>
        <SC_MainTextLineComponent attributes={attributes} setAttributes={setAttributes} />
        <SC_ButtonComponent attributes={attributes} setAttributes={setAttributes} />        
      </div>
    );
  },

  save: function TextWithCTASave({ attributes }) {
    return (
      <div className="sc-fw-text-cta-container" style={ {backgroundColor: attributes.bg_color} }>
        <div className="sc-fw-text-line">
          <RichText.Content value={attributes.text} />
        </div>
        <div className="sc-fw-text-cta-btn">
          <a href={attributes.buttonLink}>
            <RichText.Content value={attributes.buttonText} />
          </a>
        </div>        
      </div>
    );
  },
});

function SC_MainTextLineComponent({ attributes, setAttributes }) {
  return (
    <div className="sc-fw-text-line">
      <RichText
        tagName="div"
        multiline={false}
        value={attributes.text}
        onChange={(newText) => setAttributes({ text: newText })}
        placeholder="Enter your text..."
      />
    </div>
  );
}

function SC_ButtonComponent({ attributes, setAttributes }) {
	
  return (
    <div className="sc-fw-text-cta-btn">
      <RichText
        tagName="div"
        multiline={false}
        value={attributes.buttonText}
        onChange={(newText) => setAttributes({ buttonText: newText })}        
        placeholder="Enter Text Here"        
      />
    </div>
  );
}
