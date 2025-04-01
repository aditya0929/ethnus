document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            registerForm.reset();
        });
    }

    const userTable = document.getElementById("userTable");
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                    </tr>`;
            userTable.innerHTML += row;
        });
    }
});
