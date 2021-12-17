
function getRandomState() {
  return {
    "land-kadastr": make_digits(12) + ':' + make_digits(3) + ':' + make_digits(4),
    "neruhome-reiestr-nomer": make_digits(13),
    "neruhome-nomer-vlasnosti": make_digits(9),
    "neruhome-data-vlasnosti": toUkrDateTime(new Date(Math.round(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000 * Math.random())))
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
        width: "60%"
      }
    })), React.createElement("thead", null,
    React.createElement("tr", null,
    React.createElement("th", null, ""),
    React.createElement("th", null,  React.createElement("button", {
      onClick: this.nextRandomState, className: "btn-primary mb-2"
    }, "оновити")))), React.createElement("tbody", null, React.createElement("tr", null,
    React.createElement("td", null, "\u043A\u0430\u0434\u0430\u0441\u0442\u0440\u043E\u0432\u0438\u0439 \u043D\u043E\u043C\u0435\u0440"),
    React.createElement("td", null, React.createElement("span", {
      className: "land-kadastr"
    }, this.state["land-kadastr"]))),
     React.createElement("tr", null,
     React.createElement("td", null, "\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u043E\u0431\u0454\u043A\u0442\u0430 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0433\u043E \u043C\u0430\u0439\u043D\u0430"),
     React.createElement("td", null, React.createElement("span", {
      className: "neruhome-reiestr-nomer"
    }, this.state["neruhome-reiestr-nomer"]))),
    React.createElement("tr", null,
    React.createElement("td", null, "\u043D\u043E\u043C\u0435\u0440 \u0437\u0430\u043F\u0438\u0441\u0443 \u043F\u0440\u043E \u043F\u0440\u0430\u0432\u043E \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456"),
    React.createElement("td", null, React.createElement("span", {
      className: "neruhome-nomer-vlasnosti"
    }, this.state["neruhome-nomer-vlasnosti"]))),
    React.createElement("tr", null,
     React.createElement("td", null, "\u0434\u0430\u0442\u0430, \u0447\u0430\u0441 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"),
     React.createElement("td", null, React.createElement("span", {
      className: "neruhome-data-vlasnosti"
    }, this.state["neruhome-data-vlasnosti"])))
    )));
  }

}

ReactDOM.render( React.createElement(LEValuesTable, null), document.getElementById("root"));
