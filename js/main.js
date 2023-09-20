var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productCount = document.getElementById("productCount");
var input = document.querySelector('input');
var btn = document.querySelector('button');
var tbody = document.querySelector('tbody');
var tbody = document.querySelector("tbody");
var productContainer ;
//save data forever
if(localStorage.getItem("ourProducts") == null){
    productContainer = []
}
else{
    productContainer= JSON.parse( localStorage.getItem("ourProducts") )
displayProduct()
}

// first task requirment (validation)
function validationWithAdd(){
    if(input.value.length>0)
    Addproduct()
    else
    return false;
}

function Addproduct(){
    var product = {
        PName :productName.value ,
        Price :productPrice.value ,
        Category :productCategory.value ,
        Description :productDescription.value ,
        productCount : productCount.value
    }
//     //// count of the elements numbers

if(productCount.value>0){
 for(var i=0 ; i < productCount.value ; i++){
productContainer.push(product)
    }
 }
 else{
       productContainer.push(product)
  }

localStorage.setItem("ourProducts",JSON.stringify(productContainer))
    displayProduct();
    clearProduct();
 }

function displayProduct(){
    var cart ="" ;

    for(var i =0 ; i < productContainer.length ;i++){
        cart+=`
        <tr>
    <td>${i+1}</td>
    <td>${productContainer[i].PName}</td>
    <td>${productContainer[i].Price}</td>
    <td>${productContainer[i].Category}</td>
    <td>${productContainer[i].Description}</td>
    <td><button onclick="deleteRow(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="returnValue(${i})" class="btn btn-warning">Edit</button></td>
     </tr>   `
    }
    document.getElementById("tBody").innerHTML =cart
}

function clearProduct(){
    productName.value ="";
    productPrice.value ="";
    productCategory.value ="";
    productDescription.value ="" ;
    productCount.value ="";
}

function DeleteAll(){
productContainer.splice(0)
localStorage.clear()
displayProduct()
}

function deleteRow(i){
    productContainer.splice(i,1)
    localStorage.setItem("ourProducts",JSON.stringify(productContainer))
    displayProduct()
}

// second task requirement (EDIT)
function returnValue(i){
    var cart2 ="" ;
    for(var i =0 ; i < productContainer.length ;i++){
        cart2+=
    productName.value =productContainer[i].PName;
    productPrice.value =productContainer[i].Price;
    productCategory.value =productContainer[i].Category;
    productDescription.value =productContainer[i].Description;
    productContainer.splice(i,i);
    displayProduct();
    productContainer.slice(i,i);

    }

}

function searchProduct(term){

        var containerBox = ""
    for(var i = 0; i < productContainer.length ; i++){
     if(productContainer[i].PName.toLowerCase().includes(term.toLowerCase().trim() ) == true){
       containerBox+=`
        <tr>
    <td>${i+1}</td>
    <td>${productContainer[i].PName}</td>
    <td>${productContainer[i].Price}</td>
    <td>${productContainer[i].Category}</td>
    <td>${productContainer[i].Description}</td>
    <td><button onclick="deleteRow(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="returnValue(${i})" class="btn btn-warning">Edit</button></td>
     </tr>  `
    }
    document.getElementById("tBody").innerHTML =containerBox
}
     }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arr_2 = [];
// for(var i = 0 ; i<arr.length;i++){
//    arr_2.push(arr[i] * 10)
// }
// console.log(arr_2)

// for(var i = 0 ; i<arr.length;i++){
//     if(arr[i] %2 != 0){
//         arr_2.push(arr[i])
//     }
// }

// console.log(arr_2)

     // output:
     // 1: [100, 200, 300, 400, 500, 600, 700, 800, 900]
     // 2: [20,40,60,80]
     // 3: return the total of all elements in array

// var newArr= arr.map(function(element , index , array){
//     return element*10;
// })
// console.log(newArr)
// var newFilter = arr.filter(function(element ,index ,array){
// return element %2 ==0 ;
// });
// console.log(newFilter)
// var total = arr.reduce(function(previousValue , currentValue ,currentIndex,array)
// {

//     return
// },initialValue)

// function sayHello(name ,age){
// if(age < 20){
//     console.log("App is not suitible for you");
// }
// else{
//     console.log(`hello ${name} your age is ${age}`);
// }
// }
// sayHello("mina",19.5)
// function generateYears(start,end , exclude){
// for(var i = start ; i <= end ; i++){
//     if(i == exclude){
// continue
//     }
// console.log(i);
// }
// }
// generateYears(2001,2023,2020);
// function calc(num1,num2){
//     return num1+num2;
// }
// var result = calc(10,20);
// console.log(result +100);

// var h1s = document.getElementsByClassName("h1s")

//     for(var i =0 ; i < h1s.length ;i++){
// h1s[i].addEventListener("click", function(){
// alert("hello")
// })
// }
// document.addEventListener("click" , function(){
//     var r =Math.random() *255
//     var g =Math.random() *255
//     var b =Math.random() *255
//     document.body.style.background = `rgb(${r},${g},${b})`
// }
// )
// document.addEventListener("click" , function(){

// })
// var imgGif = document.getElementById("demo")
// document.addEventListener("mousemove" , function(e){

//     imgGif.style.left = e.clientX + "px"
//     imgGif.style.top = e.clientY +"px"
// })