function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            console.log(data, response);
            alert('Signup failed: ' + data.message);
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Signup failed!');
    });
}



//For the template page images.
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    
    // Add or remove the 'show' class to toggle visibility and opacity
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
    }
}

// Function to open the modal and display the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
}


// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Ends here for the template page.

