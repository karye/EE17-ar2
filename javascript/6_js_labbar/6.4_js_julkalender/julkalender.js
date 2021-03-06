/* Vänta tills hela sidan laddats klart */
window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementGrid = document.querySelector('.grid');

    /* Lyssna på click */
    elementGrid.addEventListener('click', lucka);

    /* Vinsten någonstans mellan 1 och 24 */
    var vinst = Math.ceil(Math.random() * 23 + 1);
    console.log(vinst);

    /* Öppna en lucka */
    function lucka(event) {
        console.log('Klickat på grid');
        console.log(event.target.className);

        if (event.target.className == 'animated dag') {
            console.log(event.target.textContent);

            if (event.target.textContent == vinst) {
                console.log('Hurrah!');
                event.target.classList.add('bild');
            } else {
                event.target.classList.add('zoomOut');
            }
        }
    }
}