import Display from "./display";

const menu = new Display("menu");
menu.setHeaderTitle = "Menu";

const listGenerator = (text) => {
    const list = menu.newElement("li");
    list.innerHTML = text;
    return list;
};

const list = menu.newElement("ul");
const listItem1 = listGenerator("PAKALOG- Pandesal, kanin, itlog");
const listItem2 = listGenerator("MAALOG NA BETLOG- Maalat na itlog, pakbet, itlog");
const listItem3 = listGenerator("KALKAL- Kalderetang kalabaw");
const listItem4 = listGenerator("DILA- Dinuguan, laing");
const listItem5 = listGenerator("DILAAN MO- Dinuguan, laing, dalandan, molo");
const listItem6 = listGenerator("BOKA BOKA- Bopis, kanin, bokayo, kape");
const listItem7 = listGenerator("BOKA BOKA MO PA- Bopis, kanin, bokayo, kape, molong pancit");

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem5);
list.appendChild(listItem6);
list.appendChild(listItem7);

menu.setContentItem = list;

export default menu;
