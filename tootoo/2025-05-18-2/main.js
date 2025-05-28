
const COR = {

    // Used by GFO ~ github file open
    defaultFile: "0-agenda.md",
    pathContent: "../../",

    // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "agenda",
    branch: "main",

    urlSource: "https://github.com/theo-armour/agenda/",
    urlPathContent: "https://theo-armour.github.io/agenda/",
    urlPushPath: "https://theo-armour.github.io/agenda/",

    menuTitle: "Theo Agenda",
    

    filterFolders: [], //[ "code"],

    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],

}

if (location.protocol === "https:") {

    COR.pathContent = COR.urlPathContent;

} else {

    // COR.pathContent unchanged

}

/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '240');
r.style.setProperty('--mnu-width', '17rem');

