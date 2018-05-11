/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {
    'use strict';

    function n(e) { throw e; }
    var p = void 0,
        aa = this;

    function r(e, c) {
        var d = e.split("."),
            b = aa;
        !(d[0] in b) && b.execScript && b.execScript("var " + d[0]);
        for (var a; d.length && (a = d.shift());) !d.length && c !== p ? b[a] = c : b = b[a] ? b[a] : b[a] = {}
    };
    var u = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
    new(u ? Uint8Array : Array)(256);
    var v;
    for (v = 0; 256 > v; ++v)
        for (var w = v, ba = 7, w = w >>> 1; w; w >>>= 1) --ba;

    function x(e, c, d) {
        var b, a = "number" === typeof c ? c : c = 0,
            f = "number" === typeof d ? d : e.length;
        b = -1;
        for (a = f & 7; a--; ++c) b = b >>> 8 ^ y[(b ^ e[c]) & 255];
        for (a = f >> 3; a--; c += 8) b = b >>> 8 ^ y[(b ^ e[c]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 1]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 2]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 3]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 4]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 5]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 6]) & 255], b = b >>> 8 ^ y[(b ^ e[c + 7]) & 255];
        return (b ^ 4294967295) >>> 0
    }
    var z = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759,
            2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977,
            2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
            2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956,
            3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
            936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
        ],
        y = u ? new Uint32Array(z) : z;

    function A() {}
    A.prototype.getName = function() { return this.name };
    A.prototype.getData = function() { return this.data };
    A.prototype.G = function() { return this.H };
    r("Zlib.GunzipMember", A);
    r("Zlib.GunzipMember.prototype.getName", A.prototype.getName);
    r("Zlib.GunzipMember.prototype.getData", A.prototype.getData);
    r("Zlib.GunzipMember.prototype.getMtime", A.prototype.G);

    function C(e) {
        var c = e.length,
            d = 0,
            b = Number.POSITIVE_INFINITY,
            a, f, g, k, m, q, t, h, l;
        for (h = 0; h < c; ++h) e[h] > d && (d = e[h]), e[h] < b && (b = e[h]);
        a = 1 << d;
        f = new(u ? Uint32Array : Array)(a);
        g = 1;
        k = 0;
        for (m = 2; g <= d;) {
            for (h = 0; h < c; ++h)
                if (e[h] === g) {
                    q = 0;
                    t = k;
                    for (l = 0; l < g; ++l) q = q << 1 | t & 1, t >>= 1;
                    for (l = q; l < a; l += m) f[l] = g << 16 | h;
                    ++k
                }++g;
            k <<= 1;
            m <<= 1
        }
        return [f, d, b]
    };
    var D = [],
        E;
    for (E = 0; 288 > E; E++) switch (!0) {
        case 143 >= E:
            D.push([E + 48, 8]);
            break;
        case 255 >= E:
            D.push([E - 144 + 400, 9]);
            break;
        case 279 >= E:
            D.push([E - 256 + 0, 7]);
            break;
        case 287 >= E:
            D.push([E - 280 + 192, 8]);
            break;
        default:
            n("invalid literal: " + E)
    }
    var ca = function() {
        function e(a) {
            switch (!0) {
                case 3 === a:
                    return [257, a - 3, 0];
                case 4 === a:
                    return [258, a - 4, 0];
                case 5 === a:
                    return [259, a - 5, 0];
                case 6 === a:
                    return [260, a - 6, 0];
                case 7 === a:
                    return [261, a - 7, 0];
                case 8 === a:
                    return [262, a - 8, 0];
                case 9 === a:
                    return [263, a - 9, 0];
                case 10 === a:
                    return [264, a - 10, 0];
                case 12 >= a:
                    return [265, a - 11, 1];
                case 14 >= a:
                    return [266, a - 13, 1];
                case 16 >= a:
                    return [267, a - 15, 1];
                case 18 >= a:
                    return [268, a - 17, 1];
                case 22 >= a:
                    return [269, a - 19, 2];
                case 26 >= a:
                    return [270, a - 23, 2];
                case 30 >= a:
                    return [271, a - 27, 2];
                case 34 >= a:
                    return [272,
                        a - 31, 2
                    ];
                case 42 >= a:
                    return [273, a - 35, 3];
                case 50 >= a:
                    return [274, a - 43, 3];
                case 58 >= a:
                    return [275, a - 51, 3];
                case 66 >= a:
                    return [276, a - 59, 3];
                case 82 >= a:
                    return [277, a - 67, 4];
                case 98 >= a:
                    return [278, a - 83, 4];
                case 114 >= a:
                    return [279, a - 99, 4];
                case 130 >= a:
                    return [280, a - 115, 4];
                case 162 >= a:
                    return [281, a - 131, 5];
                case 194 >= a:
                    return [282, a - 163, 5];
                case 226 >= a:
                    return [283, a - 195, 5];
                case 257 >= a:
                    return [284, a - 227, 5];
                case 258 === a:
                    return [285, a - 258, 0];
                default:
                    n("invalid length: " + a)
            }
        }
        var c = [],
            d, b;
        for (d = 3; 258 >= d; d++) b = e(d), c[d] = b[2] << 24 | b[1] <<
            16 | b[0];
        return c
    }();
    u && new Uint32Array(ca);

    function G(e, c) {
        this.i = [];
        this.j = 32768;
        this.d = this.f = this.c = this.n = 0;
        this.input = u ? new Uint8Array(e) : e;
        this.o = !1;
        this.k = H;
        this.w = !1;
        if (c || !(c = {})) c.index && (this.c = c.index), c.bufferSize && (this.j = c.bufferSize), c.bufferType && (this.k = c.bufferType), c.resize && (this.w = c.resize);
        switch (this.k) {
            case I:
                this.a = 32768;
                this.b = new(u ? Uint8Array : Array)(32768 + this.j + 258);
                break;
            case H:
                this.a = 0;
                this.b = new(u ? Uint8Array : Array)(this.j);
                this.e = this.D;
                this.q = this.A;
                this.l = this.C;
                break;
            default:
                n(Error("invalid inflate mode"))
        }
    }
    var I = 0,
        H = 1;
    G.prototype.g = function() {
        for (; !this.o;) {
            var e = J(this, 3);
            e & 1 && (this.o = !0);
            e >>>= 1;
            switch (e) {
                case 0:
                    var c = this.input,
                        d = this.c,
                        b = this.b,
                        a = this.a,
                        f = p,
                        g = p,
                        k = p,
                        m = b.length,
                        q = p;
                    this.d = this.f = 0;
                    f = c[d++];
                    f === p && n(Error("invalid uncompressed block header: LEN (first byte)"));
                    g = f;
                    f = c[d++];
                    f === p && n(Error("invalid uncompressed block header: LEN (second byte)"));
                    g |= f << 8;
                    f = c[d++];
                    f === p && n(Error("invalid uncompressed block header: NLEN (first byte)"));
                    k = f;
                    f = c[d++];
                    f === p && n(Error("invalid uncompressed block header: NLEN (second byte)"));
                    k |=
                        f << 8;
                    g === ~k && n(Error("invalid uncompressed block header: length verify"));
                    d + g > c.length && n(Error("input buffer is broken"));
                    switch (this.k) {
                        case I:
                            for (; a + g > b.length;) {
                                q = m - a;
                                g -= q;
                                if (u) b.set(c.subarray(d, d + q), a), a += q, d += q;
                                else
                                    for (; q--;) b[a++] = c[d++];
                                this.a = a;
                                b = this.e();
                                a = this.a
                            }
                            break;
                        case H:
                            for (; a + g > b.length;) b = this.e({ t: 2 });
                            break;
                        default:
                            n(Error("invalid inflate mode"))
                    }
                    if (u) b.set(c.subarray(d, d + g), a), a += g, d += g;
                    else
                        for (; g--;) b[a++] = c[d++];
                    this.c = d;
                    this.a = a;
                    this.b = b;
                    break;
                case 1:
                    this.l(da, ea);
                    break;
                case 2:
                    fa(this);
                    break;
                default:
                    n(Error("unknown BTYPE: " + e))
            }
        }
        return this.q()
    };
    var K = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        L = u ? new Uint16Array(K) : K,
        N = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        O = u ? new Uint16Array(N) : N,
        P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        Q = u ? new Uint8Array(P) : P,
        T = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        ga = u ? new Uint16Array(T) : T,
        ha = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
            13, 13
        ],
        U = u ? new Uint8Array(ha) : ha,
        V = new(u ? Uint8Array : Array)(288),
        W, ia;
    W = 0;
    for (ia = V.length; W < ia; ++W) V[W] = 143 >= W ? 8 : 255 >= W ? 9 : 279 >= W ? 7 : 8;
    var da = C(V),
        X = new(u ? Uint8Array : Array)(30),
        Y, ja;
    Y = 0;
    for (ja = X.length; Y < ja; ++Y) X[Y] = 5;
    var ea = C(X);

    function J(e, c) {
        for (var d = e.f, b = e.d, a = e.input, f = e.c, g; b < c;) g = a[f++], g === p && n(Error("input buffer is broken")), d |= g << b, b += 8;
        g = d & (1 << c) - 1;
        e.f = d >>> c;
        e.d = b - c;
        e.c = f;
        return g
    }

    function Z(e, c) {
        for (var d = e.f, b = e.d, a = e.input, f = e.c, g = c[0], k = c[1], m, q, t; b < k;) {
            m = a[f++];
            if (m === p) break;
            d |= m << b;
            b += 8
        }
        q = g[d & (1 << k) - 1];
        t = q >>> 16;
        e.f = d >> t;
        e.d = b - t;
        e.c = f;
        return q & 65535
    }

    function fa(e) {
        function c(a, c, b) {
            var d, e, f, g;
            for (g = 0; g < a;) switch (d = Z(this, c), d) {
                case 16:
                    for (f = 3 + J(this, 2); f--;) b[g++] = e;
                    break;
                case 17:
                    for (f = 3 + J(this, 3); f--;) b[g++] = 0;
                    e = 0;
                    break;
                case 18:
                    for (f = 11 + J(this, 7); f--;) b[g++] = 0;
                    e = 0;
                    break;
                default:
                    e = b[g++] = d
            }
            return b
        }
        var d = J(e, 5) + 257,
            b = J(e, 5) + 1,
            a = J(e, 4) + 4,
            f = new(u ? Uint8Array : Array)(L.length),
            g, k, m, q;
        for (q = 0; q < a; ++q) f[L[q]] = J(e, 3);
        g = C(f);
        k = new(u ? Uint8Array : Array)(d);
        m = new(u ? Uint8Array : Array)(b);
        e.l(C(c.call(e, d, g, k)), C(c.call(e, b, g, m)))
    }
    G.prototype.l = function(e, c) {
        var d = this.b,
            b = this.a;
        this.r = e;
        for (var a = d.length - 258, f, g, k, m; 256 !== (f = Z(this, e));)
            if (256 > f) b >= a && (this.a = b, d = this.e(), b = this.a), d[b++] = f;
            else {
                g = f - 257;
                m = O[g];
                0 < Q[g] && (m += J(this, Q[g]));
                f = Z(this, c);
                k = ga[f];
                0 < U[f] && (k += J(this, U[f]));
                b >= a && (this.a = b, d = this.e(), b = this.a);
                for (; m--;) d[b] = d[b++ - k]
            }
        for (; 8 <= this.d;) this.d -= 8, this.c--;
        this.a = b
    };
    G.prototype.C = function(e, c) {
        var d = this.b,
            b = this.a;
        this.r = e;
        for (var a = d.length, f, g, k, m; 256 !== (f = Z(this, e));)
            if (256 > f) b >= a && (d = this.e(), a = d.length), d[b++] = f;
            else {
                g = f - 257;
                m = O[g];
                0 < Q[g] && (m += J(this, Q[g]));
                f = Z(this, c);
                k = ga[f];
                0 < U[f] && (k += J(this, U[f]));
                b + m > a && (d = this.e(), a = d.length);
                for (; m--;) d[b] = d[b++ - k]
            }
        for (; 8 <= this.d;) this.d -= 8, this.c--;
        this.a = b
    };
    G.prototype.e = function() {
        var e = new(u ? Uint8Array : Array)(this.a - 32768),
            c = this.a - 32768,
            d, b, a = this.b;
        if (u) e.set(a.subarray(32768, e.length));
        else { d = 0; for (b = e.length; d < b; ++d) e[d] = a[d + 32768] }
        this.i.push(e);
        this.n += e.length;
        if (u) a.set(a.subarray(c, c + 32768));
        else
            for (d = 0; 32768 > d; ++d) a[d] = a[c + d];
        this.a = 32768;
        return a
    };
    G.prototype.D = function(e) {
        var c, d = this.input.length / this.c + 1 | 0,
            b, a, f, g = this.input,
            k = this.b;
        e && ("number" === typeof e.t && (d = e.t), "number" === typeof e.z && (d += e.z));
        2 > d ? (b = (g.length - this.c) / this.r[2], f = 258 * (b / 2) | 0, a = f < k.length ? k.length + f : k.length << 1) : a = k.length * d;
        u ? (c = new Uint8Array(a), c.set(k)) : c = k;
        return this.b = c
    };
    G.prototype.q = function() {
        var e = 0,
            c = this.b,
            d = this.i,
            b, a = new(u ? Uint8Array : Array)(this.n + (this.a - 32768)),
            f, g, k, m;
        if (0 === d.length) return u ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
        f = 0;
        for (g = d.length; f < g; ++f) {
            b = d[f];
            k = 0;
            for (m = b.length; k < m; ++k) a[e++] = b[k]
        }
        f = 32768;
        for (g = this.a; f < g; ++f) a[e++] = c[f];
        this.i = [];
        return this.buffer = a
    };
    G.prototype.A = function() {
        var e, c = this.a;
        u ? this.w ? (e = new Uint8Array(c), e.set(this.b.subarray(0, c))) : e = this.b.subarray(0, c) : (this.b.length > c && (this.b.length = c), e = this.b);
        return this.buffer = e
    };

    function $(e) {
        this.input = e;
        this.c = 0;
        this.m = [];
        this.s = !1
    }
    $.prototype.F = function() { this.s || this.g(); return this.m.slice() };
    $.prototype.g = function() {
        for (var e = this.input.length; this.c < e;) {
            var c = new A,
                d = p,
                b = p,
                a = p,
                f = p,
                g = p,
                k = p,
                m = p,
                q = p,
                t = p,
                h = this.input,
                l = this.c;
            c.u = h[l++];
            c.v = h[l++];
            (31 !== c.u || 139 !== c.v) && n(Error("invalid file signature:" + c.u + "," + c.v));
            c.p = h[l++];
            switch (c.p) {
                case 8:
                    break;
                default:
                    n(Error("unknown compression method: " + c.p))
            }
            c.h = h[l++];
            q = h[l++] | h[l++] << 8 | h[l++] << 16 | h[l++] << 24;
            c.H = new Date(1E3 * q);
            c.N = h[l++];
            c.M = h[l++];
            0 < (c.h & 4) && (c.I = h[l++] | h[l++] << 8, l += c.I);
            if (0 < (c.h & 8)) {
                m = [];
                for (k = 0; 0 < (g = h[l++]);) m[k++] = String.fromCharCode(g);
                c.name = m.join("")
            }
            if (0 < (c.h & 16)) {
                m = [];
                for (k = 0; 0 < (g = h[l++]);) m[k++] = String.fromCharCode(g);
                c.J = m.join("")
            }
            0 < (c.h & 2) && (c.B = x(h, 0, l) & 65535, c.B !== (h[l++] | h[l++] << 8) && n(Error("invalid header crc16")));
            d = h[h.length - 4] | h[h.length - 3] << 8 | h[h.length - 2] << 16 | h[h.length - 1] << 24;
            h.length - l - 4 - 4 < 512 * d && (f = d);
            b = new G(h, { index: l, bufferSize: f });
            c.data = a = b.g();
            l = b.c;
            c.K = t = (h[l++] | h[l++] << 8 | h[l++] << 16 | h[l++] << 24) >>> 0;
            x(a, p, p) !== t && n(Error("invalid CRC-32 checksum: 0x" + x(a, p, p).toString(16) + " / 0x" + t.toString(16)));
            c.L =
                d = (h[l++] | h[l++] << 8 | h[l++] << 16 | h[l++] << 24) >>> 0;
            (a.length & 4294967295) !== d && n(Error("invalid input size: " + (a.length & 4294967295) + " / " + d));
            this.m.push(c);
            this.c = l
        }
        this.s = !0;
        var F = this.m,
            s, M, R = 0,
            S = 0,
            B;
        s = 0;
        for (M = F.length; s < M; ++s) S += F[s].data.length;
        if (u) { B = new Uint8Array(S); for (s = 0; s < M; ++s) B.set(F[s].data, R), R += F[s].data.length } else {
            B = [];
            for (s = 0; s < M; ++s) B[s] = F[s].data;
            B = Array.prototype.concat.apply([], B)
        }
        return B
    };
    r("Zlib.Gunzip", $);
    r("Zlib.Gunzip.prototype.decompress", $.prototype.g);
    r("Zlib.Gunzip.prototype.getMembers", $.prototype.F);
}).call(this);

