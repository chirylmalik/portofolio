function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-cat-content-item")
    const detail = $(item).children(".about-exp-cat-content-item-detail")
    $(detail).slideToggle()
}

function toggleCategory(categoryId) {
    const content = $("#" + categoryId)
    const arrow = content.prev().find(".arrow-icon")
    const header = content.prev().find("h4")

    if (arrow.hasClass("active") && header.hasClass("active")) {
        header.removeClass("active").attr("color", "black")
        arrow.removeClass("active").attr("src", "asset/img/arrow.svg")
    } else {
        header.addClass("active").attr("color", "#979797")
        arrow.addClass("active").attr("src", "asset/img/arrow_gray.png")
    }

    const item = $(content).children(".about-exp-cat-content-item")
    $(item).slideToggle()
}

function educationItemToUrl(element) {
    const url = $(element).data("url")
        if (url) {
            window.open(url, "_blank")
        }
}

function educationItemHover(element, isHovering) {
    const p = $(element).find("p")

    if (isHovering) {
        p.fadeIn(200)
    } else {
        p.fadeOut(200)
    }
}