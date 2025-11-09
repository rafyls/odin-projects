function loadHomepage(content) {

  const h1 = document.createElement("h1");
  h1.textContent = "Napolia Pizza";

  const p1 = document.createElement("p");
  p1.textContent = `Welcome to Napolia Pizza - Where Every Bite Feels Like Home`;

  const p2 = document.createElement("p");
  p2.textContent = `At Napolia Pizza, we bring the flavors of Italy 
  straight to your table.`;

  const p3 = document.createElement("p");
  p3.textContent = `From our perfectly baked, wood-fired pizzas to our 
  decadent, handmade desserts, every dish is crafted with the freshest 
  ingredients and passion for authentic taste.`;

  const p4 = document.createElement("p");
  p4.textContent = `Whether you're craving a classic Margherita or a sweet 
  finish with a rich tiramisu, Napolia Pizza offers a cozy, welcoming 
  atmosphere for family, friends, and pizza lovers of all kinds.`;

  const p5 = document.createElement("p");
  p5.textContent = `Come for the pizza, stay for the dessert - your perfect 
  meal starts here!`;

  content.appendChild(h1);
  
  content.appendChild(p1);
  content.appendChild(p2);
  content.appendChild(p3);
  content.appendChild(p4);
  content.appendChild(p5);
}
export { loadHomepage };