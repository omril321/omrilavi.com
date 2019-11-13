const postsData = require('./src/config/posts');
const slugify = require("./src/ssr/slugify");
const expandPostMetadata = require('./src/ssr/postMetadataFetcher');

exports.createPages = async ({actions}) => {
    const {createPage} = actions;
    const pagesMetadata = postsData.posts.map(post => expandPostMetadata(post));
    const allMetadata = await Promise.all(pagesMetadata);
    createIndexPage(createPage, allMetadata);

    // This generates a page for each urls. should be used only for self-hosted posts
    // allMetadata.forEach(postMetadata => addPostPage(createPage, postMetadata));
};

const addPostPage = (createPage, postMetadata) => {
    const generatePathForPostTitle = (title) => `/${slugify(title)}`;
    createPage({
        path: generatePathForPostTitle(postMetadata.title),
        component: require.resolve("./src/templates/post.jsx"),
        context: {postMetadata}
    });
};


function createIndexPage(createPage, allPostsMetadata) {
    createPage({
        path: '/',
        component: require.resolve("./src/templates/index.jsx"),
        context: {allPostsMetadata}
    });
}