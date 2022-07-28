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
  } else if (addTr == "salesArea") {
    const trAdd = tableArea.insertRow()
    let str = `
        <tr>
          <td nowrap></td>
          <td data-th="業務員編號" nowrap><input type="text" class="form-control form-control-sm" value=""></td>
          <td data-th="業務中文姓名" nowrap><input type="text" class="form-control form-control-sm" value=""></td>
          <td data-th="業務英文姓名" nowrap><input type="text" class="form-control form-control-sm" value=""></td>
                            <td data-th="狀態" nowrap>
                              <select class="form-select form-select-sm select2">
                                <option >在職</option>
                                <option>離職</option>
                              </select>
                            </td>
                            <td data-th="職稱" nowrap>
                              <select class="form-select form-select-sm select2">
                                <option>員工</option>
                                <option>主管</option>
                              </select>
                            </td>
                            <td data-th="主管員編號" nowrap>
                              <input type="text" class="form-control form-control-sm" value=""></td>
                            <td data-th="姓名" nowrap>
                              <input type="text" class="form-control form-control-sm" value="">
                            </td>
                          </tr>
        `
      trAdd.innerHTML = str;
  } else if (addTr == "productsArea") {
    const trAdd = tableArea.insertRow()
    let str = `
    <tr>
                            <td nowrap></td>
                            <td data-th="產品代碼" nowrap><input type="text" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="產品名稱" nowrap><input type="text" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="價格" nowrap><input type="number" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="單位" nowrap>
                              <input type="text" class="form-control form-control-sm" value="">
                            </td>
                            <td data-th="狀態" >
                              <select class="form-select form-select-sm ">
                                <option selected>上架</option>
                                <option>下架</option>
                              </select>
                            </td>
                          </tr>
        `
      trAdd.innerHTML = str;
  } else if (addTr == "productsItemArea") {
    const trAdd = tableArea.insertRow()
    let str = `
    <tr>
      <td nowrap></td>
      <td data-th="產品代碼" nowrap>  
        <input type="text" class="form-control form-control-sm" value="">
      </td>
      <td data-th="產品名稱" nowrap>
        <input type="text" class="form-control form-control-sm"
                                value="">
      </td>
      <td data-th="客戶代碼" nowrap>
      <input type="number" class="form-control form-control-sm" value=""></td>
      <td data-th="客戶名稱" nowrap>
        <input type="text" class="form-control form-control-sm" value="">
      </td>
      <td data-th="客戶產品代碼" nowrap>
        <input type="text" class="form-control form-control-sm" value="">
      </td>
      <td data-th="客戶產品名稱" nowrap>
        <input type="text" class="form-control form-control-sm" value="">
      </td>
    </tr>
        `
      trAdd.innerHTML = str;
  } else if (addTr == "otherProductsArea") {
    const trAdd = tableArea.insertRow()
    let str = `
    <tr>
                            <td nowrap></td>
                            <td data-th="產品代碼" nowrap><input type="text" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="產品名稱" nowrap><input type="text" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="數量" nowrap><input type="number" class="form-control form-control-sm"
                                value=""></td>
                            <td data-th="客戶產品代碼" nowrap>
                              <input type="text" class="form-control form-control-sm" value="">
                            </td>
                            <td data-th="狀態" nowrap>
                              <select class="form-select form-select-sm">
                                <option selected>上架</option>
                                <option>下架</option>
                              </select>
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


