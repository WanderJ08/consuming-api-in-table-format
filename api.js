const response = await fetch("https://api-product-morty.vercel.app/products");
const data = await response.json();

// Get references to the table elements
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

// Extract and create table headers
const headers = Object.keys(data[0]);
const trHead = document.createElement('tr');
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header
    trHead.appendChild(th);
});
thead.appendChild(trHead);

// Create table rows and cells from the data
data.forEach(item => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
        if(typeof item[header] == 'string' && item[header]?.includes("http")) {
            const pictureNode = document.createElement('div');
            const img = document.createElement('img');
            img.src = item[header];
            pictureNode.appendChild(img);
            td.appendChild(pictureNode);
        }else {
            td.textContent = item[header];
        }
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});
