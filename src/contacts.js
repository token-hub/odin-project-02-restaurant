import Display from "./display";

const contacts = new Display("contacts");
contacts.setHeaderTitle = "Contacts";

const listGenerator = (text) => {
    const list = contacts.newElement("li");
    list.innerHTML = text;
    return list;
};

const list = contacts.newElement("ul");
const listItem1 = listGenerator("Me - 0912-3456-789");
const listItem2 = listGenerator("You - 0912-3456-789");
const listItem3 = listGenerator("Everyone - 0912-3456-789");
const listItem4 = listGenerator("Everytwo - 0912-3456-789");

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);

contacts.setContentItem = list;

export default contacts;
