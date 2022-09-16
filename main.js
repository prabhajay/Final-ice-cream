/*document.querySelector(".submit").addEventListener("click",submit_button)

function submit_button()
{
    alert("We've received your request and will call you call back within 48 hours.");
}
function add(){
    document.getElementById("fname")
}
*/
let carts=document.querySelectorAll('.add-cart');

let products=[
    {
        name:"Cake Cone",
        tag:"download",
        price:3,
        inCart:0
    },
    {
        name:"Sugar Cone",
        tag:"sugar_cone",
        price:3,
        inCart:0
    },
    {
        name:"Waffle Cone",
        tag:"waffle_cone",
        price:3,
        inCart:0
    },
    {
        name:"Pre-packed Litre",
        tag:"Cup_cake",
        price:25,
        inCart:0
    },
    {
        name:"Pre-packed Half Litre",
        tag:"cup cake",
        price:15,
        inCart:0
    },
]

for(let i=0;i<carts.length;i++){
carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
    totalCost(products[i]);
})
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    console.log('productNumber');
    //if(productNumbers){
      //  document.querySelector('.btn span').textContent=productNumbers
    //}
}

function cartNumbers(product){
    let productNumbers=localStorage.getItem('cartNumbers');
   // console.log(productNumbers);
    //console.log(typeof productNumbers);

    productNumbers=parseInt(productNumbers);
   // console.log(typeof productNumbers);
   if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers +1);
   // document.querySelector('.btn span').textContent = productNumbers + 1;
    console.log(productNumbers);

//console.log(productNumbers);
   }
   else{
    localStorage.setItem('cartNumbers',1);
   // document.querySelector('.btn span').textContent = 1;
    console.log(productNumbers);
   }
   setItems(product);
}

function setItems(product){
   // console.log("The product clicked is",product)
   let cartItems=localStorage.getItem('productsInCart');
   cartItems=JSON.parse(cartItems);
   if(cartItems!=null){
    if(cartItems[product.tag]== undefined){
        cartItems ={
            ...cartItems,
            [product.tag]:product
        }
    }
    cartItems[product.tag].inCart += 1;
   }
      else
    {
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product)
{
        let cartCost=localStorage.getItem('totalCost');
        console.log("My cartCost is", cartCost);
        console.log(typeof cartCost);

        if(cartCost != null)
        {
            cartCost=parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        }
        else
        {
            localStorage.setItem("totalCost",product.price);

        }
}
function increaseValue() 
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
  
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
  }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost=localStorage.getItem('totalCost');

    cartItems = JSON.parse(cartItems);
    let productContainer=document.querySelector
    (".products");
    console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=
            `<div class="product">
            <div>
            <input type="checkbox"  value="">
            <img src="./images/cone/${item.tag}.jpg">
            ${item.name}</div>
            <div class="price">${item.price}</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">${item.inCart * item.price}
            
            </div>
            </div> 
            
            `;
        });
       /* productContainer.innerHTML +=
        `<div class="product">
        <div>
        <img src="./images/${item.tag}.jpg">
        ${item.name}</div>
        <div class="price">${item.price}</div>
        <div class="quantity">${item.inCart}</div>
        <div class="total">${item.inCart * item.price}
        </div>
        </div> 
          `;*/
    
        productContainer.innerHTML +=
        `<div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        $${cartCost}
        </h4></div>
        `;

    }
}
onLoadCartNumbers();
displayCart();

/*
//<div class="order">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
 <input class="text" type="text" size="2" value=${item.inCart} >
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Val">+</div>

</div>
<form>
            <input type="button" onclick="decreaseValue()" value="-">
  <input type="number" id="number" value=${item.inCart} />
  <input type="button" onclick="increaseValue()" value="+">
</form>
            </div>
            <div class="total">$${item.inCart * item.price}
            </div>
*/