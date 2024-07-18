let getnum = document.getElementById('shop')
let getShow = document.getElementById('show');
let getRestuarants = JSON.parse(localStorage.getItem('restuarant-names'));
let getlen = JSON.parse(sessionStorage.getItem('cart'))

if(getlen != null){
  getnum.innerHTML = getlen.length 
}
  else if(getRestuarants == null){
    getShow.innerHTML =`<center><img width='350px' src='../assets/product-not-found.jpg' alt=''></center>`
  }

  getRestuarants.forEach(restuarant => {
    let getarr = JSON.parse(localStorage.getItem(restuarant));
    for (let i = 0; i < getarr.length; i++) {
      getShow.innerHTML += `<div class="card d m-4" style="width:18rem;text-align:center;">
        <img height='250px' src="${getarr[i].itemImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${getarr[i].itemName}</h5>
          <span>Description:</span>
          <span class="card-text ">${getarr[i].itemDescription}</span>
           </div>
          <hr>
          <div class="ml">
         <span>Price:</span>
           <span class="card-text">${getarr[i].itemPrice}</span>
          </div>
          <hr>
        <div class="card-body d-flex justify-content-center">
        <button class="btn btn-primary" onclick="add(this)">Add To Cart</button>
        </div>
        </div>`;
    }
  });
  

 







function add(e) {
  
  let img = e.parentNode.parentNode.childNodes[1].src
  let name = e.parentNode.parentNode.childNodes[3].childNodes[1].textContent
  let price = e.parentNode.parentNode.childNodes[7].childNodes[3].textContent
  let obj={
    Name:name,
    Price:price,
    Img:img
  }
  let users = sessionStorage.getItem('cart')
  if(users){

      users = JSON.parse(users)
  }
  else{
       users = [] 
  }
  users.push(obj)
  sessionStorage.setItem('cart',JSON.stringify(users))
  
  let getlen = JSON.parse(sessionStorage.getItem('cart')).length
  getnum.innerHTML = getlen


  Swal.fire({
    title: "Congrats!",
    text: "Product added Successfully!",
    icon: "success"
  });

}

