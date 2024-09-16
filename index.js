/** todo:
 * A visitor enters the website and finds a list of available freelancers. 
 * Each freelancer has a name, an occupation, and a starting price for their services. 
 * They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.
 *
 * The visitor also finds a message that displays the average starting price of all the freelancers. 
 * In this example, the average starting price is $40.
 *
 * A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. 
 * The average starting price is updated to $50.
 *
 * New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.
 */

/** pseudo code:
 * Create an array of objects to contain a list of available freelancers. 
 * Keys include name, occupation, and starting price for services.
 * Make sure to include already given names and prices.
 * Calculate a mean price for all the freelancers based on their occupation, and display it.
 * Every few seconds, a new listing appears, so use a loop and `Math.random` to induce random outputs every few seconds.
 * Ensure to update the average price accordingly.
 */

// Array object initialization with all your freelancers
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "driver" },
    { name: "Jered", price: 43, occupation: "programmer" },
    { name: "Hannah", price: 81, occupation: "writer" },
    { name: "Tyler", price: 43, occupation: "teacher" },
    { name: "Austin", price: 76, occupation: "programmer" },
    { name: "Edgar", price: 47, occupation: "writer" },
    { name: "Talana", price: 72, occupation: "driver" },
    { name: "Talia", price: 72, occupation: "programmer" },
    { name: "Roberto", price: 72, occupation: "driver" }
];

// Function to render the freelancers list and update the average price
function render() {
    const tableBody = document.querySelector("#Freelancer tbody");

    
    if (!tableBody) {
        const newBody = document.createElement("tbody");
        document.querySelector("#Freelancer").appendChild(newBody);
    }

    const tbody = document.querySelector("#Freelancer tbody");
    tbody.innerHTML = ""; // Clear previous content

    let total = 0;

    // Render each freelancer in the table
    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = freelancer.name;
        row.appendChild(nameCell);

        const occupationCell = document.createElement("td");
        occupationCell.textContent = freelancer.occupation;
        row.appendChild(occupationCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${freelancer.price}`;
        row.appendChild(priceCell);

        tbody.appendChild(row);

        // Accumulate the total price to calculate the average
        total += freelancer.price;
    });

    // Calculate and display the average price
    const averagePrice = (total / freelancers.length).toFixed(2);
    document.getElementById("averagePrice").textContent = `Average Starting Price: $${averagePrice}`;
}

// Function to add a new freelancer every three seconds
function addFreelancer() {
    const newFreelancers = [
        { name: "Carol", price: 70, occupation: "programmer" },
        { name: "Dave", price: 40, occupation: "designer" },
        { name: "Eve", price: 60, occupation: "engineer" },
        { name: "Alice", price: 50, occupation: "writer" },
        { name: "Bob", price: 45, occupation: "teacher" },
        { name: "John", price: 55, occupation: "developer" },
        { name: "Sarah", price: 65, occupation: "consultant" },
        { name: "Michael", price: 70, occupation: "data analyst" },
        { name: "Emily", price: 52, occupation: "graphic designer" },
        { name: "Lucas", price: 80, occupation: "architect" },
        { name: "Sophia", price: 55, occupation: "project manager" },
        { name: "Jack", price: 48, occupation: "mechanic" },
        { name: "Olivia", price: 63, occupation: "photographer" },
        { name: "Liam", price: 72, occupation: "network engineer" },
        { name: "Ava", price: 58, occupation: "marketing specialist" }
    ];

    // Select a random freelancer from the newFreelancers list
    const randomFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

    // Add a new freelancer to the list
    freelancers.push(randomFreelancer);
    
    // Re-render the list and update the average price
    render();
}

// Initial render of the freelancer table
render();

// Add a new freelancer every 3 seconds and update the average price
setInterval(addFreelancer, 3000);
