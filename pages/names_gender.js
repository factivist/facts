
// def spm(a,b):
//     l = []
//     for x in a:
//         for y in b:
//             if x[0] == y[0]:
//                 l.push([x[0],y[0],x[1],y[1]])
//     return l

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

v1 = [[2,0.2],[10,22],[12,0.3],[14,32]];
v2 = [[2,0.2],[24,21],[33,12],[44,21],[45,12]];

v = sparse_multiply(v1,v2);
console.log(v);
