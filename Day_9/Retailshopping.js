/*The data is the available inventory in the store. In the store you have various products with their price and available quantity.
Based on this data, write a function to generate the total bill of a grocery list given by an user
getTotalAmount([
    { item: 'Jam - Apricot', quantity: 2 },
    { item: 'Creamers - 10%', quantity:1 },
  ]); // The result would be (94.11 * 2) + (1 * 49.54)
Please note if the user wants an quantity above what the store has. You should account for the quantity the store has. For example if the user wants 4 quantity but the store has only 2, then your calculation should only account for 2 */


const inventory=[{item: 'Apricot', amount:94.11,availableQuantity:2},
                 {item: 'Creamers-10%', amount:49.54,availableQuantity:5}


]

function getTotalAmount(groceryList){
    let total=0;
    for(i=0;i<groceryList.length;i++){
      const groceryItem=groceryList[i]
      
for(let j=0;j<inventory.length;j++){
    const inventoryItem=inventory[j]
     
    if(groceryItem.item===inventoryItem.item)
        {let  quantityToCharge;
        if(groceryItem.quantity > inventoryItem.availableQuantity ){
        quantityToCharge=inventoryItem.availableQuantity 
        }      
        else
        {
            quantityToCharge=groceryItem.quantity
        }
        total+=inventoryItem.amount*quantityToCharge
    }
}    } return total
}

const total = getTotalAmount([
    { item: 'Apricot', quantity: 2 },
    { item: 'Creamers-10%', quantity: 1 }
    ]);
console.log(total);