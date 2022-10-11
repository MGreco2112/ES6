// Object Destructuring within the confines of a function parameter

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
//   const half = (stats) => (stats.max + stats.min) / 2.0; 
  const half = ({max, min}) => (max + min) / 2.0; 
  // Only change code above this line

  //template literal demo

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
  
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
  
    // console.log(failureItems);
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  //Object Literal Declaration

//   const createPerson = (name, age, gender) => {
//     return {
//       name: name,
//       age: age,
//       gender: gender
//     };
//   };

  const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
  });