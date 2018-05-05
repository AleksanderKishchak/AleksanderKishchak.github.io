window.onload = function() {
	var leftEye1 = document.getElementsByClassName('leftMan-leftEYE')[0];
	var rightEye1 = document.getElementsByClassName('leftMan-rightEYE')[0];
	var leftEye2 = document.getElementsByClassName('rightMan-leftEYE')[0];
	var rightEye2 = document.getElementsByClassName('rightMan-rightEYE')[0];
	var input = document.getElementsByTagName('input')[0];
	var inputs = document.getElementsByTagName('input');
	var eyes = document.getElementsByClassName('eye');

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('focus', handler1);
		inputs[i].addEventListener('blur', function() {
			currentValLength = 7;
			currentValLength2 = 25;
		});
	}

	function handler1() {
		this.onkeydown = function() {
			moveEye(this.value);
		}
	}
	var currentValLength = 7;
	var currentValLength2 = 25;
	function moveEye(val) {
		var compStyle = [];
		if(val.length < 8) {
			resetMove();
		}
		if(val.length >= 8 && val.length <= 11) {
			
			if ( val.length > currentValLength) {
				for (let i = 0; i < eyes.length; i++) {
					compStyle[i] = getComputedStyle(eyes[i]);
					eyes[i].style.left = parseInt(compStyle[i].left) + 1 + 'px';
				}	
				currentValLength = val.length;	
			} else {
					for (let i = 0; i < eyes.length; i++) {
						compStyle[i] = getComputedStyle(eyes[i]);
						eyes[i].style.left = parseInt(compStyle[i].left) - 1 + 'px';
				}
				currentValLength = val.length;	
			}

		}
		if(val.length >= 26 && val.length <= 29) {
			
			if ( val.length > currentValLength2) {
				for (let i = 0; i < eyes.length; i++) {
					compStyle[i] = getComputedStyle(eyes[i]);
					eyes[i].style.left = parseInt(compStyle[i].left) + 1 + 'px';
				}	
				currentValLength2 = val.length;	
			} else {
					for (let i = 0; i < eyes.length; i++) {
						compStyle[i] = getComputedStyle(eyes[i]);
						eyes[i].style.left = parseInt(compStyle[i].left) - 1 + 'px';
				}
				currentValLength2 = val.length;	
			}

		}
	}

	function resetMove() {
		eyes[0].style.left = '';
		eyes[1].style.left = '';
		eyes[2].style.left = '';
		eyes[3].style.left = '';
	}

}