
// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.


const customerCart = [
    { name: "Widget", unitPrice: 5, quantity: 1 },
    { name: "Gizmo", unitPrice: 12, quantity: 1 },
    { name: "Thingamajig", unitPrice: 7, quantity: 1 }
  ];
  
  const totalCost = customerCart => customerCart.reduce((bcc, product) => bcc += product.quantity * product.unitPrice,0)
  console.log(totalCost(customerCart))