// get elements from HTML
const createBtn = document.getElementById('create-btn');
const nameInput = document.getElementById('name-input');
const priceInput = document.getElementById('price-input');
const tableBody = document.getElementById('table-body');
const countSpan = document.getElementById('count-span');

let count = 0;
const products = [];

// set event handler
createBtn.onclick = () => {
    console.log("Button clicked!");

    // read input data
    const newProduct = getProductFromInputs();
    products.push(newProduct);

    // add item to table
    addProductToTable(newProduct);
    updateProductCount();

    clearForm();
}

function getProductFromInputs() {

    const product = {
        id: ++count,
        name: nameInput.value,
        price: priceInput.value
    };

    return product;
}

function addProductToTable(product) {
    tableBody.innerHTML += `<tr>
                                <th scope="row">${product.id}</th>
                                <td>${product.name}</td>
                                <td>${product.price}$</td>
                            </tr>`;
}

function clearForm() {
    nameInput.value = "";
    priceInput.value = "";
}

function updateProductCount() {
    countSpan.innerText = products.length;
}