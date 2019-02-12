function dig_pow(abcd, n) {

    var mas_nambers = [];
    for (var i = 0; i < abcd.length; i++) {
        mas_nambers[i] = abcd.charAt(i);
    }

    var data = abcd * n;
    var tottal = 0;
    var k1 = 0;
    var stat = -1;

    while (tottal < data + 1) {
        tottal = 0;
        for (var k = 0; k < mas_nambers.length; k++) {
            tottal = tottal + Math.pow(mas_nambers[k], (k + k1 + 1));
        }
        k1++;
        if (tottal == data) {
            stat = n;
            break;
        }
    }
    return stat;
}