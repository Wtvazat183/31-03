const  array = [1,2,3,4,5,6];

const  multiplicaition = (array)  =>
    array.forEach((element) =>  console.log(element * 10));

const mainfunction = (mas, fun) => fun (mas);

mainfunction(array, multiplicaition) ;
