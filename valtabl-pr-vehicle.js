
function getRandomState() {
  let dob = new Date(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000 * Math.random());
  return {
    "land-kadastr": make_digits(12) + ':' + make_digits(3) + ':' + make_digits(4),
    "neruhome-reiestr-nomer": make_digits(13),
    "neruhome-nomer-vlasnosti": make_digits(9),
    "neruhome-data-vlasnosti": toUkrDateTime(new Date(Math.round(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000 * Math.random()))),
    "transport-dov": dob.toISOString().substr(0, 10),
    "transport-nomernyi-znak": make_transp_num(),
    "transport-vin": make_vin(),
    "transport-type": rnd_arr_element(["ЛЕГКОВИЙ ХЕТЧБЕК","ЛЕГКОВИЙ УНІВЕРСАЛ","ЛЕГКОВИЙ СЕДАН", "ЛЕГКОВИЙ МІНІВЕН"]),
    "transport-maximum-mass": Math.round(1500+2000*Math.random()),
    "transport-mass": Math.round(1000+2000*Math.random())
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
    })), React.createElement("thead", null, React.createElement("tr", null,
    React.createElement("th", null, ""),
    React.createElement("th", null, "", React.createElement("button", {
      onClick: this.nextRandomState,  className: "btn-primary mb-2"
    }, "оновити")))), React.createElement("tbody", null,
   

    React.createElement("tr", null, 
                  React.createElement("td", null, "дата будівництва"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-dov"}, this.state["transport-dov"])
    )),

    React.createElement("tr", null, 
                  React.createElement("td", null, "тип"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-type"}, this.state["transport-type"])
    )),
                                                                                            
     React.createElement("tr", null, 
                  React.createElement("td", null, "повна маса, кг"),
                  React.createElement("td", null, React.createElement("span", {className: "transport-maximum-mass"}, this.state["transport-maximum-mass"])
    )),
                                                                                            
    React.createElement("tr", null, 
                  React.createElement("td", null, "власна маса, кг"),
                  React.createElement("td", null, React.createElement("span", {className: "transport-mass"}, this.state["transport-mass"])
    )),
                                                                                            
 React.createElement("tr", null,
  React.createElement("td", null, "ідентифікаційний номер транспортного засобу (VIN)"),
  React.createElement("td", null, React.createElement("span", {
      className: "transport-vin"
    }, this.state["transport-vin"]))), 


React.createElement("tr", null, 
       React.createElement("td", null, "реєстраційний знак транспортного засобу"),
         React.createElement("td", null, React.createElement("span", {
      className: "transport-nomernyi-znak"
    }, this.state["transport-nomernyi-znak"]
    ))))));
  }

}

ReactDOM.render( React.createElement(LEValuesTable, null), document.getElementById("root"));
