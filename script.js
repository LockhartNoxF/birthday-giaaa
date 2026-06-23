const letterText = `I don’t really know where to start…
no matter how many words I write,
they will never be enough to describe how much you mean to me.
Thank you for being part of my life, baee.
Thank you for all the laughs, all the random conversations, all the chaotic moments.
Somehow, everything feels better when it's with you.

I know we're not perfect.
We have our overthinking moments, our bad days,
and sometimes life just decides to make things difficult.
But even then, if I had the chance to choose again,
I would still choose you. Again and again.

Thank you for letting me see the side of you that not everyone gets to see.
Thank you for trusting me,
for loving me,
and for allowing me to become part of your world.

I hope this year brings you happiness, 
good health, beautiful memories, and countless reasons to smile.
I hope you achieve the things you've been working hard for,
and I hope that even when life gets hard,
you'll always remember that you don't have to face everything alone.

I'll always be here for you.

And if someday you forget how beautiful, precious, and lovable you are,
I'll gladly spend the rest of my life reminding you.

Thank you for existing, Gierta.

I love you today, tomorrow, and always.

— Ilham 🤍`;

/* INIT (FIX ERROR UTAMA) */
document.addEventListener("DOMContentLoaded", start);

function start() {
  const intro = document.getElementById("intro");
  const music = document.getElementById("bgmusic");

  if (!intro) return;

  intro.addEventListener("click", () => {
    intro.style.display = "none";

    const main = document.getElementById("main");
    if (main) main.classList.remove("hidden");

    if (music) {
      music.play().catch(() => {});
    }

    confetti();
    reveal();
  });

  setupGalleryPopup();
}

/* LETTER */
function openLetter() {
  const el = document.getElementById("letter");
  if (!el) return;

  if (el.innerHTML === "") {
    typeWriter(el, letterText);
  } else {
    el.innerHTML = "";
  }
}

function typeWriter(el, text, i = 0) {
  el.classList.remove("hidden");

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(el, text, i + 1), 18);
  }
}

/* QUIZ (FIX ID CHECK) */
function quizAnswer(questionId, option) {
  const el = document.getElementById(questionId);
  if (!el) return;

  const answers = {
    q1: {
      A: "Correct",
      B: "Correct 😤",
      C: "Correct😤😤",
      D: "❤️ Correct! She is ALL OF THE ABOVE"
    },
    q2: {
      A: "❌ Nope 😭",
      B: "❌ Nope 😭",
      C: "❤️ Correct! Message from you = happiness",
      D: "❌ Not even close"
    },
    q3: {
      A: "❌ Impossible 😤",
      B: "❤️ Correct! She owns my heart",
      C: "❌ Wrong answer 😭",
      D: "❌ Nooo"
    },
    q4: {
      A: "❤️ Correct! IMPOSSIBLE 😤",
      B: "❤️ Correct! You are beautiful",
      C: "❤️ Correct! You are adorable",
      D: "❤️ Correct! ALL OF THE ABOVE"
    },
    q5: {
      A: "❌ Gravity is strong, but not that strong",
      B: "❌ Weak compared to love",
      C: "❤️ Correct! Love is strongest",
      D: "❌ Coffee is temporary"
    }
  };

  el.innerText = answers?.[questionId]?.[option] || "Invalid answer";
}

/* VOUCHER */
function toggleVoucher(el) {
  const desc = el.querySelector(".desc");
  if (!desc) return;

  desc.classList.toggle("hidden");
}

/* FADE */
function reveal() {
  const items = document.querySelectorAll(".fade");

  function check() {
    items.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", check);
  check();
}

/* CONFETTI */
function confetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff2e78";

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += 1;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* =========================
   POPUP GALLERY (FIXED SAFE)
========================= */

function setupGalleryPopup() {
  const images = document.querySelectorAll(".popup-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      openPopup(img.src);
    });
  });
}

function openPopup(src) {
  const popup = document.getElementById("imgPopup");
  const img = document.getElementById("popupImg");

  if (!popup || !img) return;

  img.src = src;
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("imgPopup");
  if (popup) popup.classList.add("hidden");
}
