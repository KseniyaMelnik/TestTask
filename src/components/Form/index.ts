import Button from "../Button";
import Component from "../Component";
import Input from "../Input";

class Form extends Component {
    private input: Input
    private button: Button
    inputValue = ''

    constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form'])
    
    this.input = new Input(this.element, 'text', '')
    this.input.getInputValue = this.updateInputValue

    this.button = new Button(this.element, 'заказать', ['button'])
    }

    updateInputValue(event: Event){
        const input = event.currentTarget as HTMLInputElement;
        this.inputValue = input.value
    }
}

export default Form;