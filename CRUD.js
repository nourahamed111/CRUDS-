
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
  
  clearData ();
  showData();

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
  let table = document.getElementById('tbody');
       for(let i = 0; i<datapro.length; i++)
       {
        //table = datapro;
        //console.log(datapro[i]);
        table.innerHTML +=`
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
           `;
         }
         //document.getElementById("tbody").innerHTML = table;
          //delete all
         //let btnDelete = document.getElementById('deleteAll')
        // if (datapro.length >0){
         //   btnDelete.innerHTML = `<button onClick="deleteAll()"> Delete All</button>`;
        // } else{
         //  btnDelete.innerHTML = '';
        // };
 }
   showData();

// delete
/*function deleteData(i){
   console.log(i)
   datapro.splice(i,1);
   localStorage.product = JSON.stringify(datapro);
   showData();
}


//delete aall
function deleteAll() {
 localStorage.clear();
 datapro.splice(0);
 showData();
} */
// count
// update
// search
// clean data 
