Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = global.NaN, r = global.Infinity;
 var s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0.0;
 var B = 0;
 var C = global.Math.floor;
 var D = global.Math.abs;
 var E = global.Math.sqrt;
 var F = global.Math.pow;
 var G = global.Math.cos;
 var H = global.Math.sin;
 var I = global.Math.tan;
 var J = global.Math.acos;
 var K = global.Math.asin;
 var L = global.Math.atan;
 var M = global.Math.atan2;
 var N = global.Math.exp;
 var O = global.Math.log;
 var P = global.Math.ceil;
 var Q = global.Math.imul;
 var R = global.Math.min;
 var S = global.Math.clz32;
 var T = env.abort;
 var U = env.assert;
 var V = env.invoke_ii;
 var W = env.invoke_iiii;
 var X = env.invoke_vi;
 var Y = env._pthread_cleanup_pop;
 var Z = env.___lock;
 var _ = env.___syscall6;
 var $ = env._pthread_cleanup_push;
 var aa = env._abort;
 var ba = env._sbrk;
 var ca = env.___syscall140;
 var da = env._llvm_fabs_f64;
 var ea = env._emscripten_memcpy_big;
 var fa = env.___syscall54;
 var ga = env.___unlock;
 var ha = env.___syscall146;
 var ia = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Ga(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[302] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 1248 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[302] = k & ~(1 << b); else {
    if (h >>> 0 < (c[306] | 0) >>> 0) aa();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else aa();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[304] | 0;
  if (q >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    j = d >>> 12 & 16;
    d = d >>> j;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | j | g | e | b) + (d >>> b) | 0;
    d = 1248 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[302] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[306] | 0) >>> 0) aa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[304] | 0;
      break;
     } else aa();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[307] | 0;
     b = l >>> 3;
     d = 1248 + (b << 1 << 2) | 0;
     a = c[302] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[302] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[304] = h;
    c[307] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[303] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    B = d >>> 12 & 16;
    d = d >>> B;
    A = d >>> 5 & 8;
    d = d >>> A;
    C = d >>> 2 & 4;
    d = d >>> C;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[1512 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - q | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       k = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - q | 0;
     C = b >>> 0 < d >>> 0;
     d = C ? b : d;
     b = a;
     e = C ? a : e;
    }
    g = c[306] | 0;
    if (k >>> 0 < g >>> 0) aa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) aa();
    h = c[k + 24 >> 2] | 0;
    e = c[k + 12 >> 2] | 0;
    do if ((e | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      f = c[e >> 2] | 0;
      if (f | 0) {
       a = f;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      f = c[e >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = e;
      }
     }
     if (b >>> 0 < g >>> 0) aa(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) aa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) aa();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else aa();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 1512 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[303] = c[303] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[306] | 0) >>> 0) aa();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[306] | 0;
     if (o >>> 0 < b >>> 0) aa();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) aa(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) aa(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     C = d + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = d | 1;
     c[j + d >> 2] = d;
     a = c[304] | 0;
     if (a | 0) {
      f = c[307] | 0;
      b = a >>> 3;
      e = 1248 + (b << 1 << 2) | 0;
      a = c[302] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[302] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[304] = d;
     c[307] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[303] | 0;
  if (k) {
   d = 0 - q | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (q >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = q >>> (j + 7 | 0) & 1 | j << 1;
   }
   b = c[1512 + (j << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    w = 86;
   } else {
    f = d;
    a = 0;
    g = q << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - q | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (q | 0)) {
      a = h;
      b = h;
      w = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      w = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[1512 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = d;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - q | 0;
    e = s >>> 0 < d >>> 0;
    d = e ? s : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = d;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[304] | 0) - q | 0) >>> 0) {
    f = c[306] | 0;
    if (k >>> 0 < f >>> 0) aa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) aa();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) aa(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) aa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) aa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else aa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 1512 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[303] = c[303] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[306] | 0) >>> 0) aa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[306] | 0;
     if (t >>> 0 < b >>> 0) aa();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) aa(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) aa(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 1248 + (a << 1 << 2) | 0;
      b = c[302] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[302] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = j;
      c[v + 12 >> 2] = j;
      c[j + 8 >> 2] = v;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = h >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 1512 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[303] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[303] = a | b;
      c[e >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     f = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
       d = a;
       w = 148;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 145;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 145) if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[306] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else aa();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[304] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[307] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[307] = C;
   c[304] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[304] = 0;
   c[307] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[305] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[305] = A;
  C = c[308] | 0;
  B = C + q | 0;
  c[308] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[420] | 0)) {
  c[422] = 4096;
  c[421] = 4096;
  c[423] = -1;
  c[424] = -1;
  c[425] = 0;
  c[413] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[420] = v;
 }
 h = q + 48 | 0;
 g = c[422] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[412] | 0;
 if (a | 0) {
  u = c[410] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[413] & 4)) {
  a = c[308] | 0;
  c : do if (!a) w = 171; else {
   e = 1656;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     w = 171;
     break c;
    }
   }
   a = f - (c[305] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = ba(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = ba(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[421] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[410] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[412] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ba(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[422] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ba(b | 0) | 0) == (-1 | 0)) {
     ba(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    f = e;
    h = a;
    w = 191;
    break b;
   }
  } while (0);
  c[413] = c[413] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ba(k | 0) | 0;
  a = ba(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (q + 40 | 0) >>> 0) {
    f = b;
    h = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[410] | 0) + h | 0;
  c[410] = a;
  if (a >>> 0 > (c[411] | 0) >>> 0) c[411] = a;
  j = c[308] | 0;
  do if (!j) {
   C = c[306] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[306] = f;
   c[414] = f;
   c[415] = h;
   c[417] = 0;
   c[311] = c[420];
   c[310] = -1;
   a = 0;
   do {
    C = 1248 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[308] = B;
   c[305] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[309] = c[424];
  } else {
   b = 1656;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     w = 201;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((w | 0) == 201) if (!(c[b + 12 >> 2] & 8)) if (j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    C = j + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = j + C | 0;
    C = h - C + (c[305] | 0) | 0;
    c[308] = B;
    c[305] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[309] = c[424];
    break;
   }
   a = c[306] | 0;
   if (f >>> 0 < a >>> 0) {
    c[306] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 1656;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 1656;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    m = a + 4 | 0;
    c[m >> 2] = (c[m >> 2] | 0) + h;
    m = f + 8 | 0;
    m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    l = m + q | 0;
    g = a - m - q | 0;
    c[m + 4 >> 2] = q | 3;
    do if ((a | 0) == (j | 0)) {
     C = (c[305] | 0) + g | 0;
     c[305] = C;
     c[308] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[307] | 0)) {
      C = (c[304] | 0) + g | 0;
      c[304] = C;
      c[307] = l;
      c[l + 4 >> 2] = C | 1;
      c[l + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      j = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 1248 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) aa();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        aa();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[302] = c[302] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < k >>> 0) aa();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        aa();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        d = a + 16 | 0;
        e = d + 4 | 0;
        b = c[e >> 2] | 0;
        if (!b) {
         b = c[d >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         }
        } else d = e;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < k >>> 0) aa(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < k >>> 0) aa();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) aa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else aa();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 1512 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[303] = c[303] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[306] | 0) >>> 0) aa();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[306] | 0;
       if (A >>> 0 < e >>> 0) aa();
       c[A + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) aa(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + j | 0;
      g = j + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[l + 4 >> 2] = g | 1;
     c[l + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 1248 + (a << 1 << 2) | 0;
      b = c[302] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[302] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[306] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       aa();
      } while (0);
      c[B >> 2] = l;
      c[C + 12 >> 2] = l;
      c[l + 8 >> 2] = C;
      c[l + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) d = 0; else {
      if (g >>> 0 > 16777215) {
       d = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = g >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 1512 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[303] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[303] = a | b;
      c[e >> 2] = l;
      c[l + 24 >> 2] = e;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     }
     f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
       d = a;
       w = 279;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 276;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 276) if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[306] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = l;
       c[a >> 2] = l;
       c[l + 8 >> 2] = b;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else aa();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 1656;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= j >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > j >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = j + 16 | 0;
   d = d >>> 0 < g >>> 0 ? j : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = f + e | 0;
   e = h + -40 - e | 0;
   c[308] = C;
   c[305] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[309] = c[424];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[414];
   c[b + 4 >> 2] = c[415];
   c[b + 8 >> 2] = c[416];
   c[b + 12 >> 2] = c[417];
   c[414] = f;
   c[415] = h;
   c[417] = 0;
   c[416] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (j | 0)) {
    h = d - j | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[j + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 1248 + (a << 1 << 2) | 0;
     b = c[302] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[302] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = j;
     c[z + 12 >> 2] = j;
     c[j + 8 >> 2] = z;
     c[j + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 1512 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[303] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[303] = a | b;
     c[f >> 2] = j;
     c[j + 24 >> 2] = f;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    a = c[f >> 2] | 0;
    while (1) {
     if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
      d = a;
      w = 305;
      break;
     }
     b = a + 16 + (e >>> 31 << 2) | 0;
     d = c[b >> 2] | 0;
     if (!d) {
      w = 302;
      break;
     } else {
      e = e << 1;
      a = d;
     }
    }
    if ((w | 0) == 302) if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[306] | 0;
     if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = j;
      c[a >> 2] = j;
      c[j + 8 >> 2] = b;
      c[j + 12 >> 2] = d;
      c[j + 24 >> 2] = 0;
      break;
     } else aa();
    }
   }
  } while (0);
  a = c[305] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[305] = A;
   C = c[308] | 0;
   B = C + q | 0;
   c[308] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(wa() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Ha(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[306] | 0;
 if (d >>> 0 < h >>> 0) aa();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) aa();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) aa();
  if ((k | 0) == (c[307] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[304] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 1248 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) aa();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) aa();
   }
   if ((d | 0) == (b | 0)) {
    c[302] = c[302] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) aa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else aa();
   }
   c[b + 12 >> 2] = d;
   c[f >> 2] = b;
   q = k;
   g = j;
   break;
  }
  f = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   b = k + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    }
   } else b = d;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) aa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) aa();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) aa();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else aa();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 1512 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[303] = c[303] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[306] | 0) >>> 0) aa();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[306] | 0;
   if (i >>> 0 < d >>> 0) aa();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) aa(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[306] | 0) >>> 0) aa(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    g = j;
    break;
   }
  }
 } else {
  q = d;
  g = e;
 } while (0);
 if (q >>> 0 >= m >>> 0) aa();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) aa();
 if (!(b & 2)) {
  if ((m | 0) == (c[308] | 0)) {
   p = (c[305] | 0) + g | 0;
   c[305] = p;
   c[308] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[307] | 0)) return;
   c[307] = 0;
   c[304] = 0;
   return;
  }
  if ((m | 0) == (c[307] | 0)) {
   p = (c[304] | 0) + g | 0;
   c[304] = p;
   c[307] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 1248 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[306] | 0) >>> 0) aa();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) aa();
   }
   if ((d | 0) == (b | 0)) {
    c[302] = c[302] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[306] | 0) >>> 0) aa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else aa();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    b = m + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     }
    } else b = d;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[306] | 0) >>> 0) aa();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) aa();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else aa();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 1512 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[303] = c[303] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[306] | 0) >>> 0) aa();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[306] | 0;
    if (n >>> 0 < d >>> 0) aa();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) aa(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[306] | 0) >>> 0) aa(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[307] | 0)) {
   c[304] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 1248 + (a << 1 << 2) | 0;
  b = c[302] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[302] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = g >>> 8;
 if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = g >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 1512 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[303] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[303] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  a = c[e >> 2] | 0;
  while (1) {
   if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
    d = a;
    e = 130;
    break;
   }
   b = a + 16 + (f >>> 31 << 2) | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    e = 127;
    break;
   } else {
    f = f << 1;
    a = d;
   }
  }
  if ((e | 0) == 127) if (b >>> 0 < (c[306] | 0) >>> 0) aa(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[306] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else aa();
  }
 } while (0);
 q = (c[310] | 0) + -1 | 0;
 c[310] = q;
 if (!q) a = 1664; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[310] = -1;
 return;
}

