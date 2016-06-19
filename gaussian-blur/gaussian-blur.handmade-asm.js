var GaussianBlurAsmModuleGlobals = {};
var GaussianBlurAsmModule = (function() {

    var heap = new ArrayBuffer(1 << 22); // 4 MB
    GaussianBlurAsmModuleGlobals["HEAPU8"] = new Uint8Array(buffer);
    
    return (function _GaussianBlurAsmModule(stdlib, foregign, buffer) {
        "use asm";

        var Math_exp = stdlib.Math.exp;
        var Math_ceil = stdlib.Math.ceil;
        var Math_floor = stdlib.Math.floor;
        var Math_PI = stdlib.Math.PI;
        var Math_imul = stdlib.Math.imul;
        var HEAPU8 = new stdlib.Uint8Array(buffer);

        // http://blog.ivank.net/fastest-gaussian-blur.html
        // source channel, target channel, width, height, radius
        function gaussBlur_1 (scl, tcl, w, h, r) {
            scl=scl|0; tcl=tcl|0; w=w|0; h=h|0; r=r|0;
            var rs = 0, dr = 0.0;
            var twoRSquared = 0.0;
            var PItwoRSquared = 0.0;
            var wMinusOne = 0;
            var gMinusOne = 0;
            var i=0, j=0, iy=0, ix=0, x=0, y=0;
            var wsum=0.0, rval=0.0, gval=0.0, bval=0.0, aval=0.0, dsq=0.0, wght=0.0;
            var kernelPixelIndex=0, pixelIndex=0;
            dr = +~r;
            rs = (~~Math_ceil(dr * +2.57))|0;     // significant radius
            twoRSquared = dr*dr*2.0;
            PItwoRSquared = Math_PI * twoRSquared;
            wMinusOne = (w - 1)|0;
            gMinusOne = (h - 1)|0;
            for(i=0; (i|0)<(h|0); i = (i + 1)|0) {
                for(j=0; (j|0)<(w|0); j = (j + 1)|0) {
                    wsum = +0.0;
                    rval = +0.0;
                    gval = +0.0;
                    bval = +0.0;
                    aval = +0.0;
                    iy = (i-rs)|0;
                    for(; (iy|0)<((i+rs+1)|0); iy = (iy + 1)|0) {
                        ix = (j-rs)|0;
                        for(; (ix|0)<((j+rs+1)|0); ix = (ix + 1)|0) {
                            x = ((ix|0) > (0|0) ? ix : 0)|0;
                            x = ~wMinusOne < ~x ? wMinusOne : x;
                            y = ((iy|0) > (0|0) ? iy : 0)|0;
                            y = ~gMinusOne < ~y ? gMinusOne : y;
                            dsq = +((+~(ix-j))*(+~(ix-j))+(+~(iy-i))*(+~(iy-i)));
                            wght = +Math_exp( -dsq / twoRSquared ) / PItwoRSquared;
                            wsum = wsum + wght;
                            kernelPixelIndex = (Math_imul(y,w)+x)<<2;
                            rval = rval + (+(+~HEAPU8[(scl+kernelPixelIndex+0)|0] * wght));
                            gval = gval + (+(+~HEAPU8[(scl+kernelPixelIndex+1)|0] * wght));
                            bval = bval + (+(+~HEAPU8[(scl+kernelPixelIndex+2)|0] * wght));
                            aval = aval + (+(+~HEAPU8[(scl+kernelPixelIndex+3)|0] * wght));
                        }
                    }
                    pixelIndex = (Math_imul(i,w)+j)<<2;
                    HEAPU8[(tcl+pixelIndex+0)|0] = (~~Math_floor(rval/wsum+0.5))|0;
                    HEAPU8[(tcl+pixelIndex+1)|0] = (~~Math_floor(gval/wsum+0.5))|0;
                    HEAPU8[(tcl+pixelIndex+2)|0] = (~~Math_floor(bval/wsum+0.5))|0;
                    HEAPU8[(tcl+pixelIndex+3)|0] = (~~Math_floor(aval/wsum+0.5))|0;
                }
            }
            return;
        }

        // exports
        return { gaussianBlur: gaussBlur_1 };
    }(window, null, heap));
}());