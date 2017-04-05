
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
	return 'Borwser service to send keystroles to the server';
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
