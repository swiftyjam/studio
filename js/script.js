function loadProjects() {
    $.getJSON("projects.json", function(data) {
        if (0 != data.projects.length) {
            for (html = "", i = 0; i < data.projects.length; i++) {
                html += '<a href="project.html?id=' + i + '" class="workContainer">',
                    html += '<img src="' + data.projects[i].bg + '" alt="background" class="workContainer__bg">',
                    html += '<div class="workContainer__filter" style="background: linear-gradient(to right,rgba(' + data.projects[i].maincolor + ',1) 0%,rgba(' + data.projects[i].maincolor + ',0.5) 100%);"></div>',
                    html += '<div class="workContainer__desc">',
                    html += '<h2>' + data.projects[i].title + '</h2>',
                    html += '<div class="wc__details">',
                    html += '<div class="wc__titcat">',
                    html += '<h3>' + data.projects[i].product + '</h3>',
                    html += '<p>' + data.projects[i].category + '</p>',
                    html += '</div>',
                    html += '<div class="wc__brand"><img src="' + data.projects[i].logo + '" alt=""></div>',
                    html += '</div>',
                    html += '</div>';
            }
            document.getElementById("engancho").innerHTML = html
        }
    });
}

function loadProject() {
    $.getJSON("projects.json", function(data) {
        if (0 != data.projects.length) {
            id = $_GET("id");
            html = "",
                html += '<section class="projectIntro">',
                html += ' <div class="pr__container">',
                html += ' <div class="project__specs">',
                html += ' <div class="p_spec">',
                html += ' <h3>DONE</h3>',
                html += ' <ul>';
            for (i = 0; i < data.projects[id].done.length; i++) {
                html += '<li>' + data.projects[id].done[i] + '</li>';
            }
            html += ' </ul>',
                html += ' </div>',
                html += ' <div class="p_spec">',
                html += ' <h3>TEAM</h3>',
                html += ' <ul>';
            for (i = 0; i < data.projects[id].team.length; i++) {
                html += '<li>' + data.projects[id].team[i] + '</li>';
            }
            html += ' </ul>',
                html += ' </div>',
                html += ' <div class="p_spec">',
                html += ' <h3>TIMELINE</h3>',
                html += ' <ul>';
            html += '<li>' + data.projects[id].timeline + '</li>';
            html += ' </ul>',
                html += ' </div>',
                html += ' </div>',
                html += ' <hr>',
                html += ' <div class="project__description">',
                html += ' <h3>' + data.projects[id].client + '</h3>',
                html += ' <h1>' + data.projects[id].title + '</h1>',
                html += ' <p>' + data.projects[id].desc + '</p>';
            if (data.projects[id].links !== undefined && data.projects[id].links.length > 0) {
                html += ' <h3>Interesting links</h3>',
                    html += ' <div class="project__links">';
                for (let lindex = 0; lindex < data.projects[id].links.length; lindex++) {
                    html += '<a href="' + data.projects[id].links[lindex].to + '" class="ilink">' + data.projects[id].links[lindex].name + ' </a>';

                }
                html += ' </div>'
            }
            html += ' </div>',

                html += ' </div>',
                html += ' </section>',
                html += ' <section class="projectGallery" style="background-color:rgba(' + data.projects[id].maincolor + ',1) ;">';
            html += '<div class="p_galleryWrap" >'
            for (i = 0; i < data.projects[id].gallery.length; i++) {
                html += '<div>';
                for (c = 0; c < data.projects[id].gallery[i].length; c++) {
                    html += '<a href="' + data.projects[id].gallery[i][c] + '"><img src="' + data.projects[id].gallery[i][c] + '" alt=""></a>';
                }
                html += '</div>';
            }
            html += '</div>';
            html += '</section>';
            document.getElementById("enganchoproject").innerHTML = html;
            $('head').append('<meta name="keywords" content="' + data.projects[id].keywords + '">');
            $('head').append('<meta property="og:title" content="' + data.projects[id].title + '">');
            $('head').append('<meta property="og:description" content="' + data.projects[id].linkdesc + ' ">');
            $('head').append('<meta property="og:image" content="' + data.projects[id].bg + '">');
            $('head').append('<meta property="og:url" content="www.swiftyjam.com/project.hmtl?id=' + id + '');
            $('head').append('<meta name="twitter:title" content="' + data.projects[id].title + '">');
            $('head').append('<meta name="twitter:description" content="' + data.projects[id].linkdesc + '">');
            $('head').append('<meta name="twitter:image" content="' + data.projects[id].bg + '">');
            $('head').append('<meta name="twitter:card" content="summary_large_image">');
            $('head').append('<meta name="description" content="' + data.projects[id].linkdesc + '">');
            $('head').append('<title>Swifty Jam | ' + data.projects[id].client + '</title>');
        }
    });
}

function $_GET(e) {
    var t = {};
    return window.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(e, n, o) {
        t[n] = void 0 !== o ? o : ""
    }), e ? t[e] ? t[e] : null : t
}
// OPEN AND CLOSE MOBILE MENU
$(document).on('click', '.menu__button', function() {
    var e = $(this);
    var r = $(".rotate");
    var menu = $(".menu__options");
    var up = "up";
    var down = "down";

    if (r.hasClass(down)) {
        r.removeClass(down);
        menu.css({
            'transform': 'translate(0,-110vh)',
            'opacity': '1'
        });
    } else {
        menu.css({
            'transform': 'translate(0,0vh)',
            'opacity': '1'
        });
        r.addClass(down);
    }
});
// TO FIT THE MENU
$(window).resize(function() {
    if ($(window).width() > 1115) {
        $(".menu__options").css({
            'transform': 'translate(0,0vh)',
            'opacity': '1'
        });
        $(".rotate").addClass("down");
    } else {
        $(".rotate").removeClass("down");
        $(".menu__options").css({
            'transform': 'translate(0,-110vh)',
            'opacity': '1'
        });
    }
});
$('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos) {
    if (document.getElementById("hooke") != null) {
        if (currentScrollPos > window.innerHeight) {
            // document.getElementById("hooke").style.top = "-300px";
            document.getElementById("hooke").style.transform = "translate(0px,-300px)"
        } else {
            document.getElementById("hooke").style.transform = "translate(0px,0px)"
        }
    }
    prevScrollpos = currentScrollPos;
}