// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
/* the movies produced in the same year should be put in alphabetical order*/
function orderByYear(array) {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

}
 

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

  
}




// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
