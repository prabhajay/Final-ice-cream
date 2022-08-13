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
            `<div class="products">
            
                <img src="./images/cone/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price},00</div>
            <div class="quantity"></div>
                 <span>${item.inCart}</span>
             </div>
            <div class="total">
                 $${item.inCart * item.price},00
            </div>
            `;
        });
        productContainer.innerHTML +=
        `<div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        $${cartCost},00
        </h4></div>
        `;
    }
}
onLoadCartNumbers();
displayCart();