document.getElementById("generate_excuse_button").onclick = function () { generateExcuse() };


function generateExcuse ()
{
    var excuses = [
        "I can't right now, I have to walk my fish.",
        "I can't, my dog's depressed.",
        "I can't walk, my refrigerator fell on me.",
        "I can't, my goat is ill."
    ];

    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

    document.getElementById("excuse_text").innerHTML = randomExcuse;
}