
var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];
let result1=" ";
for(let i=0; i<planets.length; i++){
	result1+=`	<tr>
							 <td>${i+1}</td>
							 <td>${planets[i].planetName}</td>
				s			  <td>${planets[i].distanceFromSunKm}</td>
							 <td>${planets[i].diameterKm}</td>
							 <td>${planets[i].hasRings}</td>
						     <td>${planets[i].numberOfMoons}</td>
							
							</tbody>
							</tr>`
							console.log(result1);
};
document.getElementById("info1").innerHTML=result1;



var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];
let result2=" ";
for(let i=0; i<mountains.length; i++){
	result2+=`	<tr>
							 <td>${i+1}</td>
							 <td>${mountains[i].mountainName}</td>
							  <td>${mountains[i].heightMeters}</td>
							 <td>${mountains[i].locationContinent}</td>
							 <td>${mountains[i].firstAscentYear}</td>
						     <td>${mountains[i].isVolcano}</td>
							
							</tbody>
							</tr>`
							console.log(result2);
};
document.getElementById("info2").innerHTML=result2;


var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];
let result3=" ";
for(let i=0; i<mountains.length; i++){
	result3+=`	<tr>
							 <td>${i+1}</td>
							 <td>${universities[i].uniName}</td>
							  <td>${universities[i].foundedYear}</td>
							 <td>${universities[i].countryLocated}</td>
							 <td>${universities[i].studentCount}</td>
						     <td>${universities[i].worldRanking}</td>
							
							</tbody>
							</tr>`
							console.log(result3);
};
document.getElementById("info3").innerHTML=result3;


var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];

let result4=" ";
for(let i=0; i<animals.length; i++){
	result4+=`	<tr>
							 <td>${i+1}</td>
							 <td>${animals[i].species}</td>
							  <td>${animals[i].averageWeightKg}</td>
							 <td>${animals[i].habitatType}</td>
							 <td>${animals[i].lifespanYears}</td>
						     <td>${animals[i].endangeredStatus}</td>
							</tbody>							 
							</tr>`
							console.log(result4);
};
document.getElementById("info4").innerHTML=result4;

var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];
let result5=" ";
for(let i=0; i<apps.length; i++){
	result5+=`	<tr>
							 <td>${i+1}</td>
							 <td>${apps[i].appName}</td>
							  <td>${apps[i].categoryType}</td>
							 <td>${apps[i].downloadsMillion}</td>
							 <td>${apps[i].developerCompany}</td>
						     <td>${apps[i].subscriptionRequired}</td>
							
							</tbody>	
							</tr>`
							console.log(result5);
};
document.getElementById("info5").innerHTML=result5;


var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];
let result6=" ";
for(let i=0; i<continents.length; i++){
	result6+=`	<tr>
							 <td>${i+1}</td>
							 <td>${continents[i].continentLabel}</td>
							  <td>${continents[i].surfaceAreaMillionSqKm}</td>
							 <td>${continents[i].countriesCount}</td>
							 <td>${continents[i].populationBillion}</td>
						     <td>${continents[i].subscriptionRequired}</td>
							
							</tbody>	
							</tr>`
							console.log(result6);
};
document.getElementById("info6").innerHTML=result6;


var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];
let result7=" ";
for(let i=0; i<desserts.length; i++){
	result7+=`	<tr>
							 <td>${i+1}</td>
							 <td>${desserts[i].dessertName}</td>
							  <td>${desserts[i].sugarContentGrams}</td>
							 <td>${desserts[i].servingTemp}</td>
							 <td>${desserts[i].mainIngredient}</td>
						     <td>${desserts[i].calorieCount}</td>
							</tbody>							 
							</tr>`
							console.log(result7);
};
document.getElementById("info7").innerHTML=result7;


var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];
let result8=" ";
for(let i=0; i<oceans.length; i++){
	result8+=`	<tr>
							 <td>${i+1}</td>
							 <td>${oceans[i].oceanTitle}</td>
							  <td>${oceans[i].avgDepthMeters}</td>
							 <td>${oceans[i].surfaceAreaMillionSqKm}</td>
							 <td>${oceans[i].borderingContinents}</td>
						     <td>${oceans[i].calorieCount}</td>
							</tbody>							 
							</tr>`
							console.log(result8);
};
document.getElementById("info8").innerHTML=result8;

var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", connectivityType: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];
let result9=" ";
for(let i=0; i<gadgets.length; i++){
	result9+=`	<tr>
							 <td>${i+1}</td>
							 <td>${gadgets[i].gadgetLabel}</td>
							  <td>${gadgets[i].featuresCount}</td>
							 <td>${gadgets[i].batteryLifeHours}</td>
							 <td>${gadgets[i].connectivityType}</td>
						     <td>${gadgets[i].weightGrams}</td>
							</tbody>							 
							</tr>`
							console.log(result9);
};
document.getElementById("info9").innerHTML=result9;


// 13. landmarks
var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];
let result10=" ";
for(let i=0; i<landmarks.length; i++){
	result10+=`	<tr>
							 <td>${i+1}</td>
							 <td>${landmarks[i].landmarkLabel}</td>
							  <td>${landmarks[i].heightMeters}</td>
							 <td>${landmarks[i]. visitorCountYearMillion}</td>
							 <td>${landmarks[i].countryLocation}</td>
						     <td>${landmarks[i].constructionYear}</td>
							</tbody>							 
							</tr>`
							console.log(result10);
};
document.getElementById("info10").innerHTML=result10;

