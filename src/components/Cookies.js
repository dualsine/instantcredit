import React, { Component } from "react";

class Cookies extends Component {
  closeCookies() {
    document.getElementById("cookies").remove();
  }

  render() {
    return (
      <div id="cookies">
        <div className="left">
          Informujemy, że w celu zapewnienia jak najlepszej obsługi nasza strona
          korzysta z ciasteczek (plików cookies). Korzystając z naszej strony,
          bez zmiany ustawień przeglądarki wyrażasz zgodę na wykorzystanie przez
          nas plików cookies. Jednocześnie przypominamy, że w każdej chwili masz
          możliwość zmiany ustawień plików cookies. Więcej informacji możesz
          znaleźć w <a href="/polityka-prywatnosci">Polityce cookies</a>.
        </div>
        <div className="right">
          <div
            className="button"
            onClick={this.closeCookies}
            id="button-cookies"
          >
            Zgadzam się
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
