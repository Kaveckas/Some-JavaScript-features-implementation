/**
 *
 * `new` operator implementation
 *
 */

_new = function( constructor, arguments ) {

	var object = {};

	object.__proto__ = constructor.prototype;
	constructor.apply( object, arguments );
	
	return object;
};