import "./styles.css";
import home from "./home";
import menu from "./menu";
import contacts from "./contacts";

class Main {
    #currentModule = home;
    constructor() {
        this.#currentModule.appendToContentDiv();
        this.addListeners();
    }

    addListeners() {
        const buttons = document.querySelectorAll(".nav-btn");
        buttons.forEach((button) => {
            button.addEventListener("click", this.changeDisplay.bind(this));
        });
    }

    set updateCurrentModule(selectedModule) {
        this.#currentModule = selectedModule;
    }

    get currentModule() {
        return this.#currentModule;
    }

    changeDisplay(event) {
        const target = event.target;
        const id = target.id;

        if (id == home.getName) this.updateCurrentModule = home;
        if (id == menu.getName) this.updateCurrentModule = menu;
        if (id == contacts.getName) this.updateCurrentModule = contacts;
        this.currentModule.appendToContentDiv();
    }
}

const restaurant = new Main();
export default restaurant;
