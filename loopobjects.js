// Et objekt, der repræsenterer en indkøbskurv
const shoppingCart = {
    apples: { price: 3, quantity: 4 },
    bananas: { price: 2, quantity: 6 },
    milk: { price: 12, quantity: 1 },
    bread: { price: 20, quantity: 2 }
};

// Funktion til at beregne totalprisen
function calculateTotal(cart) {
    let totalPrice = 0;

    // Loop igennem objektet
    for (let item in cart) {
        const price = cart[item].price; // Pris per enhed
        const quantity = cart[item].quantity; // Antal enheder
        const itemTotal = price * quantity; // Totalpris for varen
        totalPrice += itemTotal;

        console.log(`${item}: ${quantity} x ${price} = ${itemTotal} kr.`);
    }

    console.log(`Totalpris: ${totalPrice} kr.`);
    return totalPrice;
}

// Kald funktionen
calculateTotal(shoppingCart);

/* Output:
apples: 4 x 3 = 12 kr.
bananas: 6 x 2 = 12 kr.
milk: 1 x 12 = 12 kr.
bread: 2 x 20 = 40 kr.
Totalpris: 76 kr.
*/


function logCartDetails(cart) {
    const items = Object.keys(cart); // Alle varer (keys)
    console.log("Varer i indkøbskurven:");

    items.forEach(item => {
        const { price, quantity } = cart[item];
        console.log(`${item}: ${quantity} stk. á ${price} kr.`);
    });
}

logCartDetails(shoppingCart);

/* Output:
Varer i indkøbskurven:
apples: 4 stk. á 3 kr.
bananas: 6 stk. á 2 kr.
milk: 1 stk. á 12 kr.
bread: 2 stk. á 20 kr.
*/

const storeInventory = {
    fruits: {
        apples: 50,
        bananas: 100
    },
    dairy: {
        milk: 30,
        cheese: 20
    }
};

// Iterer gennem de nested kategorier
function logInventory(inventory) {
    for (let category in inventory) {
        console.log(`Kategori: ${category}`);
        for (let item in inventory[category]) {
            console.log(`  ${item}: ${inventory[category][item]} stk.`);
        }
    }
}

logInventory(storeInventory);

/* Output:
Kategori: fruits
  apples: 50 stk.
  bananas: 100 stk.
Kategori: dairy
  milk: 30 stk.
  cheese: 20 stk.
*/

