// JS code for visitor counter
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://gcvbryl5r4exmiel6oba4r6ql40ktdqx.lambda-url.us-east-1.on.aws/");
        let data = await response.json();

        if (data && data['Visit_Count']) {
            var visitCount = data['Visit_Count'];
            counter.innerHTML = `Views: ${visitCount}`;
        } else if (data && data['error']) {
            var errorMessage = data['error'];
            document.getElementById('counter-error').innerHTML = errorMessage;
        } else {
            document.getElementById('counter-error').innerHTML = 'Unknown error occurred.';
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('counter-error').innerHTML = 'Error occurred while fetching counter data.';
    }
}

updateCounter();
