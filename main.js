import { Service } from "./Service.js";

let userMap = new Map();  
let service = new Service('https://jsonplaceholder.typicode.com/users');
service.get().then(data => {
     userMap = new Map(data.map(user => [user.id, user]));
    console.log([...userMap]);  
})
.catch(error => {
    console.error('Error in main', error);
});

function getUser(userId) {
    let user = userMap.get(userId);
    
    if (user) {
        let cartona = `
            <div class="user-card col-md-4 mt-5">
                <h2>User Information</h2>
                <div class="user-info"><strong>ID:</strong> ${user.id}</div>
                <div class="user-info"><strong>Name:</strong> ${user.name}</div>
                <div class="user-info"><strong>Username:</strong> ${user.username}</div>
                <div class="user-info"><strong>Email:</strong> ${user.email}</div>
                <div class="user-info"><strong>Address:</strong></div>
                <div class="user-info"><strong>Street:</strong> ${user.address.street}</div>
                <div class="user-info"><strong>Suite:</strong> ${user.address.suite}</div>
                <div class="user-info"><strong>City:</strong> ${user.address.city}</div>
                <div class="user-info"><strong>Zipcode:</strong> ${user.address.zipcode}</div>
                <div class="user-info"><strong>Latitude:</strong> ${user.address.geo.lat}</div>
                <div class="user-info"><strong>Longitude:</strong> ${user.address.geo.lng}</div>
            </div>`;

         document.querySelector('.content .row').innerHTML = cartona;
    } else {
        console.error('User not found');
    }
}


document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', (event) => {
        let userId = parseInt(event.target.getAttribute('data-user-id'));
        if (userId) {
            getUser(userId);
        } 
    });
});


