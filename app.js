// write code here
<script>
        let fruitBasket = {};
        while (true) {
            let fruit = prompt("Enter fruit name (or 'stop' to finish):");
          
        
            if (fruit.toLowerCase() === "stop") {
              break;
            }
          
            let quantity = +prompt(`Enter quantity of ${fruit}:`);
          
          
            if (quantity > 1) {
              fruit += "s"; // เพิ่ม s หลังชื่อ fruit
            }
          
           
            fruitBasket[fruit] = quantity;
          }
          
          console.log(fruitBasket);
          
    </script>
