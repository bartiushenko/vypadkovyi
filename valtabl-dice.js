
function getRandomState(ncoins) {
  return {
    "ncoins": ncoins,
    "coinimg": rnd_arr_elements(["9861", "9860", "9859","9858", "9857", "9856"], ncoins)
  };
};

class LEValuesTable extends React.Component {
  constructor() {
    super();
    this.nextRandomState = this.nextRandomState.bind(this);
    this.setNeededNcoins = this.setNeededNcoins.bind(this);
    this.state = getRandomState(2);
  }

  nextRandomState() {
    this.setState(getRandomState(this.state["ncoins"]));
  }

  setNeededNcoins(event) {
    try {
      console.log(event);
      let ncoins = event.target.value;
      this.setState(getRandomState(ncoins));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let images = this.state["coinimg"].map(itm => React.createElement("span", {style: {"font-size": "10em"}},  String.fromCharCode(itm)));
    return React.createElement("div", null,
           React.createElement("div", {class: "row"}, React.createElement("label", null, "кількість кісточок ",
                                             React.createElement("input", {
                                                  type: "text",
                                                  onChange: this.setNeededNcoins,
                                                  value: this.state['ncoins']
                                                }),
                                             React.createElement("button", {onClick: this.nextRandomState,  className: "col-sm-2  btn-primary mb-2"}, "підкинути"))),
           React.createElement("div", {style: {"word-wrap": "break-word"}}, images)
    );
  }
}

ReactDOM.render( React.createElement(LEValuesTable, null), document.getElementById("root"));
