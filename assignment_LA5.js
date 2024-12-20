// Initialize the customer list with predefined names
const customers = ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'];

// Initialize an empty hash table to store customers and their assigned numbers
let hashedTable = {};

// Start the next customer number after the initial list
let nextNumber = customers.length + 1;

// Simple hash function to generate a customer number based on the size of the hash table
function hashFunction(name) {
    return Object.keys(hashedTable).length + 1; // Customer number is index + 1
}

// Function to populate the hash table with initial customers
function initializeQueue() {
    for (let i = 0; i < customers.length; i++) { // Loop through each customer in the list
        const customerName = customers[i]; // Get the customer's name
        const customerNumber = hashFunction(customerName); // Generate a number for the customer
        hashedTable[customerNumber] = customerName; // Add the customer to the hash table
    }
}

// Function to add a new customer to the queue
function addCustomer(name) {
    const customerNumber = nextNumber; // Assign the next available number to the new customer
    hashedTable[customerNumber] = name; // Add the customer to the hash table
    nextNumber++; // Increment the next available number for the following customers
    alert(`Customer ${name} has been added to the queue with number ${customerNumber}.`); // Inform the user
}

// Function to display the current state of the queue
function displayQueue() {
    let queueState = 'Current Queue:\n'; // Start the queue display string
    for (let num in hashedTable) { // Loop through each customer in the hash table
        queueState += `Number: ${num}, Customer: ${hashedTable[num]}\n`; // Add each customer's number and name to the display string
    }
    console.log(queueState); // Log the queue state to the console
}

// Function to service a customer and remove them from the queue
function serviceCustomer(number) {
    if (hashedTable[number]) { // Check if the entered number exists in the hash table
        const servicedCustomer = hashedTable[number]; // Get the customer's name
        delete hashedTable[number]; // Remove the customer from the hash table
        alert(`Customer ${servicedCustomer} (number ${number}) has been serviced.`); // Inform the user
    } else {
        alert(`No customer found for number ${number}.`); // Alert if the number is invalid
    }
}

// Main function to run the queueing system
function startQueueingSystem() {
    initializeQueue(); // Initialize the queue with predefined customers
    displayQueue(); // Display the initial queue state

    // Prompt the user for an action (service a customer, add a new customer, or exit)
    let action = prompt(
        "Choose an action:\n1. Service a customer\n2. Add a new customer\n3. Exit"
    );

    // Loop until the user chooses to exit
    while (action !== "3") {
        if (action === "1") { // If the user chooses to service a customer
            const serviceNumber = prompt("Enter the number to service a customer:"); // Prompt for the customer number
            if (serviceNumber && hashedTable[serviceNumber]) { // Validate the entered number
                serviceCustomer(serviceNumber); // Service the customer
                displayQueue(); // Display the updated queue state
            } else {
                alert("Invalid or non-existent customer number."); // Alert if the number is invalid
            }
        } else if (action === "2") { // If the user chooses to add a new customer
            const customerName = prompt("Enter the new customer's name:"); // Prompt for the customer's name
            if (customerName) { // Validate the entered name
                addCustomer(customerName); // Add the customer to the queue
                displayQueue(); // Display the updated queue state
            } else {
                alert("Name cannot be empty."); // Alert if the name is empty
            }
        } else {
            alert("Invalid action. Please select 1, 2, or 3."); // Alert if the action is invalid
        }

        // Prompt the user for the next action
        action = prompt(
            "Choose an action:\n1. Service a customer\n2. Add a new customer\n3. Exit"
        );
    }

    alert("Queueing system ended."); // Inform the user that the program has ended
}

// Start the queueing system
startQueueingSystem();