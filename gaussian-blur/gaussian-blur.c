#include <math.h>

void gaussianBlur(unsigned char * scl, unsigned char * tcl, int w, int h, int r)
{
	double rs = ceil(r * 2.57);
	double twoRSquared = 2.0*r*r;
    double PItwoRSquared = M_PI * twoRSquared;
    int wMinusOne = w - 1;
    int hMinusOne = h - 1;
    int i, j, iy, ix;
    for(i=0; i<h; i++) {
        for(j=0; j<w; j++) {
            double wsum = 0.0;
            double rval = 0.0;
            double gval = 0.0;
            double bval = 0.0;
            double aval = 0.0;
            for(iy = i-rs; iy<i+rs+1; iy++) {
                for(ix = j-rs; ix<j+rs+1; ix++) {
                    int x = ix > 0 ? ix : 0;
                    x = wMinusOne < x ? wMinusOne : x;
                    int y = iy > 0 ? iy : 0;
                    y = hMinusOne < y ? hMinusOne : y;
                    int dsq = (ix-j)*(ix-j)+(iy-i)*(iy-i);
                    double wght = exp( -dsq / twoRSquared ) / PItwoRSquared;
                    wsum += wght;
                    int kernelPixelIndex = (y*w+x)*4;
                    rval += scl[kernelPixelIndex+0] * wght;
                    gval += scl[kernelPixelIndex+1] * wght;
                    bval += scl[kernelPixelIndex+2] * wght;
                    aval += scl[kernelPixelIndex+3] * wght;
                }
            }
            int pixelIndex = (i*w+j)*4;
            tcl[pixelIndex+0] = (unsigned char)round(rval/wsum);
            tcl[pixelIndex+1] = (unsigned char)round(gval/wsum);
            tcl[pixelIndex+2] = (unsigned char)round(bval/wsum);
            tcl[pixelIndex+3] = (unsigned char)round(aval/wsum);
        }
    }
}