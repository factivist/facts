function sparse_multiply(a,b) {
    l = [];
    alen = a.length;
    blen = b.length
    for (i = 0;i < alen;i++) {
	for (j = 0;j < blen;j++) {
	    apos = a[i][0];
	    bpos = b[j][0];
	    if (apos == bpos) {
		aval = a[i][1];
		bval = b[j][1];
		l.push([apos,aval*bval]);
	    }
	}
    }
    return l;
}


function vw_hash(words,vw_coefficients,vw_constant) {
    var hashed = []
    for (i = 0;i < words.length;i++) {
	hashed.push([murmurhash3_32_gc(words[i],0),1]);
    }
    return sparse_multiply(hashed,vw_coefficients)+vw_constant;
}

