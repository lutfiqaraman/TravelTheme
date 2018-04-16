// Side Navbar
const sidenavbar = document.querySelector('.sidenav');
M.Sidenav.init(sidenavbar, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//Auto complete
const  ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "Jamacia": null,
        "Europe": null
    }
});

//Material Box
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//ScrollSpy
const  scrollspy = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(scrollspy, {});