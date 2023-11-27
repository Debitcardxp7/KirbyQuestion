const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you soon <3!";
  gif.src =
    "https://media1.tenor.com/images/fbeae987c11afbd065194e6c2dc039e3/tenor.gif?itemid=13854421";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "But..... How?";
  gif.src =
    "https://media.tenor.com/B3OSP_-91m4AAAAM/kirby-kirby-fighters2.gif";
})