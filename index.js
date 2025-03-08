function singSong() {
    let songContainer = document.getElementById("song");

    for (let i = 99; i >= 0; i--) {
        let bottleText = i === 1 ? "bottle" : "bottles";
        let nextBottleText = (i - 1) === 1 ? "bottle" : "bottles";

        let line1 = `${i > 0 ? i : "No more"} ${bottleText} of beer on the wall, ${i > 0 ? i : "no more"} ${bottleText} of beer.`;
        let line2 = i > 0
            ? `Take one down and pass it around, ${i - 1 > 0 ? i - 1 : "no more"} ${nextBottleText} of beer on the wall.`
            : `Go to the store and buy some more, 99 bottles of beer on the wall.`;

        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");

        paragraph1.textContent = line1;
        paragraph2.textContent = line2;

        paragraph1.classList.add("line");
        paragraph2.classList.add("line");

        songContainer.appendChild(paragraph1);
        songContainer.appendChild(paragraph2);
    }
}

singSong();
