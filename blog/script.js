document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list");
    const blogs = [
        { title: "desk-setup.html", file: "./blog/desk-setup.html" }
        // { title: "blog2", file: "blog2.html" },
        // { title: "blog3", file: "blog3.html" }
    ];

    blogs.forEach(blog => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = blog.file;
        link.textContent = blog.title;
        listItem.appendChild(link);
        blogList.appendChild(listItem);
    });
});
