//Google Map
document.addEventListener('DOMContentLoaded',
	function() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems);
	});

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.2348249, lng: 28.3995944 },
    zoom: 8,
  });
}

//Maps dropdown in nav 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-button');
    var instances = M.Dropdown.init(elems, 0);
  });
//Modal windows
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, 0);
  });
