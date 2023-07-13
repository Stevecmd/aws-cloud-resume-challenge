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


// JS code for visitor counter
const counter = document.querySelector(".visitor_count");
async function updateCounter() {
    let response = await fetch("https://gcvbryl5r4exmiel6oba4r6ql40ktdqx.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`; //Views will be the data returned from the dynamoDB table
}

updateCounter();
