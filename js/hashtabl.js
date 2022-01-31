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

export class HashTable extends React.Component {
    constructor() {
        super();
        this.setMsg = this.setMsg.bind(this);
        this.setAlgo = this.setAlgo.bind(this);
        this.shouldReload = this.shouldReload.bind(this);
        this.state = {"msg": "повідомлення", "algo": "SHA-1", "reload": true}
    }

    setAlgo(event) {
        let newAlgo = event.target.value;
        this.setState({"algo": newAlgo, "out": ""});
    }

    setMsg(event) {
        let newMsg = event.target.value;
        this.setState({"msg": newMsg, "out": ""});
    }

    shouldReload() {
        sha256(this.state["msg"], this.state["algo"]).then(out => this.setState({
            "out": out,
            reload: !this.state.reload
        }));
    }


    render() {
        return React.createElement("article", {className: "table table-striped thead-dark"},
                        React.createElement("p", {className: "form-group mx-sm-3 mb-2"},
                            React.createElement("label", {
                                "htmlFor": "inputlistfor",
                                className: "col-sm-2 col-form-label"
                            }, "текст"),
                            React.createElement("textarea", {
                                id: "inputmsgfor",
                                onChange: this.setMsg,
                                value: this.state['msg']
                            })),
                        React.createElement("p", {className: "form-group mx-sm-3 mb-2"},
                            React.createElement("label", {
                                "htmlFor": "inputlistfor",
                                className: "col-sm-2 col-form-label"
                            }, "алгоритм"),
                            React.createElement("select", {
                                    id: "inputalgofor",
                                    onChange: this.setAlgo,
                                    value: this.state['algo']
                                },
                                React.createElement("option", {value: "SHA-1"}, "SHA-1"),
                                React.createElement("option", {value: "SHA-256"}, "SHA-256"),
                                React.createElement("option", {value: "SHA-384"}, "SHA-384"),
                                React.createElement("option", {value: "SHA-512"}, "SHA-512"),
                            )),
                        React.createElement("button", {
                            onClick: this.shouldReload,
                            className: "col-sm-2  btn-primary mb-2"
                        }, "обчислити"),
                    React.createElement("p", null, this.state['out'])
        );
    }
}
