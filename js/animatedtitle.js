function animateTitle(Title = "animateTitle", delay = 300) {
    let counter = 0;
    let direction = true;
    setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        let newtitle = (counter == 0) ? Title.slice(0,1) : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}
animateTitle("TangyKiwi", 400);