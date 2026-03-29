import { LitElement, html, css } from "lit";

export class Badge extends LitElement {
    static get properties() {
        return {
            date: { type: String }

        }
    }

    render() {
        
        const today = new Date()
        const eventDate = new Date(this.date)

        let status = ''

        if (eventDate < today) {
            status = 'pasado'
        } else if (eventDate > today) {
            status = 'siguiente'
        } else {
            status = 'hoy'
        }

        return html`
        <span class="badge ${status}">${status}</span>
        `
    }
    static get styles() {
        return css`
       :host {
        display: inline-block;
        }

        .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        }

        .pasado {
        background: #fde8e8;
        color: #c0392b;
        border: 1px solid #e74c3c;
        }

        .siguiente {
        background: #eafaf1;
        color: #1e8449;
        border: 1px solid #27ae60;
        }

        .hoy {
        background: #fef9e7;
        color: #b7950b;
        border: 1px solid #f9be4a;
        }
        `
    }
}

window.customElements.define('badge-status', Badge)