// Create a card for each tank hero
fetch('./data/tanks.json')
.then(response => response.json())
.then(json => {
  for (var i = 0; i < json.items.length; i++) {
    generateAndApendElements(json.items[i], '#heroes-tank', '#8dd1f5');
  }
})
.catch(error => console.log(error));

// Create a card for each damage hero
fetch('./data/damages.json')
.then(response => response.json())
.then(json => {
  for (var i = 0; i < json.items.length; i++) {
    generateAndApendElements(json.items[i], '#heroes-damage', '#ff5757');
  }
})
.catch(error => console.log(error));

// Create a card for each support hero
fetch('./data/supports.json')
.then(response => response.json())
.then(json => {
  for (var i = 0; i < json.items.length; i++) {
    generateAndApendElements(json.items[i], '#heroes-support', '#62e88a');
  }
})
.catch(error => console.log(error));

function generateAndApendElements(hero, section, color){
  // Create the card element
  var card = document.createElement('li');
  card.setAttribute("style", `background-color: ${color};`);
  card.className = hero.role;

  // Add the hero image
  var img = document.createElement('img');
  img.src = hero.image;
  img.className = "avatar";
  card.appendChild(img);

  // Add the hero gamertag
  var gamertag = document.createElement('p');
  gamertag.textContent = hero.gamertag;
  gamertag.setAttribute("style", "font-weight:bold;");
  card.appendChild(gamertag);

  // Add the hero name
  var userName = document.createElement('p');
  userName.textContent = hero.name;
  userName.setAttribute("style", "font-size:0.8em;");
  card.appendChild(userName);
  
  // Add the hero invite button
  var inviteButton = document.createElement('button');
  inviteButton.textContent = "Invite";
  inviteButton.setAttribute("style", "font-size:0.8em; cursor:pointer;");
  card.appendChild(inviteButton);

  // Add the card to the heroes ul
  document.querySelector(`${section} ul`).appendChild(card);
}
