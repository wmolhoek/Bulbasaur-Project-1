M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    instances.open();
  });


//const game = user input
const url = "http://www.giantbomb.com/api/search/?api_key=69db5b20e3ad1fdd87c655256f6505e8b020cb8d&format=json&query="+game+"&resources=game"


// api key for OMDB
const OMDBqueryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
