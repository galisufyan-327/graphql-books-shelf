const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

var Books = [
    {name: 'Man of Babylyon', genre: 'fantasy', id: '1'},
    {name: 'RichDad', genre: 'History', id: '2'},
    {name: 'The World Order', genre: 'fantasy', id: '3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                //code to fetch data from database
                return _.find(Books,{id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});