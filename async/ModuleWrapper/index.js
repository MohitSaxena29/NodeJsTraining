// in node js every file is called module
// in that file whatever file and function we create their scope is private
// () grouping operator

// module wrapper is basically what we call in js IIFE - (Immediately Invoked Function Expression)


//  they have local scope is every file

// every code is wrapped inside module wrapper function because of IIFE

(function(exports,require,module,__filename,__dirname){
    const myname='mohit';
    console.log(myname);
})();

console.log(__filename); // for file name
console.log(__dirname); // for directory name
// const myname='mohit';
// console.log(myname);

