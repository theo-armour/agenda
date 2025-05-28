
const COR = {

    version: "2025-05-26",

    // Used by GFO ~ github file open
    defaultFile: "test.md",
    pathApps: "./",
    pathContent: "../../",

    // Used by GTV ~ github tree view
    user: "pushme-pullyou",
    repo: "tootoo-2025",
    branch: "main",

    urlSource: "https://github.com/pushme-pullyou/tootoo-2025/tree/main/",
    urlPathContent: "https://pushme-pullyou.github.io/tootoo-2025/",
    urlPathApps: "https://pushme-pullyou.github.io/tootoo-2025/tootoo/",
    urlPushPath: "https://pushme-pullyou.github.io/tootoo-2025/tootoo/",
    urlBaseAPI: "https://api.github.com/repos/pushme-pullyou/tootoo-2025/contents/",

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
 	iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img class=infoImg src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
	iconRepo: "❦",

    menuTitle: "TooToo 2025",
    

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

var urlBaseAPI = COR.urlBaseAPI;

//console.log( "COR.pathApps", COR.pathApps);
/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');

