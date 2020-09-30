// Assignment 2: Callback Function and Advanced HTML DOM - Complete the functions below to make AJAX call to a URL by GET method, and show the response data in the page. You may render UI with any style.

// Note: Please refer to the index.html in the same folder to view results.

function ajax(src, callback) {
  // your code here

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest()

  // The onreadystatechange property contains the event handler to be called when the readystatechange event is fired
  xhr.onreadystatechange = () => {
    // Check if the readyState is equal to 4, which means it's done.
    if (xhr.readyState === 4) {
      // Double check if the status is 200, which means ok.
      if (xhr.status === 200) {
        // Convert the JSON data received using the XMLHttpRequest, assign the value to the variable named response.
        // Note that the response is an array of 3 objects.
        let response = JSON.parse(xhr.responseText)
        // Then we return a callback, pass the response variable as an argument.
        return callback(response)
      }
    }
  }

  // Initializes a newly-created request. Since we're only meant to read the data, the argument for the method parameter should be get. The url parameter will be the src passed into the ajax function.
  xhr.open('GET', src)

  // Sends the request to the server
  xhr.send()
}

function render(data) {
  // your code here.
  // document.createElement() and appendChild() methods are preferred.

  // Since we're receiving an array of 3 objects, use forEach to retrieve the required data to render our page.
  data.forEach((product) => {
    // Select the div with an id container, where we'll render our data.
    const container = document.getElementById('container')

    // Create a section element.
    const productList = document.createElement('section')
    // Append the section element into the container div.
    container.appendChild(productList)

    productList.innerHTML = `
    <h2>Product Name: ${product.name}</h2>
    <p>Price: ${product.price}</p>
    <p>Description: ${product.description}</p>
`
  })
}

ajax('https://cwpeng.github.io/live-records-samples/data/products.json', function (response) {
  render(response)
}) // you should get product information in JSON format and render data in the page
