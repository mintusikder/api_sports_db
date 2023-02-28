const searchAllData = () =>{
    console.log('hello')
    const inputElement = document.getElementById('search-value')
    const inputValue= inputElement.value;
    // console.log(inputValue)
    const URl =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    console.log(URl)


    // false(URl)
    // .then((res)=> res.json())
    // .then(data => console.log(data))
}
// searchAllData()