/**
 *
 * `instanceof` operator implementation
 *
 */

_instanceof = function( object, constructor ) {

	if ( object.__proto__ === constructor.prototype ) {
		return true;

	} else if ( object.__proto__ ){
		return _instanceof( object.__proto__, constructor );
	}

	return false;
};