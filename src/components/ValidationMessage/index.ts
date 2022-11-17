class ValidationMessage {
    element: HTMLElement;

    constructor(neighborNode: HTMLElement, tagName = 'div', styles: string[] = [], content = '') {
        this.element = document.createElement(tagName);
        this.element.classList.add(...styles);
        this.element.textContent = content;
        neighborNode && neighborNode.after(this.element);
    }
    remove(): void {
        this.element.remove();
    }
}

export default ValidationMessage;
