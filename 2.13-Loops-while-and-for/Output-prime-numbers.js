let n = 10

nextPrime:
for (let i = 2; i <=n; i++) {
    
    for (let k = 2; k < i; k++) {
        if (i % k == 0) continue nextPrime;
    }
 alert(i);
}