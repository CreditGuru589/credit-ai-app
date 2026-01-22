// Get form and output container
const form = document.querySelector('form');
const output = document.createElement('div');
output.style.marginTop = '20px';
form.parentNode.appendChild(output);

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value;
  const bureau = document.querySelector('#bureau').value;
  const account = document.querySelector('#account').value;
  const reason = document.querySelector('#reason').value;

  // Simple simulated AI letter
  const letter = `
  Dear ${bureau},

  I, ${name}, am writing to dispute the following item on my credit report: ${account}. 
  Reason: ${reason}.

  Please investigate this matter and correct any inaccuracies in accordance with the FCRA.

  Thank you,
  ${name}
  `;

  // Display the letter
  output.innerHTML = `<h2>Your AI-generated dispute letter:</h2><pre>${letter}</pre>`;
});
