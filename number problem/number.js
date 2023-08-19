async function primes(set) {
    var response = await fetch("http://20.244.56.144/numbers/primes");
    var data=await response.json()
    var a=data.numbers;
    await a.forEach((item)=>{
        set.add(item);
    })
    
}
 async function fibo(set){
    var response = await fetch("http://20.244.56.144/numbers/fibo");
    var data=await response.json()
    var a=data.numbers;
    await a.forEach((item)=>{
        set.add(item);
    })
    var a=data;
}

async function odd(set){

    var response = await fetch("http://20.244.56.144/numbers/odd");
    var data=await response.json()
    var a=data.numbers;
    await a.forEach((item)=>{
        set.add(item);
    })
}
async function even(set){
    var response = await fetch("http://20.244.56.144/numbers/rand");
    var data=await response.json()
    var a=data.numbers;
    await a.forEach((item)=>{
        set.add(item);
    })
  } 
  async function func(){
  let set=new Set();
  await primes(set);
  await fibo(set);
  await odd(set);
  await even(set);
    var a=[]
  for( const val in set){
    a.unshift(val);
  }
  console.log(a);
  arr.sort();
  console.log(a);
  }
  func();
