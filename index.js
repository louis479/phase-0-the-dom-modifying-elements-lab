// Step 1: Remove the <main> element
const main = document.querySelector('main#main');
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement('h1');

// Step 3: Assign an ID of 'victory' to the <h1>
newHeader.id = 'victory';

// Step 4: Add text content to the <h1>
newHeader.textContent = 'Tobias is the champion';

// Step 5: Append the <h1> to the body
document.body.append(newHeader);

