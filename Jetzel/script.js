const URL = "https://dummyjson.com/products";

async function getProducts(url){
// Obtener los productos
    const resolve = await fetch(URL);
    const products = await resolve.json();

    //for con index, for of o pueden usar map

    // Mostrar los productos en la página
    for(let i=0; i<products.length; i++){
        let product = products[i];

        document.getElementById("product-list").innerHTML += `
        <div class="card col-3 text-center" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.stock}</p>
                  <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
        </div>
        `
    }
    console.log(products)

}

getProducts(URL);


// Agregar productos al carrito