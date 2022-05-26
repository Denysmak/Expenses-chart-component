


fetch("data.json")
    .then(response => response.json())
    .then(data => {


      let bar1 = document.getElementById("bar1");
      let v ;

      function moveOut() {
        this.parentElement.children[0].style.display = "none"}
      function amount() {
        if(this.id === "bar1"){
        v = 0
        }
        if (this.id === "bar2") {
          v = 1
        }
        if (this.id === "bar3") {
          v = 2
        }
        if (this.id === "bar4") {
          v = 3
        }
        if (this.id === "bar5") {
          v = 4
        }
        if (this.id === "bar6") {
          v = 5
        }
        if (this.id === "bar7") {
          v = 6
        }


        this.parentElement.children[0].style.display = "flex"
        this.parentElement.children[0].innerText = "$" + data[v].amount
        
      }

      bar1.addEventListener("mouseover", amount)
      bar2.addEventListener("mouseover", amount)
      bar3.addEventListener("mouseover", amount)
      bar4.addEventListener("mouseover", amount)
      bar5.addEventListener("mouseover", amount)
      bar6.addEventListener("mouseover", amount)
      bar7.addEventListener("mouseover", amount)
     


      bar1.addEventListener("mouseout",moveOut)
      bar2.addEventListener("mouseout", moveOut)
      bar3.addEventListener("mouseout", moveOut)
      bar4.addEventListener("mouseout", moveOut)
      bar5.addEventListener("mouseout", moveOut)
      bar6.addEventListener("mouseout", moveOut)
      bar7.addEventListener("mouseout", moveOut)





































    })



