/**
 * login.js
 */
console.log('start');
function alignModal() {
	var modalDialog = $(this).find(".modal-dialog");
	modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
$(".modal").on("shown.bs.modal", alignModal);

$(window).on("resize", function() {
	$(".modal:visible").each(alignModal);
});   
$('.btn-primary').on('click', function() {
	location.href = 'http://localhost:8080/yogidogi/mainapp.tiles'
})
$('.btn-default').on('click', function() {
	location.href = 'http://localhost:8080/yogidogi/loginForm.do'
})