var binaryStream = function () {
    //We will use these shared memory arrays to
    //convert from bytes to the desired data type.
    var convBuf = new ArrayBuffer(8);
    var convUint8 = new Uint8Array(convBuf);
    var convUint16 = new Uint16Array(convBuf);
    var convInt32 = new Int32Array(convBuf);
    var convUint32 = new Uint32Array(convBuf);
    var convFloat32 = new Float32Array(convBuf);
    var convFloat64 = new Float64Array(convBuf);


    /** @constructor */
    function InputStream(buf) {
        this.buffer = buf;
        this.offset = 0;
        this.byteLength = buf.length;
    }


    InputStream.prototype.seek = function(off) {
        this.offset = off;
    };

    InputStream.prototype.getBytes = function(len) {
        var ret = new Uint8Array(this.buffer.buffer, this.offset, len);
        this.offset += len;
        return ret;
    };

    InputStream.prototype.getVarints = function() {
        var b;
        var value = 0;
        var shiftBy = 0;
        do {
            b = this.buffer[this.offset++];
            value |= (b & 0x7f) << shiftBy;
            shiftBy += 7;
        } while (b & 0x80);
        return value;
    };

    InputStream.prototype.getUint8 = function() {
        return this.buffer[this.offset++];
    };

    InputStream.prototype.getUint16 = function() {
        convUint8[0] = this.buffer[this.offset++];
        convUint8[1] = this.buffer[this.offset++];
        return convUint16[0];
    };

    InputStream.prototype.getInt16 = function() {
        var tmp = this.getUint16();
        //make negative integer if the ushort is negative
        if (tmp > 0x7fff)
            tmp = tmp | 0xffff0000;
        return tmp;
    };

    InputStream.prototype.getInt32 = function() {
        var src = this.buffer;
        var dst = convUint8;
        var off = this.offset;
        dst[0] = src[off];
        dst[1] = src[off + 1];
        dst[2] = src[off + 2];
        dst[3] = src[off + 3];
        this.offset += 4;
        return convInt32[0];
    };

    InputStream.prototype.getUint32 = function() {
        var src = this.buffer;
        var dst = convUint8;
        var off = this.offset;
        dst[0] = src[off];
        dst[1] = src[off + 1];
        dst[2] = src[off + 2];
        dst[3] = src[off + 3];
        this.offset += 4;
        return convUint32[0];
    };

    InputStream.prototype.getFloat32 = function() {
        var src = this.buffer;
        var dst = convUint8;
        var off = this.offset;
        dst[0] = src[off];
        dst[1] = src[off + 1];
        dst[2] = src[off + 2];
        dst[3] = src[off + 3];
        this.offset += 4;
        return convFloat32[0];
    };

    //Specialized copy which copies 4 byte integers into 2-byte target.
    //Used for downcasting OCTM int32 index buffers to int16 index buffers,
    //in cases we know we don't need more (LMVTK guarantees 2 byte indices).
    InputStream.prototype.getIndicesArray = function(buffer, offset, numItems) {

        var src = this.buffer;
        var dst = new Uint8Array(buffer, offset, numItems * 2);
        var off = this.offset;

        for (var i = 0, iEnd = numItems * 2; i < iEnd; i += 2) {
            dst[i] = src[off];
            dst[i + 1] = src[off + 1];
            off += 4;
        }

        this.offset = off;
    };

    InputStream.prototype.getVector3Array = function(arr, numItems, startOffset, stride) {
        var src = this.buffer;
        var off = this.offset;

        //We cannot use Float32Array copying here because the
        //source stream is out of alignment
        var dst = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);

        if (stride === 3 && startOffset === 0) {
            var len = numItems * 12;
            dst.set(src.subarray(off, off + len));
            this.offset += len;
        } else {

            stride *= 4;
            var aoff = startOffset * 4;
            for (var i = 0; i < numItems; i++) {
                for (var j = 0; j < 12; j++) {
                    dst[aoff + j] = src[off++];
                }
                aoff += stride;
            }

            this.offset = off;
        }
    };

    InputStream.prototype.getVector2Array = function(arr, numItems, startOffset, stride) {
        var src = this.buffer;
        var dst = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
        var off = this.offset;

        stride *= 4;
        var aoff = startOffset * 4;
        for (var i = 0; i < numItems; i++) {
            for (var j = 0; j < 8; j++) {
                dst[aoff + j] = src[off++];
            }
            aoff += stride;
        }

        this.offset = off;
    };

    InputStream.prototype.getVector4 = function(arr, offset) {
        var src = this.buffer;
        var dst = convUint8;
        var off = this.offset;
        var conv = convFloat32;

        for (var j = 0; j < 4; j++) {
            dst[0] = src[off];
            dst[1] = src[off + 1];
            dst[2] = src[off + 2];
            dst[3] = src[off + 3];
            arr[offset + j] = conv[0];
            off += 4;
        }

        this.offset = off;
    };

    InputStream.prototype.getFloat64 = function() {
        var src = this.buffer;
        var dst = convUint8;
        var off = this.offset;
        for (var i = 0; i < 8; i++)
            dst[i] = src[off + i];
        this.offset += 8;
        return convFloat64[0];
    };



    InputStream.prototype.getString = function(len) {
        var res = this.utf8ArrayToString(this.buffer, this.offset, len);
        this.offset += len;
        return res;
    };

    function utf8BlobToStr(array, start, length) {
        var out, i, len, c;
        var char2, char3;

        out = "";
        len = length;
        i = 0;
        while (i < len) {
            c = array[start + i++];
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12:
                case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[start + i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[start + i++];
                    char3 = array[start + i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }

        return out;
    }


    var USE_MANUAL_UTF8 = true;
    InputStream.prototype.utf8ArrayToString = function (array, start, length) {
        if (start === undefined)
            start = 0;
        if (length === undefined)
            length = array.length;

        if (USE_MANUAL_UTF8) {
            return utf8BlobToStr(array, start, length);
        } else {
            var encodedString = "";
            for (var i = start, iEnd = start + length; i < iEnd; i++)
                encodedString += String.fromCharCode(array[i]);

            return decodeURIComponent(escape(encodedString));
        }
    }

    InputStream.prototype.reset = function(buf) {
        this.buffer = buf;
        this.offset = 0;
        this.byteLength = buf.length;
    };

    this.InputStream = InputStream;

    // this.prototype.InputStream = InputStream;

    var warnedGzip = false;

    /** @constructor */
    function PackFileReader(data) {
        var stream = this.stream = new binaryStream.InputStream(data);

        var len = stream.getInt32();
        this.type = stream.getString(len);
        this.version = stream.getInt32();

        this.types = null;
        this.entryOffsets = [];

        //read the table of contents
        {
            // Jump to file footer.
            stream.seek(stream.byteLength - 8);

            // Jump to toc.
            var tocOffset = stream.getUint32();
            this.typesOffset = stream.getUint32();

            // Populate type sets.
            stream.seek(this.typesOffset);
            var typesCount = this.readU32V();
            this.types = [];
            for (var i = 0; i < typesCount; ++i)
                this.types.push({
                    "entryClass": this.readString(),
                    "entryType": this.readString(),
                    "version": this.readU32V()
                });

            // Populate data offset list.
            stream.seek(tocOffset);
            var entryCount = this.readU32V();
            var dso = this.entryOffsets;
            for (var i = 0; i < entryCount; ++i)
                dso.push(stream.getUint32());

            // Restore sanity of the world.
            stream.seek(0);
        }
    };

    PackFileReader.prototype.readVarint = function() {
        var b;
        var value = 0;
        var shiftBy = 0;
        do {
            b = this.stream.getUint8();
            value |= (b & 0x7f) << shiftBy;
            shiftBy += 7;
        } while (b & 0x80);
        return value;
    };
    PackFileReader.prototype.readU32V = PackFileReader.prototype.readVarint;

    PackFileReader.prototype.readU16 = function() {
        return this.stream.getUint16();
    };

    PackFileReader.prototype.readU8 = function() {
        return this.stream.getUint8();
    };

    PackFileReader.prototype.readString = function() {
        return this.stream.getString(this.readU32V());
    };

    PackFileReader.prototype.readVector3f = function() {
        var s = this.stream;
        return { x: s.getFloat32(), y: s.getFloat32(), z: s.getFloat32() };
    };

    PackFileReader.prototype.readVector3d = (function() {

        var t = { x: 0, y: 0, z: 0 };

        return function() {
            var s = this.stream;
            t.x = s.getFloat64();
            t.y = s.getFloat64();
            t.z = s.getFloat64();

            return t;
        };
    })();

    PackFileReader.prototype.readQuaternionf = (function() {

        var q = { x: 0, y: 0, z: 0, w: 0 };

        return function() {
            var s = this.stream;
            q.x = s.getFloat32();
            q.y = s.getFloat32();
            q.z = s.getFloat32();
            q.w = s.getFloat32();

            return q;
        };

    })();



    PackFileReader.prototype.getEntryCounts = function() {
        return this.entryOffsets.length;
    };

    PackFileReader.prototype.seekToEntry = function(entryIndex) {
        var count = this.getEntryCounts();
        if (entryIndex >= count)
            return null;

        // Read the type index and populate the entry data
        this.stream.seek(this.entryOffsets[entryIndex]);
        var typeIndex = this.stream.getUint32();
        if (typeIndex >= this.types.length)
            return null;

        return this.types[typeIndex];
    };


    PackFileReader.prototype.readPathID = function() {
        var s = this.stream;

        //Construct a /-delimited string as the path to a node
        //TODO: in case we need a split representation (e.g. to follow paths), then
        //an array of numbers might be better to return from here.
        if (this.version < 2) {
            var pathLength = s.getUint16();
            if (!pathLength)
                return null;

            //The first number in a path ID is always zero (root)
            //so we skip adding it to the path string here.
            //Remove this section if that is not the case in the future.
            s.getUint16();
            if (pathLength == 1)
                return "";

            var path = s.getUint16();
            for (var i = 2; i < pathLength; ++i) {
                path += "/" + s.getUint16();
            }
        } else {
            var pathLength = this.readU32V();
            if (!pathLength)
                return null;

            //The first number in a path ID is always zero (root)
            //so we skip adding it to the path string here.
            //Remove this section if that is not the case in the future.
            this.readU32V();
            if (pathLength == 1)
                return "";

            var path = this.readU32V();
            for (var i = 2; i < pathLength; ++i) {
                path += "/" + this.readU32V();
            }
        }
        return path;
    };

    this.PackFileReader = PackFileReader;
}


// (function() {
//
//     "use strict";
//
//     var binaryStream = new Object();
//
//     binaryStream.InputStream = InputStream;
//
// })();




/**
 * @author mrdoob / http://mrdoob.com/
 */

var loading = {};

function FileLoader(manager) {

    this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

}

Object.assign(FileLoader.prototype, {

    load: function(url, onLoad, onProgress, onError) {

        if (url === undefined) url = '';

        if (this.path !== undefined) url = this.path + url;

        url = this.manager.resolveURL(url);

        var scope = this;

        var cached = THREE.Cache.get(url);

        if (cached !== undefined) {

            scope.manager.itemStart(url);

            setTimeout(function() {

                if (onLoad) onLoad(cached);

                scope.manager.itemEnd(url);

            }, 0);

            return cached;

        }

        // Check if request is duplicate

        if (loading[url] !== undefined) {

            loading[url].push({

                onLoad: onLoad,
                onProgress: onProgress,
                onError: onError

            });

            return;

        }

        // Check for data: URI
        var dataUriRegex = /^data:(.*?)(;base64)?,(.*)$/;
        var dataUriRegexResult = url.match(dataUriRegex);

        // Safari can not handle Data URIs through XMLHttpRequest so process manually
        if (dataUriRegexResult) {

            var mimeType = dataUriRegexResult[1];
            var isBase64 = !!dataUriRegexResult[2];
            var data = dataUriRegexResult[3];

            data = window.decodeURIComponent(data);

            if (isBase64) data = window.atob(data);

            try {

                var response;
                var responseType = (this.responseType || '').toLowerCase();

                switch (responseType) {

                    case 'arraybuffer':
                    case 'blob':

                        var view = new Uint8Array(data.length);

                        for (var i = 0; i < data.length; i++) {

                            view[i] = data.charCodeAt(i);

                        }

                        if (responseType === 'blob') {

                            response = new Blob([view.buffer], { type: mimeType });

                        } else {

                            response = view.buffer;

                        }

                        break;

                    case 'document':

                        var parser = new DOMParser();
                        response = parser.parseFromString(data, mimeType);

                        break;

                    case 'json':

                        response = JSON.parse(data);

                        break;

                    default: // 'text' or other

                        response = data;

                        break;

                }

                // Wait for next browser tick like standard XMLHttpRequest event dispatching does
                window.setTimeout(function() {

                    if (onLoad) onLoad(response);

                    scope.manager.itemEnd(url);

                }, 0);

            } catch (error) {

                // Wait for next browser tick like standard XMLHttpRequest event dispatching does
                window.setTimeout(function() {

                    if (onError) onError(error);

                    scope.manager.itemEnd(url);
                    scope.manager.itemError(url);

                }, 0);

            }

        } else {

            // Initialise array for duplicate requests

            loading[url] = [];

            loading[url].push({

                onLoad: onLoad,
                onProgress: onProgress,
                onError: onError

            });

            var request = new XMLHttpRequest();

            request.open('GET', url, true);
            request.responseType = "arraybuffer";

            request.addEventListener('load', function(event) {

                var response = event.target.response;

                THREE.Cache.add(url, response);

                var callbacks = loading[url];

                delete loading[url];

                if (this.status === 200) {

                    for (var i = 0, il = callbacks.length; i < il; i++) {

                        var callback = callbacks[i];
                        if (callback.onLoad) callback.onLoad(response);

                    }

                    scope.manager.itemEnd(url);

                } else if (this.status === 0) {

                    // Some browsers return HTTP Status 0 when using non-http protocol
                    // e.g. 'file://' or 'data://'. Handle as success.

                    console.warn('THREE.FileLoader: HTTP Status 0 received.');

                    for (var i = 0, il = callbacks.length; i < il; i++) {

                        var callback = callbacks[i];
                        if (callback.onLoad) callback.onLoad(response);

                    }

                    scope.manager.itemEnd(url);

                } else {

                    for (var i = 0, il = callbacks.length; i < il; i++) {

                        var callback = callbacks[i];
                        if (callback.onError) callback.onError(event);

                    }

                    scope.manager.itemEnd(url);
                    scope.manager.itemError(url);

                }

            }, false);

            request.addEventListener('progress', function(event) {

                var callbacks = loading[url];

                for (var i = 0, il = callbacks.length; i < il; i++) {

                    var callback = callbacks[i];
                    if (callback.onProgress) callback.onProgress(event);

                }

            }, false);

            request.addEventListener('error', function(event) {

                var callbacks = loading[url];

                delete loading[url];

                for (var i = 0, il = callbacks.length; i < il; i++) {

                    var callback = callbacks[i];
                    if (callback.onError) callback.onError(event);

                }

                scope.manager.itemEnd(url);
                scope.manager.itemError(url);

            }, false);

            if (this.responseType !== undefined) request.responseType = this.responseType;
            if (this.withCredentials !== undefined) request.withCredentials = this.withCredentials;

            if (request.overrideMimeType) request.overrideMimeType(this.mimeType !== undefined ? this.mimeType : 'text/plain');

            for (var header in this.requestHeader) {

                request.setRequestHeader(header, this.requestHeader[header]);

            }

            request.send(null);

        }

        scope.manager.itemStart(url);

        return request;

    },

    setPath: function(value) {

        this.path = value;
        return this;

    },

    setResponseType: function(value) {

        this.responseType = value;
        return this;

    },

    setWithCredentials: function(value) {

        this.withCredentials = value;
        return this;

    },

    setMimeType: function(value) {

        this.mimeType = value;
        return this;

    },

    setRequestHeader: function(value) {

        this.requestHeader = value;
        return this;

    }

});

var ProcessBinaryToJson = function (data) {
    "use strict";

    var meshEdge = function (binaryStream,meshType,vertices) {
        var geometry = new Object();
        var data = new Object();
        var attributes = new Object();
        var position = new Object();
        var index = new Object();

        stringCount = binaryStream.getBytes(1);
        geometry.type = binaryStream.getString(stringCount[0]);
        var stringCount = binaryStream.getBytes(1);
        geometry.uuid = binaryStream.getString(stringCount[0]);

        //attribute of Mesh
        stringCount = binaryStream.getBytes(1);
        var type = binaryStream.getString(stringCount[0]);
        if(type !== "data")
            return false;

        //line Count
        var lineCount = binaryStream.getInt32();

        //Position
        stringCount = binaryStream.getBytes(1);
        type = binaryStream.getString(stringCount[0]);
        if (type !== "position")
            return false;

        //get position item
        position.itemSize = binaryStream.getBytes(1)[0];
        position.array = vertices;

        //get positon type
        stringCount = binaryStream.getBytes(1);
        position.type = binaryStream.getString(stringCount[0]);
        attributes.position = position;
        data.attributes = attributes;

        //index
        stringCount = binaryStream.getBytes(1);
        type = binaryStream.getString(stringCount[0]);
        if (type !== "index")
            return false;

        stringCount = binaryStream.getBytes(1);
        index.type = binaryStream.getString(stringCount[0]);


        var binaryData = binaryStream.buffer.subarray(binaryStream.offset, binaryStream.offset + lineCount * 2 * 4);
        var indexArray = new Int32Array(new Uint8Array(binaryData).buffer);
        index.array = Array.prototype.slice.call(indexArray);
        // index.array = new Int32Array(new Uint8Array(binaryData).buffer);
        stream.offset += lineCount * 2 * 4;
        data.index = index;
        geometry.data = data;
        return geometry;
    }


    var PostProcessData = function (binaryStream,verticesCount,range,colorType) {
        var postCount = binaryStream.getBytes(1)[0];
        var postProcess = new Object();

        for (var i = 0;i < postCount; i ++){
            var postProcessObject = new Object();
            var postName = binaryStream.getString(binaryStream.getBytes(1)[0]);
            var min = binaryStream.getFloat32();
            var max = binaryStream.getFloat32();
            range[postName] = new Array(min,max);
            var binaryData = stream.buffer.subarray(binaryStream.offset, binaryStream.offset + verticesCount * 4);
            var postData = new Float32Array(new Uint8Array(binaryData).buffer);
            binaryStream.offset += verticesCount * 4;
            postProcess[postName] = postData;

            postProcessObject.Name = postName;
            postProcessObject.Min = min;
            postProcessObject.Max = max;
            colorType.push(postProcessObject);
        }
        return postProcess;
    }

    var mesh = new Object();
    var streamObject = new binaryStream();
    var stream = new streamObject.InputStream(data);


    var geometries = [];
    var geometriesChild = new Object();

    mesh.geometries = geometries;

    var materials = [];
    mesh.materials = materials;

    //get mesh count
    var meshCount = stream.getInt32();
    for (var mc = 0; mc < meshCount; mc++) {
        var attribute = new Object();
        var position = new Object();
        var index = new Object();

        geometriesChild = new Object();
        var data = new Object();
        geometriesChild.data = data;
        //get mesh Type
        var stringCount = stream.getBytes(1);
        geometriesChild.type = stream.getString(stringCount[0]);
        geometriesChild.type = "BufferGeometry";

        //get Mesh uuid
        stringCount = stream.getBytes(1);
        geometriesChild.uuid = stream.getString(stringCount[0]);
        geometries.push(geometriesChild);

        stringCount = stream.getBytes(1);
        var type = stream.getString(stringCount[0]);
        if (type !== "data")
            return false;

        //Mesh
        //triangleCount
        var triangleCount = stream.getInt32();
        //verticesCount
        var verticesCount = stream.getInt32();

        stringCount = stream.getBytes(1);
        var type = stream.getString(stringCount[0]);
        var range = new Object();
        var colorType = [];
        if (type === "Post_PressData"){

            data.Post_PressData = PostProcessData(stream,verticesCount,range,colorType);
            stringCount = stream.getBytes(1);
            type = stream.getString(stringCount[0]);
        }

        if (type !== "VERT")
            return false;
        //get vertices from binaryFile
        var binaryData = stream.buffer.subarray(stream.offset, stream.offset + verticesCount * 3 * 4);
        var vertices = new Float32Array(new Uint8Array(binaryData).buffer);
        data.vertices = vertices;
        stream.offset += verticesCount * 3 * 4;
        position.array = vertices;
        position.itemSize = 3;
        position.type = "Float32Array";
        attribute.position = position;
        data.attributes = attribute;

        stringCount = stream.getBytes(1);
        var type = stream.getString(stringCount[0]);
        if (type !== "INDX")
            return false;
        //get indices from binaryFile
        binaryData = stream.buffer.subarray(stream.offset, stream.offset + triangleCount * 3 * 4);
        var indices = new Int32Array(new Uint8Array(binaryData).buffer);
        stream.offset += triangleCount * 3 * 4;
        // //turn typedArray to array
        // var array = Array.prototype.slice.call(indices);
        // var faceNum = array.length / 3 * 4;
        // var indicesArray = new Array(faceNum);
        // for (var i = 0; i <= triangleCount; i++) {
        //     indicesArray[i * 4 + 0] = 0;
        //     indicesArray[i * 4 + 1] = array[i * 3 + 0];
        //     indicesArray[i * 4 + 2] = array[i * 3 + 1];
        //     indicesArray[i * 4 + 3] = array[i * 3 + 2];
        // }
        // indices = new Int32Array(indicesArray);
        data.faces = indices;
        index.type = "Uint32Array";
        index.array = indices;
        data.index = index;


        //如果是VTK的模型，没有Matrix、normals和materials
        stringCount = stream.getBytes(1);
        var type = stream.getString(stringCount[0]);
        if(type === "VTKModel"){
            var flag = stream.getBytes(1);

            //flag 为1时代表这个模型里存在线
            if (flag[0] === 1)
            {
                var lineGeometries =  meshEdge(stream, type,data.vertices);
                geometries.push(lineGeometries);
            }
            continue;
        }

        if (type === "NORM"){
            //get normals from binaryFile
            binaryData = stream.buffer.subarray(stream.offset, stream.offset + verticesCount * 3 * 4);
            var normals = new Float32Array(new Uint8Array(binaryData).buffer);
            data.normals = normals;
            stream.offset += verticesCount * 3 * 4;

            stringCount = stream.getBytes(1);
            var type = stream.getString(stringCount[0]);
        }


        if (type !== "MATRIX")
            return false;
        //get normals from binaryFile
        binaryData = stream.buffer.subarray(stream.offset, stream.offset + 16 * 8);
        var matrix = new Float64Array(new Uint8Array(binaryData).buffer);
        data.matrix = matrix;
        stream.offset += 16 * 8;

        //set Materials
        var materialsChildren = new Object();
        //materials uuid
        stringCount = stream.getBytes(1);
        materialsChildren.uuid = stream.getString(stringCount[0]);

        //color ambient
        materialsChildren.color = stream.getInt32();
        materialsChildren.ambient = materialsChildren.color;

        //emissive
        materialsChildren.emissive = stream.getInt32();

        //shininess
        materialsChildren.shininess = stream.getInt32();

        //transparent
        materialsChildren.transparent = stream.getBytes(1) === 1 ? true : false;

        //wireframe
        materialsChildren.wireframe = stream.getBytes(1) === 1 ? true : false;

        // materials type
        stringCount = stream.getBytes(1);
        materialsChildren.type = stream.getString(stringCount[0]);
        materialsChildren.type = "MeshStandardMaterial";
        materialsChildren.wireframe = undefined;
        // materialsChildren.shininess = undefined;
        // materialsChildren.emissive = undefined;
        // materialsChildren.color = undefined;
        // materialsChildren.ambient = undefined;
        materialsChildren.roughness = 0.5;
        materialsChildren.metalness = 0.7;

        materials.push(materialsChildren);

    }

    //////set metaData
    var metadata = new Object();
    //generator
    stringCount = stream.getBytes(1);
    metadata.generator = stream.getString(stringCount[0]);

    //type
    stringCount = stream.getBytes(1);
    metadata.type = stream.getString(stringCount[0]);

    //version
    metadata.version = stream.getFloat32();

    mesh.metadata = metadata;

    var object = new Object();



    //object type
    stringCount = stream.getBytes(1);
    object.type = stream.getString(stringCount[0]);

    //object uuid
    stringCount = stream.getBytes(1);
    object.uuid = stream.getString(stringCount[0]);

    //object children
    object.children = [];
    for(var i = 0; i < meshCount; ++i)
    {
        var children  = [];
        var objectChildren = new Object();
        stringCount = stream.getBytes(1);
        objectChildren.name = stream.getString(stringCount[0]);

        stringCount = stream.getBytes(1);
        objectChildren.type = stream.getString(stringCount[0]);

        stringCount = stream.getBytes(1);
        objectChildren.uuid = stream.getString(stringCount[0]);

        //matrix
        stringCount = stream.getBytes(1);
        var tempString = stream.getString(stringCount[0]);
        if("matrix" == tempString)
        {
            binaryData = stream.buffer.subarray(stream.offset, stream.offset + 16 * 8);
            objectChildren.matrix = new Float64Array(new Uint8Array(binaryData).buffer);
            stream.offset += 16 * 8;
        }

        object.children.push(objectChildren);
        var childrens = new Object();

        //geometry
        stringCount = stream.getBytes(1);
        childrens.geometry = stream.getString(stringCount[0]);

        //material
        stringCount = stream.getBytes(1);
        childrens.material = stream.getString(stringCount[0]);

        //name
        stringCount = stream.getBytes(1);
        childrens.name = stream.getString(stringCount[0]);

        //type
        stringCount = stream.getBytes(1);
        childrens.type = stream.getString(stringCount[0]);

        //uuid
        stringCount = stream.getBytes(1);
        childrens.uuid = stream.getString(stringCount[0]);

        children.push(childrens);
        object.children[i].children = children;

        //判断是否有线
        flag = stream.getBytes(1);

        if(flag[0] === 0)
            continue;

        childrens = new Object();
        //geometry
        stringCount = stream.getBytes(1);
        childrens.geometry = stream.getString(stringCount[0]);

        //material
        stringCount = stream.getBytes(1);
        childrens.material = stream.getString(stringCount[0]);

        //name
        stringCount = stream.getBytes(1);
        childrens.name = stream.getString(stringCount[0]);

        //type
        stringCount = stream.getBytes(1);
        childrens.type = stream.getString(stringCount[0]);

        //uuid
        stringCount = stream.getBytes(1);
        childrens.uuid = stream.getString(stringCount[0]);

        children.push(childrens);
    }

    object.colorType = colorType;
    mesh.object = object;
    return mesh;
}

/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.ObjectLoaders = (function() {


    function ObjectLoaders(manager) {

        this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
        this.texturePath = '';

    }

    ObjectLoaders.prototype = {

        constructor: ObjectLoaders,

        load: function(url, onLoad, onProgress, onError) {

            if (this.texturePath === '') {

                this.texturePath = url.substring(0, url.lastIndexOf('/') + 1);

            }

            var scope = this;

            var loader = new FileLoader(scope.manager);
            loader.load(url, function(text) {

                var json = "";
                var rawbuf = new Uint8Array(text);
                rawbuf = new Zlib.Gunzip(rawbuf).decompress();

                json = ProcessBinaryToJson(rawbuf);

                // for (var i = 0,textLength = text.length; i < textLength; i++) {
                //     json += String.fromCharCode(text[i]);
                // }
                //
                // try {
                //
                //     json = JSON.parse(json);
                //
                // } catch (error) {
                //
                //     if (onError !== undefined) onError(error);
                //
                //     console.error('THREE:ObjectLoader: Can\'t parse ' + url + '.', error.message);
                //
                //     return;
                //
                // }

                var metadata = json.metadata;

                if (metadata === undefined || metadata.type === undefined || metadata.type.toLowerCase() === 'geometry') {

                    console.error('THREE.ObjectLoader: Can\'t load ' + url + '. Use THREE.JSONLoader instead.');
                    return;
                }

                scope.parse(json, onLoad);

            }, onProgress, onError);

        },

        setTexturePath: function(value) {

            this.texturePath = value;

        },

        setCrossOrigin: function(value) {

            this.crossOrigin = value;

        },

        parse: function(json, onLoad) {

            var colorMap = 'rainbow';
            var numberOfColors = 255;
            // var lut = new THREE.Lut( colorMap, numberOfColors );
            //
            // lut.setMin(0);
            // lut.setMax(2000);

            // lut.setMax(lutMax);
            // lut.setMin(lutMin);

            var geometries = this.parseGeometries(json.geometries,lut);

            var images = this.parseImages(json.images, function() {

                if (onLoad !== undefined) onLoad(object);

            });




            var textures = this.parseTextures(json.textures, images);
            var materials = this.parseMaterials(json.materials, textures);

            // var materials = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });

            var object = this.parseObject(json.object, geometries, materials);

            object.colorType = json.object.colorType;


            if (json.animations) {

                object.animations = this.parseAnimations(json.animations);

            }

            if (json.images === undefined || json.images.length === 0) {

                if (onLoad !== undefined) onLoad(object);

            }

            return object;

        },

        parseGeometries: function(json,lut) {

            var geometries = {};

            if (json !== undefined) {

                var geometryLoader = new THREE.JSONLoader();
                var bufferGeometryLoader = new THREE.BufferGeometryLoader();

                for (var i = 0, l = json.length; i < l; i++) {

                    var geometry;
                    var data = json[i];

                    switch (data.type) {

                        case 'PlaneGeometry':
                        case 'PlaneBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.width,
                                data.height,
                                data.widthSegments,
                                data.heightSegments
                            );

                            break;

                        case 'BoxGeometry':
                        case 'BoxBufferGeometry':
                        case 'CubeGeometry': // backwards compatible

                            geometry = new Geometries[data.type](
                                data.width,
                                data.height,
                                data.depth,
                                data.widthSegments,
                                data.heightSegments,
                                data.depthSegments
                            );

                            break;

                        case 'CircleGeometry':
                        case 'CircleBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.segments,
                                data.thetaStart,
                                data.thetaLength
                            );

                            break;

                        case 'CylinderGeometry':
                        case 'CylinderBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radiusTop,
                                data.radiusBottom,
                                data.height,
                                data.radialSegments,
                                data.heightSegments,
                                data.openEnded,
                                data.thetaStart,
                                data.thetaLength
                            );

                            break;

                        case 'ConeGeometry':
                        case 'ConeBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.height,
                                data.radialSegments,
                                data.heightSegments,
                                data.openEnded,
                                data.thetaStart,
                                data.thetaLength
                            );

                            break;

                        case 'SphereGeometry':
                        case 'SphereBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.widthSegments,
                                data.heightSegments,
                                data.phiStart,
                                data.phiLength,
                                data.thetaStart,
                                data.thetaLength
                            );

                            break;

                        case 'DodecahedronGeometry':
                        case 'DodecahedronBufferGeometry':
                        case 'IcosahedronGeometry':
                        case 'IcosahedronBufferGeometry':
                        case 'OctahedronGeometry':
                        case 'OctahedronBufferGeometry':
                        case 'TetrahedronGeometry':
                        case 'TetrahedronBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.detail
                            );

                            break;

                        case 'RingGeometry':
                        case 'RingBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.innerRadius,
                                data.outerRadius,
                                data.thetaSegments,
                                data.phiSegments,
                                data.thetaStart,
                                data.thetaLength
                            );

                            break;

                        case 'TorusGeometry':
                        case 'TorusBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.tube,
                                data.radialSegments,
                                data.tubularSegments,
                                data.arc
                            );

                            break;

                        case 'TorusKnotGeometry':
                        case 'TorusKnotBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.radius,
                                data.tube,
                                data.tubularSegments,
                                data.radialSegments,
                                data.p,
                                data.q
                            );

                            break;

                        case 'LatheGeometry':
                        case 'LatheBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.points,
                                data.segments,
                                data.phiStart,
                                data.phiLength
                            );

                            break;

                        case 'PolyhedronGeometry':
                        case 'PolyhedronBufferGeometry':

                            geometry = new Geometries[data.type](
                                data.vertices,
                                data.indices,
                                data.radius,
                                data.details
                            );

                            break;

                        case 'BufferGeometry':

                            geometry = bufferGeometryLoader.parse(data);
                            if(data.data.Post_PressData != undefined){
                                geometry.postProcessData = new Object();
                                for (var pro in data.data.Post_PressData ){
                                    if(data.data.Post_PressData[pro] != undefined){
                                        geometry.postProcessData[pro] = data.data.Post_PressData[pro];
                                    }
                                }
                            }
                            break;

                        case 'Geometry':

                            geometry = geometryLoader.parse(data, this.texturePath).geometry;
                            for (var pro in data.data.Post_PressData){
                                if(data.data.Post_PressData[pro] != undefined){
                                    geometry[pro] = data.data.Post_PressData[pro];
                                }
                            }

                            // for(var m = 0,faceLength = geometry.faces.length;m < faceLength; m++)
                            // {
                            //     vertextColor = new THREE.Color();
                            //     var face = geometry.faces[m];
                            //     var color = lut.getColor( geometry.pressure[m * 3 + 0] );
                            //     face.vertexColors.push(color);
                            //     color = lut.getColor( geometry.pressure[m * 3 + 1] );
                            //     face.vertexColors.push(color);
                            //     color = lut.getColor( geometry.pressure[m * 3 + 2] );
                            //     face.vertexColors.push(color);
                            // }
                            break;

                        default:

                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + data.type + '"');

                            continue;

                    }

                    geometry.uuid = data.uuid;

                    if (data.name !== undefined) geometry.name = data.name;

                    geometries[data.uuid] = geometry;

                }

            }

            return geometries;

        },

        parseMaterials: function(json, textures) {

            var materials = {};

            if (json !== undefined) {

                var loader = new THREE.MaterialLoader();
                loader.setTextures(textures);

                for (var i = 0, l = json.length; i < l; i++) {

                    var data = json[i];

                    if (data.type === 'MultiMaterial') {

                        // Deprecated

                        var array = [];

                        for (var j = 0; j < data.materials.length; j++) {

                            array.push(loader.parse(data.materials[j]));

                        }

                        materials[data.uuid] = array;
                    } else {

                        materials[data.uuid] = loader.parse(data);
                        materials[data.uuid].side = THREE.DoubleSide;

                    }

                }

            }

            return materials;

        },

        parseAnimations: function(json) {

            var animations = [];

            for (var i = 0; i < json.length; i++) {

                var clip = AnimationClip.parse(json[i]);

                animations.push(clip);

            }

            return animations;

        },

        parseImages: function(json, onLoad) {

            var scope = this;
            var images = {};

            function loadImage(url) {

                scope.manager.itemStart(url);

                return loader.load(url, function() {

                    scope.manager.itemEnd(url);

                }, undefined, function() {

                    scope.manager.itemEnd(url);
                    scope.manager.itemError(url);

                });

            }

            if (json !== undefined && json.length > 0) {

                var manager = new LoadingManager(onLoad);

                var loader = new ImageLoader(manager);
                loader.setCrossOrigin(this.crossOrigin);

                for (var i = 0, l = json.length; i < l; i++) {

                    var image = json[i];
                    var path = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(image.url) ? image.url : scope.texturePath + image.url;

                    images[image.uuid] = loadImage(path);

                }

            }

            return images;

        },

        parseTextures: function(json, images) {

            function parseConstant(value, type) {

                if (typeof value === 'number') return value;

                console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', value);

                return type[value];

            }

            var textures = {};

            if (json !== undefined) {

                for (var i = 0, l = json.length; i < l; i++) {

                    var data = json[i];

                    if (data.image === undefined) {

                        console.warn('THREE.ObjectLoader: No "image" specified for', data.uuid);

                    }

                    if (images[data.image] === undefined) {

                        console.warn('THREE.ObjectLoader: Undefined image', data.image);

                    }

                    var texture = new Texture(images[data.image]);
                    texture.needsUpdate = true;

                    texture.uuid = data.uuid;

                    if (data.name !== undefined) texture.name = data.name;

                    if (data.mapping !== undefined) texture.mapping = parseConstant(data.mapping, TEXTURE_MAPPING);

                    if (data.offset !== undefined) texture.offset.fromArray(data.offset);
                    if (data.repeat !== undefined) texture.repeat.fromArray(data.repeat);
                    if (data.center !== undefined) texture.center.fromArray(data.center);
                    if (data.rotation !== undefined) texture.rotation = data.rotation;

                    if (data.wrap !== undefined) {

                        texture.wrapS = parseConstant(data.wrap[0], TEXTURE_WRAPPING);
                        texture.wrapT = parseConstant(data.wrap[1], TEXTURE_WRAPPING);

                    }

                    if (data.minFilter !== undefined) texture.minFilter = parseConstant(data.minFilter, TEXTURE_FILTER);
                    if (data.magFilter !== undefined) texture.magFilter = parseConstant(data.magFilter, TEXTURE_FILTER);
                    if (data.anisotropy !== undefined) texture.anisotropy = data.anisotropy;

                    if (data.flipY !== undefined) texture.flipY = data.flipY;

                    textures[data.uuid] = texture;

                }

            }

            return textures;

        },

    };

    return ObjectLoaders;

})();

