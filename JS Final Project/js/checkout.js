    // Start Checkout Function
    function checkout() {
        var text1 = "<h1>You ordered:</h1>";
        var total = 0;
        var sizeTotal = 0;
        var sizeArray = document.getElementsByClassName("size");
      
      //Add sizes to array and assigns selected size to variable

      for (i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
          var selectedSize = sizeArray[i].value;
        };
      };
        if (selectedSize === "Personal Pizza") {
          text1 = text1 + selectedSize + " $6.00" + "<br>";
        } else if (selectedSize === "Medium Pizza") {
          text1 = text1 + selectedSize + " $10.00" + "<br>";
        } else if (selectedSize === "Large Pizza") {
          text1 = text1 + selectedSize + " $14.00" + "<br>";
        } else if (selectedSize === "Colossal Pizza") {
          text1 = text1 + selectedSize + " $16.00" + "<br>";
          
        };

 
        // Check selected size, assigns cost and prints the selection
        if (selectedSize === "Personal Pizza") {
          sizeTotal = 6;
          
        } else if (selectedSize === "Medium Pizza") {
          sizeTotal = 10;

        } else if (selectedSize === "Large Pizza") {
          sizeTotal = 14;

        } else if (selectedSize === "Colossal Pizza") {
          sizeTotal = 16;

        };
        
        //Prints running total and calls the next function in the series
        runningTotal = sizeTotal;
        getMeat(runningTotal, text1);
        
        
      };
      
      
      
  
      //End Checkout function
  
      //Meat Function
  
      function getMeat(runningTotal, text1){
        var meatTotal= 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("meat");

        //Add all meats to array, check the meats that are selected and push those selected meats to another array

        for (var j = 0; j < meatArray.length; j++) {
          if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
           if (meatArray[j].value == meatArray[0].value) {
            text1 = text1 + meatArray[j].value + " $0.00" + "<br>";
            } else {
              text1 = text1 + meatArray[j].value + " $1.00" + "<br>";
            }; 
          };
        };  
          

          //Count the number of meat options selected and prints the amount each meat is adding to the total
        var meatCount = selectedMeat.length;
        if (meatCount > 1) {
          meatTotal = (meatCount - 1)
        } else {
          meatTotal = 0;
        };
        
        //Prints running total and calls the next function in the series
        runningTotal = (runningTotal + meatTotal);
        document.getElementById("text").innerHTML = text1;
        document.getElementById("total").innerHTML = "<h3>Total: $"+ runningTotal + ".00" + "</h3>";
        getVeggie(runningTotal, text1);

      };
   
  
      //End Meat Function

      //Start veggie function
  
      function getVeggie(runningTotal, text1){
        var veggieTotal = 0;
        var selectedVeggie = [];
        var veggieArray = document.getElementsByClassName("veggie");
        //Add all veggies to array, check the veggies that are selected and push those selected veggies to another array
        for (var j = 0; j < veggieArray.length; j++) {
          if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
           if (veggieArray[j].value == veggieArray[0].value) {
              text1 = text1 + veggieArray[j].value + " $0.00" + "<br>";
            } else {
              text1 = text1 + veggieArray[j].value + " $1.00" + "<br>";
            } 
          };
            
          };
        
        
        var veggieCount = selectedVeggie.length;
        if (veggieCount > 1) {
          veggieTotal = (veggieCount - 1)
        } else {
          veggieTotal = 0;
        };
          runningTotal = (veggieTotal + runningTotal);
        //Prints running total and calls the next function in the series
          document.getElementById("text").innerHTML = text1;
          document.getElementById("total").innerHTML = "<h3>Total: $"+ runningTotal + ".00" + "</h3>";
          getCrust(runningTotal, text1);
      };
      

      //End Veggie Function

      //Start Crust Function
  
  
      function getCrust(runningTotal, text1) {
        var crustTotal = 0;
        var crustArray = document.getElementsByClassName("crust");
  
      for (j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
          var selectedCrust = crustArray[j].value;
          if (crustArray[j].value === "Cheese Stuffed Crust") {
            text1 = text1 + selectedCrust + " $3.00" + "<br>";
          } else {
            text1 = text1 + selectedCrust + " $0.00" + "<br>";
          };
          
        };
        if (selectedCrust === "Cheese Stuffed Crust") {
          crustTotal = 3;
        } else {
          crustTotal = 0;
        }
        };
        //Prints running total and calls the next function in the series
        runningTotal = (runningTotal + crustTotal);
        document.getElementById("text").innerHTML = text1;
        document.getElementById("total").innerHTML = "<h3>Total: $" + runningTotal + ".00" + "</h3>";
        getCheese(runningTotal, text1);
      };
      
      //End Crust Function

      //Start Cheese Function

      function getCheese(runningTotal, text1) {
        var cheeseTotal = 0
        var cheeseArray = document.getElementsByClassName("cheese");
  
      for (k = 0; k < cheeseArray.length; k++) {
        if (cheeseArray[k].checked) {
          var selectedCheese = cheeseArray[k].value;
          if (selectedCheese === "Extra Cheese"){
            text1 = text1 + selectedCheese + " $3.00" + "<br>";
          } else {
            text1 = text1 + selectedCheese + " $0.00" + "<br>";
          }
        };
        if (selectedCheese === "Extra Cheese") {
          cheeseTotal = 3;
        } else {
          cheeseTotal = 0;
        }
        };
        //Prints running total and calls the next function in the series
        runningTotal = (runningTotal + cheeseTotal);
        document.getElementById("text").innerHTML = text1;
        document.getElementById("total").innerHTML = "<h3>Total: $" + runningTotal + ".00" + "</h3>";
        getSauce(text1);
      };
      
      //End Cheese Function

      //Start Sauce Function


      function getSauce(text1) {
        var sauceArray = document.getElementsByClassName("sauce");
  
      for (l = 0; l < sauceArray.length; l++) {
        if (sauceArray[l].checked) {
          var selectedSauce = sauceArray[l].value;
          text1 = text1 + selectedSauce + " $0.00" + "<br>";
        };
        //Prints running total
        document.getElementById("text").innerHTML = text1;
       };
      };