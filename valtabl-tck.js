function getRandomState(ncoins) {
    return {
        "ncoins": ncoins,
        "coinimg": rnd_arr_elements(["ТАК", "НІ"], ncoins)
    };
};

class LEValuesTable extends React.Component {
    constructor() {
        super();
        this.nextRandomState = this.nextRandomState.bind(this);
        this.setNeededNcoins = this.setNeededNcoins.bind(this);
        this.state = getRandomState(1);
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
        return React.createElement("div", null,
            React.createElement("div", {className: "row"},
                React.createElement("h2", null, this.state["coinimg"][0]),
                React.createElement("button", {
                    onClick: this.nextRandomState,
                    className: "col-sm-3  btn-primary mb-3"
                }, "ПЕРЕВІРИТИ ЩЕ РАЗ"))
        );
    }
}

ReactDOM.render(React.createElement(LEValuesTable, null), document.getElementById("root"));
