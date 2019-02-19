/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1155C753-2DEA-4327-AB78-D35E75480F76"}
 */
var filterText = '';

/**
 * @param {JSEvent} event
 * @param {String} text
 *
 * @properties={typeid:24,uuid:"2E410E9C-1633-4320-A8D4-7CE62CEDD5E7"}
 */
function onKey(text, event){
	search(text);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"AD94D58C-F847-4677-81DD-4C94E21629A5"}
 */
function addListener(event) {
	// NOTE: using the form editor we have added an attribute 'keylistener' with value 'searchKeyListener' to the search element 'pw'.
	// Is possible to add any attribute to any element as name-value;
	// the keyListener plugin will look for elements having a 'keylistener' attribute with value = to the callbackKey
    plugins.keyListener.addKeyListener('searchKeyListener', onKey);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"505CFD35-848B-4ECC-B0AF-9F2BC5DE4D04"}
 */
function removeListener(event) {
	plugins.keyListener.removeKeyListener('searchKeyListener');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} value
 *
 * @properties={typeid:24,uuid:"0A3B5D0F-7186-44DD-B383-3E741C904337"}
 * @AllowToRunInFind
 */
function search(value){
	var searchText = '%' + value.toUpperCase() + '%'
	
	var q = datasources.db.example_data.orders.createSelect();
	q.result.addPk();
	
	
	
	q.where.add(
		q.or
			.add(q.joins.orders_to_customers.columns.companyname.upper.like(searchText))
			.add(q.joins.orders_to_employees.columns.firstname.upper.like(searchText))
			.add(q.joins.orders_to_employees.columns.lastname.upper.like(searchText))
			.add(q.columns.shipcountry.upper.like(searchText))
	);
	
	
	
	foundset.loadRecords(q);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"35582939-EB49-47E6-97F1-E55C68136361"}
 */
function onAction(event) {
	search(filterText);
}
