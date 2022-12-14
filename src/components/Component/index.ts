class Component {
    element: HTMLElement;

    constructor(parentNode: HTMLElement, tagName = 'div', styles: string[] = [], content = '') {
        this.element = document.createElement(tagName);
        this.element.classList.add(...styles);
        this.element.textContent = content;
        parentNode && parentNode.append(this.element);
    }
    remove(): void {
        this.element.remove();
    }
}

export default Component;
