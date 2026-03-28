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
        display: block;
        
        }
        `
    }
}


window.customElements.define('event-list', EventList)