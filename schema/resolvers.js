const {UserList,movieList} = require("../FakeData")
const _ = require("lodash")

const resolvers = {

    Query: {

        //User Resolvers 
        //get all users
        users() {
            return UserList;
        },
        // search for a specific user
        user: (parent,args)=> {
            const id = args.id
            const user = _.find(UserList, {id: Number(id)});
            return user
        },

        // Movie Resolvers
        // get all movies 
        movies: () => {
            return movieList
        },
        // search for a specific movie 
        movie: (parent, args)=> {
            const title = args.title 
            const movie = _.find(movieList, {title})
            return movie

        },
    },
    User: {
        favoriteMovies: () => {
            return _.filter(movieList, (movie)=> movie.releaseYear >= 2000 && movie.releaseYear <= 2021)
        }
    }

}

module.exports = {resolvers};