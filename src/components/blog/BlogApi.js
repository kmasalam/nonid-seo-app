
const blogData = {
    blogs: [
        
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'Pre launch mobile app Second Blog',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 1,
        },
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'launched Third Blog variations pitfalls',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 2,
        },
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'Mobile app Pre launch  marketing pitfalls',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 3,
        },
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'There are many mobile app marketing pitfalls',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 4,
        },
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'Pitfalls launch mobile app marketing pitfalls',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 5,
        },
        {
            blogDate: '30 April, 2019',
            blogAuthor: 'By layerdrops',
            blogTitle: 'Great launch mobile app First Blog',
            blogContent: 'There are many variations of passages of but majority have in some by inject.',
            blogIcon: 'nonid-icon-left-arrow',
            id: 6,
        },
    ],
    all: function() { return this.blogs},
    get: function(id) {
        const isBlog = p => p.id === id
        return this.blogs.find(isBlog)
    }
}

export default blogData;