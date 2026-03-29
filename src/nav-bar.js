import { LitElement, html, css } from 'lit';
import logo from './assets/logo-arcasiles.png'


export class Navbar extends LitElement {
    render() {
        return html`
            <nav class="nav-bar">
                <img src="${logo}" alt="logo arcasiles" class="logo">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#agenda">Agenda</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        `
    }
    static get styles() {
        return css`
        :host {
            display: block;
            width: 100%;
            background: var(--white);
            border-bottom: 2px solid var(--yellow);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .nav-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 40px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            height: 40px;
            width: auto;
        }

        ul {
            display: flex;
            list-style: none;
            gap: 32px;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: var(--primary-dark);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }

        a:hover {
            color: var(--yellow);
        }
                `
            }
        }


window.customElements.define('nav-bar', Navbar)