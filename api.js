const response = await fetch("https://api-product-morty.vercel.app/products")

// console.log(response)
const tbody = document.querySelector('tbody')
const data = await response.json()
data.forEach(c => {
    console.log(c)

    
    const trNode = document.createElement('tr')
    const idNode = document.createElement('td')
    const priceNode = document.createElement('td')
    const nameNode = document.createElement('td')
    const categoryNode = document.createElement('td')


    idNode.textContent = c.id;
    priceNode.textContent = c.price;
    nameNode.textContent = c.name;
    categoryNode.textContent = c.category;

    
    
    trNode.appendChild(idNode)
    trNode.appendChild(nameNode)
    trNode.appendChild(categoryNode)
    trNode.appendChild(priceNode)
    tbody.appendChild(trNode)
    


})

