
// 7. Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
// affect the accuracy of the purchase order.




function fixCartQuantityBug(cart) {
    for (var i = 0; i < cart.length; i++) {
      cart[i] = cart[i] * 2;
    }
    return cart;
  }
  

var cart = [2, 3, 1, 4];


var updatedCart = fixCartQuantityBug(cart);


console.log(updatedCart); 
