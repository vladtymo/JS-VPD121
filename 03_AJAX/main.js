const usersList = document.getElementById('users-list');

const users_api = 'https://jsonplaceholder.typicode.com/users';
const rates_api_key = 'e50f0437a865f3c1b04789d4';

async function getServerData(url) {
    // send GET HTTP request
    const response = await fetch(url);
    console.log('Status code: ' + response.status);

    const data = await response.json();
    console.log(data);

    return data;
}

async function showUsers() {
    const users = await getServerData(users_api);

    for (const i of users) {
        usersList.innerHTML += `<li>ID: ${i.id} - ${i.username} - ${i.email}</li>`;
    }
}

async function showRates() {
    const data = await getServerData(`https://v6.exchangerate-api.com/v6/${rates_api_key}/latest/USD`);

    for (const key in data.conversion_rates) {
        console.log(`${key}: ${data.conversion_rates[key]}`);
    }
    document.body.innerHTML += `<p>UAH rate: ${data.conversion_rates.UAH}</p>`;
}

showUsers();
showRates();