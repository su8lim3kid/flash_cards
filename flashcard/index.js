
/*not Dry code but i had trouble puting under 
one function without messing up the other cards*/



var card = document.getElementById('card');

card.addEventListener('dblclick', function() {
	if (!this.classList.contains('on')) {
		this.classList.remove('off');
		this.classList.add('on');
	} else {
		this.classList.remove('on');
		this.classList.add('off');
	}
});
var card = document.getElementById('card2');

card.addEventListener('dblclick', function() {
	if (!this.classList.contains('on')) {
		this.classList.remove('off');
		this.classList.add('on');
	} else {
		this.classList.remove('on');
		this.classList.add('off');
	}
});

var card = document.getElementById('card3');

card.addEventListener('dblclick', function() {
	if (!this.classList.contains('on')) {
		this.classList.remove('off');
		this.classList.add('on');
	} else {
		this.classList.remove('on');
		this.classList.add('off');
	}
});
var card = document.getElementById('card4');

card.addEventListener('dblclick', function() {
	if (!this.classList.contains('on')) {
		this.classList.remove('off');
		this.classList.add('on');
	} else {
		this.classList.remove('on');
		this.classList.add('off');
	}
});
// Delete function under construction
/* function myFunction() {
	
	let classesToAdd = ['flip-container', 'flipper', 'front', 'back'];
	div.classList.add(...classesToAdd);
   delete ("...classesToAdd")
}
	*/