const form = document.querySelector('#intake-form');
const output = document.querySelector('#letter-text'); // from your letter preview section

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Match the IDs in your HTML
  const name = document.querySelector('#fullName').value;
  const bureau = document.querySelector('#bureau').value;
  const account = document.querySelector('#accountType').value;
  const reason = document.querySelector('#reason').value;

  // Generate letter
  const letter = `
Dear ${bureau},

I, ${name}, am writing to dispute the following item on my credit report: ${account}. 
Reason: ${reason}.

Please investigate this matter and correct any inaccuracies in accordance with the FCRA.

Thank you,
${name}
  `;

  // Show letter in the preview section
  output.textContent = letter;
  document.querySelector('#letter-preview').hidden = false;
});
