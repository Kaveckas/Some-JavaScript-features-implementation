/**
 *
 * Dot call notation property acccessor,
 * `call` method implementation
 *
 */

_dotcall = function( object, property, arguments ) {

	var fn = dot(object, property);

	if ( typeof fn === 'function' ) {
		return fn.apply( object, arguments );

	} else {
		throw property + ' is not a function';
	}
};