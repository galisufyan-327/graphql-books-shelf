const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

var Books = [
    {name: 'Man of Babylyon', genre: 'fantasy', id: '1'},
    {name: 'RichDad', genre: 'History', id: '2'},
    {name: 'The World Order', genre: 'fantasy', id: '3'}
]

var Authors = [
    {name: 'Tim Cook', age: 56, id: '1'},
    {name: 'Richard', age: 71, id: '2'},
    {name: 'Hallbro', age: 44, id: '3'}
]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(Books,{id: args.id});
            }
        },
        Author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(Authors, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});