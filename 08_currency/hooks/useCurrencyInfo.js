import {useEffect,useState}from "react"

function useCurrencyInfo(currency){
  const[data,setData]=useState({});
useEffect(function(){
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
 latest/
currencies/${currency}.json`)
.then(function(res){
    return res.json();
}).then(function(res){
    setData(res[currency])
    console.log(data);
})
},[currency])
console.log(data)
return data;
}
 export default useCurrencyInfo;