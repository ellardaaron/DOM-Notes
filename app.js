let paragraph = document.createElement('p');
let text = document.createTextNode('this guy covers material way too fast.')

paragraph.style.color = "red";
paragraph.style.textTransform= "uppercase";
paragraph.className = "some-paragraph";


paragraph.appendChild(text);
document.body.appendChild(paragraph);