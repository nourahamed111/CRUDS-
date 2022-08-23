
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//console.log (title,price,ads,taxes,discount,total,count,category,submit)
// get total
function getTotal(){
  
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
         - +discount.value
         total.innerHTML=result;
      total.style.background= '#040'
    } else {
        total.innerHTML='';
        total.style.background= '#a00d02'
    }

}

// create product
let datapro ;
if ( localStorage.product != null){
    datapro = JSON.parse(localStorage.product)

}else {
    datapro = [] ;
}

submit.onclick = function(){
  let newPro = {
    title:title.value ,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
  }  
  //console.log (newPro)
  datapro.push(newPro);
  // save localStorage
  localStorage.setItem('product' , JSON.stringify(datapro)   )
  //console.log (datapro)
  
  //showData();
  clearData ();
}


// clear inputs
function clearData (){
 title.value='';
 price.value='';
 taxes.value='';
 ads.value='';
 discount.value='';
 total.innerHTML='';
 count.value='';
 category.value='';
}


// read 
function showData(){ 
  let table = '';
       for(let i = 0; i < datapro.lenght; i++)
       {
        table = datapro;
        console.log(table);
        /*table +=`
         <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td> 
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete">delete</button></td>
           </tr>
           `;*/
         }
  //document.getElementById("tbody").innerHTML = table;
}
  //showData()

// delete
// count
// update
// search
// clean data
