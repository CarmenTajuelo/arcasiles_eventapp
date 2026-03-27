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
            <a href=${this.link} target="_blank" class="card-link"> Link to Register</a>
            <p class="card-description">${this.description}</p>
        </section>
`
    }
    static get styles() { }
}

window.customElements.define('event-card', EventCard)