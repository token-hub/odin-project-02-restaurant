class Display {
    #contentDiv = document.querySelector("#content");
    #headerTitle = "";
    #contentItem;

    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    get getHeaderTitle() {
        return this.#headerTitle;
    }

    get getContentItem() {
        return this.#contentItem;
    }

    get contentDiv() {
        return this.#contentDiv;
    }

    set setHeaderTitle(title) {
        this.#headerTitle = title;
    }

    set setContentItem(item) {
        this.#contentItem = item;
    }

    clearContentDiv() {
        this.contentDiv.innerHTML = "";
    }

    appendToContentDiv() {
        this.clearContentDiv();
        this.contentDiv.appendChild(this.header());
        this.contentDiv.appendChild(this.content());
    }

    newElement(element = "div") {
        return document.createElement(element);
    }

    header() {
        const headerDiv = this.newElement("div");
        headerDiv.classList = "header";

        const title = this.newElement("h3");
        title.innerHTML = this.getHeaderTitle;

        headerDiv.append(title);
        return headerDiv;
    }

    content() {
        const contentDiv = this.newElement("div");
        contentDiv.classList = "content";

        if (this.getContentItem) {
            contentDiv.append(this.getContentItem);
        }

        return contentDiv;
    }
}

export default Display;
