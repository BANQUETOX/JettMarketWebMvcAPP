let createButton = document.getElementById("createButton")

$(createButton).click((e) => {

    let available = $("#productAvailable").is(':checked') ? true : false
    let product = {
        name: $("#productName").val(),
        description: $("#productDescription").val(),
        price: $("#productPrice").val(),
        quantity: $("#productQuantity").val(),
        available: available

    }

    $.ajax({
        url: 'https://localhost:7056/api/Product/CreateProduct',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(product),
        success: () => { console.log("Success") },
        error: (e) => { console.log(e.error) }
    })

    e.preventDefault()

})

