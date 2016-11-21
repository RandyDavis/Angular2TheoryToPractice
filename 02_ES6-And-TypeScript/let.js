var funcs = [];

for (let i = 0; i < 10; i += 1) {
    funcs.push(function () {
        console.log(i);
    })
}

funcs.forEach(function(func) {
    func();
});