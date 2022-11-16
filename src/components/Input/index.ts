import Component from "../Component";
import ValidationMessage from '../ValidationMessage'

class Input extends Component {
    validationMessage: ValidationMessage
    getInputValue: (event: Event) => void = () => {};
    constructor (parentNode: HTMLElement, type: string, initValue?: string) {
        super(parentNode, 'input')
        this.element.setAttribute('type', type);
        
        if (initValue) this.element.setAttribute('value', initValue);
        this.element.addEventListener('input', (event) => {
            this.getInputValue(event);
            this.validateInputValue(event)
          });
    }
    validateInputValue(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const value = input.value
        if(value.length<1) {
            this.element.classList.add('input_error')
        this.validationMessage = new ValidationMessage (this.element, 'div', ['error_message'], 'Поле не должно быть пустым')
        } else {
            this.validationMessage.remove()
        }
}
}

export default Input;