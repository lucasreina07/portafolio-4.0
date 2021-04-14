function showsb(){
    let sb = document.getElementById("sb");
    let psn1 = document.getElementById("psn-1");
    let psn2 = document.getElementById("psn-2");
    let close = document.getElementById("close");

    psn1.style.transition = "300ms";
    psn2.style.transition = "300ms";
    sb.style.transition = "600ms";
    psn1.style.transform = "translateX(-20px)";
    psn2.style.transform = "translateX(10px)";
    sb.style.display = "block";
    close.style.display = "block";
    psn1.style.opacity = "0";
    psn2.style.opacity = "0";
    sb.style.opacity = "1";
}

function closesb(){
    let sb = document.getElementById("sb");
    let psn1 = document.getElementById("psn-1");
    let psn2 = document.getElementById("psn-2");
    let close = document.getElementById("close");

    psn1.style.transition = "300ms";
    psn2.style.transition = "300ms";
    sb.style.transition = "300ms";
    psn1.style.transform = "translateX(0px)";
    psn2.style.transform = "translateX(0px)";
    if(screen.width < 1110){
        psn2.style.transform = "translateY(-100px)";
    }
    sb.style.display = "none";
    close.style.display = "none";
    psn1.style.opacity = "1";
    psn2.style.opacity = "1";
    sb.style.opacity = "0";
}