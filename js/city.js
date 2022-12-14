/**
* Philippine Provinces & Cities/Municipalities on HTML Dropdown
*
* @ version 1.0.0
* @ author Marvic R. Macalintal
*/
var cities = {
  "Arusha": [
    "Arusha Mjini",
    "Kingori",
    "Kiratu",
    "Longido",
    "Mbuguni",
    "Merelani",
    "Meru",
    "Monduli",
    "Mto wa Mbu",
    "Namanga",
    "Ngorongoro",
    "Nkoaranga",
    "Poli",
    "Usa River"
  ],
  "Dar es Salaam": [
    "Kinondoni",
    "Magomeni",
    "Ubungo",
    "Ilala",
    "Kigamboni",
    "Temeke"
  ],
  "Dodoma": [
    "Dodoma Mjini",
    "Kibakwe",
    "Kisasa",
    "Kondoa",
    "Kongwa",
    "Mpwapwa",
    "Msanga"
  ],
  "Geita": [
    "Buseresere",
    "Chato",
    "Geita",
    "Kasamwa",
    "Katoro",
    "Masumbwe",
    "Ushirombo",
    "Uyovu"
  ],
  "Iringa": [
    "Ilula",
    "Iringa Mjini",
    "Izazi",
    "Mafinga",
    "Makungu",
    "Malangali"
  ],
  "Kagera": [
    "Biharamulo",
    "Bugarama",
    "Bugene",
    "Bukoba",
    "Kabanga",
    "Kamachumu",
    "Katerero",
    "Katoro",
    "Kyaka",
    "Ngara",
    "Nshamba",
    "Nsunga",
    "Nyakahanga",
    "Rulenge"
  ],
  "Katavi": [
    "Inyonga",
    "Karema",
    "Mpanda",
    "Usevia"
  ],
  "Kigoma": [
    "Kakonko",
    "Kasulu",
    "Kibondo",
    "Kigoma Mjini",
    "Mabamba",
    "Mwandiga",
    "Nguruka",
    "Uvinza"
  ],
  "Kilimanjaro": [
    "Hedaru",
    "Kihurio",
    "Kisiwani",
    "Kwakoa",
    "Lembeni",
    "Makanya",
    "Moshi",
    "Mwembe",
    "Ndungu",
    "Same"
  ],
  "Manyara": [
    "Babati",
    "Bashanet",
    "Basotu",
    "Dareda",
    "Dongobesh",
    "Endasak",
    "Galappo",
    "Katesh",
    "Kibaya",
    "Kirya",
    "Magugu",
    "Mbulu",
    "Naberera",
    "Nangwa"
  ],
  "Mara": [
    "Bukonyo",
    "Butiama",
    "Issenye",
    "Kibara",
    "Mugango",
    "Mugumu",
    "Muriti",
    "Musoma",
    "Nakatunguru",
    "Nansio",
    "Nyamuswa",
    "Sirari"
  ],
  "Morogoro": [
    "Geiro",
    "Ifakara",
    "Kidatu",
    "Kidodi",
    "Kilosa",
    "Kimamba",
    "Kisanga",
    "Lupiro",
    "Magole",
    "Mahenge",
    "Malinyi",
    "Mikumi",
    "Mlimba",
    "Morogoro",
    "Msowero",
    "Mtimbira",
    "Mvomero District",
    "Ngerengere"
  ],
  "Mtwara": [
    "Chiungutwa",
    "Kitama",
    "Kitangari",
    "Luchingu",
    "Lukuledi",
    "Lulindi",
    "Madimba",
    "Mahuta",
    "Masasi",
    "Masuguru",
    "Mtwara",
    "Namalenga",
    "Namikupa",
    "Nanganga",
    "Nangomba",
    "Nanhyanga",
    "Nanyamba",
    "Newala Kisimani",
    "Tandahimba"
  ],
  "Mwanza": [
    "Ilemela District",
    "Kihangara",
    "Malya",
    "Misasi",
    "Misungwi",
    "Mwanza Mjini",
    "Ngudu",
    "Nyanguge",
    "Usagara"
  ],
  "Njombe": [
    "Ilembula",
    "Makambako",
    "Manda",
    "Matamba",
    "Mlangali",
    "Mtwango",
    "Njombe"
  ],
  "North Pemba Region": [
    "Konde",
    "Micheweni",
    "Wete"
  ],
  "Pwani Region": [
    "Bagamoyo",
    "Bunju",
    "Chalinze",
    "Ikwiriri",
    "Kibaha",
    "Kibiti",
    "Kilindoni",
    "Kisarawe",
    "Lugoba",
    "Maneromango",
    "Mbumi",
    "Mkuranga",
    "Mlandizi",
    "Mvomero",
    "Utete",
    "Vikindu"
  ],
  "Rukwa": [
    "Chala",
    "Kirando",
    "Laela",
    "Matai",
    "Namanyere",
    "Nkove",
    "Sumbawanga"
  ],
  "Shinyanga": [
    "Isaka",
    "Kahama",
    "Kishapu",
    "Mhango",
    "Mwadui",
    "Old Shinyanga",
    "Shinyanga",
    "Songwa",
    "Tinde"
  ],
  "Simiyu": [
    "Bariadi",
    "Kisesa",
    "Lalago",
    "Malampaka",
    "Maswa",
    "Matonga",
    "Nyakabindi",
    "Nyalikungu",
    "Somanga"
  ],
  "Singida": [
    "Igugunu",
    "Ikungi",
    "Ilongero",
    "Itigi",
    "Kilimatinde",
    "Kintinku",
    "Kiomboi",
    "Mgandu",
    "Mtinko",
    "Mungaa",
    "Ndago",
    "Puma",
    "Sepuka",
    "Shelui",
    "Singida"
  ],
  "South Pemba Region": [
    "Chake Chake",
    "Mtambile",
    "Uwelini"
  ],
  "Tabora": [
    "Bukene",
    "Igurubi",
    "Kaliua",
    "Mabama",
    "Sikonge",
    "Tabora",
    "Tumbi",
    "Usoke"
  ],
  "Tanga": [
    "Chanika",
    "Lushoto",
    "Magomeni",
    "Majengo",
    "Makuyuni",
    "Maramba",
    "Matui",
    "Mazinde",
    "Mlalo",
    "Muheza",
    "Mwanga",
    "Pangani",
    "Soni",
    "Tanga"
  ],
  "Zanzibar Central/South Region": [
    "Koani",
    "Koani Ndogo",
    "Mahonda",
    "Nganane",
    "Sokoni"
  ],
  "Zanzibar North Region": [
    "Gamba",
    "Kijini",
    "Kiwengwa",
    "Mkokotoni",
    "Nungwi"
  ],
  "Zanzibar Urban/West Region": [
    "Zanzibar"
  ]
}

 var City = function() {

	this.p = [],this.c = [],this.a = [],this.e = {};
	window.onerror = function() { return true; }
	
	this.getProvinces = function() {
		for(let province in cities) {
			this.p.push(province);
		}
		return this.p;
	}
	this.getCities = function(province) {
		if(province.length==0) {
			console.error('Please input province name');
			return;
		}
		for(let i=0;i<=cities[province].length-1;i++) {
			this.c.push(cities[province][i]);
		}
		return this.c;
	}
	this.getAllCities = function() {
		for(let i in cities) {
			for(let j=0;j<=cities[i].length-1;j++) {
				this.a.push(cities[i][j]);
			}
		}
		this.a.sort();
		return this.a;
	}
	this.showProvinces = function(element) {
		var str = '<option selected disabled>Select Province</option>';
		for(let i in this.getProvinces()) {
			str+='<option>'+this.p[i]+'</option>';
		}
		this.p = [];		
		document.querySelector(element).innerHTML = '';
		document.querySelector(element).innerHTML = str;
		this.e = element;
		return this;
	}
	this.showCities = function(province,element) {
		var str = '<option selected disabled>Select City / Municipality</option>';
		var elem = '';
		if((province.indexOf(".")!==-1 || province.indexOf("#")!==-1)) {
			elem = province;
		}
		else {
			for(let i in this.getCities(province)) {
				str+='<option>'+this.c[i]+'</option>';
			}
			elem = element;
		}
		this.c = [];
		document.querySelector(elem).innerHTML = '';
		document.querySelector(elem).innerHTML = str;
		document.querySelector(this.e).onchange = function() {		
			var Obj = new City();
			Obj.showCities(this.value,elem);
		}
		return this;
	}
}
