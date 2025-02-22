function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    let startX = Math.random() * window.innerWidth;
    let size = Math.random() * 10 + 2;
    let duration = Math.random() * 2 + 1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}px`;
    particle.style.bottom = "0px";

    particle.animate(
        [
            { transform: `translateY(0px)`, opacity: 1 },
            { transform: `translateY(-${Math.random() * 100 + 100}px)`, opacity: 0.5 },
        ],
        {
            duration: duration * 1000,
            easing: "ease-in-out",
            iterations: 1
        }
    );

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

setInterval(createParticle, 100);