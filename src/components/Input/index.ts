import Component from "../Component";

class Input extends Component {
  getInputValue: (event: Event) => void = () => {};
  validateInputValue: (event: Event) => void = () => {};
  constructor(
    parentNode: HTMLElement,
    type: string,
    initValue?: string,
    placeholder?: string
  ) {
    super(parentNode, "input", ["input"]);
    this.element.setAttribute("type", type);
    this.element.setAttribute("placeholder", placeholder);

    if (initValue) this.element.setAttribute("value", initValue);
    this.element.addEventListener("input", (event) => {
      this.getInputValue(event);
      this.validateInputValue(event);
    });
  }
}

export default Input;
