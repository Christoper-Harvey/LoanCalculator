// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calulatedInterest = parseFloat(interest.value) / 100 / 12;
  const calulatedPayments = parseFloat(years.value) * 12;

  //compute monthly payment
  const x = Math.pow(1 + calulatedInterest, calulatedPayments);
  const monthly = (principal*x*calulatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calulatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calulatedPayments)-principal).toFixed(2);
  } else {
    console.log('Please check your numbers');
  }

  e.preventDefault();
}