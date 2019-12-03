M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    instances.open();
  });

function search() {

let searchBtn = document.getElementById("button-search");
const userInput = document.getElementById("user-input");

displayArea = document.getElementById("display-area");
omdbDisplayArea = document.getElementById("omdb-display");

let moviesArray = [];


    searchBtn.addEventListener("click", function () {
        let searchTerm = userInput.value;
        console.log(searchTerm);


        // axios.get(queryURL)
        //     .then(function (response) {
        //         // console.log(queryURL);
        //         console.log(response.data.results);
        //         moviesArray = response.data.results;
        //         for (i = 0; i < moviesArray.length; i++) {
        //             const movieBtn = document.createElement("a");
        //             movieBtn.innerHTML = moviesArray[i].display_title;
        //             movieBtn.setAttribute("href", moviesArray[i].link.url);
        //             movieBtn.setAttribute("class", "button");
        //             displayArea.append(movieBtn);


        //         }

        //     })
        let omdbQueryUrl = "https://www.omdbapi.com/?t=" + searchTerm + "&apikey=trilogy";
        console.log(omdbQueryUrl);

        axios.get(omdbQueryUrl)
            .then(function (response) {

                omdbDisplayArea.innerHTML = "";
                console.log(response);
                const movieDisplay = document.createElement("div");
                const titleDisplay = document.createElement("p");
                const releasedDisplay = document.createElement("p");
                const ratingIMDBDisplay = document.createElement("p");
                const ratingRottenTomatoDisplay = document.createElement("p");
                const ratingMetaCritDisplay = document.createElement("p");
                const nytReviewBtn = document.createElement("a");
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
                ratingMetaCritDisplay.setAttribute("class", "meta-critic")
                ratingMetaCritDisplay.innerHTML = "MetaCritic Rating: " + response.data.Ratings[2].Value;
                movieDisplay.append(ratingMetaCritDisplay);

                const MetaCritic = document.getElementById("meta-critic")




                const movieTitle = response.data.Title;

                let nytReviewURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + movieTitle + "&api-key=J4LLcLYdwjbGQvjGuEQK9mGgePlM1SWk";

                axios.get(nytReviewURL)
                    .then(function (response) {
                        console.log(response);
                        moviesArray = response.data.results;
                        console.log(moviesArray);

                        for (i = 0; i < moviesArray.length; i++) {
                            let nytDisplayTitle = response.data.results[i].display_title;
                            console.log(nytDisplayTitle);
                            if (nytDisplayTitle === movieTitle) {
                                console.log("matched title")
                                const movieLink = document.createElement("a");

                                movieLink.innerHTML = moviesArray[i].display_title;
                                movieLink.setAttribute("href", moviesArray[i].link.url);
                                movieLink.setAttribute("class", "button");
                                // movieDisplay.append(movieLink);
                                omdbDisplayArea.prepend(movieLink);
                            };

                        }
                    })


                posterDisplay.setAttribute("src", response.data.Poster);
                movieDisplay.append(posterDisplay);

                omdbDisplayArea.append(movieDisplay);


            })
    });
};
search()






