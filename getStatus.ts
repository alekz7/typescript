function getStatus(status : 200 | 404){
    //return (status === 200) ? : 'OK' : 'NOT FOUND';
    if (status === 200) return 'OK'; else return 'NOT_FOUND';
}

console.log(getStatus(200));
