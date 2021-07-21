// Calls the root div
const outputDiv = document.getElementById("root");

// Calls the function
outputCustomerCards(customers);

// Function for customer cards
function outputCustomerCards(customers) {
  for (i = 0; i < customers.length; i++) {
    console.log(i);
    if (customers[i]) {
      // Creates a div with class "customerCard" inside root div
      const customerCard = document.createElement("div");
      customerCard.classList.add("customer-card");

      // Puts Customer Picture on customer card
      const customerPic = document.createElement("img");
      customerPic.src = customers[i].picture.large;
      customerCard.appendChild(customerPic);

      // Puts First and Last Name on customer card
      const Name = document.createElement("h2");
      Name.innerText = customers[i].name.first + " " + customers[i].name.last;
      customerCard.appendChild(Name);

      // Puts Email Address on customer card
      const email = document.createElement("h3");
      email.classList.add("email-address");
      email.innerText = customers[i].email;
      customerCard.appendChild(email);

      // Puts Address on customer card
      const addressLine1 = document.createElement("p");
      addressLine1.classList.add("address");
      addressLine1.innerText =
        customers[i].location.street.number +
        " " +
        customers[i].location.street.name;
      customerCard.appendChild(addressLine1);

      const addressLine2 = document.createElement("p");
      addressLine2.classList.add("address");
      addressLine2.innerText =
        customers[i].location.city +
        ", " +
        nameToAbbr(customers[i].location.state) +
        " " +
        customers[i].location.postcode;
      customerCard.appendChild(addressLine2);

      // Puts Date of Birth on customer card
      const dob = document.createElement("p");
      dob.classList.add("dob");
      dob.innerText =
        "DOB: " + moment(customers[i].dob.date).format("MMM D, YYYY");
      customerCard.appendChild(dob);

      // Puts Customer Since on customer card
      const since = document.createElement("p");
      since.classList.add("customer-since");
      since.innerText =
        "Customer since: " +
        moment(customers[i].registered.date).format("MMM D, YYYY");
      customerCard.appendChild(since);

      outputDiv.appendChild(customerCard);
    }
  }
}