Object.assign(THREE.ObjectLoaders.prototype,{

    parseObject: function() {

        var matrix = new THREE.Matrix4();

        return function parseObject(data, geometries, materials) {

            var object;

            function getGeometry(name) {

                if (geometries[name] === undefined) {

                    console.warn('THREE.ObjectLoader: Undefined geometry', name);

                }

                return geometries[name];

            }

            function getMaterial(name) {

                if (name === undefined) return undefined;

                if (Array.isArray(name)) {

                    var array = [];

                    for (var i = 0, l = name.length; i < l; i++) {

                        var uuid = name[i];

                        if (materials[uuid] === undefined) {

                            console.warn('THREE.ObjectLoader: Undefined material', uuid);

                        }

                        array.push(materials[uuid]);

                    }

                    return array;

                }

                if (materials[name] === undefined) {

                    console.warn('THREE.ObjectLoader: Undefined material', name);

                }

                return materials[name];

            }

            switch (data.type) {

                case 'Scene':

                    object = new THREE.Scene();

                    if (data.background !== undefined) {

                        if (Number.isInteger(data.background)) {

                            object.background = new Color(data.background);

                        }

                    }

                    if (data.fog !== undefined) {

                        if (data.fog.type === 'Fog') {

                            object.fog = new Fog(data.fog.color, data.fog.near, data.fog.far);

                        } else if (data.fog.type === 'FogExp2') {

                            object.fog = new FogExp2(data.fog.color, data.fog.density);

                        }

                    }

                    break;

                case 'PerspectiveCamera':

                    object = new PerspectiveCamera(data.fov, data.aspect, data.near, data.far);

                    if (data.focus !== undefined) object.focus = data.focus;
                    if (data.zoom !== undefined) object.zoom = data.zoom;
                    if (data.filmGauge !== undefined) object.filmGauge = data.filmGauge;
                    if (data.filmOffset !== undefined) object.filmOffset = data.filmOffset;
                    if (data.view !== undefined) object.view = Object.assign({}, data.view);

                    break;

                case 'OrthographicCamera':

                    object = new OrthographicCamera(data.left, data.right, data.top, data.bottom, data.near, data.far);

                    break;

                case 'AmbientLight':

                    object = new AmbientLight(data.color, data.intensity);

                    break;

                case 'DirectionalLight':

                    object = new DirectionalLight(data.color, data.intensity);

                    break;

                case 'PointLight':

                    object = new PointLight(data.color, data.intensity, data.distance, data.decay);

                    break;

                case 'RectAreaLight':

                    object = new RectAreaLight(data.color, data.intensity, data.width, data.height);

                    break;

                case 'SpotLight':

                    object = new SpotLight(data.color, data.intensity, data.distance, data.angle, data.penumbra, data.decay);

                    break;

                case 'HemisphereLight':

                    object = new HemisphereLight(data.color, data.groundColor, data.intensity);

                    break;

                case 'SkinnedMesh':

                    console.warn('THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.');

                case 'Mesh':

                    var geometry = getGeometry(data.geometry);
                    geometry.computeVertexNormals();
                    var material = getMaterial(data.material);
                    // var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });

                    if (geometry.bones && geometry.bones.length > 0) {

                        object = new THREE.SkinnedMesh(geometry, material);

                    } else {

                        if(material == undefined){
                            material = new THREE.MeshPhongMaterial({ color: 0x00f000, side:THREE.DoubleSide,shininess : 64,polygonOffset: true,
                                polygonOffsetFactor: 2,polygonOffsetUnits: 2});
                        }
                        else {
                            material.polygonOffset = true;
                            material.polygonOffsetFactor = 2;
                            material.polygonOffsetUnits = 2;
                        }
                        object = new THREE.Mesh(geometry, material);

                    }

                    break;

                case 'LOD':

                    object = new THREE.LOD();

                    break;

                case 'Line':

                    var material = getMaterial(data.material);
                    if(material === undefined){
                        material = new THREE.LineBasicMaterial({ color: 0x000000 });
                    }

                    object = new THREE.Line(getGeometry(data.geometry), material, data.mode);

                    break;

                case 'LineLoop':

                    object = new THREE.LineLoop(getGeometry(data.geometry), getMaterial(data.material));

                    break;

                case 'LineSegments':

                    var material = getMaterial(data.material);
                    if(material === undefined){
                        material = new THREE.LineBasicMaterial({ color: 0x000000 });
                    }
                    var geometry = getGeometry(data.geometry);
                    object = new THREE.LineSegments(geometry, material);

                    break;

                case 'PointCloud':
                case 'Points':

                    object = new THREE.Points(getGeometry(data.geometry), getMaterial(data.material));

                    break;

                case 'Sprite':

                    object = new THREE.Sprite(getMaterial(data.material));

                    break;

                case 'Group':

                    object = new THREE.Group();

                    break;

                default:

                    object = new THREE.Object3D();

            }

            object.uuid = data.uuid;

            if (data.name !== undefined) object.name = data.name;
            if (data.matrix !== undefined) {
                matrix.fromArray(data.matrix);
                matrix.decompose(object.position, object.quaternion, object.scale);
                object.matrixData = data.matrix;

            } else {

                if (data.position !== undefined) object.position.fromArray(data.position);
                if (data.rotation !== undefined) object.rotation.fromArray(data.rotation);
                if (data.quaternion !== undefined) object.quaternion.fromArray(data.quaternion);
                if (data.scale !== undefined) object.scale.fromArray(data.scale);

            }

            if (data.castShadow !== undefined) object.castShadow = data.castShadow;
            if (data.receiveShadow !== undefined) object.receiveShadow = data.receiveShadow;

            if (data.shadow) {

                if (data.shadow.bias !== undefined) object.shadow.bias = data.shadow.bias;
                if (data.shadow.radius !== undefined) object.shadow.radius = data.shadow.radius;
                if (data.shadow.mapSize !== undefined) object.shadow.mapSize.fromArray(data.shadow.mapSize);
                if (data.shadow.camera !== undefined) object.shadow.camera = this.parseObject(data.shadow.camera);

            }

            if (data.visible !== undefined) object.visible = data.visible;
            if (data.userData !== undefined) object.userData = data.userData;

            if (data.children !== undefined) {

                var children = data.children;

                for (var i = 0; i < children.length; i++) {

                    object.add(this.parseObject(children[i], geometries, materials));

                }

            }

            if (data.type === 'LOD') {

                var levels = data.levels;

                for (var l = 0; l < levels.length; l++) {

                    var level = levels[l];
                    var child = object.getObjectByProperty('uuid', level.object);

                    if (child !== undefined) {

                        object.addLevel(child, level.distance);

                    }

                }

            }

            return object;

        };

    }()

})

