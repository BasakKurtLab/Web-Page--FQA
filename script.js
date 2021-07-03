function more(button) {
   
    let inhalt = button.parentElement.getElementsByClassName("inhalt")[0];
    let icon = button.children[0];
    let title = button.parentElement.getElementsByClassName("title")[0];

    if (inhalt.style.maxHeight) {
        inhalt.style.maxHeight = null;
        title.style.backgroundColor = "var(--title)";
        button.style.backgroundColor = "var(--title2)";
        icon.style.transform="rotate(0deg)";
    }
    else {
        inhalt.style.maxHeight = inhalt.scrollHeight + "px";
        
        title.style.backgroundColor = "var(--title2)";
        button.style.backgroundColor = "var(--btnbg)";
        icon.style.transform = "rotate(180deg)";
       
    }
    
}