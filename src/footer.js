import { LitElement, html, css } from 'lit';


export class Footer extends LitElement {
    render() {
        return html`
            <footer class="footer">
                <img src="./src/assets/logo-arcasiles.png" alt="logo arcasiles" class="logo">
                <div class="socials">
                    <img src="./src/assets/icono-instagram.png" alt="logo arcasiles" class="icono-social">
                    <img src="./src/assets/icono-linkedin.png" alt="logo arcasiles" class="icono-social">
                </div>
                <p>© Arcasiles Group. All Rights Reserved. Licensing</p>
                
            </footer>
        `
    }
    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                background: var(--primary-dark);
                color: var(--white);
                border-top: 3px solid var(--yellow);
                margin-top: 60px;
            }

            .footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 32px 40px;
                max-width: 1200px;
                margin: 0 auto;
            }

            .logo {
                height: 40px;
                width: auto;
                filter: brightness(0) invert(1);
            }

            .socials {
                display: flex;
                gap: 16px;
            }

            .icono-social {
                height: 24px;
                width: 24px;
                filter: brightness(0) invert(1);
                transition: opacity 0.2s ease;
                cursor: pointer;
            }

            .icono-social:hover {
                opacity: 0.7;
            }

            p {
                font-size: 0.8rem;
                color: var(--dark-gray);
                margin: 0;
            }

 
                `
            }
        }


window.customElements.define('arc-footer', Footer)