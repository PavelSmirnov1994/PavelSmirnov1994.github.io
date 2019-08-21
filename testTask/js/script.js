let sortDirection = false;
let teachers;
teachers = bd.teachers;
let personData = teachers;
//отрисовка таблицы
function loadTableData(personData) {
    const tableBody = document.getElementById('tableData');

    let dataHtml = '';

    for(let person of personData) {
        dataHtml += `<tr><td>${person.id}</td>
        <td>${person.fullname}</td>
        <td>${person.date_submited}</td>
        <td>${person.position}</td>
        <td>${person.organization}</td>
        <td>${person.org_type}</td>
        <td>${person.territory}</td>
        <td>${person.location}</td>
        <td>${person.vid}</td>
        <td>${person.birthdate}</td>
        <td>${person.qualification_category}</td>
        <td>${person.plan_attestation_year}</td>
        <td>${person.workflow}</td></tr>`;

    }
    

    tableBody.innerHTML = dataHtml;
};
// поиск 
function formTable(selector){
    const wrapper = document.querySelector(selector);
    let form = wrapper.getElementsByTagName("form")[0];
    let table = wrapper.getElementsByTagName("table")[0];
    
    form.onkeyup = function(ev){
    loadTableData(personData);

    let 
       id = form.elements[0].value,
       fullname  = form.elements[1].value,
       organization = form.elements[2].value;
     
  
     for(let i = 1; i < table.rows.length; i++){  
       table.rows[i].className = "";
       
       if( 
         table.rows[i].cells[0].innerHTML.indexOf(id) == -1 ||
         table.rows[i].cells[1].innerHTML.indexOf(fullname) == -1  ||
         table.rows[i].cells[4].innerHTML.indexOf(organization) == -1
       ){
         table.rows[i].className = "hide";
       }
  
     }    
  
    }  
  }
  formTable(".wrapper");