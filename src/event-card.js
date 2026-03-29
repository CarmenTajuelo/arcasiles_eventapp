import { LitElement, html, css } from "lit";
import './badge-status';

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
        const today = new Date()
        const eventDate = new Date(this.date)
        const formattedDate = new Date(this.date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        return html`
        <section class="card">
            <img class="card-image" src=${this.image} alt="">
            <badge-status date=${this.date}></badge-status>
            <div class="card-content">
                <h2 class="card-title">${this.title}</h2>
                <h3 class="card-date">${formattedDate}</h3>
                <h3 class="card-venue">${this.venue}</h3>
                ${eventDate > today ? 
                    html`<a href=${this.link} target="_blank" class="card-link">Enlace para registrarse</a>` : 
                    html`<span class="card-link-disabled">Evento finalizado</span>`}
                <p class="card-description">${this.description}</p>
            </div>
        </section>
        `
    }
    static get styles() {
        return css`
        :host {
            * { box-sizing: border-box; }
            display: flex;
            flex-direction: column;
            min-width: 30%;
            max-width: 360px;
            flex: 1;
            background: var(--white);
            color: var(--primary-dark);
            border: 1px solid var(--gray);
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            padding: 0;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        :host(:hover) {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        badge-status {
            display: flex;
            justify-content: flex-end;
            padding: 8px 12px 0;
        }

        .card-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .card-title {
            font-size: 1.1rem;
            margin: 0;
        }

        .card-date, .card-venue {
            font-size: 0.85rem;
            margin: 0;
            color: var(--dark-gray);
        }

        .card-link {
            display: inline-block;
            margin-top: 8px;
            padding: 8px 16px;
            background: var(--yellow);
            color: var(--primary-dark);
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            align-self: flex-start;
        }

        .card-link-disabled {
            display: inline-block;
            margin-top: 8px;
            padding: 8px 16px;
            background: var(--gray);
            color: var(--dark-gray);
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.85rem;
            cursor: not-allowed;
            opacity: 0.6;
        }

        .card-description {
            font-size: 0.85rem;
            color: var(--dark-gray);
            margin: 0;
        }
        `
    }
}

window.customElements.define('event-card', EventCard)