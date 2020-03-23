function hasDuplicates(n) {
    const duplicates = [];
    let counter = 0;

    for (let outter = 0; outter < n.length; outter++) {
        for (let inner = 0; inner < n.length; inner++) {
            counter++;

            if(outter === inner) continue;

            if(n[outter] === n[inner]) {
                console.log(`n: ${n.length}, counter: ${counter}`)
                return true;
            }
        }
    }

    console.log(`n: ${n.length}, counter: ${counter}`);
    return false;
}

console.log(hasDuplicates([1,2,3,4])); 
//n: 4, counter: 16
//false

console.log(hasDuplicates([1,2,4,4])); 
//n: 4, counter: 12
//true

console.log(hasDuplicates([1,2,3,4,5,6,7,8,9]));
// n: 9, counter: 81
//false