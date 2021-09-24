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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
      className: "table table-striped thead-dark"
    }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
      style: {
        width: "15%"
      }
    }), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", {
      style: {
        width: "33%"
      }
    })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0411\u041B\u041E\u041A"), /*#__PURE__*/React.createElement("th", null, "\u041A\u041B\u042E\u0427"), /*#__PURE__*/React.createElement("th", null, "\u0417\u041D\u0410\u0427\u0415\u041D\u041D\u042F ", /*#__PURE__*/React.createElement("button", {
      onClick: this.nextRandomState,  className: "btn-primary mb-2"
    }, "оновити")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0404\u0414\u0420\u041F\u041E\u0423"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "podatkova-edrpou"
    }, this.state["podatkova-edrpou"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u0301\u043B\u044C\u043D\u0438\u0439 \u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0301\u0432\u0438\u0439 \u043D\u043E\u0301\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u043D\u0438\u043A\u0430 \u043F\u043E\u0434\u0430\u0442\u043A\u0443 \u043D\u0430 \u0434\u043E\u0434\u0430\u043D\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "podatkova-pdv"
    }, this.state["podatkova-pdv"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u041A\u0412\u0415\u0414"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "podatkova-kved"
    }, this.state["podatkova-kved"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0434\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "zagalna-data-narodgenia"
    }, this.state["zagalna-data-narodgenia"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u043D\u0430\u0437\u0432\u0430"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "zagalna-nazva"
    }, this.state["zagalna-nazva"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0442\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "contactna-telefon"
    }, this.state["contactna-telefon"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "email"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "contactna-email"
    }, this.state["email"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "web"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "contactna-web"
    }, this.state["web"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), /*#__PURE__*/React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 a\u0434\u0440\u0435\u0441\u0430"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "propiska-addres"
    }, this.state["propiska-address"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), /*#__PURE__*/React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "propiska-zip"
    }, this.state["propiska-zip"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0430 \u0456\u043D\u0444\u043E"), /*#__PURE__*/React.createElement("td", null, "IBAN"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "bank-iban"
    }, this.state["bank-iban"]))))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(LEValuesTable, null), document.getElementById("root"));
