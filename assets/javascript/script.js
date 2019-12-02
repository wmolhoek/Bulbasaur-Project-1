$(document).ready(function) {
    $(".dropdown-trigger").dropdown();
}




//const game = user input
const url = "http://www.giantbomb.com/api/search/?api_key=69db5b20e3ad1fdd87c655256f6505e8b020cb8d&format=json&query="+game+"&resources=game"


// api key for OMDB
const OMDBqueryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


// API Key for YouTube = AIzaSyAiMpo3Mnkq2c_KjtywxD7_lxBQTapW0HA
const youTubeQueryURL = "https://www.googleapis.com/youtube/v3/search";



const searchBtn = document.getElementById("button-search");
const userInput = document.getElementById("user-input");

displayArea = document.getElementById("display-area");
omdbDisplayArea = document.getElementById("omdb-display");

let moviesArray = [];

function search() {

    searchBtn.addEventListener("click", function () {
        let searchTerm = userInput.value;

        console.log(searchTerm);
        let queryURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + searchTerm + "&api-key=J4LLcLYdwjbGQvjGuEQK9mGgePlM1SWk";
        // console.log(queryURL);


        axios.get(queryURL)
            .then(function (response) {
                // console.log(queryURL);
                console.log(response.data.results);
                moviesArray = response.data.results;
                for (i = 0; i < moviesArray.length; i++) {
                    const movieBtn = document.createElement("a");
                    movieBtn.innerHTML = moviesArray[i].display_title;
                    movieBtn.setAttribute("href", moviesArray[i].link.url);
                    movieBtn.setAttribute("class", "button");
                    displayArea.append(movieBtn);


                }

            })
        let omdbQueryUrl = "https://www.omdbapi.com/?t=" + searchTerm + "&apikey=trilogy";
        console.log(omdbQueryUrl);

        axios.get(omdbQueryUrl)
            .then(function (response) {
                console.log(response)
                const movieDisplay = document.createElement("div");
                const titleDisplay = document.createElement("p");
                const releasedDisplay = document.createElement("p");
                const ratingIMDBDisplay = document.createElement("p");
                const ratingRottenTomatoDisplay = document.createElement("p");
                const ratingMetaCritDisplay = document.createElement("p");
                const posterDisplay = document.createElement("img");
                console.log(response.data.Title);
                titleDisplay.innerHTML = "Title: " + response.data.Title;
                movieDisplay.append(titleDisplay);

                console.log(response.data.Released);
                releasedDisplay.innerHTML = "Released: " + response.data.Released;
                movieDisplay.append(releasedDisplay);

                console.log(response.data.Ratings[0].Value);
                ratingIMDBDisplay.innerHTML = "IMDB Rating: " + response.data.Ratings[0].Value;
                movieDisplay.append(ratingIMDBDisplay);

                console.log(response.data.Ratings[1].Value);
                ratingRottenTomatoDisplay.innerHTML = "Rotten Tomato Rating: " + response.data.Ratings[1].Value;
                movieDisplay.append(ratingRottenTomatoDisplay);

                console.log(response.data.Ratings[2].Value);
                ratingMetaCritDisplay.innerHTML = "MetaCritic Rating: " + response.data.Ratings[2].Value;
                movieDisplay.append(ratingMetaCritDisplay);

                posterDisplay.setAttribute("src", response.data.Poster);
                movieDisplay.append(posterDisplay);

                omdbDisplayArea.append(movieDisplay);




            })
    });
};
search()



