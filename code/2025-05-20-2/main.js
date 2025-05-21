
const COR = {

    version: "2025-05-20-2",

    // Used by GFO ~ github file open
    defaultFile: "0-agenda.md",
    pathContent: "../../../",

    // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "agenda",
    branch: "main",

    urlSource: "https://github.com/theo-armour/agenda/blob/main/",
    urlPathContent: "https://theo-armour.github.io/agenda/",
    urlPathApps: "https://theo-armour.github.io/agenda/",
    urlPushPath: "https://theo-armour.github.io/agenda/",

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
 	iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img class=infoImg src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
	iconRepo: "❦",

    menuTitle: "Theo Agenda",
    

    filterFolders: [], //[ "code"],

    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],

}

if (location.protocol === "https:") {

    COR.pathContent = COR.urlPathContent;
    COR.pathApps = COR.urlPathApps + COR.version + "/";

} else {

    COR.pathContent = "../../";
    COR.pathApps = "./";

}

//console.log( "COR.pathApps", COR.pathApps);
/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '240');
r.style.setProperty('--mnu-width', '17rem');

