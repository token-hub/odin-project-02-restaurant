class Display {
    #contentDiv = document.querySelector("#content");

    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    get contentDiv() {
        return this.#contentDiv;
    }

    clearContentDiv() {
        this.contentDiv.innerHTML = "";
    }

    appendToContentDiv() {
        this.clearContentDiv();
        this.contentDiv.appendChild(this.header());
        this.contentDiv.appendChild(this.content());
        const test = this.newElement("p");
        test.innerHTML = this.getName;
        this.contentDiv.appendChild(test);
    }

    newElement(element = "div") {
        return document.createElement(element);
    }

    header() {
        const newDiv = this.newElement("div");
        newDiv.innerHTML = "Header here!";
        return newDiv;
    }

    content() {
        const newDiv = this.newElement("div");
        newDiv.innerHTML = "Content here!";
        return newDiv;
    }
}

export default Display;