function xa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[290] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = va(ha(146, n | 0) | 0) | 0;
  } else {
   $(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = va(ha(146, m | 0) | 0) | 0;
   Y(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 > g >>> 0) {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  } else if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g;
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Ia(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0, g = 0, i = 0.0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 b = La(c[k >> 2] | 0, d | 0, 63) | 0;
 d = d & 2147483647;
 do if (d >>> 0 > 1082532650) {
  f = +D(+a);
  h[k >> 3] = f;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0) {
   f = a;
   return +f;
  }
  if (a > 709.782712893384) {
   f = a * 8988465674311579538646525.0e283;
   return +f;
  } else {
   if (a < -708.3964185322641 & a < -745.1332191019411) a = 0.0; else {
    g = 8;
    break;
   }
   return +a;
  }
 } else {
  if (d >>> 0 > 1071001154) {
   if (d >>> 0 > 1072734897) {
    g = 8;
    break;
   }
   b = (b ^ 1) - b | 0;
   g = 10;
   break;
  }
  if (d >>> 0 > 1043333120) {
   f = a;
   e = a;
   b = 0;
   a = 0.0;
  } else {
   f = a + 1.0;
   return +f;
  }
 } while (0);
 if ((g | 0) == 8) {
  b = ~~(a * 1.4426950408889634 + +h[1024 + (b << 3) >> 3]);
  g = 10;
 }
 if ((g | 0) == 10) {
  f = +(b | 0);
  e = a - f * .6931471803691238;
  a = f * 1.9082149292705877e-10;
  f = e - a;
 }
 i = f * f;
 i = f - i * (i * (i * (i * (i * 4.1381367970572385e-08 + -1.6533902205465252e-06) + 6.613756321437934e-05) + -2.7777777777015593e-03) + .16666666666666602);
 a = e + (f * i / (2.0 - i) - a) + 1.0;
 if (!b) {
  i = a;
  return +i;
 }
 i = +Da(a, b);
 return +i;
}

function Da(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = Ma(d + 1023 | 0, 0, 52) | 0;
 b = B;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function Ea(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[288] | 0)) b = 0; else b = Ea(c[288] | 0) | 0;
  Z(1188);
  a = c[296] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Ca(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = Fa(a) | 0 | b;
   if (d | 0) za(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  ga(1188);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = Fa(a) | 0;
   break;
  }
  d = (Ca(a) | 0) == 0;
  b = Fa(a) | 0;
  if (!d) za(a);
 } while (0);
 return b | 0;
}

