// Sample data for travel times
const travelData = [
  {
    from: "Pune",
    to: "Ashtavinayak",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ahmednagar",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ajanta",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "11:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Ellora",
    date: "24-8-2024",
    time: 5.5,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Akkalkot",
    date: "24-8-2024",
    time: 4.5,
    timeOfNight: "10:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Akola",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "9:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Alibag",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Amravati",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Aurangabad",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Baramati",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Belgaum",
    date: "24-8-2024",
    time: 7.0,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Bhimashankar",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Bhopal",
    date: "24-8-2024",
    time: 10.0,
    timeOfNight: "12:00 AM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Bhusawal",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Burhanpur",
    date: "24-8-2024",
    time: 7.5,
    timeOfNight: "10:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Chennai",
    date: "24-8-2024",
    time: 24.0,
    timeOfNight: "2:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Daman",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Dapoli",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Daund",
    date: "24-8-2024",
    time: 1.5,
    timeOfNight: "4:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Delhi",
    date: "24-8-2024",
    time: 20.0,
    timeOfNight: "11:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Devkund",
    date: "24-8-2024",
    time: 5.5,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Dhule",
    date: "24-8-2024",
    time: 4.5,
    timeOfNight: "7:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Diveagar",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ganpatipule",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Goa",
    date: "24-8-2024",
    time: 12.0,
    timeOfNight: "2:00 AM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Gokarna",
    date: "24-8-2024",
    time: 11.0,
    timeOfNight: "1:00 AM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Gondavale",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Grishneshwar",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Harihareshwar",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Hyderabad",
    date: "24-8-2024",
    time: 15.0,
    timeOfNight: "3:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Ichalkaranji",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Igatpuri",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Imagica",
    date: "24-8-2024",
    time: 1.5,
    timeOfNight: "4:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Indore",
    date: "24-8-2024",
    time: 14.0,
    timeOfNight: "2:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Jalna",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Jalgaon",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Jejuri",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kamshet",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Karad",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kashid",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Khandala",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Khopoli",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Karjat",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kolad",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kolhapur",
    date: "24-8-2024",
    time: 7.0,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Latur",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Lavasa",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Lonavala",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mahabaleshwar",
    date: "24-8-2024",
    time: 4.5,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mahad",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Malegaon",
    date: "24-8-2024",
    time: 7.0,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Malshej Ghat",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Malvan",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Matheran",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Miraj",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mulshi",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Airoli",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ambernath",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Andheri",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Badlapur",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Bandra Terminus",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Bandra",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Belapur",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Borivali",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Bhiwandi",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Chembur",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Dadar",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Dombivli",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Goregaon",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kalyan",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Kharghar",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "LTT",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mira Road",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai Airport",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai Central",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai International Airport",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai Domestic Airport",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Mumbai Darshan",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Navi Mumbai",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Nerul",
    date: "24-8-2024",
    time: 2.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Panvel",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Powai",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Thane",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ulhasnagar",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Vasai",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Vashi",
    date: "24-8-2024",
    time: 2.5,
    timeOfNight: "5:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Virar",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Murud",
    date: "24-8-2024",
    time: 5.5,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Nagaon",
    date: "24-8-2024",
    time: 5.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Nagpur",
    date: "24-8-2024",
    time: 13.0,
    timeOfNight: "2:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Nanded",
    date: "24-8-2024",
    time: 10.0,
    timeOfNight: "12:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Naryangaon",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Nashik",
    date: "24-8-2024",
    time: 7.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Neral",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Osmanabad",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Panchgani",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Pandharpur",
    date: "24-8-2024",
    time: 5.5,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Phaltan",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Prati Balaji",
    date: "24-8-2024",
    time: 3.0,
    timeOfNight: "6:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Pune",
    date: "24-8-2024",
    time: 0.0,
    timeOfNight: "5:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ratnagiri",
    date: "24-8-2024",
    time: 7.5,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Sangamner",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Sangli",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Satara",
    date: "24-8-2024",
    time: 5.5,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Shani Shinghnapur",
    date: "24-8-2024",
    time: 4.5,
    timeOfNight: "7:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Shirdi",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "8:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Shirur",
    date: "24-8-2024",
    time: 3.5,
    timeOfNight: "6:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Solapur",
    date: "24-8-2024",
    time: 7.5,
    timeOfNight: "10:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Surat",
    date: "24-8-2024",
    time: 10.0,
    timeOfNight: "12:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Tapola",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Tarkarli",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Trimbakeshwar",
    date: "24-8-2024",
    time: 6.0,
    timeOfNight: "9:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Tuljapur",
    date: "24-8-2024",
    time: 9.0,
    timeOfNight: "11:30 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Ujjain",
    date: "24-8-2024",
    time: 15.0,
    timeOfNight: "2:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Vadodara",
    date: "24-8-2024",
    time: 10.0,
    timeOfNight: "12:00 PM",
    status: "Not Available",
  },
  {
    from: "Pune",
    to: "Vapi",
    date: "24-8-2024",
    time: 8.0,
    timeOfNight: "11:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Wai",
    date: "24-8-2024",
    time: 4.0,
    timeOfNight: "7:00 PM",
    status: "Available",
  },
  {
    from: "Pune",
    to: "Yavatmal",
    date: "24-8-2024",
    time: 9.0,
    timeOfNight: "11:30 PM",
    status: "Not Available",
  },
];

