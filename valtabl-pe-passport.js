
function get_random_state(neededDob) {
  let dob = neededDob === null ? new Date((Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) * Math.random()) : neededDob;
  let ipn = make_taxcode_fiz(dob);
  let idx_name = Math.floor(Math.random() * names["ім'я"][get_sex(ipn)].length);
  let idx_lastname = Math.floor(Math.random() * names["прізвище"][get_sex(ipn)].length);
  return {
    "neededDob": neededDob === null ? null : neededDob.toISOString().substr(0, 10),
    "bank-iban": make_iban(),
    "bank-mastercard": '5' + makernd('12345', 1) + make_digits(16 - 2),
    "bank-visa": '4' + make_digits(16 - 1),
    "email": make_alphas(3 + Math.random() * 20) + "@example.com",
    "id-card-data-vydachi": make_data_vydachi(dob),
    "id-card-data-organ-vydachi": make_digits(4),
    "id-card-data-misce-vydachi": get_id_place(),
    "id-card-nomer": make_digits(13),
    "podatkova-kved": make_digits(2) + "." + make_digits(2),
    "podatkova-grupa-spd": 1 + Math.round(2 * Math.random()),
    "pensiinyi-nomer-soc-strah": make_digits(10),
    "podatkova-taxcode": ipn,
    "propiska-address": make_legal_address(),
    "propiska-zip": make_digits(5),
    "prozhyvania-zip": make_digits(5),
    "contactna-telefon": "+380" + make_digits(9),
    "zagalna-data-narodgenia": dob.toISOString().substr(0, 10),
    "zagalna-demindex": make_dem_index(dob),
    "zagalna-firstname-ukr": names["ім'я"][get_sex(ipn)][idx_name],
    "zagalna-firstname-lat": names["ім'я-lat"][get_sex(ipn)][idx_name],
    "zagalna-secondname-ukr": rnd_arr_element(names["по-батькові"][get_sex(ipn)]),
    "zagalna-lastname-ukr": names["прізвище"][get_sex(ipn)][idx_lastname],
    "zagalna-lastname-lat": names["прізвище-lat"][get_sex(ipn)][idx_lastname],
    "zagalna-vaga": 50 + Math.round(100 * Math.random()),
    "zagalna-stat": get_sex(ipn),
    "zagalna-zrist": 150 + Math.round(50 * Math.random()),
    "zakordonnyi-card-nomer": make_ALPHAS(2) + make_digits(6),
    "zakordonnyi-data-misce-vydachi": get_zakordon_place(),
    "zakordonnyi-data-organ-vydachi": make_digits(4),
    "zakordonnyi-data-vydachi": make_data_vydachi(dob)
  };
}

;

class ValuesTable extends React.Component {
  constructor() {
    super();
    this.state = get_random_state(null);
    this.nextRandomState = this.nextRandomState.bind(this);
    this.setNeededDob = this.setNeededDob.bind(this);
  }

  nextRandomState() {
    let neededDob = this.state['neededDob'];

    try {
      if (neededDob === null) this.setState(get_random_state(null));else this.setState(get_random_state(new Date(neededDob)));
    } catch (err) {
      console.log(err);
      this.setState(get_random_state(null));
    }
  }

  setNeededDob(event) {
    try {
      console.log(event);
      let dob = new Date(event.target.value);
      this.setState(get_random_state(dob));
    } catch (err) {
      console.log(err);
      this.setState({
        'neededDob': event.target.value
      });
    }
  }

