const heroName = ["Photon Blaze", "Chrono Voyager", "Morphing Mirage", "Mind Melter", "Dark Matter", "Inferno Kingpin", "Shadow Serpent"];

const heroPower = ["invisibility", "telekinesis", "telepathy", "time manipulation", "shape-shifting", "elemental control", "healing power", "teleportation"];

const heroColors = ["red", "black", "green", "yellow", "purple", "orange", "silver", "pink", "gray", "gold", "brown"];

const superheroGenerator = (hero_name, super_powers, hero_colors) => {
    console.log(`Welcome to the Superhero Generator! Thank you for participating in these experimental trials. Your country thanks you.`)
    console.log(`You have been assigned the superhero name, ${hero_name}.`);

    console.log(`Your super suit will be ${hero_colors}.`);
    console.log(`Your new superpower is ${super_powers}.`);
}

const randHeroName = () => {
    const nameNum = Math.floor(Math.random() * heroName.length);
    return (heroName[nameNum]); 
}

const randHeroPower = () => {
    const powerNum = Math.floor(Math.random() * heroPower.length);
    return (heroPower[powerNum]); 
}

const randHeroColors = () => {
    const colorNum1 = Math.floor(Math.random() * heroColors.length);
    const colorNum2 = Math.floor(Math.random() * heroColors.length);
    return (`${heroColors[colorNum1]} and ${heroColors[colorNum2]}`); 
}


superheroGenerator(randHeroName(), randHeroPower(), randHeroColors());

