var app = angular.module('angularPlayground');

app.controller('CartController', CartController);


function CartController(){
  this.cartStatus = 'Working';
  //The cart is an array of items that we are adding from our view
  this.cart = [];
  //The store is what we are using to populate our page with
  this.store = {
    items: StoreData
  };
  //*** No Need to edit anything above this line ****
  
  this.name = "My BɼokƏn Cart!";
  
  this.getCartCount = function(){
    return this.cart.length
  };
  
  this.calculateCartTotal = function() {
      var totalCost = 0;
      for (var i = 0; i < this.getCartCount(); i++) {   
          totalCost=+ this.cart[i].price * this.cart[i].quantity   
      }
      return totalCost;
  };
  /*
  * Write a calculateCartTotal function
  * make it assesible to our view
  * this function should return the total cost
  * of each item that is in our cart
  */ 
  
  
  this.removeItemFromCart = function(item){
      
      for (var i = 0; i < this.getCartCount(); i++) {
          if (this.cart[i].name === item.name) {
              this.cart.splice(i,1);
          }
      }
     
    //Item gets passed in from our view when the user clicks the x button
    /*
    * This function should be able to remove the passed in item
    * from our cart. You will have to first identify where the passed
    * in item is in the array. Then you will need to use the correct
    * Array.method to remove 1 item hint method(i, 1);
    */
  };
  
  this.addItemToCart = function(item){
      //item gets passed in to this function from the view
      
      /*
      Our cart demands that items being added to it must have the following properties */

      var newItem = {
        name:item.name,
        color:item.selectedColor,
        size:item.selectedSize,
        quantity: 1,
        price:item.price,
      }
      
      this.cart.push(newItem);
      /*
      console.log the item being passed in from the view 
      to figure out which properties from item need to be 
      remaped to the newItem object. 
      After building the newItem add it to the cart 
      */
      
  }
  
}