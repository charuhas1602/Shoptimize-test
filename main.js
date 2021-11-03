
$('[data-target="#Category"],[data-target="#Size"],[data-target="#Price"]').click(function () {
    $(this).toggleClass('fa-chevron-down').toggleClass('fa-chevron-up')
})

if ($('.card .btn_Size').hasClass('active')) {
    $(this).removeClass('text-muted');
}