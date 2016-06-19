var HandmadeDoubleExp = (function(stdlib, external, heap) {
	"use asm";
	var Math_exp = stdlib.Math.exp;
	function doubleExp(value) {
		value = +value;
		return +(+Math_exp(+value) * 2.0);
	}
	return { doubleExp: doubleExp };
}(window, null, null));