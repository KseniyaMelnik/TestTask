import Form from './../components/Form';

class App {
    form: Form;
    constructor(private root: HTMLElement) {}

    init(): void {
        this.form = new Form(this.root);
    }
}

export default App;
