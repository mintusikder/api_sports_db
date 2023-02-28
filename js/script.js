const searchAllData = () =>{
    console.log('hello')
    const inputElement = document.getElementById('search-value')
    const inputValue= inputElement.value;
    // console.log(inputValue)
    const URl =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    console.log(URl)


    fetch(URl)
    .then((res)=> res.json())
    .then(data => showPlayerData(data.player))
}
const showPlayerData =(players)=>{
    // console.log(players)
    const container =document.getElementById('player-info')
    container.innerHTML =' '
    players.forEach((player) => {
        const {strThumb, strPlayer,strNationality} = player
        console.log(player)
        const div =document.createElement('div')
        div.classList.add("col")
        div.innerHTML=`
        <div class="card">
          <img src="${strThumb ? strThumb : 'https://picsum.photos/id/237/200/300'}" class="card-img-top" alt="...">
          <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
            <p class="card-text">${strNationality}</p>
        <div>
        <button type="button" class="btn btn-success">Details</button>
        <button type="button" class="btn btn-success">Info</button>
        </div>
          </div>
        </div> `
        container.appendChild(div)
    });

}
// searchAllData()

