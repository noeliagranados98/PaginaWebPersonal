const buttonPrev1 = document1.getElementById('button-prev1');
const buttonNext1 = document1.getElementById('button-next1');
const track1 = document1.getElementById('track1');
const slickList1 = document1.getElementById('slick-list1');
const slick1 = document1.querySelectorAll('.slick1');

const slickWidth = slick[0].offsetWidth;

buttonPrev1.onclick = () => Move(1);
buttonNext1.onclick = () => Move(2);

function Move(value) {
    const trackWidth1 = track1.offsetWidth;
    const listWidth1 = slickList1.offsetWidth;

    track1.style.left == "" ? leftPosition = track1.style.left = 0 : leftPosition = parseFloat(track1.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth1 - listWidth1) && value == 2) {
        track1.style.left = `${-1 * (leftPosition + slickWidth1)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track1.style.left = `${-1 * (leftPosition - slickWidth1)}px`;
    }
}