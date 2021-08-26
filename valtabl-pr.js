
function getRandomState() {
  return {
    "land-kadastr": make_digits(12) + ':' + make_digits(3) + ':' + make_digits(4),
    "neruhome-reiestr-nomer": make_digits(13),
    "neruhome-nomer-vlasnosti": make_digits(9),
    "neruhome-data-vlasnosti": toUkrDateTime(new Date(Math.round(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000 * Math.random()))),
    "transport-nomernyi-znak": make_transp_num(),
    "transport-vin": make_vin()
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
      onClick: this.nextRandomState
    }, "(\u041E\u041D\u041E\u0412\u0418\u0422\u0418)")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0437\u0435\u043C\u0435\u043B\u044C\u043D\u0430 \u0434\u0456\u043B\u044F\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("td", null, "\u043A\u0430\u0434\u0430\u0441\u0442\u0440\u043E\u0432\u0438\u0439 \u043D\u043E\u043C\u0435\u0440"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "land-kadastr"
    }, this.state["land-kadastr"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043D\u0435\u0440\u0443\u0445\u043E\u043C\u0435 \u043C\u0430\u0439\u043D\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u043E\u0431\u0454\u043A\u0442\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0433\u043E \u043C\u0430\u0439\u043D\u0430"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "neruhome-reiestr-nomer"
    }, this.state["neruhome-reiestr-nomer"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043D\u0435\u0440\u0443\u0445\u043E\u043C\u0435 \u043C\u0430\u0439\u043D\u043E"), /*#__PURE__*/React.createElement("td", null, "\u043D\u043E\u043C\u0435\u0440 \u0437\u0430\u043F\u0438\u0441\u0443 \u043F\u0440\u043E \u043F\u0440\u0430\u0432\u043E \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "neruhome-nomer-vlasnosti"
    }, this.state["neruhome-nomer-vlasnosti"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u043D\u0435\u0440\u0443\u0445\u043E\u043C\u0435 \u043C\u0430\u0439\u043D\u043E"), /*#__PURE__*/React.createElement("td", null, "\u0434\u0430\u0442\u0430, \u0447\u0430\u0441 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "neruhome-data-vlasnosti"
    }, this.state["neruhome-data-vlasnosti"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0438\u0439 \u0437\u0430\u0441\u0456\u0431"), /*#__PURE__*/React.createElement("td", null, "\u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u0441\u043E\u0431\u0443 (VIN)"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "transport-vin"
    }, this.state["transport-vin"]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0438\u0439 \u0437\u0430\u0441\u0456\u0431"), /*#__PURE__*/React.createElement("td", null, "\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u0437\u043D\u0430\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u0441\u043E\u0431\u0443"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "transport-nomernyi-znak"
    }, this.state["transport-nomernyi-znak"]
    ))))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(LEValuesTable, null), document.getElementById("root"));
