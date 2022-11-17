import Component from '../Component';

class Button extends Component {
    onClick: () => void = () => {};

    constructor(parentNode: HTMLElement, text: string, styles?: string[], disabled = false) {
        super(parentNode, 'button', styles, text);

        this.element.addEventListener('click', () => this.onClick());

        if (disabled) this.setDisabled(true);
    }

    setDisabled(value = false): void {
        this.element.toggleAttribute('disabled', value);
    }

    removeDisabled(): void {
        this.element.removeAttribute('disabled');
    }
}

export default Button;
