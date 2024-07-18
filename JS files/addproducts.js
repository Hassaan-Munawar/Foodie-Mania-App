let imageUrl;

document.getElementById('prod-image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

let getbtn =document.getElementById("register-prod")


getbtn.addEventListener('click',()=>{
    let prodName = document.getElementById("prod-name")
    let prodId = document.getElementById("prod-id")
    let prodDescription = document.getElementById("prod-description")
    let prodPrice = document.getElementById("prod-price")
    let filters;
    let getRestuarant =JSON.parse( localStorage.getItem('restuarant-names'))
    let currentrest = JSON.parse(sessionStorage.getItem('currentrest') )

    for(var i = 0 ; i < getRestuarant.length; i++){
        if( getRestuarant[i] == currentrest){
            filters = getRestuarant[i]
        }
    }
    let users = localStorage.getItem(filters)

    if(users){

        users = JSON.parse(users)
    }
    else{

        users = []
    }


    if(prodName.value.trim() != '' && prodId.value.trim() !='' && prodPrice.value.trim() != '' && prodDescription.value.trim() != '' && imageUrl != ''){ 
        let obj = {
            itemName: prodName.value,
            itemId: prodId.value,
            itemPrice:prodPrice.value,
            itemDescription:prodDescription.value,
            itemImg:imageUrl
        }
        users.push(obj)
        localStorage.setItem(filters,JSON.stringify(users))
        location.href ='../admin/admin.html'
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the required fields..",
          });
    }
})


