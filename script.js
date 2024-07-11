function startCountdown() {
    var count = 3;
    var countdownElement = document.getElementById('countdown');
    var proposalButton = document.getElementById('proposal-button');

    proposalButton.style.display = 'none';

    countdownElement.style.display = 'inline-block';

    var interval = setInterval(function() {
        countdownElement.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none'; // Hide countdown after countdown finishes
            var proposalText = document.getElementById('proposal-text');
            proposalText.style.display = 'none'; // Show proposal text
        } 
    }, 800);
}


document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from API
    fetch('http://172.206.253.174:8080/mssc-brewery/api/v1/beer/22aefb2d-18c1-4c16-897b-4325427ea20d')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            // Update the beerInfo div with the response data
            document.getElementById('beerInfo').innerHTML = `
                <h2>${data.name}</h2>
                <p>Style: ${data.style}</p>
                <p>ABV: ${data.abv}%</p>
                <p>Description: ${data.description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('beerInfo').innerHTML = '<p>Failed to fetch beer information.</p>';
        });
});
