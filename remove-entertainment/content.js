console.log(`Gonna take out the trash...`);

// Get all the anchor tags on the page
const anchors = document.getElementsByTagName(`a`);
console.log(anchors);

const [...aElements] = document.querySelectorAll(`a`);
const entertainmentHeadline = aElements.find(
  (el) => el.innerHTML === `Entertainment`
);
console.log(entertainmentHeadline);
