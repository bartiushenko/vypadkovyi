
function getRandomPasswords(n) {
  return [
    {"cn": "pwd-alphas", "v": make_alphas(n), "ttl": "[a-z]"},
    {"cn": "pwd-alphasAlphas", "v": makernd('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', n), "ttl": "[a-zA-Z]"},
    {"cn": "pwd-digits", "v": make_digits(n), "ttl": "[0-9]"},
    {"cn": "pwd-alphasAlphasdigits", "v": makernd('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', n), "ttl": "[a-zA-Z0-9]"},
    {"cn": "pwd-alphasAlphasdigitsspecials", "v": makernd('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~@#$%^&*', n), "ttl": "[a-zA-Z0-0~!@#$%%^&]"}
  ];
};

function getRow(title, classname, state) {
  return React.createElement("tr", null,
      React.createElement("td", null, title),
      React.createElement("td", null,
       React.createElement("span", {className: classname}, state[classname])));
};

export class PwdValuesTable extends React.Component {
  constructor() {
    super();
    this.setNeededNcoins = this.setNeededNcoins.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"npwd": 12, reload: true}
  }

  setNeededNcoins(event) {
    try {
      console.log(event);
      this.setState({"npwd": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }

  shouldReload() {
    this.setState({reload:!this.state.reload});
  }

  render() {
    let images = getRandomPasswords(this.state["npwd"])
      .map(item => React.createElement("tr", null,
       React.createElement("td", null, item["ttl"]),
       React.createElement("td", null, React.createElement("span", {"className": item["cn"]}, item["v"]))
    ));
    return React.createElement("table", {className: "table table-striped thead-dark"},
          React.createElement("colgroup", null,
            React.createElement("col", {style: {width: "30%"}}),
            React.createElement("col", null)),
          React.createElement("thead", null,
           React.createElement("tr", null,
             React.createElement("td", {"className": "form-inline", "colspan": 2},
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inptNPwd", className: "col-sm-2 col-form-label"}, "кількість cимволів"),
                 React.createElement("input", {type: "text", id: "inptNPwd", onChange: this.setNeededNcoins, value: this.state['npwd']})),
               React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "оновити")))),
          React.createElement("tbody", null,          images)
    );
  }
}

