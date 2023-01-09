function test3(input) {
    let coffee = input.shift();
    let countCommands = Number(input.shift());
    let commands = input;
    let arr = [];
    arr = coffee.slice().split(" ");

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");
        let nCommand = command[0];
        let nCoffee = command[1];
        let x = Number(command[2]);

        if (nCommand === "Include") {
            arr.push(nCoffee);
            countCommands--;
        }
        if (nCommand === "Remove") {
            if (nCoffee === "first") {
                for (let i = 0; i < x; i++) {
                    arr.shift();
                    countCommands--;
                }
            }
            if (nCoffee === "last") {
                for (let i = 0; i < x; i++) {
                    arr.pop();
                    countCommands--;
                }
            }
        }
        if (nCommand === "Prefer") {

            let a = arr.splice(Number(nCoffee), x);
            let b = arr.splice(x, 1);
            arr.splice(x, 0, a);
            arr.splice(Number(nCoffee), 0, b);
            countCommands--;
        }

        if (nCommand === "Reverse") {
            arr.reverse();
            countCommands--;
        }
    }


    console.log('Coffees:');
    console.log(arr.join(" "));
}
// test3([
//   "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
//   "5",
//   "Include TurkishCoffee",
//   "Remove first 2",
//   "Remove last 1",
//   "Prefer 3 1",
//   "Reverse",
// ]);

test3(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])