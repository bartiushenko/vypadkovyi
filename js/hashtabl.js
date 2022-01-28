async function sha256(message, algo) {
    // encode as UTF-8
    console.log("encode " + message + " " + algo);
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest(algo, msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export class ListOrderingValuesTable extends React.Component {
  constructor() {
    super();
    this.setMsg = this.setMsg.bind(this);
    this.setAlgo = this.setAlgo.bind(this);
    this.shouldReload = this.shouldReload.bind(this);
    this.state = {"msg": "повідомлення", "algo": "SHA256", "reload": true}
  }

  setAlgo(event) {
    try {
      console.log(event);
      let newAlgo = event.target.value.split(",");
      sha256(this.state["msg"], newAlgo).then(out => this.setState({"algo": newAlgo, "out": out}));
    } catch (err) {
      console.log(err);
    }
  }
  
  setMsg(event) {
    try {
      console.log(event);
      let newMsg = event.target.value.split(",");
      sha256(newMsg, this.state["algo"]).then(out => this.setState({"msg": newMsg, "out": out}));
    } catch (err) {
      console.log(err);
    }
  }

  shouldReload() {
    sha256(newMsg, this.state["algo"]).then(out => this.setState({"out": out, reload: !this.state.reload}));
  }


  render() {
    return React.createElement("table", {className: "table table-striped thead-dark"},
          React.createElement("thead", null,
           React.createElement("tr", null,
             React.createElement("td", {"className": "form-inline"},
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inputlistfor", className: "col-sm-2 col-form-label"}, "повідомлення"),
                 React.createElement("textarea", {id: "inputmsgfor", onChange: this.setMsg, value: this.state['msg']})),
               React.createElement("span", {className: "form-group mx-sm-3 mb-2"},
                 React.createElement("label", {"htmlFor":  "inputlistfor", className: "col-sm-2 col-form-label"}, "алгоритм"),
                 React.createElement("textarea", {id: "inputalgofor", onChange: this.setAlgo, value: this.state['algo']})),
               React.createElement("button", {onClick: this.shouldReload,  className: "col-sm-2  btn-primary mb-2"}, "оновити")))),
          React.createElement("tbody", null,          this.state['out'])
    );
  }
}
