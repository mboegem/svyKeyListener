
/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"A24ED18E-BE2E-4272-91C3-F1A7810E7858"}
 */
function getName() {
	return 'Key Listener';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"53D129AB-7F81-467D-9AFC-9C470554F747"}
*/
function getDescription() {
	return 'Browser service to send keystroles to the server';
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"0569456E-0874-4E34-BC18-7A29DB2BA0D3"}
*/
function getParent() {
	return forms.ngServiceSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"E9B7E5F2-6B4D-4085-ABA2-8E91C3C0C9AF"}
*/
function getIconStyleClass() {
	return 'fa-keyboard-o';
}

/**
 *
 * @return {String} Download URL
 *
 * @properties={typeid:24,uuid:"D96C537A-85FD-4CC6-B963-9F99EC9413E8"}
 */
function getDownloadURL() {
	return 'https://github.com/Servoy/svyKeyListener/releases/download/v1.0.0-b1/svyKeyListenerExample.servoy';
}



/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"F0156AC2-BB00-4022-80D8-AFE513DC6A2B"}
*/
function getMoreInfo() {
	return plugins.http.getPageData('https://raw.githubusercontent.com/Servoy/svyKeyListener/master/README.md');
}

/**
*
* @return {Array<String>} code lines
*
* @properties={typeid:24,uuid:"C6811C2F-ECBD-4E56-8FCA-C785D7B0F18E"}
* @AllowToRunInFind
*/
function getSampleCode() {
	return printMethodCode(forms.keyListenerExample.addListener).concat(printMethodCode(forms.keyListenerExample.onKey)).concat(printMethodCode(forms.keyListenerExample.search)).concat(printMethodCode(forms.keyListenerExample.removeListener))
}

/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"CCD26E70-2A7B-4E18-ABD5-700434D52A6B"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/svyKeyListener/wiki';
}
