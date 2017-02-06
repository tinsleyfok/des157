//JavaScript Document
//Tinsley Huo 
//shanghai skyline 
//2/1/2017

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    var photo = document.getElementById('photo');
    var answer = document.getElementById('answer');
    var close = document.getElementById('close');
    var night = document.getElementById('night');
    var answer2 = document.getElementById('answer2');
    var close2 = document.getElementById('close2');



    var pearltower = document.getElementById('pearltower');
    var shanghaitower = document.getElementById('shanghaitower');
    var ifc = document.getElementById('ifc');
    var jinmaotower = document.getElementById('jinmaotower');
    var temple = document.getElementById('temple');
    var item = document.getElementById("pearltower");
    var item2 = document.getElementById("shanghaitower");
    var item3 = document.getElementById("ifc");
    var item4 = document.getElementById("jinmaotower");
    var item5 = document.getElementById("temple");



    //button 3d version

    photo.addEventListener('click', function () {
        answer.style.display = "block";
    })
    close.addEventListener('click', function () {
        answer.style.display = "none";
    })
    
    //button night version
        night.addEventListener('click', function () {
        answer2.style.display = "block";
    })
    close2.addEventListener('click', function () {
        answer2.style.display = "none";
    })

    //scroll horizontally 
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var scrollSpeed = 5;
        document.documentElement.scrollLeft -= (delta * scrollSpeed);
        document.body.scrollLeft -= (delta * scrollSpeed);
        e.preventDefault();
    }

    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }

    //hover effect pearl tower
    pearltower.addEventListener('mouseover', function () {
        pearltower.style.opacity = 1;
        pearltower.src = 'images/pearltower.hover.png';
    });

    pearltower.addEventListener('mouseout', function () {
        pearltower.style.opacity = 1;
        pearltower.src = 'images/pearltower.png';
    });

    //hover effect shanghai tower
    shanghaitower.addEventListener('mouseover', function () {
        shanghaitower.style.opacity = 1;
        shanghaitower.src = 'images/shanghaitower.hover.png';
    });

    shanghaitower.addEventListener('mouseout', function () {
        shanghaitower.style.opacity = 1;
        shanghaitower.src = 'images/shanghaitower.png';
    });
    //hover effect ifc
    ifc.addEventListener('mouseover', function () {
        ifc.style.opacity = 1;
        ifc.src = 'images/ifc.hover.png';
    });

    ifc.addEventListener('mouseout', function () {
        ifc.style.opacity = 1;
        ifc.src = 'images/ifc.png';
    });

    //hover effect jinmao tower
    jinmaotower.addEventListener('mouseover', function () {
        jinmaotower.style.opacity = 1;
        jinmaotower.src = 'images/jinmao.hover.png';
    });

    jinmaotower.addEventListener('mouseout', function () {
        jinmaotower.style.opacity = 1;
        jinmaotower.src = 'images/jinmaotower.png';
    });
    //hover effect temple
    temple.addEventListener('mouseover', function () {
        temple.style.opacity = 1;
        temple.src = 'images/temple.hover.png';
    });

    temple.addEventListener('mouseout', function () {
        temple.style.opacity = 1;
        temple.src = 'images/temple.png';
    });
    //hover text
    item.addEventListener("mouseover", func, false);
    item.addEventListener("mouseout", func1, false);

    function func() {
        document.getElementById("pearltowertext").setAttribute("style", "display:block;")
    }

    function func1() {
        document.getElementById("pearltowertext").setAttribute("style", "display:none;")
    }

    item2.addEventListener("mouseover", func2, false);
    item2.addEventListener("mouseout", func3, false);

    function func2() {
        document.getElementById("shanghaitowertext").setAttribute("style", "display:block;")
    }

    function func3() {
        document.getElementById("shanghaitowertext").setAttribute("style", "display:none;")
    }
    item3.addEventListener("mouseover", func4, false);
    item3.addEventListener("mouseout", func5, false);

    function func4() {
        document.getElementById("ifctext").setAttribute("style", "display:block;")
    }

    function func5() {
        document.getElementById("ifctext").setAttribute("style", "display:none;")
    }
    item4.addEventListener("mouseover", func6, false);
    item4.addEventListener("mouseout", func7, false);

    function func6() {
        document.getElementById("jinmaotext").setAttribute("style", "display:block;")
    }

    function func7() {
        document.getElementById("jinmaotext").setAttribute("style", "display:none;")
    }
    item5.addEventListener("mouseover", func8, false);
    item5.addEventListener("mouseout", func9, false);

    function func8() {
        document.getElementById("templetext").setAttribute("style", "display:block;")
    }

    function func9() {
        document.getElementById("templetext").setAttribute("style", "display:none;")
    }



});