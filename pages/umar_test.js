console.log(murmurhash3_32_gc('str',0))

v1 = [[2,0.2],[10,22],[12,0.3],[14,32]];
v2 = [[2,0.2],[24,21],[33,12],[44,21],[45,12]];
v = sparse_multiply(v1,v2);
console.log(v);

// console.log(features("umar"));

// def features(s):
//     first = "first_"+s[0]
//     last = "last_"+s[-1]
//     length = "length_"+str(len(s))
//     letters = " ".join(["letter_"+x for x in s])    
//     return " ".join(["|",first,last,length,letters])
