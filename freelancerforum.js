   const names = [
      "Dr. Slice",
      "Dr. Pressure",
      "Prof. Possibility",
      "Prof. Prism",
      "Dr. Impulse",
      "Prof. Spark",
      "Dr. Wire",
      "Prof. Goose"
    ];
  
    const occupations = [
      "gardener",
      "programmer",
      "teacher",
      "driver"
    ];
  
    const freelancers = [
      { name: "Dr. Slice", price: 25, occupation: "gardener" },
      { name: "Dr. Pressure", price: 51, occupation: "programmer" }
    ];
  
    function calculateAveragePrice(freelancers) {
      const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
      const averagePrice = totalPrices / freelancers.length;
      return averagePrice.toFixed(2);
    }
  
    function updateList(freelancers) {
      const freelancerList = document.querySelector("#freelancer-forum");
  
      if (freelancerList) {
        while (freelancerList.firstChild) {
          freelancerList.removeChild(freelancerList.firstChild);
        }
  
        for (let i = 0; i < freelancers.length; i++) {
          const freelancer = freelancers[i];
          const listItem = document.createElement("li");
          listItem.textContent = `${freelancer.name} - ${freelancer.occupation} (Starting Price: $${freelancer.price})`;
          freelancerList.appendChild(listItem);
        }
  
        const averagePrice = calculateAveragePrice(freelancers);
        const averagePriceElement = document.querySelector("#average-price");
        averagePriceElement.textContent = `Average Starting Price: $${averagePrice}`;
      }
    }
  
    function generateRandomFreelancer() {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
      const randomPrice = Math.floor(Math.random() * 100) + 1;
      return { name: randomName, occupation: randomOccupation, price: randomPrice };
    }
  
    function addFreelancer() {
      const newFreelancer = generateRandomFreelancer();
      freelancers.push(newFreelancer);
      updateList(freelancers);
    }
  
    updateList(freelancers);
  
    setInterval(addFreelancer, 3000);
