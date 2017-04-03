/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1155C753-2DEA-4327-AB78-D35E75480F76"}
 */
var pw = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"28FFF029-484C-42D5-BFC2-535DF7518815"}
 */
function onShow(firstShow, event) {
	if(firstShow)
		plugins.keyListener.addKeyListener(elements.pw,onKey);
}

/**
 * @private
 * @param {String} text
 *
 * @properties={typeid:24,uuid:"2E410E9C-1633-4320-A8D4-7CE62CEDD5E7"}
 */
function onKey(text){
	application.output('Callback: ' + text);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AD94D58C-F847-4677-81DD-4C94E21629A5"}
 */
function addListener(event) {
	plugins.keyListener.addKeyListener(elements.pw,onKey);
}
