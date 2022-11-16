import './form.scss'
import { checkPhoneNumber } from './../../api/phoneApi';
import Button from "../Button";
import Component from "../Component";
import Input from "../Input";
import ValidationMessage from "../ValidationMessage"

class Form extends Component {
    private input: Input
    private button: Button
    private span: Component
    private inputWrapper: Component
    private validationMessage: ValidationMessage;
    message = ''
    inputValue = ''

    constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form'])
    
    this.inputWrapper = new Component(this.element, 'div', ['input-container'])
    this.inputWrapper.element.addEventListener('click', ()=>{
        this.input.element.focus()
    })

    this.input = new Input(this.inputWrapper.element, 'text', '', 'Ваш номер...')
    this.input.getInputValue = (event) => this.updateInputValue(event)
    this.input.validateInputValue = (event) => this.validateInputValue(event)

    this.button = new Button(this.element, '', ['button'])
    this.button.onClick = () => this.checkNumber(this.inputValue)
    this.button.setDisabled(true)
    this.button.element.innerHTML = `<i class="fa-solid fa-pen-to-square button_text"></i>`
    const buttonText = new Component(this.button.element, 'div', ['button_text'], 'заказать')


}

    updateInputValue(event: Event){
        if (this.button.element.getAttribute('disabled')){
            this.button.removeDisabled()
        }
        if (this.message) {
            this.span.element.remove()
        }
        const input = event.currentTarget as HTMLInputElement;
        this.inputValue = input.value


        this.button.setDisabled(this.inputValue === '')
    }

    validateInputValue(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const value = input.value;
        if (value.length < 1) {
          this.inputWrapper.element.classList.add("input-container_error");
          this.validationMessage = new ValidationMessage(
            this.element,
            "div",
            ["message_error"],
            "Поле не должно быть пустым"
          );
        } else {
          this.inputWrapper.element.classList.remove("input-container_error");
          this.validationMessage && this.validationMessage.remove();
        }
      }

    private async checkNumber(number: string): Promise<void> {
        this.button.setDisabled(true)
        const data = await checkPhoneNumber(number)
        if (data) {
            this.message = data.message
            this.span = new ValidationMessage(this.element, 'div', ['message'], this.message)
        }
    }
}

export default Form;