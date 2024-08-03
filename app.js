// function moveLiftToFloor(floor) {
//     const lift = document.querySelector('.lift');
//     let liftMove;

//     if (floor === 1) {
//         liftMove = 'translateY(0px)';
//     } else if (floor === 2) {
//         liftMove = 'translateY(-150px)';
//     } else if (floor === 3) {
//         liftMove = 'translateY(-298px)';
//     } else if (floor === 4) {
//         liftMove = 'translateY(-445px)';
//     } else {
//         liftMove = 'translateY(0px)';
//     }

//     lift.style.transform = liftMove;
// }







function moveLiftToFloor(floor) {
    const lift = document.querySelector('.lift');
    const side1
    let liftMove;

    if (floor === 1) {
        liftMove = 'translateY(0px)';

    } else if (floor === 2) {
        liftMove = 'translateY(-150px)';
    } else if (floor === 3) {
        liftMove = 'translateY(-298px)';
    } else if (floor === 4) {
        liftMove = 'translateY(-445px)';
    } else {
        liftMove = 'translateY(0px)';
    }

    lift.style.transform = liftMove;
}


moveLiftToFloor()