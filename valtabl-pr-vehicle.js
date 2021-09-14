
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
      className: "table table-striped thead-dark"
    }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
      style: {
        width: "15%"
      }
    }), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", {
      style: {
        width: "33%"
      }
    })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0411\u041B\u041E\u041A"), /*#__PURE__*/React.createElement("th", null, "\u041A\u041B\u042E\u0427"), /*#__PURE__*/React.createElement("th", null, "\u0417\u041D\u0410\u0427\u0415\u041D\u041D\u042F ", /*#__PURE__*/React.createElement("button", {
      onClick: this.nextRandomState,  className: "col-sm-2  btn-primary mb-2"
    }, "оновити")))), /*#__PURE__*/React.createElement("tbody", null,
   

    React.createElement("tr", null, 
                  React.createElement("td", null, "транспортний засіб"), 
                  React.createElement("td", null, "дата будівництва"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-dov"}, this.state["transport-dov"])
    )),

    React.createElement("tr", null, 
                  React.createElement("td", null, "транспортний засіб"), 
                  React.createElement("td", null, "тип"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-type"}, this.state["transport-type"])
    )),
                                                                                            
     React.createElement("tr", null, 
                  React.createElement("td", null, "транспортний засіб"), 
                  React.createElement("td", null, "повна маса"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-maximum-mass"}, this.state["transport-maximum-mass"])
    )),
                                                                                            
    React.createElement("tr", null, 
                  React.createElement("td", null, "транспортний засіб"), 
                  React.createElement("td", null, "власна маса"), 
                  React.createElement("td", null, React.createElement("span", {className: "transport-mass"}, this.state["transport-mass"])
    )),
                                                                                            
 /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0438\u0439 \u0437\u0430\u0441\u0456\u0431"), /*#__PURE__*/React.createElement("td", null, "\u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u0441\u043E\u0431\u0443 (VIN)"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "transport-vin"
    }, this.state["transport-vin"]))), 


/*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/
           React.createElement("td", null, "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0438\u0439 \u0437\u0430\u0441\u0456\u0431"), 
       /*#__PURE__*/React.createElement("td", null, "\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u0437\u043D\u0430\u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u0441\u043E\u0431\u0443"), 
         /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "transport-nomernyi-znak"
    }, this.state["transport-nomernyi-znak"]
    ))))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(LEValuesTable, null), document.getElementById("root"));
