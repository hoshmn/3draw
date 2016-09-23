window.onload = function() {
    var div = document.getElementById("phosphe");
    var PSV = new PhotoSphereViewer({
        panorama: "photospheres/bryce.jpg",
        container: div,
        time_anim: false,
        default_fov: 170,
        navbar: false,
        gyroscope: true
    });

    // // var x = 0;
    // window.addEventListener("deviceorientation", move, true);


    // function move(event) {
    //     // if (x%15===0 || x%16===0) console.log(event)
    //     x++;
    //     if (x % 15 === 0) {
    //         console.log('#: ', event);
    //         PSV.rotate({ longitude: event.beta, latitude: event.gamma });
    //         console.log(PSV.getPosition());
    //     } else if (x > 150) window.removeEventListener("deviceorientation", move);
    // }

    // PSV.rotate({ longitude: 0.75, latitude: 0.5});
    // console.log(PSV.getPosition());

    console.log("$$$: ", PSV);
    // console.log(PSV.isGyroscopeEnabled(), PSV.getPosition());
    // console.log(PSV.isGyroscopeEnabled(), PSV.getPosition());

    // PSV.on('position-updated', function(position) {
    //     console.log('moved');
    //     PSV.animate(position);
    // });


    // viewer.rotate({
    //   longitude: Math.PI,
    //   latitude: - Math.PI / 4
    // });


}
