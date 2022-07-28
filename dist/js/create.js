const addFormToList = document.querySelectorAll(".js-addList-Btn")
const deleteList = document.querySelector(".js-delete-Btn")
const tableArea = document.querySelector(".js-itemArea")
const amount = document.querySelectorAll(".js-amount")
addFormToList.forEach((item) => {
  item.addEventListener("click", addTemplate)
})


$('.datatable-RWDcard tbody').on('click', '.js-delete-Btn', function () {
  $(this).parents('tr').remove()
} );
function addTemplate(e) {
  e.preventDefault()
  let addTr = e.target.getAttribute("data-area")
  if (addTr == "itemArea") {
      const trAdd = tableArea.insertRow()
        let str = `
        <tr>
        <td nowrap> 
           
          </td>
          <td data-th="公司代碼" nowrap> 
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="公司名稱" nowrap>
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="統一編號" nowrap> 
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="郵遞區號" nowrap> 
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="公司地址" nowrap> 
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="負責人" nowrap> 
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="銷售組織代碼與名稱" nowrap>
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="通路代碼與名稱" nowrap>
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="區域代碼與名稱" nowrap>
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="業務員" nowrap>
            <input type="text" class="form-control form-control-sm">
          </td>
        </tr>
        `
      trAdd.innerHTML = str;
  }
  const rowsCountLength = tableArea.rows.length;
  const rowsCount = tableArea.rows;
  for (let i = 0; i < rowsCountLength; i++){
    const amountCells = tableArea.rows[i].cells[3]
    const amount = amountCells.children[0];
    
    // console.log(amount);
  }
}


