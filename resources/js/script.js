//refactor to make adding more projects non-exponentially more difficult
//also remove "onclick" from HTML and add event handlers here

function swapPanel (panel) {

    if (typeof panel === "number") {
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("veil").style.display = "none";
        document.getElementById("nav-dropdown").style.display = "none";
    }
    switch (panel) {
        case 0:
            break;
        case 1:
            document.getElementById("spaghetti").style.display = "flex";
            document.getElementById("fargo").style.display = "none";
            document.getElementById("pretty").style.display = "none";
            break;
        case 2:
            document.getElementById("spaghetti").style.display = "none";
            document.getElementById("fargo").style.display = "flex";
            document.getElementById("pretty").style.display = "none";
            break;
        case 3:
            document.getElementById("spaghetti").style.display = "none";
            document.getElementById("fargo").style.display = "none";
            document.getElementById("pretty").style.display = "flex";
            break;
        case 'about':
            document.getElementById("contact").style.display = "none";
            document.getElementById("nav-dropdown").style.display = "none";
            if (document.getElementById("about").style.display === "inline-flex") {
                document.getElementById("about").style.display = "none";
                document.getElementById("veil").style.display = "none";
            } else {
                document.getElementById("about").style.display = "inline-flex";
                document.getElementById("veil").style.display = "block";
            }
            break;
        case 'contact':
            document.getElementById("about").style.display = "none";
            document.getElementById("nav-dropdown").style.display = "none";
            if (document.getElementById("contact").style.display === "flex") {
                document.getElementById("contact").style.display = "none";
                document.getElementById("veil").style.display = "none";
            } else {
                document.getElementById("contact").style.display = "flex";
                document.getElementById("veil").style.display = "block";
            }
            break;
        case 'nav':
            document.getElementById("about").style.display = "none";
            document.getElementById("contact").style.display = "none";
            if (document.getElementById("nav-dropdown").style.display === "flex") {
                document.getElementById("nav-dropdown").style.display = "none";
                document.getElementById("veil").style.display = "none";
            } else {
                document.getElementById("nav-dropdown").style.display = "flex";
                document.getElementById("veil").style.display = "block";
            }
            break;
        default:
            alert(`invalid argument: ${panel}`);
            break;
    }
}