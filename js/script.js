function hoverInsta() {
    document.getElementById('path1-insta').style.fill = '#f7ce9bf3';
    document.getElementById('path2-insta').style.fill = '#f7ce9bf3';
    document.getElementById('path3-insta').style.fill = '#f7ce9bf3';
}

function notHoverInsta() {
    document.getElementById('path1-insta').style.fill = '#ffff';
    document.getElementById('path2-insta').style.fill = '#ffff';
    document.getElementById('path3-insta').style.fill = '#ffff';
}

function hoverInstaButtom() {
    document.getElementById('path1-insta-buttom').style.fill = '#f7ce9bf3';
    document.getElementById('path2-insta-buttom').style.fill = '#f7ce9bf3';
    document.getElementById('path3-insta-buttom').style.fill = '#f7ce9bf3';
}

function notHoverInstaButtom() {
    document.getElementById('path1-insta-buttom').style.fill = '#ffff';
    document.getElementById('path2-insta-buttom').style.fill = '#ffff';
    document.getElementById('path3-insta-buttom').style.fill = '#ffff';
}

function hoverArrowButton() {
    document.getElementById('arrow-down').style.fill = '#B38A58';
}

function notHoverArrowButton() {
    document.getElementById('arrow-down').style.fill = 'none';
}

function clickRomb(nr) {
    for (let i = 1; i <= 3; i++) {
        if (i == nr) {
            document.getElementsByClassName("romb" + i)[0].style.background = '#b38a58';
        }
        else {
            document.getElementsByClassName("romb" + i)[0].style.background = '#ffff';
        }
    }
}

function hoverInstaFollowButton() {
    document.getElementById('insta-follow-button1').style.fill = '#000000';
    document.getElementById('insta-follow-button2').style.fill = '#000000';
    document.getElementById('insta-follow-button3').style.fill = '#000000';

}

function notHoverInstaFollowButton() {
    document.getElementById('insta-follow-button1').style.fill = '#ffff';
    document.getElementById('insta-follow-button2').style.fill = '#ffff';
    document.getElementById('insta-follow-button3').style.fill = '#ffff';

}

function hoverSideArrowButton(side) {
    document.getElementById('Path-' + side).style.stroke = '#b38a58';
}

function notHoverSideArrowButton(side) {
    document.getElementById('Path-' + side).style.stroke = '#ffff';
}

function hoverArrowUpButton() {
    document.getElementById("arrow-up").style.stroke = '#b38a58';
    document.getElementById("arrow-up1").style.stroke = '#b38a58';

}

function notHoverArrowUpButton() {
    document.getElementById("arrow-up").style.stroke = '#ffff';
    document.getElementById("arrow-up1").style.stroke = '#ffff';

}

window.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    let vw = document.documentElement.clientWidth;
    let bgimg = document.querySelector('.mask');

    scroll = scroll / (0.6172 * vw);
    scroll *= 100;
    if (scroll < 80) {
        bgimg.style.backgroundPosition = "50% " + (scroll + 20) + "%";
    }

});


