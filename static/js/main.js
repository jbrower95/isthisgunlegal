function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

shuffle(guns);

// An instance of the Stack is used to attach event listeners.
stack = gajus.Swing.Stack();

stack.on('throwout', (event) => {
  // e.target Reference to the element that has been thrown out of the stack.
  // e.throwDirection Direction in which the element has been thrown (Card.DIRECTION_LEFT, Card.DIRECTION_RIGHT).

  console.log('Card has been thrown out of the stack.');
  console.log('Throw direction: ' + (event.throwDirection == Card.DIRECTION_LEFT ? 'left' : 'right'));
  if (event.throwDirection == Card.DIRECTION_LEFT) {
  	alert("All of these are legal.")
  }
});


/* Create cards. */
// <li class="card">A gun</li>
var uistack = document.getElementById("mainStack");
for (var i = 0; i < guns.length; i++) {
	var elt = document.createElement("li");
	elt.class = "card";
	var name = guns[i].name;
	var filename = guns[i].filename;
	elt.innerHTML = "<img class='gun' src='static/legal/" + filename +"'></img><p class='caption'>" + name + "</p>";

	uistack.appendChild(elt);
}

// Prepare the cards in the stack for iteration.
const cards = [].slice.call(document.querySelectorAll('ul li'));

cards.forEach((targetElement) => {
  // Add card element to the Stack.
  stack.createCard(targetElement);
});

// Add event listener for when a card is thrown out of the stack.
stack.on('throwout', (event) => {
  // e.target Reference to the element that has been thrown out of the stack.
  // e.throwDirection Direction in which the element has been thrown (Card.DIRECTION_LEFT, Card.DIRECTION_RIGHT).

  console.log('Card has been thrown out of the stack.');
  console.log('Throw direction: ' + (event.throwDirection == Card.DIRECTION_LEFT ? 'left' : 'right'));
});

// Add event listener for when a card is thrown in the stack, including the spring back into place effect.
stack.on('throwin', () => {
  console.log('Card has snapped back to the stack.');
});