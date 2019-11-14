window.addEventListener("load", function() {
  fetch("https://pokeapi.co/api/v2/type/")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      ul = document.querySelector("ul")
      tipos = json.results

      for (var i = 0; i < tipos.length; i++) {
        ul.innerHTML += "<li>" + tipos[i].name + "</li>"
      }
    });
});
