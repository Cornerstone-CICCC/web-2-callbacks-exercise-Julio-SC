const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  if (!err) { 
      const firstname = data1.trim();

      fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
          if (!err) {
              const lastname = data2.trim();

              fs.readFile("./age.txt", "utf-8", (err, data3) => {
                  if (!err) {
                      const age = data3.trim();

                      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
                          if (!err) {
                              const hobbies = JSON.parse(data4.trim()); 
                              const sentence = `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`;
                              console.log(sentence);
                          }
                      });
                  }
              });
          }
      });
  }
});