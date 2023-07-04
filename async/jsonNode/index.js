const bioData={
    name:'Mohit',
    age:20,
    hobby:'playing'
};

console.log(bioData.name);

const jsonData=JSON.stringify(bioData);// to convert object to JSON
console.log(jsonData);

const objData=JSON.parse(jsonData);// to convert JSON to object
console.log(objData);