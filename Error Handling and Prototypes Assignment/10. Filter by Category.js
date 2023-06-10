function filterByCategory(arr){
    return (input) => {
        let filteredItems = [];
        arr.filter((items) => {
            if(items.category === input){
                // return true;
                filteredItems.push(items);
            }
        });
        return filteredItems;
    }
}

const products = [
    {name: "Shirt", category: "Clothing"},
    {name: "Pants", category: "Clothing"},
    {name: "Hat", category: "Accessories"},
    {name: "Sunglasses", category: "Accessories"}
];

const clothingItems = filterByCategory(products)("Clothing");
console.log(clothingItems);

const accessoriesItems = filterByCategory(products)("Accessories");
console.log(accessoriesItems);
