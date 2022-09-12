const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    let clickedEle = this;
    for(let i = 0; i < questions.length; i++) {
        if(questions[i].classList.toString().includes("active") && questions[i].classList !== clickedEle.classList) {
            questions[i].classList.toggle("active")
        }
    }
    clickedEle.classList.toggle("active")
  });
});
