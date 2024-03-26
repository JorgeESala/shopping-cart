

const URL = "https://dummyjson.com/products";
getProducts(URL);

async function getProducts(url){
// Obtener los productos
    const resolve = await fetch(url);
    const products = (await resolve.json()).products;

    // Esto se puede hacer con
    // for con index, for of o pueden usar map

    // Mostrar los productos en la página
    for(let i=0; i<products.length; i++){

        let product = products[i];

        document.getElementById("product-list").innerHTML += `
        <div class="card col-3 text-center" style="width: 18rem;">
                <img src="${product.images[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.stock}</p>
                  <button href="#" onClick="addToCart(1, '${product.title}', ${product.price})" class="btn btn-primary">Add to cart</button>
                </div>
        </div>
        `;
    }

}

// Agregar productos al carrito
function addToCart(quantity, name, price){

  const table = document.getElementById("product-table");
  const total = parseFloat(quantity) * parseFloat(price);
  table.innerHTML += `
  <tr>
    <th scope="row">${quantity}</th>
    <td>${name}</td>
    <td>${price}</td>
    <td>${total}</td>
  </tr>
  `
}