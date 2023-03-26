const list = document.getElementById('list');
const moreBtn = document.getElementById('more-btn');

moreBtn.onclick = () => {
    showProducts();
}

const apiUrl = 'https://dummyjson.com/products';

let pagination = {
    limit: 51,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    },
    isAvailable() {
        return this.skip < this.total;
    }
};

// 1 - working with Promise by using async/await
// async function getServerData(url) {
//     // send GET HTTP request
//     const response = await fetch(url);
//     console.log('Status code: ' + response.status);

//     const data = await response.json();
//     console.log(data);

//     return data;
// }
// 2 - working with Promise by using .then()
function getServerData(url) {
    // send GET HTTP request
    return fetch(url).then((response) => {
        console.log('Status code: ' + response.status);
        return response.json();
    }).then((data) => {
        console.log(data);
        return data;
    }).catch(err => {
        console.error(err);
    });
}

async function showProducts() {
    const url = `${apiUrl}?limit=${pagination.limit}&skip=${pagination.skip}`;
    const result = await getServerData(url);

    pagination.total = result.total;
    pagination.next();
    updateMoreButton();

    for (const i of result.products) {
        list.innerHTML += `
        <div class="col card product-card">
            <img src="${i.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">${i.category} ${i.price}$</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    }
}

function updateMoreButton() {
    if (!pagination.isAvailable()) {
        moreBtn.disabled = true;
    }
    else {
        moreBtn.disabled = false;
    }
}

showProducts();
