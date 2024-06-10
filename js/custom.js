

window.addEventListener('DOMContentLoaded', () => {
    const vw = document.documentElement.clientWidth;
    const menuToggler = document.getElementById('menu-toggler');
    var style = document.createElement("style");

    document.head.appendChild(style);
    style.sheet.insertRule("body { width: 100%; overflow-x: 0;}", 0);

    menuToggler.addEventListener('click', function() {
        if ( document.getElementById("side-menu").className.match(/(?:^|\s)show(?!\S)/) ){
            document.getElementById("side-menu").className = document.getElementById("side-menu").className.replace( /(?:^|\s)show(?!\S)/g , '' );
            document.getElementById("body").className = document.getElementById("body").className.replace( /(?:^|\s) side-shift(?!\S)/g , 'side-shift-body-out' );
            document.body.style.width = '100%';
            document.body.style.overflowX = 0;
        }else{
            document.getElementById("side-menu").className += " show";
            if ( document.getElementById("body").className.match(/(?:^|\s)side-shift-body-out(?!\S)/) ){
                document.getElementById("body").className = document.getElementById("body").className.replace( /(?:^|\s)side-shift-body-out(?!\S)/g , ' side-shift' );
            }else{
                document.getElementById("body").className += " side-shift";
            }
            
            document.body.style.width = vw;
            document.body.style.overflowX = 'hidden';
        }
        
    });
})





