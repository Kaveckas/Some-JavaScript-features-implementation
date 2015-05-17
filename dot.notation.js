/**
 *
 * Dot notation property 
 * acccessor implementation
 *
 */

_dot = function( object, property ) {

	if ( object.hasOwnProperty(property) ) {
		return object[property];

	} else if ( object.__proto__ ) {
		return _dot( object.__proto__, property );
	}
};