function filterCities(type) {
  let input = document.getElementById(type).value.toLowerCase();
  let list = document.getElementById(type + "List");
  list.innerHTML = "";

  if (input === "") {
    list.style.display = "none";
    return;
  }

  let filteredCities = cities.filter((city) =>
    city.toLowerCase().startsWith(input)
  );

  filteredCities.forEach((city) => {
    let item = document.createElement("div");
    item.textContent = city;
    item.classList.add("autocomplete-item");
    item.onclick = function () {
      document.getElementById(type).value = city;
      list.innerHTML = "";
      list.style.display = "none";
    };
    list.appendChild(item);
  });

  list.style.display = filteredCities.length ? "block" : "none";
}

function swapPlaces() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  document.getElementById("from").value = to;
  document.getElementById("to").value = from;
}

function toggleCalendar() {
  const calendar = document.getElementById("calendarWrapper");
  calendar.style.display =
    calendar.style.display === "block" ? "none" : "block";
}

function populateCalendar(dateInput) {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();

  function updateCalendar() {
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let days = document.getElementById("calendarDays");
    days.innerHTML = "";

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.innerHTML += '<div class="empty"></div>';
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      let day = document.createElement("div");
      day.textContent = i;
      day.onclick = function () {
        dateInput.value = `${i}-${month + 1}-${year}`;
        toggleCalendar();
      };
      days.appendChild(day);
    }
  }

  updateCalendar();
}

function searchBuses() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value.trim();

  const filteredResults = travelData.filter(
    (item) =>
      item.from.toLowerCase() === from.toLowerCase() &&
      item.to.toLowerCase() === to.toLowerCase() &&
      item.date === date
  );

  const tableBody = document.querySelector("#cityTable tbody");
  tableBody.innerHTML = ""; // Clear existing table data

  if (filteredResults.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6">No results found</td></tr>';
  } else {
    filteredResults.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${result.from}</td>
                <td>${result.to}</td>
                <td>${result.date}</td>
                <td>${result.time}</td>
                <td>${result.timeOfNight}</td>
                <td>${result.status}</td>
            `;
      tableBody.appendChild(row);
    });
  }
}

document.getElementById("searchButton").addEventListener("click", searchBuses);

document.getElementById("prevMonth").addEventListener("click", function () {
  // Implement logic to go to the previous month
});

document.getElementById("nextMonth").addEventListener("click", function () {
  // Implement logic to go to the next month
});

document
  .getElementById("monthYearDisplay")
  .addEventListener("click", function () {
    // Toggle month and year display list
  });

document.getElementById("date").addEventListener("focus", function () {
  populateCalendar(this);
});
