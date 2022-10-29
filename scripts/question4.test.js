import { bread, cheese, lettuce, milk, tomato } from './items';
import { ShoppingCart } from './question4';

// Examples, feel free to delete
//const myCart = new ShoppingCart();

//myCart.addToCart(bread);
//myCart.removeFromCart(bread);

//Write the following tests. Make sure that you create a new cart in each test (const cart = new ShoppingCart()):

//Test that you can add an item to the cart: Use the addToCart method to add a single item, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.

test("When one item is added to the chart expect number of items is one", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    expect(myCart.getNumberOfItems()).toBe(1);
})

test("When one item is added to the chart expect correct price", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    expect(myCart.getCostTotal()).toBe(9.25);
})

test("When one item is added to the chart expect item is in the cart", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    const cartItems = myCart.getCart();
    expect(cartItems.length).toBe(1);
    expect(cartItems[0].id).toBe(24);
    expect(cartItems[0].price).toBe(9.25);
    expect(cartItems[0].name).toBe("Bread");
})

//Test that you can add an 3 separate items to the cart: Use the addToCart method to add all 3 items, then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.

test("When 3 items is added to the chart expect number of items is 3", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.addToCart(cheese);
    expect(myCart.getNumberOfItems()).toBe(3);
})

test("When 3 items is added to the chart expect correct price", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.addToCart(cheese);
    expect(myCart.getCostTotal()).toBe(35.19);
})

test("When 3 items is added to the chart expect items are in the cart", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.addToCart(cheese);
    const cartItems = myCart.getCart();
    expect(cartItems.length).toBe(3);
    expect(cartItems[0].id).toBe(24);
    expect(cartItems[0].price).toBe(9.25);
    expect(cartItems[0].name).toBe("Bread");
    expect(cartItems[1].id).toBe(942);
    expect(cartItems[1].price).toBe(19.99);
    expect(cartItems[1].name).toBe("Milk");
    expect(cartItems[2].id).toBe(52);
    expect(cartItems[2].price).toBe(5.95);
    expect(cartItems[2].name).toBe("Cheese");
})

//Test that you can't add the same item 3 times. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct values.

test("When one item is added 3 times to the chart expect number of items is 1", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    expect(myCart.getNumberOfItems()).toBe(1);
})

test("When 3 items is added to the chart expect correct price", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    expect(myCart.getCostTotal()).toBe(9.25);
})

test("When 3 same items is added to the chart expect one is in the cart", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    myCart.addToCart(bread);
    const cartItems = myCart.getCart();
    expect(cartItems.length).toBe(1);
    expect(cartItems[0].id).toBe(24);
    expect(cartItems[0].price).toBe(9.25);
    expect(cartItems[0].name).toBe("Bread");
})

//Test that you can add 2 separate items with addToCart and then remove a single item with removeFromCart. Check that getCostTotal, getNumberOfItems and getCart are all returning the correct items.

test("When to item is added and one item is removed from the chart expect number of items is 1", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.removeFromCart(bread);
    expect(myCart.getNumberOfItems()).toBe(1);
})

test("When 2 items is added and one item is removed from the chart expect correct price", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.removeFromCart(bread);
    expect(myCart.getCostTotal()).toBe(19.99);
})

test("When 2 items is added and one item is removed from the chart expect one is in the cart", function() {
    const myCart = new ShoppingCart();
    myCart.addToCart(bread);
    myCart.addToCart(milk);
    myCart.removeFromCart(milk);
    const cartItems = myCart.getCart();
    expect(cartItems.length).toBe(1);
    expect(cartItems[0].id).toBe(24);
    expect(cartItems[0].price).toBe(9.25);
    expect(cartItems[0].name).toBe("Bread");
})