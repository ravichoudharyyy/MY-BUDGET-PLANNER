// Basic Budget Plan Calculation
function calculateBasicBudget() {
    let salary = parseFloat(document.getElementById('basicSalary').value);

    if (isNaN(salary) || salary <= 0) {
        alert('Please enter a valid salary amount');
        return;
    }

    // Basic Budget allocations
    let homeExpenses = (salary * 50) / 100;
    let charity = (salary * 10) / 100;
    let savings = (salary * 10) / 100;
    let investment = (salary * 20) / 100;
    let personalExpenses = (salary * 10) / 100;

    // Calculate total
    let total = homeExpenses + charity + savings + investment + personalExpenses;

    // Display results
    document.getElementById('basicHomeExpenses').innerText = `₹${homeExpenses.toFixed(2)}`;
    document.getElementById('basicCharity').innerText = `₹${charity.toFixed(2)}`;
    document.getElementById('basicSavings').innerText = `₹${savings.toFixed(2)}`;
    document.getElementById('basicInvestment').innerText = `₹${investment.toFixed(2)}`;
    document.getElementById('basicPersonalExpenses').innerText = `₹${personalExpenses.toFixed(2)}`;

    // Display total
    document.getElementById('basicTotalAmount').innerText = `₹${total.toFixed(2)}`;
}

// Premium Budget Plan Calculation
function calculatePremiumBudget() {
    let salary = parseFloat(document.getElementById('premiumSalary').value);

    if (isNaN(salary) || salary <= 0) {
        alert('Please enter a valid salary amount');
        return;
    }

    // Premium Budget allocations
    let homeExpenses = (salary * 40) / 100;
    let charity = (salary * 5) / 100;
    let savings = (salary * 10) / 100;
    let investment = (salary * 15) / 100;
    let personalExpenses = (salary * 10) / 100;
    let education = (salary * 5) / 100;
    let health = (salary * 5) / 100;
    let travel = (salary * 10) / 100;

    // Calculate total
    let total = homeExpenses + charity + savings + investment + personalExpenses + education + health + travel;

    // Display results
    document.getElementById('premiumHomeExpenses').innerText = `₹${homeExpenses.toFixed(2)}`;
    document.getElementById('premiumCharity').innerText = `₹${charity.toFixed(2)}`;
    document.getElementById('premiumSavings').innerText = `₹${savings.toFixed(2)}`;
    document.getElementById('premiumInvestment').innerText = `₹${investment.toFixed(2)}`;
    document.getElementById('premiumPersonalExpenses').innerText = `₹${personalExpenses.toFixed(2)}`;
    document.getElementById('premiumEducation').innerText = `₹${education.toFixed(2)}`;
    document.getElementById('premiumHealth').innerText = `₹${health.toFixed(2)}`;
    document.getElementById('premiumTravel').innerText = `₹${travel.toFixed(2)}`;

    // Display total
    document.getElementById('premiumTotalAmount').innerText = `₹${total.toFixed(2)}`;
}
