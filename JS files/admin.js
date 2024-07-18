let getbtn = document.getElementById('prod')
getbtn.addEventListener('click', () => {
  location.href = '../admin/addproducts.html'
})


let getname = JSON.parse(sessionStorage.getItem('currentrest'))

if (JSON.parse(localStorage.getItem(getname)) == null) {
  
  let getdiv = document.getElementById('show-prod')
  getdiv.innerHTML = " <center><img width='350px' src='../assets/product-not-found.jpg' alt=''></center>"
}
else if(JSON.parse(localStorage.getItem(getname)).length == 0){
  let getdiv = document.getElementById('show-prod')
  getdiv.innerHTML = " <center><img width='350px' src='../assets/product-not-found.jpg' alt=''></center>"

}
else {
  let getarr = JSON.parse(localStorage.getItem(getname))
  let getdiv = document.getElementById('show-prod')
  for (var i = 0; i < getarr.length; i++) {
    getdiv.innerHTML += `<div class="card d m-4" style="width:18rem;">
    <img height='250px' src=${getarr[i].itemImg} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${getarr[i].itemName}</h5>
      <span>Description: </span>
      <span class="card-text ">${getarr[i].itemDescription}</span>
    </div>
    <hr>
    <div>
    <span class="ml">Price: </span>
    <span>${getarr[i].itemPrice}</span>
    <hr>
    <span class="ml">Id: </span>
    <span>${getarr[i].itemId}</span>
    </div>
    <hr>
    <div class="card-body">
    <button onclick = "edit(this)" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Product</button>
    <button onclick = "deletee(this)" class="btn btn-danger">Delete Product</button>
    </div>
    </div>`

  }
  
  let idToEdit;
  function edit(e) {
    idToEdit = e.parentNode.parentNode.childNodes[7].childNodes[9].textContent
    let img = e.parentNode.parentNode.childNodes[1].src
    let name = e.parentNode.parentNode.childNodes[3].childNodes[1].textContent
    let des = e.parentNode.parentNode.childNodes[3].childNodes[5].textContent
    let price = e.parentNode.parentNode.childNodes[7].childNodes[3].textContent
    let id = e.parentNode.parentNode.childNodes[7].childNodes[9].textContent
    let prod_name = document.getElementById('prod-name')
    prod_name.value = name
    let prod_id = document.getElementById('prod-id')
    prod_id.value = id
    let prod_description = document.getElementById('prod-description')
    prod_description.value = des
    let prod_price = document.getElementById('prod-price')
    prod_price.value = price
    let prod_image = document.getElementById('prod-image')
    prod_image.value = img
  }
 

  function save(newProperties) {
    let array = JSON.parse(localStorage.getItem(getname))
    const index = array.findIndex(obj => obj.itemId === idToEdit);
    if (index !== -1) {
      array[index] = { ...array[index], ...newProperties };
    }
    localStorage.setItem(getname, JSON.stringify(array));
    document.location.reload()
  }




  function deletee(e) {

    let array = JSON.parse(localStorage.getItem(getname))
    const idToRemove =  e.parentNode.parentNode.childNodes[7].childNodes[9].textContent;
    array = array.filter(obj => obj.itemId !== idToRemove);
    localStorage.setItem(getname, JSON.stringify(array));
    document.location.reload()
  }
}

