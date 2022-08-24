
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood ='Create';
let tmp;


//console.log (title,price,ads,taxes,discount,total,count,category,submit)
// get total function
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
 //create function
submit.onclick = function(){
  let newPro = {
    title:title.value.toLowerCase() ,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value.toLowerCase(),
  }  
  //console.log (newPro)
  //count
  if(title.value != ''
   && price.value != '' 
  && category.value != '' 
  && newPro.count < 100 )
  {
  if (mood === 'Create') {
     if (newPro.count >1){
     for(let i =0 ; i < newPro.count ; i++){
     datapro.push(newPro);
     }
     }else{
      datapro.push(newPro);
    }

  }else {
      datapro[  tmp  ] = newPro;
    mood ='Create';
    submit.innerHTML = 'Create';
    count.style.display = 'block';
  }
  clearData ();
}


  
  // save localStorage
  localStorage.setItem('product' , JSON.stringify(datapro)   );
  //console.log (datapro)
  
 
  showData();

}


// clear inputs function
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


// read function
function showData(){ 
  getTotal();
    let table = '' ;
       for(let i = 0; i<datapro.length; i++)
       {
        
        table +=`
         <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td> 
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           </tr>
           `;
         }
         document.getElementById("tbody").innerHTML = table;
          //delete all
         let btnDelete = document.getElementById('deleteAll')
        if (datapro.length >0){
           btnDelete.innerHTML = `<button onClick="deleteAll()"> Delete All (${datapro.length})</button>`;
         } else{
           btnDelete.innerHTML = '';
        };
 }
   showData();

// delete function
function deleteData(i){
   console.log(i)
   datapro.splice(i,1);
   localStorage.product = JSON.stringify(datapro);
   showData();
}


//delete all function
function deleteAll() {
 localStorage.clear();
 datapro.splice(0);
 showData();
} 



// update function
function updateData(i){
//console.log(i);
 title.value =datapro[i].title;
 price.value =datapro[i].price;
 taxes.value =datapro[i].taxes;
 ads.value =datapro[i].ads;
 discount.value =datapro[i].discount;
 getTotal();
 count.style.display='none';
 category.value =datapro[i].category;
 submit.innerHTML = 'Update';
 mood = 'Update';
 tmp = i;
 scroll({
  top:0 ,
  behavior: 'smooth',
 })
}

// search function
 let searchMood = 'title';
  
 function getSearchMood (id){
  let search= document.getElementById('search');
  //console.log(id);
  if (id == 'searchTitle'){
    searchMood = 'title';
    search.placeholder = 'Search By Title';
  }else{
    searchMood = 'category';
    search.placeholder = 'Search By Category';

  }
 search.focus();
 search.value='';
 showData();
  //console.log(searchMood);
 }
 function searchData(value)
 {
 //console.log(value);
   let table = '' ;
   if (searchMood == 'title')
    {
       for(let i = 0 ; i<datapro.length; i++ )
       {
         if(datapro[i].title.includes(value.toLowerCase()))
         {
          
            table +=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td> 
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           </tr>
           `;
           
         }
       }
      

     }else{
      for(let i = 0 ; i<datapro.length; i++ )
       {
         if(datapro[i].category.includes(value.toLowerCase()))
         {
          
            table +=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td> 
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           </tr>
           `;
           
         }
       }

    }
    document.getElementById("tbody").innerHTML = table;

 }
 
 // light-mode
   let icon = document.getElementById('icon');
   let iconp = document.getElementById('iconp');

   icon.onclick = function(){
    document.body.classList.toggle("light-mode");
     if(document.body.classList.contains("light-mode")){
      icon.src = "./img/moon.png" ;
      iconp .innerHTML ="press here to black mode";
     }
     else{
      icon.src = "./img/sun.png" ;
      iconp .innerHTML ="press here to light mode";


     }
   }

