async function start(){
  const res = await fetch("/data")
  const data = await res.json();
  console.log(data);
}
start();