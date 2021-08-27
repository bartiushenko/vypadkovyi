var names = {
  "ім'я": {
    "Ч": ["Арес", "Августин", "Амбре", "Апалон", "Адам", "Аскольд", "Ангел", "Арон-Моісей", "Буржуй", "Богодар", "Братислав", "Вакула", "Вогнедар", "Грант", "Гедеон", "Гусман", "Дартан’ян", "Добриня", "Даміан-Меркурій", "Добре-Авенір", "Еней", "Єлісей", "Київ", "Князь", "Лимон", "Мілан", "Марсель", "Матео", "Ніл", "Ной", "Людвік", "Оскар", "Одисей", "Омар", "Октавіан", "Платон", "Принц", "Парижан", "Пантелеймон", "Річард", "Расмад-Рой", "Светодар", "Сулейман", "Спартак", "Соломон", "Тігран", "Тамерлан", "Тор", "Тадеуш", "Шархан", "Шаміль", "Ясмін", "Ясон", "Ярволод", "Яросвіт", "Яник"],
    "Ж": ["Анфіса", "Аурора", "Афіна", "Асоль", "Аврора", "Аполлінарія", "Божена", "Беатріса", "Весна", "Всеслава", "Вальківія", "Жасмін", "Женев’єва", "Златовласа", "Златослава", "Золушка", "Земфіра", "Зоря", "Єсенія", "Євангеліна", "Ізабелла", "Імперія", "Ізольда", "Квітка", "Луна", "Ліана", "Мальва", "Магдалина", "Мануела", "Мірабелла", "Мія-Хенд", "Мія", "Мира-Слава", "Мадонна", "Мія-Соломія", "Настасья", "Нєва", "Ніца", "Росава", "Регіна", "Розалія", "Санта-Марія", "Суламіта", "Самара", "Санта", "Одарка", "Олімпіада", "Тереза", "Теона", "Флоренція", "Фрея", "Хадіжа", "Хрусталіна", "Цвітозара", "Шанель", "Ясмін", "Юріка"]
  },
  "по-батькові": {
     "Ч": ["Аресович", "Августинович", "Амбреович", "Апалонович", "Адамович", "Аскольдович", "Ангелович", "Арон-Моісейович", "Буржуйович", "Богодарович", "Братиславович", "Вакулаович", "Вогнедарович", "Грантович", "Гедеонович", "Гусманович", "Дартан’янович",  "Даміан-Меркурійович", "Добре-Авенірович", "Енейович", "Єлісейович", "Київович", "Князьович", "Лимонович", "Міланович", "Марсельович", "Матеоович", "Нілович", "Нойович", "Людвікович", "Оскарович", "Одисейович", "Омарович", "Октавіанович", "Платонович", "Принцович", "Парижанович", "Пантелеймонович", "Річардович", "Расмад-Ройович", "Светодарович", "Сулейманович", "Спартакович", "Соломонович", "Тігранович", "Тамерланович", "Торович", "Тадеушович", "Шарханович", "Шамільович", "Ясмінович", "Ясонович", "Ярволодович", "Яросвітович", "Яникович"],
     "Ж": ["Аресівна", "Августинівна", "Амбреівна", "Апалонівна", "Адамівна", "Аскольдівна", "Ангелівна", "Арон-Моісеївна", "Богодарівна", "Братиславівна", "Вакуліна", "Вогнедарівна", "Грантівна", "Гедеонівна", "Гусманівна", "Дартан’янівна",  "Добре-Авенірівна", "Енеївна", "Єлісеївна", "Київівна", "Князьївна", "Лимонівна", "Міланівна", "Марсельівна", "Матеоівна", "Нілівна", "Нойівна", "Людвіківна", "Оскарівна", "Одисейівна", "Омарівна", "Октавіанівна", "Платонівна", "Принцівна", "Парижанівна", "Пантелеймонівна", "Річардівна", "Расмад-Ройівна", "Светодарівна", "Сулейманівна", "Спартаківна", "Соломонівна", "Тігранівна", "Тамерланівна", "Торівна", "Тадеушівна", "Шарханівна", "Шамільівна", "Ясмінівна", "Ясонівна", "Ярволодівна", "Яросвітівна", "Яниківна"]
  },
  "прізвище": {
     "Ч": ["Аббасов", "Абдрахманов", "Абдулов", "Агеєв", "Алаєв", "Алієв", "Ахматов", "Ахметов", "Багаутдінов", "Булатов", "Валєєв", "Валієв", "Галієв", "Галіменко", "Галін", "Гізатуллін", "Гініятуллін", "Заріпов", "Ібрагімов", "Ізмайлов", "Карімов", "Кірєєв", "Курдюмов", "Латипов", "Маліков", "Мустафін", "Нагаєв", "Рахманов", "Садиков", "Салімов", "Сафін", "Сарим-Саків", "Султанов", "Тарханов", "Туган-Барановський",  "Тюменєв", "Фаттахова", "Фахрутдінов", "Юсупов", "Якупов", "Яруллін"],
     "Ж": ["Аббасенко", "Абдрахманенко", "Абдуленко", "Ахматенко", "Ахметенко", "Багаутдіненко", "Булат", "Валєєва", "Валієва", "Галієва", "Галіменко", "Галіна", "Гізатулліненко", "Гініятулліненко", "Заріпенко", "Ібрагіменко", "Ізмайленко", "Каріменко", "Кір", "Курдюменко", "Малікенко", "Мустафіна", "Нагаєнко", "Рахманенко", "Садикенко", "Саліменко", "Сафіна",  "Сарим-Саків", "Султаненко", "Тарханенко", "Туган-Барановська", "Тюмененко", "Фаттахенко", "Фахрутденко", "Юсупенко", "Якупенко", "Ярулла"],
  },
  "ім'я-lat": {
    "Ч": ["Ares", "Avhustyn", "Ambre", "Apalon", "Adam", "Askold", "Anhel", "Aron-Moisei", "Burzhui", "Bohodar", "Bratyslav", "Vakula", "Vohnedar", "Hrant", "Hedeon", "Husman", "Dartan’ian", "Dobrynia", "Damian-Merkurii", "Dobre-Avenir", "Enei", "Yelisei", "Kyiv", "Kniaz", "Lymon", "Milan", "Marsel", "Mateo", "Nil", "Noi", "Liudvik", "Oskar", "Odysei", "Omar", "Oktavian", "Platon", "Prynts", "Paryzhan", "Panteleimon", "Richard", "Rasmad-Roi", "Svetodar", "Suleiman", "Spartak", "Solomon", "Tihran", "Tamerlan", "Tor", "Tadeush", "Sharkhan", "Shamil", "Yasmin", "Yason", "Yarvolod", "Yarosvit", "Yanyk"],
    "Ж": ["Anfisa", "Aurora", "Afina", "Asol", "Avrora", "Apollinariia", "Bozhena", "Beatrisa", "Vesna", "Vseslava", "Valkiviia", "Zhasmin", "Zhenev’ieva", "Zlatovlasa", "Zlatoslava", "Zolushka", "Zemfira", "Zoria", "Ieseniia", "Ievanhelina", "Izabella", "Imperiia", "Izolda", "Kvitka", "Luna", "Liana", "Malva", "Mahdalyna", "Manuela", "Mirabella", "Miia-Khend", "Miia", "Myra-Slava", "Madonna", "Miia-Solomiia", "Nastasia", "Nieva", "Nitsa", "Rosava", "Rehina", "Rozaliia", "Santa-Mariia", "Sulamita", "Samara", "Santa", "Odarka", "Olimpiada", "Tereza", "Teona", "Florentsiia", "Freia", "Khadizha", "Khrustalina", "Tsvitozara", "Shanel", "Iasmin", "Iurika"]
  },
  "прізвище-lat": {
     "Ч": ["Abbasov", "Abdrakhmanov", "Abdulov", "Aheiev", "Alaiev", "Aliiev", "Akhmatov", "Akhmetov", "Bahautdinov", "Bulatov", "Valieiev", "Valiiev", "Haliiev", "Halimenko", "Halin", "Hizatullin", "Hiniiatullin", "Zaripov", "Ibrahimov", "Izmailov", "Karimov", "Kirieiev", "Kurdiumov", "Latypov", "Malikov", "Mustafin", "Nahaiev", "Rakhmanov", "Sadykov", "Salimov", "Safin", "Sarym-Sakiv", "Sultanov", "Tarkhanov", "Tuhan-Baranovskyi",  "Tiumeniev", "Fattakhova", "Fakhrutdinov", "Iusupov", "Iakupov", "Iarullin"],
     "Ж": ["Abbasenko", "Abdrakhmanenko", "Abdulenko", "Akhmatenko", "Akhmetenko", "Bahautdinenko", "Bulat", "Valieieva", "Valiieva", "Haliieva", "Halimenko", "Halina", "Hizatullinenko", "Hiniiatullinenko", "Zaripenko", "Ibrahimenko", "Izmailenko", "Karimenko", "Kir", "Kurdiumenko", "Malikenko", "Mustafina", "Nahaienko", "Rakhmanenko", "Sadykenko", "Salimenko", "Safina",  "Sarym-Sakiv", "Sultanenko", "Tarkhanenko", "Tuhan-Baranovska", "Tiumenenko", "Fattakhenko", "Fakhrutdenko", "Iusupenko", "Iakupenko", "Iarulla"]
  }
};

