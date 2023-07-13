// "use strict";

// $(document).ready(() => {
//     $.post('https://8y47mj2ozh.execute-api.us-east-1.amazonaws.com/dev')
//     .done(visitor_counter => {
//         $('#visits').text(visitor_counter);
//     })
//     .fail(e => {
//         console.log('Error');
//         console.log(e);
//     });
// });


// function updateCounter(){
//     fetch('https://8y47mj2ozh.execute-api.us-east-1.amazonaws.com/dev',{
//         method: 'GET'
//     })
//   .then(response => {
//     if (
//         // check if response's status is 200
//         response.ok
//     ) {
//       return response.json()
//     } else {
//       throw new Error('something went wrong');
//     }
//   })
//   .then(data => document.getElementById("visits").innerText = data.Visit_Count)
// }


// <!-- Visitor counter 2 example -->
// <!-- <script type="text/javascript">
//     var apiUrl = "https://8y47mj2ozh.execute-api.us-east-1.amazonaws.com/dev/put";
//       fetch(apiUrl)
//       .then(() => fetch("https://8y47mj2ozh.execute-api.us-east-1.amazonaws.com/dev/get"))
//       .then(response => response.json())
//       .then(data =>{
//           document.getElementById('body').innerHTML = data
//     console.log(data)});
//   </script> -->


// JS code for visitor counter - works but dowsnt display
// const counter = document.querySelector(".counter-number");
// async function updateCounter() {
//     let response = await fetch("https://gcvbryl5r4exmiel6oba4r6ql40ktdqx.lambda-url.us-east-1.on.aws/");
//     let data = await response.json();
//     counter.innerHTML = ` Views: ${data}`; //Views will be the data returned from the dynamoDB table
// }
// updateCounter();

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