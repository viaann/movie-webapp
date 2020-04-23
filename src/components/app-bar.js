class Appbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            nav a {
                font-size: 17px;
                font-weight: 400;
                text-decoration: none;
                color: white;
            }
            
            nav {
                background-color: #120136;
                padding: 5px;
                position: sticky;
                top: 0;
            }
            
            nav a:hover {
                font-weight: bold;
            }
            
            nav li {
                display: inline-block;
                list-style-type: none;
                margin-right: 15px;
            }
        </style>
        
        <nav>
            <ul>
                <li><a href="#" style="font-weight: bold; margin: 10px;">Movies</a></li>
                <li><a href="#listNowPlaying">Playing</a></li>
                <li><a href="#listUpcoming">Upcoming</a></li>
                <li><a href="#listPopular">Popular</a></li>
            </ul>
        </nav>`;
        
    }
}

customElements.define("app-bar", Appbar);
