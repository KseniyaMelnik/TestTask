import Component from "../Component";

class Input extends Component {
    getInputValue: (event: Event) => void = () => {};
    constructor (parentNode: HTMLElement, type: string, initValue?: string) {
        super(parentNode, 'input')
        this.element.setAttribute('type', type);
        
        if (initValue) this.element.setAttribute('value', initValue);
        this.element.addEventListener('input', (event) => {
            this.getInputValue(event);
          });
    }
}

export default Input;