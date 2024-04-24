/**
 * cartList.do
 */
$(document).ready(function() {
  // 회원 번호를 가져오는 로직 (예: 세션 또는 쿠키에서 가져오기)
  let memberNo = 3; // 임시 값, 실제로는 적절한 방식으로 가져와야 합니다.

  // AJAX 요청을 보내서 장바구니 목록을 가져옵니다.
  $.ajax({
    url: 'CartList.do',
    type: 'GET',
    data: { memberNo: memberNo },
    dataType: 'json',
    success: function(data) {
      let tableBody = $('#cart tbody');
      tableBody.empty(); // 기존 행들 제거
      
      // 가져온 장바구니 목록 데이터를 테이블에 추가합니다.
      $.each(data, function(index, item) {
        let row = $('<tr>'); // 새로운 행 생성
        row.append($('<td>').text(item.productName)); // 상품명 열 추가
        row.append($('<td>').text(item.quantity)); // 수량 열 추가
        row.append($('<td>').text(item.price)); // 가격 열 추가
        
        // 행을 테이블에 추가
        tableBody.append(row);
      });
    },
    error: function(xhr, status, error) {
      // AJAX 요청이 실패한 경우의 처리
      console.error(xhr.responseText);
      alert('장바구니 목록을 불러오는 데 실패했습니다. 다시 시도해주세요.');
    }
  });
});
