function storeCatalogueBetter(data) {
    const store = {};

    for (let el of data) {
        let [key, value] = el.split(" : ");
        let ch = key.charAt(0);
        if (!store.hasOwnProperty(ch)) {
            store[ch] = {};

        }
        store[ch][key] = value;

    }
    // console.log(store);
    let sortArr = Object.entries(store).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
    for (let [key, products] of sortArr) {
        console.log(key);
        Object.entries(products)
            .sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]))
            .forEach(el => console.log(`  ${el[0]}: ${el[1]}`));
    }

}

storeCatalogueBetter(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
