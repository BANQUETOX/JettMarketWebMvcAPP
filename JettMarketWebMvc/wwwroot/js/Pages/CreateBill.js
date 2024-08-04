
const selectProduct = document.getElementById("billProducts")
const selectUser = document.getElementById("billUser")
let productList = []
let selectedProducts = document.getElementById("selectedProducts")
$(document).ready(() => {
    $.ajax({
        method: "GET",
        url: "https://localhost:7056/api/User/GetAllUsers",
        success: (data) => {
            for (let i = 0; i < data.length; i++) {
                let user = document.createElement('option')
                user.innerHTML = data[i].name
                user.value = data[i].id
                selectUser.appendChild(user)
            }
             
            /*Drop down all users */
        },
    })

    $.ajax({
        method: "GET",
        url: "https://localhost:7056/api/Product/GetAllProducts",
        success: (data) => {
            for (let i = 0; i < data.length; i++) {
                let product = document.createElement('option')
                product.value = [data[i].name,data[i].id]
                product.innerHTML = data[i].name
                selectProduct.appendChild(product)
            }
        }
    })
})

$("#addProductButton").click(() => {
    let selectedProductName = selectProduct.value.split(',')[0]
    let selectedProductId = selectProduct.value.split(',')[1]
    if (!productList.includes(selectProduct.value)) {
        productList.push(selectProduct.value)
        let product = document.createElement('li')
        product.id = selectedProductId
        let countInList = productList.filter(x => x == selectProduct.value).length
        product.innerHTML = `${selectedProductName} (${countInList})`  
        selectedProducts.appendChild(product)
    }
    else {
        productList.push(selectProduct.value)
        let listElement = document.getElementById(selectedProductId)
        let countInList = productList.filter(x => x == selectProduct.value).length
        listElement.innerHTML = `${selectedProductName} (${countInList})` 
        
    }
       
    }
)

$("#removeProductButton").click(() => {
    let selectedProductName = selectProduct.value.split(',')[0]
    let selectedProductId = selectProduct.value.split(',')[1]

        let listElement = document.getElementById(selectedProductId)
    productList.pop(selectProduct.value)
    let countInList = productList.filter(x => x == selectProduct.value).length

    if (countInList == 0 && listElement != null) {
        listElement.remove()

    }
    else if (listElement != null) {
        let countInList = productList.filter(x => x == selectProduct.value).length
        listElement.innerHTML = `${selectedProductName} (${countInList})`
    }
     
    
     
})

$("#createBillButton").click(() => {

    for (let i = 0; i < productList.length; i++) {
        let productId =productList[i].split(',')[1]
        
         $.ajax({
             method: "GET",
             url: "https://localhost:7056/api/Product/GetProductById?id=" + productId,
            contentType: "application/json",
            data: JSON.stringify(),
            success: (data) => {
                console.log(data)
            }
    })

    }
   })
