import { LitElement, html, css } from "lit";

export class EventCard extends LitElement {
    static get properties() {
        return {
            image: { type: String },
            title: { type: String },
            date: { type: String },
            venue: { type: String },
            link: { type: String },
            description: { type: String }
        }
    }
    constructor() {
        super();
        this.image = ""
        this.title = ""
        this.date = ""
        this.venue = ""
        this.link = ""
        this.description = ""
    }
    render() {
        return html`
        <section class="card">
            <img class="card-image" src=${this.image} alt="" >
            <h2 class="card-title">${this.title}</h2>
            <h3 class="card-date">${this.date}</h3>
            <h3 class="card-venue">${this.venue}</h3>
            <a href=${this.link} target="_blank" class="card-link">Enlace para registrarse</a>
            <p class="card-description">${this.description}</p>
        </section>
`
    }
    static get styles() {
        return css`
        :host {
        *{box-sizing: border-box;}
        
        display: flex;

        max-width: 360px;
        min-width: 30%;
        padding: 40px 30px;
        flex: 1;

        background: var(--semi-yellow);
        color: var(--primary-dark);

        border: 1px solid var(--yellow);
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

        overflow: hidden;

        }

        .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 20px;
        
        }
        `
    }
}

window.customElements.define('event-card', EventCard)