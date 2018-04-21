window.onload = function() {
			var img             		 = document.getElementById("woman-wt"),
				  leftTooth       		 = document.getElementById("tooth-1"),
				  frontLeftTooth  		 = document.getElementById("tooth-2"),
				  frontRightTooth 		 = document.getElementById("tooth-3"),
				  rightTooth      		 = document.getElementById("tooth-4"),
				  dropButton           = document.getElementById("dropTooth"),
					dropLeftTooth   		 = dropping(),
					dropFrontLeftTooth	 = dropping(),
					dropFrontRightTooth	 = dropping(),
					dropRightTooth			 = dropping(),
					offsetGlobal         = 0,
					documentHeight       = document.documentElement.clientHeight;

			// leftTooth.onmousemove = dropLeftTooth;
			// FrontLeftTooth.onmousemove = dropFrontLeftTooth;
			// FrontRightTooth.onmousemove = dropFrontRightTooth;
			// RightTooth.onmousemove = dropRightTooth;
			dropButton.onclick = oops;

			window.onresize = function() {
				documentHeight = document.documentElement.clientHeight;
			}

			function oops() {
				var interval = setInterval(function() {
					if (offsetGlobal > documentHeight) {
						clearInterval(interval);
					}
					dropLeftTooth.call(leftTooth);
					setTimeout(function() {
						dropFrontLeftTooth.call(frontLeftTooth);

					}, 500);
					setTimeout(function() {
						dropFrontRightTooth.call(frontRightTooth);
					}, 1000);
					setTimeout(function() {
						dropRightTooth.call(rightTooth);
					}, 1500);
				}, 10)
			/*	setInterval(function() {
					dropLeftTooth.call(leftTooth);
					setTimeout(function() {
						dropFrontLeftTooth.call(frontLeftTooth);

					}, 500);
					setTimeout(function() {
						dropFrontRightTooth.call(frontRightTooth);
					}, 1000);
					setTimeout(function() {
						dropRightTooth.call(rightTooth);
					}, 1500);
				}, 20);*/
			}

			function dropping() {
				var offset = 0;
				return function() {
					offsetGlobal = offset;
					this.style.transform = "translateY(" + offset + "px)";	
				 	return offset++;
				}
			}
			
		}
