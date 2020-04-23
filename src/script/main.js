const baseUrl = "https://api.themoviedb.org/3/movie";
const key = "CHANGE THIS STRING WITH YOUR API KEY";
const baseUrlImage = "https://image.tmdb.org/t/p/w500";

function main() {
    const getNowPlaying = () => {
         fetch(`${baseUrl}/now_playing?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            renderMovie(responseJson.results)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getUpcoming = () => {
        return fetch(`${baseUrl}/upcoming?api_key=${key}&language=en-US`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            renderUpcoming(responseJson.results)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getPopular = () => {
        return fetch(`${baseUrl}/popular?api_key=${key}&language=en-US&page=2`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            renderPopular(responseJson.results)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const renderMovie = results => {
        const listNowPlaying = document.querySelector("#listNowPlaying");
        listNowPlaying.innerHTML = "";

        results.forEach(result => {
            listNowPlaying.innerHTML += `
                <div class="movie-item">
                    <img class="poster" src="${baseUrlImage}${result.poster_path}">
                    <div class="title-movie">${result.title}</div>
                    <div class="rating">&#9733; ${result.vote_average}</div>
                </div>`;
            })
        }

        const renderUpcoming = results => {    
            const listUpcoming = document.querySelector("#listUpcoming")
            listUpcoming.innerHTML = "";

            results.forEach(result => {
                listUpcoming.innerHTML += `
                    <div class="movie-item">
                        <img class="poster" src="${baseUrlImage}${result.poster_path}">
                        <div class="title-movie">${result.title}</div>
                        <div class="rating">&#9733; ${result.vote_average}</div>
                    </div>`;
                })
            }

        const renderPopular = results => {
            const listPopular = document.querySelector("#listPopular")
            listPopular.innerHTML = "";

            results.forEach(result => {
                listPopular.innerHTML += `
                    <div class="movie-item">
                        <img class="poster" src="${baseUrlImage}${result.poster_path}">
                        <div class="title-movie">${result.title}</div>
                        <div class="rating">&#9733; ${result.vote_average}</div>
                    </div>`;
            })
        }

    getNowPlaying();
    getUpcoming();
    getPopular();
}

export default main;