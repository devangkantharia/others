$(document).ready(function() {
    let options = {
        root: null,    // browser viewport
        rootMargin: '0px',
        threshold: 1.0 // target element visible 100%
    }

    let observer = new IntersectionObserver(playOnFocus, options);
    let targets = document.querySelectorAll('.video-fluid');
    targets.forEach(target => {    // adding observer for all videos
        observer.observe(target);
    });
});

const playOnFocus = (entries, observer) => {    // callback
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.play();    // play target video
        } else {
            entry.target.pause();    // pause video
        }
    });
};