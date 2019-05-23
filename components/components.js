
class Dot {
    constructor(dot) {
        this.dot = dot;
        this.data = dot.dataset.pair;
        this.card = document.querySelector(`.testimonials-wrapper[data-pair="${this.data}"]`);
        this.dot.addEventListener("mouseenter", ()=> this.select());
        this.dot.addEventListener("click", ()=> this.select());
    }
    select() {
        // cards
        const cards = document.querySelectorAll(".testimonials-wrapper");
        cards.forEach(card=>card.classList.remove("hidden"));
        cards.forEach(card=>card.classList.remove("displayed"));
        cards.forEach(card=>card.classList.add("hidden"));
        this.card.classList.remove("hidden");
        this.card.classList.add("displayed");
        // dot filling
        // const dots = document.querySelectorAll(".dot");
        // dots.forEach(dot=>dot.style.fill="")
    }
}

const dots = document.querySelectorAll(".dot").forEach(dot=>new Dot(dot));