var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];
let result11=" ";
for(let i=0; i<vehiclesModels.length; i++){
	result11+=`	<tr>
							 <td>${i+1}</td>
							 <td>${vehiclesModels[i].vehicleType}</td>
							  <td>${vehiclesModels[i].maxSpeedKph}</td>
							 <td>${vehiclesModels[i].fuelCapacityLiters}</td>
							 <td>${vehiclesModels[i].wheelCount}</td>
						     <td>${vehiclesModels[i].manufacturerLocation}</td>
							
							</tbody>
							</tr>`
							console.log(result11);
};
document.getElementById("info11").innerHTML=result11;

// 15. professions
var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];
let result12=" ";
for(let i=0; i<professions.length; i++){
	result12+=`	<tr>
							 <td>${i+1}</td>
							 <td>${professions[i].professionName}</td>
							  <td>${professions[i].maxSpeedKph}</td>
							 <td>${professions[i].yearsOfStudy}</td>
							 <td>${professions[i].riskLevel}</td>
						     <td>${professions[i].manufacturerLocation}</td>
							
							</tbody>
							</tr>`
							console.log(result12);
};
document.getElementById("info12").innerHTML=result12;
// 16. beveragesMenu
var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];
let result13=" ";
for(let i=0; i<beveragesMenu.length; i++){
	result13+=`	<tr>
							 <td>${i+1}</td>
							 <td>${beveragesMenu[i].beverageTitle}</td>
							  <td>${beveragesMenu[i].caffeineMg}</td>
							 <td>${beveragesMenu[i].servingSizeMl}</td>
							 <td>${beveragesMenu[i].servedHot}</td>
						     <td>${beveragesMenu[i].sugarContentG}</td>
							
							</tbody>
							</tr>`
							console.log(result13);
};
document.getElementById("info13").innerHTML=result13;
// 17. flowers
var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, petalCount: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];
let result14=" ";
for(let i=0; i<flowers.length; i++){
	result14+=`	<tr>
							 <td>${i+1}</td>
							 <td>${flowers[i].flowerName}</td>
							  <td>${flowers[i].petalCount}</td>
							 <td>${flowers[i].petalCount}</td>
							 <td>${flowers[i].bloomingSeason}</td>
						     <td>${flowers[i].stemLengthCm}</td>
							
							</tbody>
							</tr>`
							console.log(result14);
};
document.getElementById("info14").innerHTML=result14;
// 18. hotels
var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];
let result15=" ";
for(let i=0; i<hotels.length; i++){
	result15+=`	<tr>
							 <td>${i+1}</td>
							 <td>${hotels[i].hotelLabel}</td>
							  <td>${hotels[i].stars}</td>
							 <td>${hotels[i].totalRooms}</td>
							 <td>${hotels[i].poolAvailable}</td>
						     <td>${hotels[i].cityLoc}</td>
							
							</tbody>
							</tr>`
							console.log(result15);
};
document.getElementById("info15").innerHTML=result15;

// 19. islands
var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];
let result16=" ";
for(let i=0; i<islands.length; i++){
	result16+=`	<tr>
							 <td>${i+1}</td>
							 <td>${islands[i].islandLabel}</td>
							  <td>${islands[i].areaSqKm}</td>
							 <td>${islands[i].countryAdmin}</td>
							 <td>${islands[i].inhabited}</td>
						     <td>${islands[i].climateType}</td>
							
							</tbody>
							</tr>`
							console.log(result16);
};
document.getElementById("info16").innerHTML=result16;

// 20. insects
var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];
let result17=" ";
for(let i=0; i<insects.length; i++){
	result17+=`	<tr>
							 <td>${i+1}</td>
							 <td>${insects[i].insectName}</td>
							  <td>${insects[i].wingspanCm}</td>
							 <td>${insects[i].legsCount}</td>
							 <td>${insects[i].lifespanDays}</td>
						     <td>${insects[i].canFly}</td>
							
							</tbody>
							</tr>`
							console.log(result17);
};
document.getElementById("info17").innerHTML=result17;

// 21. festivals
var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];
let result18=" ";
for(let i=0; i<festivals.length; i++){
	result18+=`	<tr>
							 <td>${i+1}</td>
							 <td>${festivals[i].festivalName}</td>
							  <td>${festivals[i].monthObserved}</td>
							 <td>${festivals[i].durationDays}</td>
							 <td>${festivals[i].originCountry}</td>
						     <td>${festivals[i].outdoorEvent}</td>
							
							</tbody>
							</tr>`
							console.log(result18);
};
document.getElementById("info18").innerHTML=result18;
// 22. rivers
var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];
let result19=" ";
for(let i=0; i<rivers.length; i++){
	result19+=`	<tr>
							 <td>${i+1}</td>
							 <td>${rivers[i].riverLabel}</td>
							  <td>${rivers[i].lengthKm}</td>
							 <td>${rivers[i].flowsThroughCountries}</td>
							 <td>${rivers[i].avgDepthM}</td>
						     <td>${rivers[i].deltaExists}</td>
							
							</tbody>
							</tr>`
							console.log(result19);
};
document.getElementById("info19").innerHTML=result19;

// 23. spices
var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];
let result20=" ";
for(let i=0; i<spices.length; i++){
	result20+=`	<tr>
							 <td>${i+1}</td>
							 <td>${spices[i].spiceName}</td>
							  <td>${spices[i].spiceName}</td>
							 <td>${spices[i].originRegion}</td>
							 <td>${spices[i].pungencyLevel}</td>
						     <td>${spices[i].isPowdered}</td>
							
							</tbody>
							</tr>`
							console.log(result20);
};
document.getElementById("info20").innerHTML=result20;

