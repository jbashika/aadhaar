document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // In a real scenario, you would handle form submission with AJAX or fetch
    // This is just a basic example without actual authentication functionality
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you would send the username and password to the server for authentication
    // and handle the response accordingly
  
    console.log('Username:', username);
    console.log('Password:', password);
  
    // For demonstration purposes, let's just clear the form fields after logging
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  