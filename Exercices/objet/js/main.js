/*
var perso1=new Object();
perso1.name="Aragorn";
perso1.house="Gondor";
perso1.weapon="Sword";
*/
//console.log(perso1);
//console.log(perso1.name)
//console.log(perso1["name"]);
/*
var perso2={};z
perso2={
    "name":"legolas",
    "house":"Elronde",
    "weapon":"Arc"
}
*/
//console.log(perso2); 

//for (var key in perso2){
//    console.log(key +" : "+perso2[key]);
//}

//var persos=[perso1,perso2]
/*
for (var key in perso2){
    console.log(key +" : "+perso2[key]);
}
for (var key in perso1){
    console.log(key +" : "+perso1[key]);
}
*/
/*
for (var key in persos){
    console.log(key +" : "+persos[key]);
}
*/
/*
for (i in persos){
    Object.values(persos[i]).forEach(val => console.log(val));
}
*/



var DIList = {
    "stagiaires":[
        {
            "firstname":"Laurent",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Foued",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Jerome",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Sacha",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Théo",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Manu",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Gaetan",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Lucas",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Pierre Henri",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Sebastien",
            "lastname":"Cardon",
            "age":26,
            "city":"Mons"
        },
        {
            "firstname":"Maxime",
            "lastname":"Godart-Hupet",
            "age":27,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};


for(var i = 0; i < DIList.stagiaires.length; i++) {
    console.log(DIList.stagiaires[i].firstname +" " +DIList.stagiaires[i].lastname);
}




for(var i = 0; i < DIList.stagiaires.length; i++) {
    if (DIList.stagiaires[i].firstname.startsWith('M')||DIList.stagiaires[i].firstname.startsWith('J')||DIList.stagiaires[i].firstname.startsWith('P')){
        console.log(DIList.stagiaires[i].firstname);
    } 
}