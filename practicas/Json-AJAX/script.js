// fetch('https://dev.digitalhouse.com/api/getProvincias')
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
// console.log(data);
// })
// .catch(function(error){
//   console.log(error);
// })


window.addEventListener("load", function() {
    fetch("https://pokeapi.co/api/v2/type/")
      .then(function(response){
            return response.json();
          })
      .then(function(data){
        console.log(data);
        })



})
