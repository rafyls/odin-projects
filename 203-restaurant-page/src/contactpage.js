function loadContactpage(content) {
  const html = document.querySelector("html");
  html.style.removeProperty('height');

  const divContact = document.createElement("div");
  divContact.classList.add("contact-info");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";

  const divCard = [];
  for (let i = 0; i < 4; i++) {
    divCard[i] = document.createElement("div");
  }

  const h2 = [];
  for (let i = 0; i < 4; i++) {
    h2[i] = document.createElement("h2");
  }
  h2[0].textContent = "Telephone";
  h2[1].textContent = "Email";
  h2[2].textContent = "Location";
  h2[3].textContent = "Schedule";

  const p = [];
  for (let i = 0; i < 9; i++) {
    p[i] = document.createElement("p");
  }
  p[0].textContent = "+39 123456789";
  p[1].textContent = "wealllovepizza@email.com";
  p[2].textContent = "Naples, Campania, Italy";
  
  p[3].textContent = "Sunday - Thursday:";
  p[4].textContent = "11:30 - 23:00";
  p[5].textContent = "Friday:";
  p[6].textContent = "15:00 - 00:30";
  p[7].textContent = "Saturday:";
  p[8].textContent = "11:30 - 00:30";

  const divSchedule = document.createElement("div");
  divSchedule.classList.add("schedule");

  divCard[0].appendChild(h2[0]);
  divCard[0].appendChild(p[0]);

  divCard[1].appendChild(h2[1]);
  divCard[1].appendChild(p[1]);

  divCard[2].appendChild(h2[2]);
  divCard[2].appendChild(p[2]);

  divSchedule.appendChild(p[3]);
  divSchedule.appendChild(p[4]);
  divSchedule.appendChild(p[5]);
  divSchedule.appendChild(p[6]);
  divSchedule.appendChild(p[7]);
  divSchedule.appendChild(p[8]);

  divCard[3].appendChild(h2[3]);
  divCard[3].appendChild(divSchedule);

  divContact.appendChild(h1);
  for (let i = 0; i < 4; i++) {
    divContact.appendChild(divCard[i]);
  }

  content.appendChild(divContact);
}
export { loadContactpage };