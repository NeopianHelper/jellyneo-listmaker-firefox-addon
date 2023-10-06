// Get all anchor tags
let itemLinks = document.querySelectorAll('a[target="_blank"]');
let itemNames = [];

// Loop through each anchor tag and push its inner text to the itemNames array
itemLinks.forEach(function(link) {
    itemNames.push(link.innerText);
});

// Convert array of item names to a single string separated by newlines
let itemNamesString = itemNames.join('\n');

// Create a Blob from the string
let blob = new Blob([itemNamesString], { type: 'text/plain' });
let url = window.URL.createObjectURL(blob);

// Create a download link and add it to the DOM
let downloadLink = document.createElement('a');
downloadLink.href = url;
downloadLink.download = 'itemNames.txt';
downloadLink.textContent = 'Download ItemNames';

// Style the link to look like a button
downloadLink.style.display = 'inline-block';
downloadLink.style.padding = '10px 15px';
downloadLink.style.margin = '10px';
downloadLink.style.cursor = 'pointer';
downloadLink.style.textDecoration = 'none';
downloadLink.style.color = 'white';
downloadLink.style.backgroundColor = '#40E0D0';
downloadLink.style.border = 'none';
downloadLink.style.borderRadius = '4px';
downloadLink.style.fontSize = '16px';
downloadLink.onmouseover = function() { this.style.backgroundColor = '#008080'; };
downloadLink.onmouseout = function() { this.style.backgroundColor = '#40E0D0'; };

document.body.appendChild(downloadLink);