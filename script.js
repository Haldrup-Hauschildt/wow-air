const mySiema = new Siema({
    duration: 500,
    easing: 'cubic-bezier(.17,.67,.32,1.34)',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
   /*  perPage: {
        768: 1,
        1024: 2,
      }, */
    onInit: () => {},
    onChange: () => {},
  });

// document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
// document.querySelector('.next').addEventListener('click', () => mySiema.next());

setInterval(() => mySiema.next(), 5000)