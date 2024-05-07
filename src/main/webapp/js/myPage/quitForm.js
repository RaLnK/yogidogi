/**
 * 
 */

const svc = {
	quitPwCheck(pw, successCall, errorCall) {
		fetch('/yogidogi/quitPwCheck.do',{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pw='+pw
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	quit(successCall, errorCall) {
		fetch('/yogidogi/quit.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	$('#submitBtn').on('click', function(e){
		let pw = $('#pw').val();
		svc.quitPwCheck(pw, function(result) {
			if(result.retCode == 'Success'){
				$('#quitModal').css('display', 'block');
			}else if(result.retCode == 'Fail'){
				alert('비밀번호가 일치하지 않습니다');
				$('#pw').val('');
			}
		}, function(err) {
			console.log(err);
		});
	});
	
	$('#quitNo').on('click', function(e){
		$('#quitModal').css('display', 'none');
	});
	
	$('#quitYes').on('click', function(e){
		svc.quit(function(result){
			if(result.retCode == 'Success'){
				location.href = '/yogidogi/backToHome.do';
			}else if(result.retCode == 'Fail'){
				alert('다시 시도해주세요');
			}
		}, function(err){
			console.log(err);
		});
	});
	
});








