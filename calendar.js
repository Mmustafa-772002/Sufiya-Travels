const cities = [
  "Ashtavinayak",
  "Ahmednagar",
  "Ajanta",
  "Ellora",
  "Akkalkot",
  "Akola",
  "Alibag",
  "Amravati",
  "Aurangabad",
  "Baramati",
  "Belgaum",
  "Bhimashankar",
  "Bhopal",
  "Bhusawal",
  "Burhanpur",
  "Chennai",
  "Daman",
  "Dapoli",
  "Daund",
  "Delhi",
  "Devkund",
  "Dhule",
  "Diveagar",
  "Ganpatipule",
  "Goa",
  "Gokarna",
  "Gondavale",
  "Grishneshwar",
  "Harihareshwar",
  "Hyderabad",
  "Ichalkaranji",
  "Igatpuri",
  "Imagica",
  "Indore",
  "Jalna",
  "Jalgaon",
  "Jejuri",
  "Kamshet",
  "Karad",
  "Kashid",
  "Khandala",
  "Khopoli",
  "Karjat",
  "Kolad",
  "Kolhapur",
  "Latur",
  "Lavasa",
  "Lonavala",
  "Mahabaleshwar",
  "Mahad",
  "Malegaon",
  "Malshej Ghat",
  "Malvan",
  "Matheran",
  "Miraj",
  "Mulshi",
  "Airoli",
  "Ambernath",
  "Andheri",
  "Badlapur",
  "Bandra Terminus",
  "Bandra",
  "Belapur",
  "Borivali",
  "Bhiwandi",
  "Chembur",
  "Dadar",
  "Dombivli",
  "Goregaon",
  "Kalyan",
  "Kharghar",
  "LTT",
  "Mira Road",
  "Mumbai Airport",
  "Mumbai Central",
  "Mumbai International Airport",
  "Chhatrapati Shivaji International Airport",
  "Mumbai Domestic Airport",
  "Mumbai",
  "Mumbai Darshan",
  "Navi Mumbai",
  "Nerul",
  "Panvel",
  "Powai",
  "Thane",
  "Ulhasnagar",
  "Vasai",
  "Vashi",
  "Virar",
  "Murud",
  "Nagaon",
  "Nagpur",
  "Nanded",
  "Naryangaon",
  "Nashik",
  "Neral",
  "Osmanabad",
  "Panchgani",
  "Pandharpur",
  "Phaltan",
  "Prati Balaji",
  "Pune",
  "Ratnagiri",
  "Sangamner",
  "Sangli",
  "Satara",
  "Shani Shinghnapur",
  "Shirdi",
  "Shirur",
  "Solapur",
  "Surat",
  "Tapola",
  "Tarkarli",
  "Trimbakeshwar",
  "Tuljapur",
  "Ujjain",
  "Vadodara",
  "Vapi",
  "Wai",
  "Yavatmal",
];

function filterCities(inputId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(inputId + "List");
  const filter = input.value.toLowerCase();
  const otherInputId = inputId === "from" ? "to" : "from";
  const otherInputValue = document
    .getElementById(otherInputId)
    .value.toLowerCase();

  list.innerHTML = "";
  list.style.display = filter ? "block" : "none";

  cities.forEach((city) => {
    if (
      city.toLowerCase().startsWith(filter) &&
      city.toLowerCase() !== otherInputValue
    ) {
      const option = document.createElement("div");
      option.textContent = city;
      option.classList.add("autocomplete-item");
      option.addEventListener("click", () => {
        input.value = city;
        list.innerHTML = "";
        list.style.display = "none";
      });
      list.appendChild(option);
    }
  });

  if (filter === "") {
    list.style.display = "none";
  }
}

function swapPlaces() {
  const fromInput = document.getElementById("from");
  const toInput = document.getElementById("to");
  const temp = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = temp;
}

const calendarWrapper = document.getElementById("calendarWrapper");
const monthYearDisplay = document.getElementById("monthYearDisplay");
const monthList = document.getElementById("monthList");
const yearList = document.getElementById("yearList");
const calendarDays = document.getElementById("calendarDays");
const dateInput = document.getElementById("date");

let date = new Date();
let currMonth = date.getMonth();
let currYear = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  monthYearDisplay.textContent = months[currMonth] + " " + currYear;
  const firstDay = new Date(currYear, currMonth, 1).getDay();
  const lastDate = new Date(currYear, currMonth + 1, 0).getDate();

  calendarDays.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarDays.appendChild(emptyCell);
  }

  for (let i = 1; i <= lastDate; i++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = i;

    if (
      i === date.getDate() &&
      currMonth === date.getMonth() &&
      currYear === date.getFullYear()
    ) {
      dayCell.classList.add("today");
    }

    dayCell.addEventListener("click", () => {
      dateInput.value =
        ("0" + i).slice(-2) +
        "-" +
        ("0" + (currMonth + 1)).slice(-2) +
        "-" +
        currYear;
      calendarWrapper.style.display = "none";
    });

    calendarDays.appendChild(dayCell);
  }
}

function toggleCalendar() {
  calendarWrapper.style.display =
    calendarWrapper.style.display === "block" ? "none" : "block";
}

function prevMonth() {
  currMonth--;
  if (currMonth < 0) {
    currMonth = 11;
    currYear--;
  }
  renderCalendar();
}

function nextMonth() {
  currMonth++;
  if (currMonth > 11) {
    currMonth = 0;
    currYear++;
  }
  renderCalendar();
}

function toggleMonthYearList() {
  monthList.innerHTML = "";
  yearList.innerHTML = "";

  months.forEach((month, index) => {
    const monthItem = document.createElement("div");
    monthItem.textContent = month;
    monthItem.addEventListener("click", () => {
      currMonth = index;
      renderCalendar();
      monthList.innerHTML = "";
    });
    monthList.appendChild(monthItem);
  });

  for (let i = currYear - 10; i <= currYear + 10; i++) {
    const yearItem = document.createElement("div");
    yearItem.textContent = i;
    yearItem.addEventListener("click", () => {
      currYear = i;
      renderCalendar();
      yearList.innerHTML = "";
    });
    yearList.appendChild(yearItem);
  }
}

document.getElementById("prevMonth").addEventListener("click", prevMonth);
document.getElementById("nextMonth").addEventListener("click", nextMonth);
document.getElementById("from").setAttribute("autocomplete", "off");
document.getElementById("to").setAttribute("autocomplete", "off");

renderCalendar();
