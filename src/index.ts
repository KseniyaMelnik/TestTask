import './styles/styles.scss';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.body;
    const app = new App(root);

    app.init();
});
