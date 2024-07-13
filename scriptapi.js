fetch('http://172.206.253.174/mssc-brewery/api/v1/beer/22aefb2d-18c1-4c16-897b-4325427ea20d', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    document.getElementById('beerInfo').innerHTML = `
        <h2 id="ready">${data.beerName}</h2>
        <p>Style: ${data.beerStyle}</p>
        <p>ID: ${data.id}</p>
        <p>UPC: ${data.upc ? data.upc : 'N/A'}</p>
    `;
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('beerInfo').innerHTML = '<p>Failed to fetch beer information.</p>';
});