function Fa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  ka[c[a + 36 >> 2] & 3](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  d = a + 8 | 0;
  e = c[d >> 2] | 0;
  if (b >>> 0 < e >>> 0) ka[c[a + 40 >> 2] & 3](a, b - e | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function Na(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ea(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Ja() {}
function Ka(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Aa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((va(ca(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Ba(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (fa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = xa(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Ma(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  B = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 B = a << c - 32;
 return 0;
}

function La(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  B = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 B = 0;
 return b >>> c - 32 | 0;
}

function ua(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = va(_(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Qa(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ka[a & 3](b | 0, c | 0, d | 0) | 0;
}

function va(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(wa() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function wa() {
 var a = 0;
 if (!(c[290] | 0)) a = 1204; else a = c[(Oa() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function ma(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Ta(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 T(1);
 return 0;
}

function qa(a, b) {
 a = a | 0;
 b = b | 0;
 if (!m) {
  m = a;
  n = b;
 }
}

function Pa(a, b) {
 a = a | 0;
 b = b | 0;
 return ja[a & 1](b | 0) | 0;
}

function ya(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) za(a);
 return;
}

function Ra(a, b) {
 a = a | 0;
 b = b | 0;
 la[a & 1](b | 0);
}

function pa(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function ta(a) {
 a = +a;
 return +(+Ia(a) * 2.0);
}

function Sa(a) {
 a = a | 0;
 T(0);
 return 0;
}

function Ca(a) {
 a = a | 0;
 return 0;
}

function za(a) {
 a = a | 0;
 return;
}

function ra(a) {
 a = a | 0;
 B = a;
}

function oa(a) {
 a = a | 0;
 i = a;
}

function Ua(a) {
 a = a | 0;
 T(2);
}

function sa() {
 return B | 0;
}

function na() {
 return i | 0;
}

function Oa() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var ja = [ Sa, ua ];
 var ka = [ Ta, Ba, Aa, xa ];
 var la = [ Ua, ya ];
 return {
  _free: Ha,
  _pthread_self: Oa,
  _memset: Ka,
  _malloc: Ga,
  _memcpy: Na,
  _bitshift64Lshr: La,
  _fflush: Ea,
  _bitshift64Shl: Ma,
  ___errno_location: wa,
  _doubleExp: ta,
  runPostSets: Ja,
  stackAlloc: ma,
  stackSave: na,
  stackRestore: oa,
  establishStackSpace: pa,
  setThrew: qa,
  setTempRet0: ra,
  getTempRet0: sa,
  dynCall_ii: Pa,
  dynCall_iiii: Qa,
  dynCall_vi: Ra
 };
})


;