const form = document.querySelector("form");
const input = document.querySelector("input");

const apiKey = APIKEY ;

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('trails');
const url = `https://www.mtbproject.com/data/get-trails-by-id?ids=${inputVal}&key=${apiKey}`;


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let theTrails = data.trails;
  return theTrails.map(function(trail) {
    let li = createNode('li');
    // let span = createNode('span');
    span.innerHTML = `${trail.name}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
})