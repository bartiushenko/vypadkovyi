export class ChessValuesTable extends React.Component {
  constructor() {
    super();
    this.setNeededFigures = this.setNeededFigures.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"nfigures": 2, "koloda_povna": true, "reload": true}
  }

  setNeededFigures(event) {
    try {
      console.log(event);
      this.setState({"nfigures": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }

  shouldReload() {
    this.setState({reload:!this.state.reload});
  }


  render() {
    let cards =  take_n_elements(
    [
    9812,9813,
    9814,9814,
    9815,9815,
    9816,9816,
    9817,9817,9817,9817,9817,9817,9817,9817,
    9818,9819,
    9820,9820,
    9821,9821,
    9822,9822,
    9823,9823,9823,9823,9823,9823,9823,9823
   ], this.state['nfigures'])
     .map(itm => React.createElement("span", {style: {"font-size": "10em", "font-family": "arial"}},  String.fromCharCode(itm)));
    return React.createElement("div", null,
           React.createElement("div", {class: "form-inline"},
             React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
               React.createElement("label", {"htmlFor":  "inptNfigures", className: "col-sm-2 col-form-label"}, "кількість фігур "),
               React.createElement("input", {id: "inptNfigures", type: "text", onChange: this.setNeededFigures, value: this.state['nfigures']})),
             React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "витягти")),
           React.createElement("div", {style: {"word-wrap": "break-word"}}, cards)
           );
  }
}

