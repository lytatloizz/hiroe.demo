
$(document).ready(function() {
  $("#addVocabularyForm").submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "addvocabulary.php", // Đường dẫn tới tập tin PHP xử lý thêm sản phẩm
      data: formData,
      success: function(response) {
        $("#message").text(response);

        // Cập nhật danh sách sản phẩm
        // updateProductList();
      }
    });
  });

//   function updateProductList() {
//     $.ajax({
//       type: "GET",
//       url: "getvocabulary.php", // Đường dẫn tới tập tin PHP lấy danh sách sản phẩm
//       success: function(response) {
//         $("#productList").html(response);
//       }
//     });
//   }

//   // Khởi đầu: Cập nhật danh sách sản phẩm ban đầu
//   updateProductList();
});
