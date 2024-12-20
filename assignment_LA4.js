// Initialize the customer queue with predefined names and numbers
let customerQueue = [
    { name: "Elaine", number: 1 }, 
    { name: "Althea", number: 2 },
    { name: "Angelo", number: 3 }, 
    { name: "Lito", number: 4 }, 
    { name: "Engelbert", number: 5 } 
];

// Display initial queue
console.log("Initial Queue:", customerQueue.map(customer => `${customer.number}: ${customer.name}`));

// Allow customers to enter their name and add to the queue
let newCustomerName = prompt("Enter your name to join the queue (or leave blank to skip):"); // Prompt the user to enter a name
if (newCustomerName) { // Check if the user entered a name
    let newCustomerNumber = customerQueue.length > 0 
        ? customerQueue[customerQueue.length - 1].number + 1 // Assign the next number if the queue is not empty
        : 1; // Assign 1 if the queue is empty
    customerQueue.push({ name: newCustomerName, number: newCustomerNumber }); // Add the new customer to the queue
    alert(`Welcome, ${newCustomerName}! Your queue number is ${newCustomerNumber}.`); // Notify the customer of their queue number
    console.log("Updated Queue:", customerQueue.map(customer => `${customer.number}: ${customer.name}`)); // Display the updated queue
}

// Customer service processing loop
for (let i = 0; i < 5; i++) { // Processes up to 5 customers
    if (customerQueue.length === 0) { // Check if the queue is empty
        alert("No more customers in the queue."); // Notify that the queue is empty
        console.log("Queue is empty."); // Log that the queue is empty
        break; // Exit the loop
    }

    let numberToService = parseInt(prompt(`Enter the queue number to service (1-${customerQueue[customerQueue.length - 1].number}):`), 10); // Prompt to select a queue number

    let customerIndex = customerQueue.findIndex(customer => customer.number === numberToService); // Find the customer in the queue

    if (customerIndex !== -1) { // Check if the customer exists
        let servicedCustomer = customerQueue[customerIndex]; // Get the customer's details
        alert(`Now servicing: ${servicedCustomer.name}`); // Notify that the customer is being serviced
        customerQueue.splice(customerIndex, 1); // Remove the customer from the queue
        console.log("Updated Queue:", customerQueue.map(customer => `${customer.number}: ${customer.name}`)); // Display the updated queue
    } else { // If the number is invalid
        alert("Invalid number. Please try again."); 
    }
}
