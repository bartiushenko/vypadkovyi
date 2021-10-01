function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export class NumberValuesTable extends React.Component {
  constructor() {
    super();
    this.setNeededNumbers = this.setNeededNumbers.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"nnumber": 2, "reload": true, "min": 1, "max":100}
  }

  setNeededNumbers(event) {
    try {
      console.log(event);
      this.setState({"nnumber": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }

  setNeededMin(event) {
    try {
      console.log(event);
      this.setState({"min": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }
  
  setNeededMax(event) {
    try {
      console.log(event);
      this.setState({"max": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }
  shouldReload() {
    this.setState({reload:!this.state.reload});
  }


  render() {
    let numbers =  Array.from({length: this.state["nnumber"]}, () => getRandomInt(this.state["min", this.state["max"])
     .map(item => React.createElement("tr", null,
           React.createElement("td", null, React.createElement("span", null, item))
        ));
    return React.createElement("table", {className: "table table-striped thead-dark"},
          React.createElement("thead", null,
           React.createElement("tr", null,
             React.createElement("td", {"className": "form-inline"},
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inptNnumber", className: "col-sm-2 col-form-label"}, "кількість чисел"),
                 React.createElement("input", {type: "text", id: "inptNnumber", onChange: this.setNeededNumbers, value: this.state['nnumber']})),
                 React.createElement("label", {"htmlFor":  "inptMin", className: "col-sm-2 col-form-label"}, "від (найменше можливе значення)"),
                 React.createElement("input", {type: "text", id: "inptMin", onChange: this.setNeededMin, value: this.state['min']})),                
                 React.createElement("label", {"htmlFor":  "inptMax", className: "col-sm-2 col-form-label"}, "до (найбільше можливе значення)"),
                 React.createElement("input", {type: "text", id: "inptMax", onChange: this.setNeededMax, value: this.state['max']})),                
               React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "оновити")))),
          React.createElement("tbody", null,  numbers)
    );
  }
}
