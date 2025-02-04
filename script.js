function selectPlanet(planetName) {
    let planetInfo = {
        Mercury: "Mercury is the closest planet to the Sun. It is very hot, and its surface is similar to the Moon's.",
        Venus: "Venus is the second planet from the Sun. It has a thick, toxic atmosphere and surface temperatures hot enough to melt lead.",
        Earth: "Earth is the third planet from the Sun. It is the only known planet to support life.",
        Mars: "Mars is the fourth planet from the Sun, often called the Red Planet due to its reddish appearance.",
        Jupiter: "Jupiter is the fifth and largest planet in our solar system, known for its Great Red Spot and many moons.",
        Saturn: "Saturn is the sixth planet from the Sun and is known for its stunning ring system.",
        Uranus: "Uranus is the seventh planet from the Sun and has an unusual tilt, rotating on its side.",
        Neptune: "Neptune is the eighth planet from the Sun and is known for its deep blue color and strong winds."
    };

    let planetDescriptions = {
        Mercury: "Mercury is the closest planet to the Sun. It is very hot, and its surface is similar to the Moon's.",
        Venus: "Venus is the second planet from the Sun. It has a thick, toxic atmosphere and surface temperatures hot enough to melt lead.",
        Earth: "Earth is the third planet from the Sun. It is the only known planet to support life.",
        Mars: "Mars is the fourth planet from the Sun, often called the Red Planet due to its reddish appearance.",
        Jupiter: "Jupiter is the fifth and largest planet in our solar system, known for its Great Red Spot and many moons.",
        Saturn: "Saturn is the sixth planet from the Sun and is known for its stunning ring system.",
        Uranus: "Uranus is the seventh planet from the Sun and has an unusual tilt, rotating on its side.",
        Neptune: "Neptune is the eighth planet from the Sun and is known for its deep blue color and strong winds."
    };

    document.getElementById("planet-name").textContent = planetName;
    document.getElementById("planet-description").textContent = planetInfo[planetName];
}