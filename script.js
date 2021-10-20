

// function loadData(){
//     return fetch("heroes.json").then(
//         (res) => res.json()
//     ).catch(()=> console.log("something went wrong"));
// }

async function loadData(){
    try{
    const resp = await fetch("heroes.json");
    return await resp.json(); // await wegen error-Handling!!!
    }
    catch(error){
        console.log("something went wrong");
    }    
}

getHeroNamesImperative().then((result) => console.log(result));
getHeroNamesDeclarative().then((result) => console.log(result));


async function getHeroNamesImperative(){
    const heroes = await loadData();
    
    const heroNames = [];
    for (let i = 0; i < heroes.length; i++){
        heroNames.push(heroes[i].name);
    }
    return heroNames;
}

async function getHeroNamesDeclarative(){
    const heroes = await loadData();

    return heroes.map(hero => hero.name);
}