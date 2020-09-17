/**
 * avg: a function for calculating the average price of all the products.
 * @param {object} data - An object includes product info.
 */

function avg(data) {
  let productList = data.products
  let total = 0

  for (let i = 0; i < productList.length; i++) {
    total += productList[i]['price']
  }

  let averagePrice = total / productList.length
  return averagePrice
}

console.log(
  avg({
    size: 3,
    products: [
      { name: 'Product 1', price: 100 },
      { name: 'Product 2', price: 700 },
      { name: 'Product 3', price: 250 },
    ],
  })
) // should print the average price of all product, which is 350.
