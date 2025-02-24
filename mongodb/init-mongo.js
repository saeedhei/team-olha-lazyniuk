// If the MongoDB container has already been initialized (i.e., the /data/db directory already exists), the script will not run again.
// docker volume rm <volume_name>

db = db.getSiblingDB('citiesdev'); // Switch to the cities_dev database

// Insert dummy data into the cities collection
db.cities.insertMany([
  {"cityName": "Berlin", "count": 523},
  {"cityName": "Hamburg", "count": 267},
  {"cityName": "München", "count": 899},
  {"cityName": "Köln", "count": 471},
  {"cityName": "Frankfurt", "count": 110},
  {"cityName": "Stuttgart", "count": 782},
  {"cityName": "Düsseldorf", "count": 315},
  {"cityName": "Dortmund", "count": 607},
  {"cityName": "Essen", "count": 990},
  {"cityName": "Leipzig", "count": 48},
  {"cityName": "Bremen", "count": 656},
  {"cityName": "Dresden", "count": 198},
  {"cityName": "Hannover", "count": 842},
  {"cityName": "Nürnberg", "count": 72},
  {"cityName": "Duisburg", "count": 999},
  {"cityName": "Bochum", "count": 366},
  {"cityName": "Wuppertal", "count": 625},
  {"cityName": "Bielefeld", "count": 888},
  {"cityName": "Bonn", "count": 753},
  {"cityName": "Mannheim", "count": 438},
  {"cityName": "Karlsruhe", "count": 3},
  {"cityName": "Wiesbaden", "count": 884},
  {"cityName": "Münster", "count": 500},
  {"cityName": "Gelsenkirchen", "count": 31},
  {"cityName": "Augsburg", "count": 208},
  {"cityName": "Mönchengladbach", "count": 716},
  {"cityName": "Aachen", "count": 60},
  {"cityName": "Chemnitz", "count": 927},
  {"cityName": "Braunschweig", "count": 54},
  {"cityName": "Krefeld", "count": 674},
  {"cityName": "Halle", "count": 183},
  {"cityName": "Kiel", "count": 281},
  {"cityName": "Magdeburg", "count": 800},
  {"cityName": "Oberhausen", "count": 916},
  {"cityName": "Lübeck", "count": 45},
  {"cityName": "Erfurt", "count": 139},
  {"cityName": "Rostock", "count": 867},
  {"cityName": "Mainz", "count": 477},
  {"cityName": "Kassel", "count": 663},
  {"cityName": "Hagen", "count": 36},
  {"cityName": "Hamm", "count": 965},
  {"cityName": "Saarbrücken", "count": 109},
  {"cityName": "Mülheim an der Ruhr", "count": 422},
  {"cityName": "Potsdam", "count": 752},
  {"cityName": "Ludwigshafen", "count": 791},
  {"cityName": "Oldenburg", "count": 250},
  {"cityName": "Leverkusen", "count": 20},
  {"cityName": "Osnabrück", "count": 495},
  {"cityName": "Solingen", "count": 852},
  {"cityName": "Heidelberg", "count": 297},
  {"cityName": "Herne", "count": 63},
  {"cityName": "Neuss", "count": 947},
  {"cityName": "Darmstadt", "count": 904},
  {"cityName": "Paderborn", "count": 778},
  {"cityName": "Regensburg", "count": 532},
  {"cityName": "Ingolstadt", "count": 251},
  {"cityName": "Würzburg", "count": 822},
  {"cityName": "Wolfsburg", "count": 743},
  {"cityName": "Ulm", "count": 815},
  {"cityName": "Göttingen", "count": 909},
  {"cityName": "Offenbach", "count": 69},
  {"cityName": "Bottrop", "count": 877},
  {"cityName": "Trier", "count": 342},
  {"cityName": "Recklinghausen", "count": 629},
  {"cityName": "Reutlingen", "count": 991},
  {"cityName": "Bremerhaven", "count": 289},
  {"cityName": "Koblenz", "count": 524},
  {"cityName": "Bergisch Gladbach", "count": 685},
  {"cityName": "Jena", "count": 418},
  {"cityName": "Remscheid", "count": 571},
  {"cityName": "Erlangen", "count": 334},
  {"cityName": "Moers", "count": 977},
  {"cityName": "Siegen", "count": 185},
  {"cityName": "Hildesheim", "count": 617},
  {"cityName": "Salzgitter", "count": 80},
  {"cityName": "Cottbus", "count": 693},
  {"cityName": "Gera", "count": 95},
  {"cityName": "Kaiserslautern", "count": 424},
  {"cityName": "Witten", "count": 847},
  {"cityName": "Gütersloh", "count": 318},
  {"cityName": "Iserlohn", "count": 152},
  {"cityName": "Schwerin", "count": 859},
  {"cityName": "Hanau", "count": 432},
  {"cityName": "Düren", "count": 567},
  {"cityName": "Esslingen am Neckar", "count": 14},
  {"cityName": "Ludwigsburg", "count": 283},
  {"cityName": "Marl", "count": 929},
  {"cityName": "Lünen", "count": 740},
  {"cityName": "Velbert", "count": 128},
  {"cityName": "Minden", "count": 373},
  {"cityName": "Worms", "count": 967},
  {"cityName": "Konstanz", "count": 684},
  {"cityName": "Neumünster", "count": 16},
  {"cityName": "Norderstedt", "count": 503},
  {"cityName": "Delmenhorst", "count": 743},
  {"cityName": "Villingen-Schwenningen", "count": 65},
  {"cityName": "Bamberg", "count": 248},
  {"cityName": "Celle", "count": 855},
  {"cityName": "Rosenheim", "count": 704},
  {"cityName": "Wilhelmshavenig", "count": 461}
]);

print("✅ Dummy data inserted into citiesdev.cities collection.");