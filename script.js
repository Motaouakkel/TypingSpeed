// select Elements
const randomBox = document.querySelector(".centerBox .randomText");
const refaireButton = document.getElementById("refaire");
const myChrono = document.getElementById("chrono");
const textarea = document.getElementById("textarea");

// Paragraphs
const paragraphs = ["La France est un pays attachant avec de magnifiques monuments et une savoureuse gastronomie. C'est pourquoi parler français lors de ses voyages ou pour nouer des relations professionnelles demeure un vrai plus !",
    "Nous avons sélectionné avec des professeurs expérimentés de français des textes faciles à lire et amusants. A la fin des textes, un exercice sous forme de QCM permet de valider ses acquis. Il est à noter que l'édition gratuite des textes sous forme de PDF est un vrai plus. Désormais la langue de Molière n'aura plus de secret pour vous.",
    "La littérature maghrébine d’expression française a vu le jour au lendemain de la seconde guerre mondiale, dans les pays du Maghreb. Elle est issue de la Tunisie, de l’Algérie et du Maroc et produite par des auteurs autochtones, c’est à dire originaires du pays.",
    "Ainsi, les auteurs se servent du français qui devient la deuxième langue officielle de tout le Maghreb.",
    "Au début, la littérature maghrébine d’expression française de première génération est ethnographique ou plus exactement documentaire ( abordant des thèmes folkloriques) ce qui prédomine c’est la description de la vie quotidienne avec tous ses détails.",
    "Le but est de faire plaisir au lecteur européen curieux de connaître le secret de la vie au Maghreb, mais surtout de préserver l’identité culturelle par le biais de l’évocation des images authentiques : ( montrer que la tradition est toujours vivante et que rien ne peut l’estomper).",
    "La boîte à merveilles est un roman autobiographique dans lequel l’auteur raconte une tranche de sa vie à savoir l’enfance. Il effectue un retour sur son passé, une espèce de rétrospection ( l’emploi des temps du récit) et ne parle que de sa vie ( l’emploi de la 1ère personne : Je; nous; ma ; mes ; notre…,)",
    "Ainsi, l’auteur s’engage à restituer avec exactitude et fidélité son passé et s’identifie à la fois au narrateur et au personnage principal",
    "dans la boîte à merveilles, la forme d’écriture tient à la fois de l’autobiographie et du roman. En effet, l’auteur ( Ahmed Sefrioui diffère du narrateur ( Sidi Mohamed). De plus, l’oeuvre s’accorde des libertés du roman ou fiction et souvenirs sont difficilement identifiables",
    "Si le roman autobiographique reprend des éléments très proches de la vie de l’auteur, il autorise des transformations de la réalité ( changement de nomes de personnes, transformation de certains faits).",
    "Ahmed Sefrioui est né à Fès en 1915, de parents berbères arabisés. Il a frésuenté l’école coranique puis le collège Moulay Driss. Il a exercé plusieurs emplois : interprète journaliste pour le quotidien nationaliste Action du peuple",
];

// Choose random paragraph from table
var index;
function GetPara() {
    index = Math.floor(Math.random() * 10);
    randomBox.innerHTML = paragraphs[index];
}

GetPara();

refaireButton.onclick = GetPara;

// Chrono 
var Time = {
    Minutes: 00,
    Seconds: 00,
    Milliseconds: 00
}
function Chrono() {
    var mn = Math.abs((new Date()).getMinutes() - Time.Minutes);
    mn = mn > 9 ? mn : `0${mn}`;
    var sc = Math.abs((new Date()).getSeconds() - Time.Seconds);
    sc = sc > 9 ? sc : `0${sc}`;
    var mi = (Math.abs((new Date()).getMilliseconds() - Time.Milliseconds) / 10).toFixed(0);
    mi = mi > 9 ? mi : `0${mi}`;
    //console.log(`${mn}:${sc}:${mi}`);
    myChrono.innerHTML = `${mn}:${sc}:${mi}`;
}
// 

var keyPressed = 0;
var timeBegin;
textarea.addEventListener("keypress", function () {
    keyPressed++;
    if (keyPressed == 1) {
        //tooooop chrono
        Time.Minutes = (new Date()).getMinutes();
        Time.Seconds = (new Date()).getSeconds();
        Time.Milliseconds = (new Date()).getMilliseconds();
        timeBegin = setInterval(Chrono, 10);
    }
});


textarea.addEventListener("keyup", function () {
    var str = String(this.value);
    var fullStr = paragraphs[index];
    if (fullStr.substr(0, str.length) != str) {
        textarea.style.borderColor = "red";
    } else {
        textarea.style.borderColor = "rgb(190, 188, 188)";
        if (str.length == fullStr.length) {
            clearInterval(timeBegin);
            textarea.style.borderColor = "green";
        }
    }
});


refaireButton.onclick = function () {
    GetPara();
    clearInterval(timeBegin);
    myChrono.innerHTML = `00:00:00`;
    textarea.style.borderColor = "rgb(190, 188, 188)";
    textarea.value = "";
}