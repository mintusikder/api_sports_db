const searchAllData = () =>{
    
    const inputElement = document.getElementById('search-value')
    const inputValue= inputElement.value;
    // console.log(inputValue)
    const URl =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    // console.log(URl)


    fetch(URl)
    .then((res)=> res.json())
    .then(data => showPlayerData(data.player))
}
const showPlayerData =(players)=>{
    // console.log(players)
    const container =document.getElementById('player-info')
    container.innerHTML =' '
    players.forEach((player) => {
        const {strThumb, strPlayer,strNationality,idPlayer} = player
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
        <button onclick="singlePlayer( '${idPlayer}')" type="button" class="btn btn-success">Details</button>
        <button type="button" class="btn btn-success">Remove</button>
        </div>
          </div>
        </div> `
        container.appendChild(div)
    });

}

const singlePlayer =(id) =>{
  console.log(id)
  const URL =`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}
  `
 fetch(URL).then((res)=>res.json()).then(data =>  showSinglePlayer(data.players[0]
  
  ))
}

const showSinglePlayer = (data)=>{
  // console.log(data.strThumb)
  const {strThumb,strPlayer,strNationality }= data
  const container =document.getElementById('single-player-data')
  const div =document.createElement('div')
  const element =document.getElementById('make-remove');
  element.classList.remove('d-none')
  div.innerHTML=`
  <div class="card mb-3" w-100 h-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">${strNationality}</p>
      </div>
    </div>
  </div>
</div>
  `
  container.appendChild(div)
}

// searchAllData()