  render() {
    return React.createElement("div", null, React.createElement("table", {
      className: "table table-striped thead-dark"
    }, React.createElement("colgroup", null, React.createElement("col", {
      style: {
        width: "15%"
      }
    }), React.createElement("col", null), React.createElement("col", {
      style: {
        width: "33%"
      }
    })), React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "\u0411\u041B\u041E\u041A"), React.createElement("th", null, "\u041A\u041B\u042E\u0427"), React.createElement("th", null, "\u0417\u041D\u0410\u0427\u0415\u041D\u041D\u042F ", React.createElement("button", {
      onClick: this.nextRandomState,  className: "btn-primary mb-2"
    }, "оновити")))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "\u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u043D\u0438\u043A\u0430 \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432"), React.createElement("td", null, React.createElement("span", {
      className: "podatkova-taxcode"
    }, this.state["podatkova-taxcode"]))),
    React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0437\u0430\u043F\u0438\u0441\u0443 \u0443 \u0404\u0434\u0438\u043D\u043E\u043C\u0443 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u043C\u0443 \u0434\u0435\u043C\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E\u043C\u0443 \u0440\u0435\u0454\u0441\u0442\u0440\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-demindex"
    }, this.state["zagalna-demindex"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0456\u043C'\u044F"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-firstname-ukr"
    }, this.state["zagalna-firstname-ukr"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0456\u043C'\u044F (\u043B\u0430\u0442\u0438\u043D\u0438\u0446\u044F)"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-firstname-ukr"
    }, this.state["zagalna-firstname-lat"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-secondname-ukr"
    }, this.state["zagalna-secondname-ukr"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-lastname-ukr"
    }, this.state["zagalna-lastname-ukr"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 (\u043B\u0430\u0442\u0438\u043D\u0438\u0446\u044F)"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-lastname-ukr"
    }, this.state["zagalna-lastname-lat"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0434\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-data-narodgenia"
    }, this.state["zagalna-data-narodgenia"]))), React.createElement("tr", null, React.createElement("td", null, "\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E"), React.createElement("td", null, "\u0441\u0442\u0430\u0442\u044C"), React.createElement("td", null, React.createElement("span", {
      className: "zagalna-stat"
    }, this.state["zagalna-stat"]))),
     React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0456\u0434-\u043A\u0430\u0440\u0442\u0438"), React.createElement("td", null, "\u043D\u043E\u043C\u0435\u0440"), React.createElement("td", null, React.createElement("span", {
      className: "id-card-nomer"
    }, this.state["id-card-nomer"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0456\u0434-\u043A\u0430\u0440\u0442\u0438"), React.createElement("td", null, "\u0434\u0430\u0442\u0430 \u0432\u0438\u0434\u0430\u0447\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "id-card-data-vydachi"
    }, this.state["id-card-data-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0456\u0434-\u043A\u0430\u0440\u0442\u0438"), React.createElement("td", null, "\u043E\u0440\u0433\u0430\u043D, \u0449\u043E \u0432\u0438\u0434\u0430\u0432"), React.createElement("td", null, React.createElement("span", {
      className: "id-card-data-organ-vydachi"
    }, this.state["id-card-data-organ-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0456\u0434-\u043A\u0430\u0440\u0442\u0438"), React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0432\u0438\u0434\u0430\u0447\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "id-card-data-misce-vydachi"
    }, this.state["id-card-data-misce-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443 \u0437\u0430\u043A\u043E\u0440\u0434\u043E\u043D"), React.createElement("td", null, "\u043D\u043E\u043C\u0435\u0440"), React.createElement("td", null, React.createElement("span", {
      className: "zakordonnyi-card-nomer"
    }, this.state["zakordonnyi-card-nomer"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443 \u0437\u0430\u043A\u043E\u0440\u0434\u043E\u043D"), React.createElement("td", null, "\u0434\u0430\u0442\u0430 \u0432\u0438\u0434\u0430\u0447\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "zakordonnyi-data-vydachi"
    }, this.state["zakordonnyi-data-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443 \u0437\u0430\u043A\u043E\u0440\u0434\u043E\u043D"), React.createElement("td", null, "\u043E\u0440\u0433\u0430\u043D, \u0449\u043E \u0432\u0438\u0434\u0430\u0432"), React.createElement("td", null, React.createElement("span", {
      className: "zakordonnyi-data-organ-vydachi"
    }, this.state["zakordonnyi-data-organ-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0434\u043B\u044F \u0432\u0438\u0457\u0437\u0434\u0443 \u0437\u0430\u043A\u043E\u0440\u0434\u043E\u043D"), React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0432\u0438\u0434\u0430\u0447\u0456"), React.createElement("td", null, React.createElement("span", {
      className: "zakordonnyi-data-misce-vydachi"
    }, this.state["zakordonnyi-data-misce-vydachi"]))), React.createElement("tr", null, React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 a\u0434\u0440\u0435\u0441\u0430"), React.createElement("td", null, React.createElement("span", {
      className: "propiska-addres"
    }, this.state["propiska-address"]))), React.createElement("tr", null, React.createElement("td", null, "\u043C\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"), React.createElement("td", null, "\u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441"), React.createElement("td", null, React.createElement("span", {
      className: "propiska-zip"
    }, this.state["propiska-zip"])))
    )),
     React.createElement("p", null, React.createElement("label", null, " потрібна дата народження (yyyy-mm-dd):", React.createElement("input", {
      type: "text",
      onChange: this.setNeededDob,
      value: this.state['neededDob']
    }))));
  }

}

ReactDOM.render( React.createElement(ValuesTable, null), document.getElementById("root"));
