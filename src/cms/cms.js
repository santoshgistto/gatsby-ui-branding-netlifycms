import CMS from 'netlify-cms-app'
import AppPreview from './preview-templates/AppPreview'
import UiConfigPreview from './preview-templates/uiConfig'



import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker";
CMS.registerWidget("color", ColorControl, ColorPreview);


//CMS.getPreviewStyles('/style.css')
//CMS.registerPreviewTemplate('ui-config', UiConfigPreview)
CMS.registerPreviewTemplate("branding",AppPreview)

