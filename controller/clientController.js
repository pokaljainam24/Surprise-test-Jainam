const blog = require("../model/blogSchema");

module.exports.openBlogPage = async (req, res) => {
    try {
        const blogs = await blog.find();
        return res.render('blog', { blogs });
    } catch (error) {
        console.log(error.message);
    }
}