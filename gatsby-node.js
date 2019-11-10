/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const postsData = require('./src/config/posts');

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    postsData.posts.forEach((postData, index) => createPage({
        path: `/post-${index}`,
        component: require.resolve("./src/templates/post.jsx"),
        context: {postData}
    }))
};
