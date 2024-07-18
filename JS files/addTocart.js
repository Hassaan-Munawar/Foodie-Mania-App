
let getcart = document.getElementById('cart');
let getitem = JSON.parse(sessionStorage.getItem('cart'));
let getTotal = document.getElementById('total');
let totalPrice = 0;

if (getitem != null) {
  
    renderCart();
}
else{

  getTotal.innerHTML=`<h1>Bill</h1>Total: ${totalPrice.toFixed(2)} Rs <center><button class="btn btn-primary bt" onclick="location.href='../user/userlogin.html'">Check Out</button></center>`
  getcart.innerHTML = `<img width='350px' src="../assets/product-not-found.jpg" alt="">`

}

function renderCart() {
    getcart.innerHTML = '';
    getTotal.innerHTML = '';
    totalPrice = 0;
    getitem.forEach((item, index) => {
        getcart.innerHTML += `<div class="card mb-3 d" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.Img}" class="img-fluid rounded-start h" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.Name}</h5>
                <p class="card-text">Price: ${item.Price}</p>
                <button onclick="removeItem(${index})" class="btn btn-danger">Remove Item</button>
              </div>
            </div>
          </div>
        </div>`;
        totalPrice += parseFloat(item.Price);
    });
    getTotal.innerHTML = `<h1>Bill</h1>Total: ${totalPrice.toFixed(2)} Rs <center><button class="btn btn-primary bt" onclick="location.href='../user/userlogin.html'">Check Out</button></center>`;
}

function removeItem(index) {
    getitem.splice(index, 1);  
    sessionStorage.setItem('cart', JSON.stringify(getitem));  
    renderCart(); 
    if(JSON.parse(sessionStorage.getItem('cart')).length == 0){
      getcart.innerHTML = `<img width='400px' src="../assets/product-not-found.jpg" alt="">`
    }
}