function makernd(characters, length) {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function make_alphas(length) {
    return makernd('abcdefghijklmnopqrstuvwxyz', length);
}

function make_ALPHAS(length) {
    return makernd('ABCDEFGHIJKLMNOPQRSTUVWXYZ', length);
}

function make_digits(length) {
    return makernd('0123456789', length);
}

function make_kved() {
    return makernd('ABCDEFGHIJKLMNOPQRSTU', 1) + '.' + make_digits(2) + '.' + make_digits(3) + '.' + make_digits(4);
}

function make_taxcode_fiz(dob) {
    let ipn = Math.ceil((dob - new Date('1899-12-31T23:59:59'))/(1000*60*60*24))+make_digits(4);
    let arr = ipn.toString(10).replace(/\D/g, '0').split('').map(Number);
    let c = arr[0] *(-1) + arr[1]*5+arr[2]*7+arr[3]*9+arr[4]*4+arr[5]*6+arr[6]*10+arr[7]*5+arr[8]*7;
    let cn = (c%11 > 9) ? (c%11 - 10) : c%11;
    return ipn + (cn)
}

function make_edrpou() {
   let wc = Math.trunc(Math.random() * 3) + make_digits(8-1-1);
   let arr = wc.toString(10).replace(/\D/g, '0').split('').map(Number);
   let cn = (arr[0]*1+arr[1]*2+arr[2]*3+arr[3]*4+arr[4]*5+arr[5]*6+arr[6]*7)%11;
   if (cn < 10) return wc + (cn);
   return make_edrpou();
}

function make_dem_index(dob) {
    let di = dob.toISOString().substr(0,10).replaceAll("-","") + make_digits(4);
    let arr = di.toString(10).replace(/\D/g, '0').split('').map(Number);
    let cn = (7 + 3 + 1 + 7 + 3 + 1 + arr.reduce((a,b) => a + b)) % 10;
    return di.substr(0, 8) + "-" + di.substr(8) + (cn.toString());
}

function make_data_vydachi(thedob) {
    let my = Math.max((new Date()).getFullYear()-1, thedob.getFullYear()+1);
    let date = new Date(Math.round(Math.random() * (Date.now() - (my - 1970)*365*24*60*60*1000) + ((my - 1970)*365*24*60*60*1000)));
    if (thedob.getTime() > date.getTime())
          return make_data_vydachi(thedob);
    let dd = ((date.getDate() < 10) ? '0' : '') + date.getDate().toString()
    let mm = ["СІЧ/JAN", "ЛЮТ/FEB", "БЕР/MAR", "КВІ/APR", "ТРА/MAY", "ЧЕР/JUN", "ЛИР/JUL", "СЕР/AUG", "ВЕР/SEP", "ЖОВ/OCT", "ЛИС/NOV", "ГРУ/DEC"][date.getMonth()];

    return dd + " "+ mm + " " + date.getFullYear().toString();
}


function get_app_number() {
 return 'кв. ' + Math.round(1 + Math.random () * 100); 
}

function get_house_number() {
  let house_letter = ((Math.random() > 0.8)? ('-' + makernd('АБВГДЕЖЗ', 1)) : '');
  return "буд. " + Math.round(1 + Math.random() * 100) + house_letter;
}

function get_street() {
   return rnd_arr_element(["вул.", "просп."]) + " " + rnd_arr_element(["Девлета", "Гераїв", "Хаджі", "Менглі", "Сахіба", "Бахадира", "Ісляма", "Фетіх", "Шагіна", "Арслана", "Капланів" ]);
}

function get_city() {
    const cities = ["Київ", "Запоріжжя", "Львів", "Черкаси", "Вінниця"];
    return "м. " + rnd_arr_element(cities);
}

function get_zakordon_place() {
    return get_city().toUpperCase() +"/UKR";
}

function get_id_place() {
    const cities_id = ["КИЇВ/KYIV", "ЛЬВІВ/LVIV", "ОДЕСА/ODESA", "ДНІПРО/DNIPRO", "ЛУЦЬК/LUTSK", "ЗАПОРІЖЖЯ/ZAPORIZHZHIA"];
    return cities_id[Math.round(Math.random() * cities_id.length) % cities_id.length];
}

function get_sex(ipn) {
    return ["Ж", "Ч"][Math.floor((ipn %100) /10) %2]
}

function make_iban() {
    
   let mfo = make_digits(6);
   let rahunok = make_digits(19);
   let cc = (97+1) - Number(mfo+rahunok)*100%97;
   return 'UA'+mfo+rahunok + ((cc < 9)? '0' : '') + cc;
}

function rnd_arr_element(items) {
   return items[Math.floor(Math.random()*items.length)];
}

function rnd_arr_elements(items, n) {
  return Array.from({length: n}, () => rnd_arr_element(items));
}

function make_legal_address() {
  return get_city() +", "+ get_street() +", " + get_house_number()  + ((Math.random()> 0.5)? (", " + get_app_number()): "");
}

function make_le_name() {
  let letype = rnd_arr_element(["ТОВ", "АТ", "ПАТ"]);
  let fname = rnd_arr_element(["Інститут", "НДІ", "КБ", "НВК", "ОКБ"]);
  let prename = rnd_arr_element(["прикладного", "сучасного", "величного", "національного"]);
  let name = rnd_arr_element(["пароплавства", "картоплянства", "слугознавства", "народознавства", "рогознавства"]);
  let sname = rnd_arr_element(["конокрадства", "копитознавства", "наноекономіки", "діджиталізації"]);
  let nameafter = rnd_arr_element(["ім. Л. Кравчука","ім. Л. Кучми","ім. В. Ющенко","ім. О. Турчинова","ім. П. Порошенко"])
  return letype + ' "' + fname + ' ' + prename + ' ' + name + ' і ' + sname + ' ' + nameafter + '"' ;
}

function addLeadingZeros(value, length) {
   if (value > Math.pow(length))
       return value; 
    return '0000000000000000'.substr(0, Math.min(length - 1, length - Math.ceil(Math.log10(value + 1))))   + value;
}


function toUkrDateTime(date) {  
  return addLeadingZeros(date.getDate(), 2) + "." + addLeadingZeros(1 + date.getMonth(), 2) + "." + date.getFullYear() + " " + addLeadingZeros(date.getHours(), 2) +":"+ addLeadingZeros(date.getMinutes(),2) +":"+ addLeadingZeros(date.getSeconds(), 2);
}

function make_vin() {  
  return  rnd_arr_element(['XTD', 'XTE', 'XTW', 'X1C', 'X7T', 'Y6J', 'Y6D', 'Y6J', 'Y6L', 'Y79']) + make_digits(3) +  makernd('ABCDEFGHJKLMNPRSTUVWXYZ', 1) + make_digits(2)+ makernd('ABCDEFGHJKLMNPRSTUVWXY123456789', 1)  + make_digits(7);
}

function make_transp_num()  {
  return makernd('ABCEHIKMOPTX', 2) + ' ' + make_digits(4) + ' ' + makernd('ABCEHIKMOPTX', 2);
}
