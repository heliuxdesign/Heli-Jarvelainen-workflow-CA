import { getDiscountPercentage, formatDecimalSpaces, convertKrone, calculateTax } from "./question3.js";

// getDiscountPercantage

test("When discount price less than normal price expect correct result", function() {
    expect(getDiscountPercentage(100, 75)).toBe(25);
})

test("When discount price larger than normal price expect negative discount", function() {
    expect(getDiscountPercentage(75, 100)).toBe(-33);
})

test("When discounted price 0 expect result to be 100", function() {
    expect(getDiscountPercentage(100, 0)).toBe(100);
})

// formatDecimalSpaces

test("When default decimal spaces expect result has 2 decimals", function() {
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
})

test("When 3 decimal spaces expect result has 3 decimals", function() {
    expect(formatDecimalSpaces(15.5555555, 3)).toBe(15.556);
})

test("When 0 decimal spaces expect result has 0 decimals", function() {
    expect(formatDecimalSpaces(15.5555555, 0)).toBe(16);
})

//convertKrone

test("When default expect result Euro to Krone convertion", function() {
    expect(convertKrone(10)).toBe(101.80);
})

test("When toKrone false expect Krone to Euro convertion", function() {
    expect(convertKrone(10, false)).toBe(0.98);
})

test("When kroneValue value specified expect value used in convertion", function() {
    expect(convertKrone(10, true, 20)).toBe(200);
})

//calculteTax

test("When default tax rate expect result 25% added", function() {
    expect(calculateTax(100)).toBe(125);
})

test("When taxRate value specified expect value used in calculation", function() {
    expect(calculateTax(100, 50)).toBe(150);
})

test("When amount 0 expect result 0", function() {
    expect(calculateTax(0)).toBe(0);
})

test("When amount negative expect result negative", function() {
    expect(calculateTax(-10)).toBe(-12.5);
})