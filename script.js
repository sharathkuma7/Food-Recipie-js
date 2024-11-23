
let gdata = document.getElementById("inp").value;

document
  .querySelector("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let gdata = document.getElementById("inp").value;
    if (gdata === "") {
      alert("Please enter a value");
      return;
    }
    console.log(gdata);

    async function hello() {
      let res = await fetch(
        `https://api.edamam.com/search?q=${gdata}&app_id=a52b4d43&app_key=e0e5c667605f5e91d8275c973531b80a`
      );

      var data = await res.json();
      if (data.hits.length === 0) {
        alert("No recipes found for the entered value");
        return;
      }

      console.log(data);
      console.log(data.hits[0].recipe);
      console.log(data.hits[0].recipe.url);

      for (let i = 0; i < 10; i++) {
        var main = document.getElementById("main");

        var card = document.createElement("div");
        card.className = "card";
        card.className = "col-sm-4";

        var img = document.createElement("img");
        img.src = data.hits[i].recipe.image;

        var cardbody = document.createElement("div");
        cardbody.className = "card-body";

        var h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerHTML = data.hits[i].recipe.label;

        var p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = "some quick texxt to build on th page";

        var a = document.createElement("a");
        a.className = "btn btn-primary";
        a.innerHTML = "see more";
        a.href = data.hits[1].recipe.url[0];
        a.setAttribute("href", data.hits[i].recipe.url);

        card.appendChild(img);
        card.appendChild(cardbody);
        cardbody.appendChild(h5);
        cardbody.appendChild(p);
        cardbody.appendChild(a);
        main.appendChild(card);
        console.log(main);
      }
    }
    hello();
  });

//concepts covered
//api calling
//dom
//bootstrap
// loops
