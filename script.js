const mario = document.getElementById("mario");
let isJumping = false;

function jump() {
    if (isJumping) return;

    isJumping = true;
    let jumpHeight = 0;

    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                } else {
                    jumpHeight -= 5;
                    mario.style.bottom = jumpHeight + "px";
                }
            }, 20);
        } else {
            jumpHeight += 5;
            mario.style.bottom = jumpHeight + "px";
        }
    }, 20);
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});
