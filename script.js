let button = document.querySelector("button");
let result = document.querySelector(".result");
let tryAgain = document.querySelector(".tryAgain");
let Musa = document.querySelector(".Musa");
let Bloom = document.querySelector(".Bloom");
let Aisha = document.querySelector(".Aisha");
let Flora = document.querySelector(".Flora");
button.onclick = function() {
    let bike = document.querySelector(".bike").value;
    let introvert = document.querySelector(".introvert").value;
    if ((bike >= 0 && bike <= 5) && (introvert === "yes")) {
        result.innerHTML = "You said " + introvert + " to being introverted, you are Bloom!";
        Bloom.style.display = "block";
    } else if ((bike >= 6 && bike <= 10) && (introvert === "yes")) {
        result.innerHTML = "You said " + introvert + " to being introverted, you are Musa!";
        Musa.style.display = "block";
    } else if ((bike >= 6 && bike <= 10) && (introvert === "no")) {
        result.innerHTML = "You said " + introvert + " to being introverted, you are Aisha!";
        Aisha.style.display = "block";
    } else if ((bike >= 0 && bike <= 5) && (introvert === "no")) {
        result.innerHTML = "You said " + introvert + " to being introverted, you are Flora!";
        Flora.style.display = "block";
    } else {
        result.style.display = "block";
        result.innerHTML = "TRY AGAIN";
        tryAgain.style.display = "block";
    }

};