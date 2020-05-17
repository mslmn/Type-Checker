const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("section.output");

//When I type in my sentence tag, update the output tag accordingly
sentenceTag.addEventListener("keyup", function () {
  outputTag.innerHTML = this.value;
});
