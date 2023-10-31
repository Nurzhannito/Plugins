$(document).ready(function () {
    $(`header .main-menu`).meanmenu({
        meanMenuContainer: `.header-area`,
        meanScreenWidth: 768
    }) // Плагин при котором делает адаптивность ниже 768 пикселей и добавляет меня бургер

})

$(document).ready(function () {
    $(`.images`).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})