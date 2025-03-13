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

// function educationItemToUrl(element) {
//     const url = $(element).data("url")
//         if (url) {
//             window.open(url, "_blank")
//         }
// }

function educationItemHover(element, isHovering) {
    const content = $(element)
    const p = content.find("p").not(".p-more")
    const moreText = content.find(".p-more")

    if (content.hasClass("active")){
        return
    } else if (isHovering) {
        p.fadeIn(200)
        moreText.fadeOut(200)
    } else {
        p.fadeOut(200)
        moreText.fadeIn(200)
    }
}

function educationItemClick(element) {
    const content = $(element)
    const p = content.find("p").not(".p-more")
    const moreText = content.find(".p-more")

    if (content.hasClass("active")) {
        content.removeClass("active")
        p.slideUp(200)
        moreText.fadeIn(200)
    } else {
        $(".education-item").removeClass("active").find("p").slideUp(200)
        $(".p-more").fadeIn(200)
        content.addClass("active")
        p.slideDown(200)
        moreText.fadeOut(200)
    }

    const item = $(content).children(".education-item")
    $(item).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val) {
        alert("Subject is required")
    } else if (!$(message).val) {
        alert("Message is required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form Submitted")
    }
}