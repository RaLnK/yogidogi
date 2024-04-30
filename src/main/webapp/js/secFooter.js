/**
 * secFooter.js
 */
console.log('footer');
$('.btn-primary').on('click', searchKeyword);

function searchKeyword() {
	let search = document.querySelector('.g-3 select').value;
	let keyword = document.querySelector('.form-control').value;
	switch(search) {
		case 'prod' : locatin.href = '/yogidogi/productList.do'
			break;
		case 'notice' : locatin.href = '/yogidogi/boardList.do'
			break;
		case 'ask' : locatin.href = '/yogidogi/askList.do'
			break;
		case 'board' : locatin.href = '/yogidogi/boardList.do'
			break;
	}
};
