var headStrap = document.createElement('div')
headStrap.classList.add('header')
document.body.append(headStrap)


var menuButton = document.createElement('button')
menuButton.classList.add('menuButton')
headStrap.append(menuButton)
menuButton.setAttribute('onclick','openMenu()')

var menuIcon = document.createElement('i')
menuIcon.classList.add('fas', 'fa-bars')
menuButton.append(menuIcon)


var logoButton = document.createElement('button')
logoButton.classList.add('logoButton')
logoButton.setAttribute('onclick','window.location.reload()')
headStrap.append(logoButton)


var logo = document.createElement('img')
logoButton.append(logo)
logo.src = 'ytlogo.jpg'
logo.classList.add('logo')

var inputText = document.createElement('input')
inputText.type = 'text'
inputText.onkeydown = function(event) {
    if (event.keyCode === 13) {
    searchVideo()   
    }
  }
headStrap.append(inputText)
inputText.placeholder = 'search video or topic'
inputText.id = 'inputText'
inputText.classList.add('inputText')


var inputSearch = document.createElement('button')
inputSearch.classList.add('inputSearch')
inputSearch.id = 'inputSearch'
inputSearch.setAttribute('onclick','searchVideo()')
headStrap.append(inputSearch)

var searchIcon =document.createElement('i')
searchIcon.classList.add('fas', 'fa-search')
inputSearch.append(searchIcon)

/*var voiceButton = document.createElement('button')
voiceButton.classList.add('voiceButton')
headStrap.append(voiceButton)

var voiceIcon = document.createElement('i')
voiceIcon.classList.add('fas', 'fa-microphone')
voiceButton.append(voiceIcon)

var videoButton = document.createElement('button')
videoButton.classList.add('videoButton')
headStrap.append(videoButton)

var uploadVideo = document.createElement('i')
uploadVideo.classList.add('far','fa-plus-square')
videoButton.append(uploadVideo)

var ytgridButton = document.createElement('button')
ytgridButton.classList.add('ytgridButton')
headStrap.append(ytgridButton)

var ytGrid = document.createElement('i')
ytGrid.classList.add('fas','fa-th')
ytgridButton.append(ytGrid)


var ytnotifButton = document.createElement('button')
ytnotifButton.classList.add('ytnotifButton')
headStrap.append(ytnotifButton)

var ytNotif = document.createElement('i')
ytNotif.classList.add('fas','fa-bell')
ytnotifButton.append(ytNotif)*/

var listArea = document.createElement('div')
listArea.classList.add('container','listArea')
listArea.id = 'listArea'
document.body.append(listArea)

var resArea = document.createElement('div')
resArea.classList.add('row','resArea')
listArea.append(resArea)


var sideMenu = document.createElement('div')
sideMenu.id = 'sideMenu'
sideMenu.classList.add('sidenav')
document.body.append(sideMenu)

var closeButton = document.createElement('a')
closeButton.innerHTML = '&times'
closeButton.classList.add('closebtn')
closeButton.href = 'javascript:void(0)'
closeButton.setAttribute('onclick','closeMenu()')
sideMenu.append(closeButton)

var channels = document.createElement('a')
channels.innerHTML = 'Search Channels'
channels.classList.add('menuList')
channels.href = 'javascript:void(0)'
channels.setAttribute('onclick','channelChange()')
sideMenu.append(channels)

var playlists = document.createElement('a')
playlists.innerHTML = 'Search Playlists'
playlists.classList.add('menuList')
playlists.href = 'javascript:void(0)'
playlists.setAttribute('onclick','playlistChange()')
sideMenu.append(playlists)

var subscriptions = document.createElement('a')
subscriptions.innerHTML = 'Subscriptions'
subscriptions.classList.add('menuList')
subscriptions.href = 'javascript:void(0)'
subscriptions.setAttribute('onclick','changeBack()')
sideMenu.append(subscriptions)

var createPlaylists = document.createElement('a')
createPlaylists.innerHTML = 'Create Playlists'
createPlaylists.classList.add('menuList')
createPlaylists.href = 'javascript:void(0)'
createPlaylists.setAttribute('onclick','changeBack()')
sideMenu.append(createPlaylists)

var updatePlaylists = document.createElement('a')
updatePlaylists.innerHTML = 'Update Playlists'
updatePlaylists.classList.add('menuList')
updatePlaylists.href = 'javascript:void(0)'
updatePlaylists.setAttribute('onclick','changeBack()')
sideMenu.append(updatePlaylists)

var video = document.createElement('a')
video.innerHTML = 'Search Video/Topic'
video.classList.add('menuList')
video.href = 'javascript:void(0)'
video.setAttribute('onclick','changeBack()')
sideMenu.append(video)



function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
  }
  
  function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
  }




  function channelChange() {

    closeMenu()
    
    document.getElementById('inputText').value = ''
    document.getElementById('inputText').placeholder = 'search channel'
    var searchBtn = document.getElementById('inputSearch')
    searchBtn.setAttribute('onclick','searchChannel()')

  }

  function searchChannel(){

    var word = document.getElementById('inputText').value
      console.log(word)
  }




  function playlistChange() {

    closeMenu()

    document.getElementById('inputText').value = ''
    document.getElementById('inputText').placeholder = 'search playlist'
    var searchBtn = document.getElementById('inputSearch')
    searchBtn.setAttribute('onclick','searchPlaylist()')

  }

  function searchPlaylist(){

    var word = document.getElementById('inputText').value
      console.log(word)
  }


  function changeBack() {

    closeMenu()

    document.getElementById('inputText').value = ''
    document.getElementById('inputText').placeholder = 'search video or topic'
    var searchBtn = document.getElementById('inputSearch')
    searchBtn.setAttribute('onclick','searchVideo()')

  }




function searchVideo(){
    
   
    var word = document.getElementById('inputText').value
    console.log(word)
    fetch('https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&key=AIzaSyCNskzPySVkBYT927UhBvsSytBcYZ_z6VA&maxResults=50&q='+word)
    .then(resp => resp.json())
    .then(result => {



    for(i=0;i<result.items.length;i++)
    {

    var resCard = document.createElement('div')
    resCard.classList.add('col-4','resCard')
    resArea.append(resCard)
    }

})

}


window.onload = 
function() {

    var word = 'trending'
    fetch('https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&key=AIzaSyCNskzPySVkBYT927UhBvsSytBcYZ_z6VA&maxResults=50&q='+word)
    .then(resp => resp.json())
    .then(result => {


    for(i=0;i<result.items.length;i++)
    {

    var resCard = document.createElement('div')
    resCard.classList.add('col-4','resCard')
    resArea.append(resCard)
    }

})

}