var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];
let result21=" ";
for(let i=0; i<tools.length; i++){
	result21+=`	<tr>
							 <td>${i+1}</td>
							 <td>${tools[i].toolName}</td>
							  <td>${tools[i].weightKg}</td>
							 <td>${tools[i].handleMaterial}</td>
							 <td>${tools[i].manualTool}</td>
						     <td>${tools[i].usageCategory}</td>
							
							</tbody>
							</tr>`
							console.log(result21);
};
document.getElementById("info21").innerHTML=result21;
// 25. minerals
var minerals = [
  { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
  { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
  { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
  { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
  { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];
let result22=" ";
for(let i=0; i<minerals.length; i++){
	result22+=`	<tr>
							 <td>${i+1}</td>
							 <td>${minerals[i].mineralLabel}</td>
							  <td>${minerals[i].hardnessMoh}</td>
							 <td>${minerals[i].crystalSystem}</td>
							 <td>${minerals[i].isMetallic}</td>
						     <td>${minerals[i].marketPriceUSDkg}</td>
							
							</tbody>
							</tr>`
							console.log(result22);
};
document.getElementById("info22").innerHTML=result22;

// 26. planetsMoons
var planetsMoons = [
  { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
  { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
  { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];
let result23=" ";
for(let i=0; i<planetsMoons.length; i++){
	result23+=`	<tr>
							 <td>${i+1}</td>
							 <td>${planetsMoons[i].moonLabel}</td>
							  <td>${planetsMoons[i].orbitingPlanet}</td>
							 <td>${planetsMoons[i].diameterKm}</td>
							 <td>${planetsMoons[i].discoveredYear}</td>
						     <td>${planetsMoons[i].surfaceMaterial}</td>
							
							</tbody>
							</tr>`
							console.log(result23);
};
document.getElementById("info23").innerHTML=result23;

// 27. musicalBands
var musicalBands = [
  { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
  { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
  { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
  { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
  { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];
let result24=" ";
for(let i=0; i<musicalBands.length; i++){
	result24+=`	<tr>
							 <td>${i+1}</td>
							 <td>${musicalBands[i].bandLabel}</td>
							  <td>${musicalBands[i].originCity}</td>
							 <td>${musicalBands[i].formedYear}</td>
							 <td>${musicalBands[i].genreStyle}</td>
						     <td>${musicalBands[i].albumsCount}</td>
							
							</tbody>
							</tr>`
							console.log(result24);
};
document.getElementById("info24").innerHTML=result24;
// 28. citiesMetro
var citiesMetro = [
  { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
  { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
  { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
  { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
  { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];
let result25=" ";
for(let i=0; i<musicalBands.length; i++){
	result25+=`	<tr>
							 <td>${i+1}</td>
							 <td>${citiesMetro[i].metroLabel}</td>
							  <td>${citiesMetro[i].trackLengthKm}</td>
							 <td>${citiesMetro[i].totalStations}</td>
							 <td>${citiesMetro[i].dailyRidershipMillion}</td>
						     <td>${citiesMetro[i].operatingSince}</td>
							
							</tbody>
							</tr>`
							console.log(result25);
};
document.getElementById("info25").innerHTML=result25;

// 29. sciDiscoveries
var sciDiscoveries = [
  { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
  { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
  { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];
let result26=" ";
for(let i=0; i<sciDiscoveries.length; i++){
	result26+=`	<tr>
							 <td>${i+1}</td>
							 <td>${sciDiscoveries[i].discoveryLabel}</td>
							  <td>${sciDiscoveries[i].discoveredBy}</td>
							 <td>${sciDiscoveries[i].yearMade}</td>
							 <td>${sciDiscoveries[i].dailyRidershipMillion}</td>
						     <td>${sciDiscoveries[i].operatingSince}</td>
							
							</tbody>
							</tr>`
							console.log(result26);
};
document.getElementById("info26").innerHTML=result26;

// 30. nationalParks
var nationalParks = [
  { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
  { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
  { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
  { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
  { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];
let result27=" ";
for(let i=0; i<nationalParks.length; i++){
	result27+=`	<tr>
							 <td>${i+1}</td>
							 <td>${nationalParks[i].parkLabel}</td>
							  <td>${nationalParks[i].countryLocated}</td>
							 <td>${nationalParks[i].establishedYear}</td>
							 <td>${nationalParks[i].areaSqKm}</td>
						     <td>${nationalParks[i].annualVisitorsMillion}</td>
							
							</tbody>
							</tr>`
							console.log(result27);
};
document.getElementById("info27").innerHTML=result27;

// 31. artPaintings
var artPaintings = [
  { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
  { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
  { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
  { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
  { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];
let result28=" ";
for(let i=0; i<artPaintings.length; i++){
	result27+=`	<tr>
							 <td>${i+1}</td>
							 <td>${artPaintings[i].paintingTitle}</td>
							  <td>${artPaintings[i].artistName}</td>
							 <td>${artPaintings[i].yearCreated}</td>
							 <td>${artPaintings[i].styleType}</td>
						     <td>${artPaintings[i].currentLocation}</td>
							
							</tbody>
							</tr>`
							console.log(result28);
};
document.getElementById("info28").innerHTML=result28;

// 32. historicalBattles
var historicalBattles = [
  { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
  { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
  { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
  { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
  { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];
let result29=" ";
for(let i=0; i<historicalBattles.length; i++){
	result29+=`	<tr>
							 <td>${i+1}</td>
							 <td>${historicalBattles[i].battleName}</td>
							  <td>${historicalBattles[i].battleYear}</td>
							 <td>${historicalBattles[i].mainCombatants}</td>
							 <td>${historicalBattles[i].outcome}</td>
						     <td>${historicalBattles[i].casualtiesApprox}</td>
							
							</tbody>
							</tr>`
							console.log(result29);
};
document.getElementById("info29").innerHTML=result29;

var awards = [
  { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
  { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
  { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];
let result30=" ";
for(let i=0; i<awards.length; i++){
	result30+=`	<tr>
							 <td>${i+1}</td>
							 <td>${awards[i].awardTitle}</td>
							  <td>${awards[i].categoryGiven}</td>
							 <td>${awards[i].established}</td>
							 <td>${awards[i].outcome}</td>
						     <td>${awards[i].casualtiesApprox}</td>
							
							</tbody>
							</tr>`
							console.log(result30);
};
document.getElementById("info30").innerHTML=result30;

// 34. bridges
var bridges = [
  { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
  { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
  { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
  { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
  { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];
let result31=" ";
for(let i=0; i<bridges.length; i++){
	result31+=`	<tr>
							 <td>${i+1}</td>
							 <td>${bridges[i].bridgeLabel}</td>
							  <td>${bridges[i].lengthMeters}</td>
							 <td>${bridges[i].countryLocated}</td>
							 <td>${bridges[i].builtYear}</td>
						     <td>${bridges[i].materialMain}</td>
							
							</tbody>
							</tr>`
							console.log(result31);
};
document.getElementById("info31").innerHTML=result31;


var spaceTelescopes = [
  { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
  { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
  { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
  { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
  { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];

let result32=" ";
for(let i=0; i<spaceTelescopes.length; i++){
	result32+=`	<tr>
							 <td>${i+1}</td>
							 <td>${spaceTelescopes[i].telescopeName}</td>
							  <td>${spaceTelescopes[i].launchYear}</td>
							 <td>${spaceTelescopes[i].primaryMirrorM}</td>
							 <td>${spaceTelescopes[i].operatorAgency}</td>
						     <td>${spaceTelescopes[i].missionStatus}</td>
							
							</tbody>
							</tr>`
							console.log(result32);
};
document.getElementById("info32").innerHTML=result32;


var fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];
let result33=" ";
for(let i=0; i<fashionBrands.length; i++){
	result33+=`	<tr>
							 <td>${i+1}</td>
							 <td>${fashionBrands[i].brandLabel}</td>
							  <td>${fashionBrands[i].foundedYear}</td>
							 <td>${fashionBrands[i].originCountry}</td>
							 <td>${fashionBrands[i].operatorAgency}</td>
						     <td>${fashionBrands[i].annualRevenueBillionUSD}</td>
							
							</tbody>
							</tr>`
							console.log(result33);
};
document.getElementById("info33").innerHTML=result33;
// 37. musicalInstrumentsPro
var musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];
let result34=" ";
for(let i=0; i<musicalInstrumentsPro.length; i++){
	result34+=`	<tr>
							 <td>${i+1}</td>
							 <td>${musicalInstrumentsPro[i].instrumentName}</td>
							  <td>${musicalInstrumentsPro[i].categoryFamily}</td>
							 <td>${musicalInstrumentsPro[i].rangeOctaves}</td>
							 <td>${musicalInstrumentsPro[i].madeOf}</td>
						     <td>${musicalInstrumentsPro[i].originCentury}</td>
							
							</tbody>
							</tr>`
							console.log(result34);
};
document.getElementById("info34").innerHTML=result34;


var webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];
let result35=" ";
for(let i=0; i<webBrowsers.length; i++){
	result35+=`	<tr>
							 <td>${i+1}</td>
							 <td>${webBrowsers[i].browserName}</td>
							  <td>${webBrowsers[i].categoryFamily}</td>
							 <td>${webBrowsers[i].firstReleaseYear}</td>
							 <td>${webBrowsers[i].madeOf}</td>
						     <td>${webBrowsers[i].originCentury}</td>
							
							</tbody>
							</tr>`
							console.log(result35);
};
document.getElementById("info35").innerHTML=result35;


var airlines = [
  { airlineName: "Emirates", foundedYear: 1985, hubAirport: "Dubai International", fleetSize: 262, allianceMember: false },
  { airlineName: "Qatar Airways", foundedYear: 1993, hubAirport: "Hamad International", fleetSize: 237, allianceMember: false },
  { airlineName: "Singapore Airlines", foundedYear: 1947, hubAirport: "Changi Airport", fleetSize: 155, allianceMember: true },
  { airlineName: "Lufthansa", foundedYear: 1953, hubAirport: "Frankfurt Airport", fleetSize: 277, allianceMember: true },
  { airlineName: "Delta Air Lines", foundedYear: 1924, hubAirport: "Atlanta", fleetSize: 915, allianceMember: true }
];
let result36=" ";
for(let i=0; i<airlines.length; i++){
	result36+=`	<tr>
							 <td>${i+1}</td>
							 <td>${airlines[i].airlineName}</td>
							  <td>${airlines[i].foundedYear}</td>
							 <td>${airlines[i].hubAirport}</td>
							 <td>${airlines[i].fleetSize}</td>
						     <td>${airlines[i].allianceMember}</td>
							
							</tbody>
							</tr>`
							console.log(result36);
};
document.getElementById("info36").innerHTML=result36;


var volcanoes = [
  { volcanoLabel: "Mauna Loa", heightMeters: 4169, lastEruptionYear: 2022, locationIsland: "Hawaii", volcanoType: "Shield" },
  { volcanoLabel: "Mount Etna", heightMeters: 3329, lastEruptionYear: 2021, locationIsland: "Sicily", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Krakatoa", heightMeters: 813, lastEruptionYear: 2018, locationIsland: "Indonesia", volcanoType: "Caldera" },
  { volcanoLabel: "Mount Fuji", heightMeters: 3776, lastEruptionYear: 1707, locationIsland: "Honshu", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Eyjafjallajökull", heightMeters: 1651, lastEruptionYear: 2010, locationIsland: "Iceland", volcanoType: "Stratovolcano" }
];
let result37=" ";
for(let i=0; i<volcanoes.length; i++){
	result37+=`	<tr>
							 <td>${i+1}</td>
							 <td>${volcanoes[i].volcanoLabel}</td>
							  <td>${volcanoes[i].heightMeters}</td>
							 <td>${volcanoes[i].lastEruptionYear}</td>
							 <td>${volcanoes[i].locationIsland}</td>
						     <td>${volcanoes[i].volcanoType}</td>
							
							</tbody>
							</tr>`
							console.log(result37);
};
document.getElementById("info37").innerHTML=result37;





var spaceMissions = [
  {title: "Apollo 11", content: "Apollo 11 was the historic NASA mission that first landed humans on the Moon in 1969. Commander Neil Armstrong became the first person to step onto the lunar surface, followed by Buzz Aldrin, while Michael Collins orbited above. It marked a defining moment in human space exploration. The mission inspired generations to dream beyond Earth."},
  {title: "Voyager 1", content: "Launched in 1977, Voyager 1 is a space probe that has traveled beyond our solar system into interstellar space. It carries the Golden Record, a message for any extraterrestrial life it may encounter. Voyager 1 continues to send back valuable scientific data decades later. Its journey redefines our understanding of space."},
  {title: "Mars Rover Perseverance", content: "NASA's Perseverance Rover landed on Mars in February 2021, tasked with searching for signs of ancient microbial life. It carries advanced instruments, takes high-resolution images, and collects rock samples for possible return to Earth. It also deployed the first Martian helicopter, Ingenuity. Perseverance represents humanity’s ambition to explore new worlds."},
  {title: "Hubble Telescope", content: "The Hubble Space Telescope, launched in 1990, has provided stunning images of distant galaxies, nebulae, and planets. Floating above Earth's atmosphere allows it to capture uninterrupted, clear cosmic images. Its observations have deepened our understanding of the universe’s age, expansion, and formation. Hubble remains a symbol of human curiosity and capability."},
  {title: "Chandrayaan-2", content: "India’s Chandrayaan-2, launched in 2019, aimed to explore the Moon’s south paolar region, which holds potential clues about water ice deposits. The mission involved an orbiter, a lander, and a rover. While the lander faced challenges, the orbiter continues transmitting valuable lunar data. The mission highlighted India's growing presence in space exploration."}
];

let result38=" ";
for(let i=0; i<spaceMissions.length; i++){
	
	let obj=spaceMissions[i];
	result38+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj.title}</h4>
							</div>
							<div class="card-body" >${obj.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result38);
};
document.getElementById("card").innerHTML=result38;

var worldCuisines = [
  {title: "Italian", content: "Italian cuisine is beloved for its emphasis on fresh ingredients, simple techniques, and bold flavors. Dishes like pasta, pizza, and risotto are enjoyed worldwide, often accompanied by fine wines. Olive oil, tomatoes, and herbs are staples in Italian cooking. It’s a culinary tradition that celebrates both comfort and elegance."},
  {title: "Mexican", content: "Mexican cuisine offers a vibrant blend of indigenous and Spanish influences, rich in spices, colors, and textures. Tacos, enchiladas, and tamales are popular staples, often paired with fresh salsas and guacamole. Corn, beans, and chili peppers feature prominently in recipes. The food reflects the spirit and warmth of Mexican culture."},
  {title: "Japanese", content: "Japanese cuisine emphasizes balance, seasonality, and visual presentation. Sushi, ramen, and tempura showcase delicate flavors and meticulous preparation methods. Fresh seafood, rice, and fermented foods play key roles in the diet. It combines health, tradition, and artistry on every plate."},
  {title: "Lebanese", content: "Lebanese food blends Middle Eastern flavors with Mediterranean freshness. Common dishes like hummus, tabbouleh, and shawarma bring together herbs, olive oil, and grains. Meals are often shared, creating a warm sense of community. It's a cuisine that celebrates hospitality and cultural heritage."},
  {title: "Thai", content: "Thai cuisine is known for its balance of sweet, sour, salty, and spicy flavors. Dishes often feature fresh herbs, coconut milk, and noodles, like in pad Thai or green curry. Street food culture thrives in Thailand, offering dishes bursting with color and taste. It's a cuisine full of warmth and variety."}
];
let result39=" ";
for(let i=0; i<worldCuisines.length; i++){
	
	let obj2=worldCuisines[i];
	result39+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj2.title}</h4>
							</div>
							<div class="card-body" >${obj2.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result39);
};
document.getElementById("card2").innerHTML=result39;

var mountainRanges = [
  {title: "Himalayas", content: "The Himalayas span five countries and include Mount Everest, the world’s tallest peak. They influence local climates, support rich biodiversity, and provide water resources for millions. Home to diverse cultures and spiritual traditions, the Himalayas are both a natural wonder and a cultural treasure."},
  {title: "Andes", content: "Stretching along the western edge of South America, the Andes are the longest continental mountain range. They offer stunning landscapes, from volcanoes to glacial lakes. The range also sustains ancient cultures like the Inca and supports vital agricultural communities. The Andes are a blend of natural beauty and human history."},
  {title: "Alps", content: "The Alps, crossing eight European countries, are famed for their winter resorts and picturesque villages. They play an important role in tourism, farming, and culture in the region. Hiking, skiing, and mountaineering attract millions of visitors annually. The Alps are a symbol of European natural beauty."},
  {title: "Rockies", content: "The Rocky Mountains stretch from Canada to the southwestern United States, offering dramatic peaks and diverse wildlife. They are a popular destination for hiking, skiing, and camping. The Rockies also hold historical significance for early exploration and settlement in North America."},
  {title: "Atlas Mountains", content: "The Atlas Mountains in North Africa pass through Morocco, Algeria, and Tunisia. They are home to the Berber people and a variety of ecosystems. The range offers stunning views, unique flora, and challenging hiking routes. It’s a lesser-known gem for adventurous travelers."}
];
let result40=" ";
for(let i=0; i<mountainRanges.length; i++){
	
	let obj3=mountainRanges[i];
	result40+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj3.title}</h4>
							</div>
							<div class="card-body" >${obj3.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result40);
};
document.getElementById("card3").innerHTML=result40;

var famousAuthors = [
  {title: "William Shakespeare", content: "Often called the Bard of Avon, William Shakespeare wrote plays, sonnets, and poems that have shaped literature for centuries. His works explore themes of love, power, jealousy, and ambition. Plays like Hamlet and Romeo and Juliet remain timeless cultural touchstones. His influence on language and storytelling is immeasurable."},
  {title: "Jane Austen", content: "Jane Austen is celebrated for her keen observations of social manners and relationships in the 18th century. Novels like Pride and Prejudice combine romance, wit, and commentary on class. She crafted characters that feel real and relatable even today. Austen’s work continues to inspire modern adaptations."},
  {title: "Mark Twain", content: "Mark Twain, born Samuel Clemens, captured American life along the Mississippi River in classics like The Adventures of Tom Sawyer. His humor, social criticism, and vivid storytelling made him one of America’s greatest authors. Twain's sharp wit still resonates with readers worldwide."},
  {title: "Agatha Christie", content: "Agatha Christie, the 'Queen of Mystery', authored dozens of detective novels and short stories. Her characters Hercule Poirot and Miss Marple are iconic figures in crime fiction. Christie’s complex plots and clever twists kept readers guessing until the last page."},
  {title: "Gabriel García Márquez", content: "Colombian novelist Gabriel García Márquez brought magical realism to the forefront with works like One Hundred Years of Solitude. He weaves political and cultural history into deeply human stories. Márquez’s lush prose and imaginative worlds have earned him global acclaim."}
];

let result41=" ";
for(let i=0; i<famousAuthors.length; i++){
	
	let obj4=famousAuthors[i];
	result41+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj4.title}</h4>
							</div>
							<div class="card-body" >${obj4.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result41);
};
document.getElementById("card4").innerHTML=result41;


var prehistoricAnimals = [
  {title: "Tyrannosaurus Rex", content: "The T. rex was one of the largest land predators to walk the Earth during the Late Cretaceous period. It had powerful jaws, massive teeth, and exceptional hunting abilities. Fossil evidence offers clues about its diet and behavior. The T. rex remains an icon in paleontology and popular culture."},
  {title: "Triceratops", content: "Known for its three horns and large frill, the Triceratops was a herbivore of the late Cretaceous era. Its horns likely served for defense and mating displays. Fossils are frequently found in North America, making it a well-studied dinosaur."},
  {title: "Woolly Mammoth", content: "The woolly mammoth roamed cold, Ice Age landscapes, covered in long fur to survive the freezing temperatures. Closely related to modern elephants, mammoths had long tusks for foraging and defense. Extinction occurred about 4,000 years ago, but frozen remains offer fascinating insights."},
  {title: "Pteranodon", content: "Pteranodons were large flying reptiles of the Late Cretaceous, not dinosaurs but pterosaurs. With wingspans over 20 feet, they were skilled gliders over prehistoric seas. Their fossils help us understand flight evolution in vertebrates."},
  {title: "Megalodon", content: "The Megalodon was a massive prehistoric shark, estimated to reach over 50 feet in length. It dominated oceans millions of years ago, preying on whales and large fish. Its extinction remains a topic of scientific research and debate."}
];
let result42=" ";
for(let i=0; i<prehistoricAnimals.length; i++){
	
	let obj5=prehistoricAnimals[i];
	result42+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj5.title}</h4>
							</div>
							<div class="card-body" >${obj5.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result42);
};
document.getElementById("card5").innerHTML=result42;


var famousInventions = [
  {title: "Printing Press", content: "Invented by Johannes Gutenberg in the mid-15th century, the printing press revolutionized the spread of knowledge. It made books affordable and widely available, fueling mass literacy and cultural movements like the Renaissance. By mechanizing the process of reproducing text, it transformed communication forever."},
  {title: "Telephone", content: "The telephone, developed by Alexander Graham Bell in 1876, allowed real-time voice communication over long distances. It connected families, businesses, and governments like never before. This invention laid the foundation for today’s mobile and internet-based communications."},
  {title: "Light Bulb", content: "The light bulb, perfected by Thomas Edison, brought safe, practical electric lighting into homes and industries. It replaced gas lamps and candles, making nighttime productivity possible. This invention paved the way for modern electrical infrastructure."},
  {title: "Airplane", content: "The Wright brothers’ first successful flight in 1903 ushered in the era of aviation. Air travel connected distant parts of the world in hours rather than weeks. The airplane has since transformed transportation, tourism, and global commerce."},
  {title: "Internet", content: "The internet emerged from military research in the late 20th century and evolved into the backbone of global communication. It enables instant information sharing, online trade, and social connections. Today, billions depend on it for work, study, and daily life."}
];

let result43=" ";
for(let i=0; i<famousInventions.length; i++){
	
	let obj6=famousInventions[i];
	result43+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj6.title}</h4>
							</div>
							<div class="card-body" >${obj6.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result43);
};
document.getElementById("card6").innerHTML=result43;
var movieGenres = [
  {title: "Action", content: "Action films are designed for excitement, often featuring daring stunts, battles, and fast-paced sequences. They keep audiences engaged with high stakes and physical challenges. Many iconic action films have shaped popular culture with heroic characters and memorable confrontations."},
  {title: "Comedy", content: "Comedy films aim to entertain and amuse through humor, wit, and absurd situations. From slapstick to satire, the genre offers diverse substyles that appeal to varied audiences. A good comedy often becomes timeless through memorable lines and relatable humor."},
  {title: "Horror", content: "Horror taps into primal fears, creating suspense and terror through unsettling imagery, music, and storytelling. Whether supernatural or psychological, horror movies thrive on shock value and tension. They explore the dark side of human imagination."},
  {title: "Romance", content: "Romance films focus on love stories and emotional connections between characters. They may be heartwarming or tragic, often focusing on personal growth through relationships. The genre remains perennially popular for its relatability and emotional depth."},
  {title: "Science Fiction", content: "Science fiction explores futuristic concepts, advanced technology, and alternate realities. It often poses philosophical questions about humanity’s future and ethics. From space adventures to dystopian worlds, sci-fi pushes the boundaries of imagination and creativity."}
];
let result44=" ";
for(let i=0; i<movieGenres.length; i++){
	
	let obj6=movieGenres[i];
	result44+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj6.title}</h4>
							</div>
							<div class="card-body" >${obj6.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result44);
};
document.getElementById("card6").innerHTML=result44;

var musicalGenres = [
  {title: "Jazz", content: "Jazz originated in the African-American communities of New Orleans in the late 19th century. It’s defined by improvisation, syncopated rhythms, and expressive melodies. The genre has influenced countless other musical styles worldwide."},
  {title: "Classical", content: "Classical music spans centuries of composed works, from the Baroque to the Romantic eras. Performed by orchestras and soloists, it highlights technical skill and thematic development. It continues to inspire contemporary music."},
  {title: "Rock", content: "Rock music emerged in the 1950s, blending blues, country, and rhythm & blues. It’s recognized for its strong beats, electric guitars, and passionate vocals. Rock culture has shaped fashion, attitudes, and social movements."},
  {title: "Hip Hop", content: "Hip hop grew from the Bronx in the 1970s, combining rap, DJing, breakdancing, and graffiti art. It became a global cultural movement, giving voice to social and political issues."},
  {title: "Reggae", content: "Born in Jamaica, reggae blends ska, rocksteady, and African rhythms. Bob Marley brought it to international fame. Its laid-back beats often carry messages of peace, love, and social justice."}
];
let result45=" ";
for(let i=0; i<musicalGenres.length; i++){
	
	let obj7=musicalGenres[i];
	result45+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj7.title}</h4>
							</div>
							<div class="card-body" >${obj7.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result45);
};
document.getElementById("card7").innerHTML=result45;


var techInnovations = [
  {title: "Artificial Intelligence", content: "AI allows machines to simulate human intelligence, enabling learning, problem solving, and decision-making. From voice assistants to autonomous vehicles, AI is transforming industries globally. It raises both exciting possibilities and ethical challenges."},
  {title: "Blockchain", content: "Blockchain is a decentralized ledger system that records transactions securely and transparently. Initially built for cryptocurrency, it now supports sectors from supply chain to healthcare. It’s valued for trust without intermediaries."},
  {title: "3D Printing", content: "3D printing enables the creation of solid objects from digital models, layer by layer. It’s used in manufacturing, medicine, and even food production. The technology encourages rapid prototyping and customization."},
  {title: "Virtual Reality", content: "VR immerses users in simulated worlds using headsets and sensors. It’s popular in gaming, education, and training simulations. VR opens new ways to experience environments and interact digitally."},
  {title: "Quantum Computing", content: "Quantum computers use quantum bits to process complex calculations at unprecedented speeds. They offer potential breakthroughs in cryptography, material science, and AI. The technology is still in experimental stages but highly promising."}
];
let result46=" ";
for(let i=0; i<techInnovations.length; i++){
	
	let obj8=techInnovations[i];
	result46+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj8.title}</h4>
							</div>
							<div class="card-body" >${obj8.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result46);
};
document.getElementById("card8").innerHTML=result46;

var famousRivers = [
  {title: "Nile", content: "The Nile River flows through northeastern Africa and is often called the lifeline of Egypt. It has supported civilizations for thousands of years, providing water, transportation, and fertile land."},
  {title: "Amazon", content: "The Amazon River in South America is the largest by water volume. It nourishes the world’s largest rainforest, home to an unparalleled diversity of wildlife."},
  {title: "Yangtze", content: "China’s Yangtze River is Asia’s longest, vital for feeding agriculture and cities. It holds historical, cultural, and economic importance for the region."},
  {title: "Mississippi", content: "The Mississippi River flows through the US heartland, crucial to trade and agriculture. It has inspired countless American songs and stories."},
  {title: "Danube", content: "The Danube passes through multiple European countries, connecting cultures and economies. Its scenic beauty has inspired music, literature, and tourism."}
];
let result47=" ";
for(let i=0; i<famousRivers.length; i++){
	
	let obj9=famousRivers[i];
	result47+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj9.title}</h4>
							</div>
							<div class="card-body" >${obj9.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result47);
};
document.getElementById("card9").innerHTML=result47;

var ancientStructures = [
  {title: "Pyramids of Giza", content: "Built over 4,000 years ago in Egypt, these pyramids remain wonders of engineering. They served as tombs for pharaohs and stand as symbols of ancient Egyptian power."},
  {title: "Colosseum", content: "Rome’s Colosseum hosted gladiator contests and public spectacles nearly 2,000 years ago. It remains a striking reminder of Roman architecture and entertainment."},
  {title: "Great Wall of China", content: "Spanning thousands of miles, the Great Wall was built to protect China from invasions. It’s an enduring symbol of determination and craftsmanship."},
  {title: "Machu Picchu", content: "High in the Andes, this Incan city is famed for its terraces, temples, and breathtaking scenery. It draws millions seeking historical wonder."},
  {title: "Stonehenge", content: "Stonehenge in England is a prehistoric monument whose purpose remains debated. Its massive stones have stood for millennia, inspiring mystery and awe."}
];
let result48=" ";
for(let i=0; i<ancientStructures.length; i++){
	
	let obj10=ancientStructures[i];
	result48+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj10.title}</h4>
							</div>
							<div class="card-body" >${obj10.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result48);
};
document.getElementById("card10").innerHTML=result48;

var boardGames = [
  {title: "Chess", content: "Chess is a strategic game played on an 8x8 board. Originating in India, it teaches tactical planning and foresight. It’s a test of skill enjoyed globally across ages."},
  {title: "Monopoly", content: "Monopoly challenges players to buy, trade, and manage properties, aiming to bankrupt opponents. It’s a classic game of strategy, negotiation, and luck."},
  {title: "Scrabble", content: "Scrabble rewards vocabulary and creativity, with players forming words on a grid for points. It’s fun for honing language skills."},
  {title: "Catan", content: "In Catan, players build settlements, roads, and cities while trading resources. The game blends strategy, luck, and negotiation."},
  {title: "Clue", content: "Clue is a mystery-solving game where players deduce the culprit, weapon, and location of a crime. It’s a mix of deduction and luck."}
];
let result49=" ";
for(let i=0; i<boardGames.length; i++){
	
	let obj11=boardGames[i];
	result49+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj11.title}</h4>
							</div>
							<div class="card-body" >${obj11.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result49);
};
document.getElementById("card11").innerHTML=result49;

var musicalInstrumentsWorld = [
  {title: "Sitar", content: "The sitar is a plucked string instrument from India, renowned for its complex sound. It’s vital in classical Indian music and recognized worldwide."},
  {title: "Djembe", content: "The djembe is a West African drum played with bare hands. It produces rich tones and is used in cultural ceremonies and performances."},
  {title: "Bagpipes", content: "Bagpipes are wind instruments associated with Scotland. They produce a continuous, resonant sound using air from a bag squeezed by the arm."},
  {title: "Pan Flute", content: "The pan flute is made of multiple pipes of varying lengths. Common in South American folk music, it produces gentle, airy melodies."},
  {title: "Erhu", content: "The erhu is a two-stringed bowed instrument from China, known for its expressive tones. It’s often called the ‘Chinese violin’."}
];

let result50=" ";
for(let i=0; i<musicalInstrumentsWorld.length; i++){
	
	let obj12=musicalInstrumentsWorld[i];
	result50+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj12.title}</h4>
							</div>
							<div class="card-body" >${obj12.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result50);
};
document.getElementById("card12").innerHTML=result50;

var festivalsWorld = [
  {title: "Diwali", content: "Diwali, the Hindu festival of lights, celebrates victory of light over darkness. Homes are decorated with lamps, fireworks fill the sky, and families exchange sweets."},
  {title: "Carnival", content: "Carnival is a vibrant festival celebrated in places like Brazil, with parades, music, dancing, and elaborate costumes. It marks a joyful pre-Lent tradition."},
  {title: "Oktoberfest", content: "Originating in Munich, Oktoberfest is the world’s largest beer festival. It features traditional Bavarian music, dancing, and hearty food."},
  {title: "Chinese New Year", content: "Chinese New Year welcomes the lunar calendar’s start with dragon dances, red lanterns, and family feasts. It’s steeped in customs and symbolism."},
  {title: "Thanksgiving", content: "Thanksgiving in the US is celebrated with feasts, gratitude, and family gatherings, rooted in the harvest traditions of early settlers."}
];

let result51=" ";
for(let i=0; i<festivalsWorld.length; i++){
	
	let obj13=festivalsWorld[i];
	result51+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj13.title}</h4>
							</div>
							<div class="card-body" >${obj13.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result51);
};
document.getElementById("card13").innerHTML=result51;

var wondersOfNature = [
  {title: "Grand Canyon", content: "Carved by the Colorado River over millions of years, the Grand Canyon reveals stunning geological history. Its vastness and colorful layers attract millions of visitors."},
  {title: "Aurora Borealis", content: "The Northern Lights illuminate the polar skies with glowing colors, caused by charged solar particles interacting with Earth’s magnetic field."},
  {title: "Victoria Falls", content: "Straddling Zambia and Zimbabwe, Victoria Falls is one of the largest waterfalls in the world, renowned for its thunderous roar and misty spray."},
  {title: "Great Barrier Reef", content: "Off Australia’s coast, this coral reef system is the largest on Earth, teeming with marine life. It’s a UNESCO World Heritage Site."},
  {title: "Mount Everest", content: "The tallest mountain above sea level stands in the Himalayas, drawing climbers from across the world despite extreme challenges."}
];


let result52=" ";
for(let i=0; i<wondersOfNature.length; i++){
	
	let obj14=wondersOfNature[i];
	result52+=`<div class="col-md-4">
						<div class="card text-center h-100" >
							<div class="card-header" ><h4>${obj14.title}</h4>
							</div>
							<div class="card-body" >${obj14.content}
							</div>
							<div class="card-footer d-flex justify-content-between" >
								<button class="btn btn-primary btn-sm">EDIT</button>
								<button class="btn btn-danger btn-sm">DELETE</button>
							</div>
						</div>
					</div>`
							console.log(result52);
};
document.getElementById("card14").innerHTML=result52;


