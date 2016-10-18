import $ from 'jquery';


function render(item) {
  // console.log(item);
  if (item.type === "text") {
    return `<div class="formBox">
      <i class="inside fa ${item.icon}" aria-hidden="true" class="formIcon"></i>
      <input class="inputBar" type="text" placeholder="${item.label}">
      </div>`
   } if (item.type === "email") {
       return `<div class="formBox">
         <i class="inside fa ${item.icon}" aria-hidden="true" class="formIcon"></i>
         <input class="inputBar" type="text" placeholder="${item.label}">
         </div>`
   } if (item.type === "select") {
       return `<div class="selectBox">
         <select class="selectBar">
            <option value="">Select language...</option>
            <option value="${item.options[0]}">English</option>
            <option value="${item.options[1]}">French</option>
            <option value="${item.options[2]}">Spanish</option>
            <option value="${item.options[3]}">Chinese</option>
            <option value="${item.options[4]}">Japanese</option>
         </div>`
   } if (item.type === "textarea") {
       return `<div class="textBox">
         <i class="inside fa ${item.icon}" aria-hidden="true" class="formIcon"></i>
         <input class="comment" type="text" placeholder="${item.label}">
         </div>`
   } if (item.type === "tel") {
       return `<div class="formBox">
         <i class="inside fa ${item.icon}" aria-hidden="true" class="formIcon"></i>
         <input class="inputBar" type="text" placeholder="${item.label}">
         </div>`
    };
};

function processItems(data) {
  data.forEach(function(item) {
    var formItems = render(item);
    $(".items").append(formItems);
  })
};

function getItems () {
  $.ajax({
    url: "http://json-data.herokuapp.com/forms",
    success: processItems
  });
};

getItems()
