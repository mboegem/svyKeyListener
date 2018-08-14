/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1155C753-2DEA-4327-AB78-D35E75480F76"}
 */
var filterText = '';

/**
 * 
 * @param {String} text
 *
 * @properties={typeid:24,uuid:"2E410E9C-1633-4320-A8D4-7CE62CEDD5E7"}
 */
function onKey(text){
	application.output('Callback: ' + text);
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
    plugins.keyListener.addKeyListener('searchKeyListener',onKey);
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
