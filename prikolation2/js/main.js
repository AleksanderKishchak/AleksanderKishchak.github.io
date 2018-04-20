window.onload = function() {
			var img             		 = document.getElementById("woman-wt"),
				  leftTooth       		 = document.getElementById("tooth-1"),
				  FrontLeftTooth  		 = document.getElementById("tooth-2"),
				  FrontRightTooth 		 = document.getElementById("tooth-3"),
				  RightTooth      		 = document.getElementById("tooth-4"),
					dropLeftTooth   		 = dropping(),
					dropFrontLeftTooth	 = dropping(),
					dropFrontRightTooth	 = dropping(),
					dropRightTooth			 = dropping();

			leftTooth.onmousemove = dropLeftTooth;
			FrontLeftTooth.onmousemove = dropFrontLeftTooth;
			FrontRightTooth.onmousemove = dropFrontRightTooth;
			RightTooth.onmousemove = dropRightTooth;

			function dropping() {
				var offset = 0;
				return function() {
					this.style.transform = "translateY(" + offset + "px)";	
				 	return offset++;
				}
			}
			
		}