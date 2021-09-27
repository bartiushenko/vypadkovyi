
export class ListOrderingValuesTable extends React.Component {
  constructor() {
    super();
    this.setInputList = this.setInputList.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"input-list": ["перший","другий", "третій", " четвертий", "п'ятий"], "reload": true}
  }

  setInputList(event) {
    try {
      console.log(event);
      let inputList = event.target.value.split(",");
      this.setState({"input-list": inputList});
    } catch (err) {
      console.log(err);
    }
  }

  shouldReload() {
    this.setState({reload:!this.state.reload});
  }


  render() {
    let outputList =  take_n_elements(this.state["input-list"], this.state["input-list"].length)
     .map(t => t.trim())
     .map(item => React.createElement("tr", null,
           React.createElement("td", null, React.createElement("span", null, item))
        ));
    return React.createElement("table", {className: "table table-striped thead-dark"},
          React.createElement("thead", null,
           React.createElement("tr", null,
             React.createElement("td", {"className": "form-inline"},
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inputlistfor", className: "col-sm-2 col-form-label"}, "список (через кому):"),
                 React.createElement("textarea", {id: "inputlistfor", onChange: this.setInputList, value: this.state['input-list']})),
               React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "оновити")))),
          React.createElement("tbody", null,          outputList)
    );
  }
}

