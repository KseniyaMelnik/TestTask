import './form.scss'
import { checkPhoneNumber } from './../../api/phoneApi';
import Button from "../Button";
import Component from "../Component";
import Input from "../Input";

class Form extends Component {
    private input: Input
    private button: Button
    private span: Component
    message = ''
    inputValue = ''

    constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form'])
    
    this.input = new Input(this.element, 'text', '')
    this.input.getInputValue = (event) => this.updateInputValue(event)

    this.button = new Button(this.element, 'заказать', ['button'])
    this.button.onClick = () => this.checkNumber(this.inputValue)
    this.button.setDisabled(true)
}

    updateInputValue(event: Event){
        if (this.message) {
            this.span.element.remove()
        }
        const input = event.currentTarget as HTMLInputElement;
        this.inputValue = input.value

        this.button.setDisabled(this.inputValue === '')
    }
    private async checkNumber(number: string): Promise<void> {
        const data = await checkPhoneNumber(number)
        if (data) {
            this.message = data.message
            this.span = new Component(this.element, 'span', ['message'], this.message)
        }
    }
}

export default Form;