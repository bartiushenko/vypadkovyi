
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export class UUIDValuesTable extends React.Component {
  constructor() {
    super();
    this.setNeededUUIDs = this.setNeededUUIDs.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"nuuid": 2, "reload": true}
  }

  setNeededUUIDs(event) {
    try {
      console.log(event);
      this.setState({"nuuid": event.target.value});
    } catch (err) {
      console.log(err);
    }
  }

  shouldReload() {
    this.setState({reload:!this.state.reload});
  }


  render() {
    let uuids =  Array.from({length: this.state["nuuid"]}, () => uuidv4())
     .map(item => React.createElement("tr", null,
           React.createElement("td", null, React.createElement("span", null, item))
        ));
    return React.createElement("table", {className: "table table-striped thead-dark"},
          React.createElement("thead", null,
           React.createElement("tr", null,
             React.createElement("td", {"className": "form-inline"},
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inptNuuid", className: "col-sm-2 col-form-label"}, "кількість uuid"),
                 React.createElement("input", {type: "text", id: "inptNuuid", onChange: this.setNeededUUIDs, value: this.state['nuuid']})),
               React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "оновити")))),
          React.createElement("tbody", null,          uuids)
    );
  }
}

