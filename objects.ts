function identity<M>(x: M){
    return x;
}

let a = identity(1);
let b = identity(false);
console.log(a,b);
