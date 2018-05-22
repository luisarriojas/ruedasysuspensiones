/*
ruedasysuspensiones.com
Copyright (c) 2015 Ruedas y Suspensiones de Venezuela, C.A.

Developed by Luis E. Arriojas for Ruedas y Suspensiones de Venezuela, C.A.
***************** LinkedIn *****************
* https://www.linkedin.com/in/luisarriojas *
********************************************
*/


amount = 15;      //use quantities of 5, 10, 15, 20 ...

//get width and height of the screen
if (navigator.appName == "Microsoft Internet Explorer") {
    WinWidth = parent.document.documentElement.clientWidth;
    WinHeight = parent.document.documentElement.clientHeight;
} else {
    WinWidth = parent.window.innerWidth;
    WinHeight = parent.window.innerHeight;
}

//set X and Y position for each image
position = new Array(amount);
for (i = 0; i <= amount - 1; i++) {
    position[i] = new Array(2);
    //set X
    position[i][0] = Math.floor(Math.random() * WinWidth * 0.7);
    //set Y
    position[i][1] = -1 * Math.floor(Math.random() * WinHeight);
    //create image
    document.write('<img id="chrismas_' + i + '" src="img/christmas/snowflake.png" style="z-index:200; position:fixed;left:' + position[i][0] + 'px;top:' + position[i][1] + 'px;">');
}

function fall() {
    for (i = 0; i <= amount - 1; i++) {
        //X movement
        position[i][0] = position[i][0] + (Math.sin(position[i][1] / 100) * 3);
        document.getElementById('chrismas_' + i).style.left = position[i][0] + 'px';

        //Y movement
        position[i][1] = position[i][1] + 3;
        document.getElementById('chrismas_' + i).style.top = position[i][1] + 'px';

        //reset
        if (position[i][1] > WinHeight) {
            //set new X
            position[i][0] = Math.floor(Math.random() * WinWidth * 0.7);
            //set new Y
            position[i][1] = -1 * Math.floor(Math.random() * WinHeight);
            //move image to the new position
            document.getElementById('chrismas_' + i).style.left = position[i][0] + 'px';
            document.getElementById('chrismas_' + i).style.top = position[i][1] + 'px';
        }

    }
    setTimeout('fall()', 20);
}

window.onload = fall;
