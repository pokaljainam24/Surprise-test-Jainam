const { log } = require('console');
const blog = require('../model/blogSchema')
const fs = require('fs');

module.exports.openLoginPage = (req, res) => {
    return res.render('admin/login');
}

module.exports.openRegisterPage = (req, res) => {
    return res.render('admin/register');
}

module.exports.openCreateBlogPage = (req, res) => {
    return res.render('admin/createblog');
}

module.exports.addBlog = async (req, res) => {
    console.log(req.body, req.file);
    try {
        console.log('Blog submitted successfully...');
        await blog.create({ ...req.body, image: req.file.path });
        return res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}


//  Delet Blog  //
module.exports.DeletBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blogTodelete = await blog.findById(id);

        if (!blogTodelete) {
            return res.status(404).send('Blog Not Found...')
        }

        const blogimg = await blog.findByIdAndDelete(req.params.id);
        fs.unlinkSync(blogimg.image);
        console.log('Blog Deleted Successfully...');
        return res.redirect('/')
    } catch (error) {
        console.log(error.message);
    }
}

// Open Edit Page
module.exports.openEditBlogPage = async (req, res) => {
    try {
        const { id } = req.params;
        const blogToedit = await blog.findById(id);

        if (!blogToedit) {
            console.log('blog not found...');
            return res.render('admin/editblog', { blogToedit: {} });
        }
        return res.render('admin/editblog', { blogToedit });

    } catch (error) {
        console.log(error.message);
        return res.render('admin/editblog', { blogToedit: {} });
    }
};

// Edit Blog //
module.exports.EditBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blogToupdate = { ...req.body };

        if (req.file) {
            blogToupdate.image = req.file.path;
        }

        await blog.findByIdAndUpdate(id, blogToupdate);
        console.log('Blog updated successfully!');

        return res.redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal Server Error');
    }
};



module.exports.singleBlogPage = async (req, res) => {
    const { id } = req.params;
    try {
        const viewblog = await blog.findById(id);
        if (!viewblog) {
            console.log("Blog not found for viewing:", id);
            return res.status(404).send("Blog not found");
        }
        console.log("Displaying blog:", viewblog);
        return res.render('./admin/viewBlog.ejs', { viewblog });
    } catch (err) {
        console.log("Error fetching blog:", err);
        res.status(500).send("Error opening blog page");
    }
};