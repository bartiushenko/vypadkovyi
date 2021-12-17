function getRandomState() {
  let dob = new Date(25 * 365 * 24 * 60 * 60 * 1000 + (Date.now() - 25 * 365 * 24 * 60 * 60 * 1000) * Math.random());
  let edrpou = make_edrpou();
  let web = make_alphas(3 + Math.random() * 20) + ".example.com";
  return {
    "bank-iban": make_iban(),
    "contactna-telefon": "+380" + make_digits(9),
    "email": make_alphas(3 + Math.random() * 20) + "@" + web,
    "web": web,
    "podatkova-kved": make_digits(2) + "." + make_digits(2),
    "podatkova-edrpou": edrpou,
    "podatkova-pdv": edrpou.substring(0, 7) + make_digits(12 - 7),
    "propiska-address": make_legal_address(),
    "propiska-zip": make_digits(5),
    "zagalna-data-narodgenia": dob.toISOString().substr(0, 10),
    "zagalna-nazva": make_le_name()
  };
}

;

class LEValuesTable extends React.Component {
  constructor() {
    super();
    this.nextRandomState = this.nextRandomState.bind(this);
    this.state = getRandomState();
  }

  nextRandomState() {
    this.setState(getRandomState());
  }

  render() {
    return React.createElement("div", null, React.createElement("table", {
      className: "table table-striped thead-dark"
    }, React.createElement("colgroup", null, React.createElement("col", {
      style: {
        width: "15%"
      }
    }), React.createElement("col", null), React.createElement("col", {
      style: {
        width: "33%"
      }
    })), React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "\u0411\u041B\u041E\u041A"), React.createElement("th", null, "\u041A\u041B\u042E\u0427"), React.createElement("th", null, "\u0417\u041D\u0410\u0427\u0415\u041D\u041D\u042F ", React.createElement("button", {
      onClick: this.nextRandomState,  className: "btn-primary mb-2"
    }, "оновити")))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0404\u0414\u0420\u041F\u041E\u0423"), React.createElement("td", null, React.createElement("span", {
      className: "podatkova-edrpou"
    }, this.state["podatkova-edrpou"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u0301\u043B\u044C\u043D\u0438\u0439 \u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0301\u0432\u0438\u0439 \u043D\u043E\u0301\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u043D\u0438\u043A\u0430 \u043F\u043E\u0434\u0430\u0442\u043A\u0443 \u043D\u0430 \u0434\u043E\u0434\u0430\u043D\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), React.createElement("td", null, React.createElement("span", {
      className: "podatkova-pdv"
    }, this.state["podatkova-pdv"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u041A\u0412\u0415\u0414"), React.createElement("td", null, React.createElement("span", {
      className: "podatkova-kved"
    }, this.state["podatkova-kved"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0434\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-data-narodgenia"
    }, this.state["zagalna-data-narodgenia"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u043D\u0430\u0437\u0432\u0430"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-nazva"
    }, this.state["zagalna-nazva"]))), React.createElement("tr", null, React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0442\u0435\u043B\u0435\u0444\u043E\u043D"), React.createElement("td", null, React.createElement("span", {
      className: "contactna-telefon"
    }, this.state["contactna-telefon"]))), React.createElement("tr", null, React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "email"), React.createElement("td", null, React.createElement("span", {
      className: "contactna-email"
    }, this.state["email"]))), React.createElement("tr", null, React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "web"), React.createElement("td", null, React.createElement("span", {
      className: "contactna-web"
    }, this.state["web"]))), React.createElement("tr", null, React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 a\u0434\u0440\u0435\u0441\u0430"), React.createElement("td", null, React.createElement("span", {
      className: "propiska-addres"
    }, this.state["propiska-address"]))), React.createElement("tr", null, React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"), React.createElement("td", null, React.createElement("span", {
      className: "propiska-zip"
    }, this.state["propiska-zip"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "IBAN"), React.createElement("td", null, React.createElement("span", {
      className: "bank-iban"
    }, this.state["bank-iban"]))))));
  }

}

ReactDOM.render( React.createElement(LEValuesTable, null), document.getElementById("root"));
