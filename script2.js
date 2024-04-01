// script.js
document.getElementById('productionForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form from submitting the traditional way

    var woodQuantity = document.getElementById('woodQuantity').value;
    var costPerSqFt = document.getElementById('costPerSqFt').value;
    var materialUsed = document.getElementById('materialUsed').value;
    var laborHours = document.getElementById('laborHours').value;
    var itemImage = document.getElementById('itemImage').files[0];

    if(woodQuantity && costPerSqFt && laborHours && itemImage) {
        // Process form data here, such as sending it to a server
        alert("Form submitted successfully!");
    } else {
        alert("Please fill in all required fields and select an image.");
    }
});
