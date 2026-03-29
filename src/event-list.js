import { LitElement, html, css } from 'lit';
import events from './data/events.json';
import './event-card';

export class EventList extends LitElement {
    render() {
        return html`
        <div class="event-list">
            ${events.map(event => html`
                <event-card
                    title=${event.title}
                    date=${event.date}
                    venue=${event.venue}
                    link=${event.link}
                    description=${event.description}
                    image=${event.image}
                ></event-card>
            `)}
        </div>
    `
    }
    static get styles() {
        return css`
        :host{
        *{box-sizing: border-box;}
        }
       .event-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 40px;
        }
        `
    }
}


window.customElements.define('event-list', EventList)