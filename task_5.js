function throttle(func, interval) {
    let lastTime = 0;
    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastTime >= interval) {

            func.apply(this, args);
            lastTime = currentTime;
        }
    };
}




function onScroll(event) {
    // Handle scroll event  
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);

