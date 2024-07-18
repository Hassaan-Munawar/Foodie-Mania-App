var arr = []
var arr2 = []
function usersignup() {
    var getemail = document.getElementById("usersignup-email")
    var getpass = document.getElementById("usersignup-pass")
    var getname = document.getElementById("usersignup-name")
    var obj = {
        email: getemail.value,
        pass: getpass.value,
        name: getname.value
    }
    if (getemail.value.length >= 11 && getname.value.length >= 4 && getpass.value.length >= 6) {
        arr.push(obj)
        localStorage.setItem("Users", JSON.stringify(arr))
        Swal.fire({
            title: "Congrats!",
            text: "Sign Up successful...!",
            icon: "success"
        })
            .then(() => {
                location.href = '../user/userlogin.html'
                getpass.value = ""
                getemail.value = ""
                getname.value = ""
            })

    }
    else if (getname.value == '' || getemail.value == '' || getpass.value == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the required fields..!",
        });
    }
    else if (getname.value.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Username of atleast 4 characters..!",
        });
    }
    else if (getemail.value.length < 11) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Email..!",
        });
    }
    else if (getpass.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Password of atleast 6 chracters or numbers..!",
        });
    }
}

function adminsignup() {
    var getemail = document.getElementById("admin-email")
    var getpass = document.getElementById("admin-pass")
    var getname = document.getElementById("admin-name")
    var obj = {
        email: getemail.value,
        pass: getpass.value,
        name: getname.value
    }
    if (getemail.value.trim().length >= 11 && getname.value.trim().length >= 4 && getpass.value.trim().length >= 6) {
        arr2.push(obj)
        localStorage.setItem("Admins", JSON.stringify(arr2))
        var users = localStorage.getItem('restuarant-names')
        if (users) {

            users = JSON.parse(users)
        }
        else {
            users = []
        }
        users.push(getname.value)
        localStorage.setItem('restuarant-names', JSON.stringify(users))
        Swal.fire({
            title: "Congrats!",
            text: "Sign Up successful...!",
            icon: "success"
        })
            .then(() => {
                location.href = '../admin/adminlogin.html'
                getpass.value = ""
                getemail.value = ""
                getname.value = ""
            })
    }
    else if (getname.value == '' || getemail.value == '' || getpass.value == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the required fields..!",
        });
    }
    else if (getname.value.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Username of atleast 4 characters..!",
        });
    }
    else if (getemail.value.length < 11) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Email..!",
        });
    }
    else if (getpass.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Password of atleast 6 chracters or numbers..!",
        });
    }


}

function userlogin() {
    var getemail = document.getElementById("userlogin-email")
    var getname = document.getElementById('userlogin-name')
    var getpass = document.getElementById("userlogin-pass")
    var filters = arr.filter(function (data) {
        return data.email == getemail.value && data.pass == getpass.value && data.name == getname.value
    })
    if (getemail.value.trim() == '' || getpass.value.trim() == '' || getname.value.trim() == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the required fields..!",
        });
    }
    else if (filters.length) {
        Swal.fire({
            title: "Congrats!",
            text: "User login succcessful...!",
            icon: "success"
        })
            .then(() => {
                location.href = '../user/foodie.html'
                getemail.value = ""
                getpass.value = ""
                getname.value = ""
            })

    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email/Password incorrect..!",
        });
    }

}


function adminlogin() {
    var getemail = document.getElementById("adminlogin-email")
    var getname = document.getElementById('adminlogin-name')
    var getpass = document.getElementById("adminlogin-pass")
    var filters = arr2.filter(function (data) {
        return data.email == getemail.value && data.pass == getpass.value && data.name == getname.value
    })
    if (getemail.value.trim() == '' || getpass.value.trim() == '' || getname.value.trim() == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the required fields..!",
        });
    }
    else if (filters.length) {

        sessionStorage.setItem('currentrest', JSON.stringify(getname.value))
        Swal.fire({
            title: "Congrats!",
            text: "Admin login succcessful...!",
            icon: "success"
        })
            .then(() => {
                location.href = '../admin/admin.html'
                getemail.value = ""
                getpass.value = ""
                getname.value = ""
            })
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email/Password incorrect..!",
        });
    }

}

var getuser = localStorage.getItem("Users")
if (getuser !== null) {
    arr = JSON.parse(getuser)
}

var getuser2 = localStorage.getItem("Admins")
if (getuser2 !== null) {
    arr2 = JSON.parse(getuser2)
}

