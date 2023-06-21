// Include the navbar
$.get("navbar.html", function(data){
    $("nav").replaceWith(data);
});

// Include the footer
$.get("footer.html", function(data){
    $("footer").replaceWith(data);
});

// Include recent posts
$.get("recent-posts.html", function(data){
    $("#recent-posts").replaceWith(data);
});