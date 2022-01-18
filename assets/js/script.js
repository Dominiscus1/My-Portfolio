// const api_key = '&key=AIzaSyCxiSCXwO-sJjxWJhf-__CeSTm5SIcjvDA';
// const playlistID = 'PLmyEvVJ-QEIStpjc4GslB3L3A-J-JOJ1P';
// const youtubeURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='
// let youtubeAPI = youtubeURL + playlistID + api_key;
// var videoId = '';
// var videoArrIndex = 0;

// console.log(youtubeAPI)
// function getVideo(){
//     fetch(youtubeAPI)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data){
//         videoId = data.items[videoArrIndex].snippet.resourceId.videoId;
//         console.log(videoId);
//         var iframe = document.getElementById
//         ("frame");
//           iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
//           iframe.setAttribute("width","300");
//           iframe.setAttribute("height","300");
//           iframe.setAttribute("title","Pokemon Video");
//           iframe.setAttribute("frameborder","0");
//           iframe.setAttribute("allow","accelerometer; autoplay = 1;loop =1; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
//           iframe.setAttribute("allowfullscreen", true);   
//     })
// }
// getVideo();