import Display from "./display";

const home = new Display("home");
home.setHeaderTitle = "Pinoy Foods";

const quoteDiv = home.newElement("div");
quoteDiv.style.textAlign = "center";
quoteDiv.style.display = "flex";
quoteDiv.style.justifyContent = "center";
quoteDiv.style.alignItems = "center";

const restaurantQuote = home.newElement("h2");
restaurantQuote.innerHTML = "Today's Offer!";

const restaurantQuote2 = home.newElement("h3");
restaurantQuote2.innerHTML = "Buy any 2 meal & pay for them both ...";
quoteDiv.appendChild(restaurantQuote);
quoteDiv.appendChild(restaurantQuote2);

home.setContentItem = quoteDiv;

export default home;
