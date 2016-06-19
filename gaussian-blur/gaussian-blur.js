// http://blog.ivank.net/fastest-gaussian-blur.html, updated for 4 color channels

// source channel, target channel, width, height, radius
function gaussBlur_1 (scl, tcl, w, h, r) {
    var rs = Math.ceil(r * 2.57);     // significant radius
    var twoRSquared = 2*r*r;
    var PItwoRSquared = Math.PI * twoRSquared;
    var wMinusOne = w - 1;
    var gMinusOne = h - 1;
    for(var i=0; i<h; i++) {
        for(var j=0; j<w; j++) {
            var wsum = 0.0;
            var rval = 0.0;
            var gval = 0.0;
            var bval = 0.0;
            var aval = 0.0;
            for(var iy = i-rs; iy<i+rs+1; iy++) {
                for(var ix = j-rs; ix<j+rs+1; ix++) {
                    var x = ix > 0 ? ix : 0;
                    x = wMinusOne < x ? wMinusOne : x;
                    var y = iy > 0 ? iy : 0;
                    y = gMinusOne < y ? gMinusOne : y;
                    var dsq = (ix-j)*(ix-j)+(iy-i)*(iy-i);
                    var wght = Math.exp( -dsq / twoRSquared ) / PItwoRSquared;
                    wsum += wght;
                    var kernelPixelIndex = (y*w+x)*4;
                    rval += scl[kernelPixelIndex+0] * wght;
                    gval += scl[kernelPixelIndex+1] * wght;
                    bval += scl[kernelPixelIndex+2] * wght;
                    aval += scl[kernelPixelIndex+3] * wght;
                }
            }
            var pixelIndex = (i*w+j)*4;
            tcl[pixelIndex+0] = Math.round(rval/wsum);
            tcl[pixelIndex+1] = Math.round(gval/wsum);
            tcl[pixelIndex+2] = Math.round(bval/wsum);
            tcl[pixelIndex+3] = Math.round(aval/wsum);
        }
    }
}