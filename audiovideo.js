if (Meteor.isClient) {
  Template.hello.rendered = function(){
    video = document.querySelector("video");
    function gotStream(stream) {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var audioContext = new AudioContext();

      // Create an AudioNode from the stream
      var mediaStreamSource = audioContext.createMediaStreamSource(stream);

      // Connect it to destination to hear yourself
      // or any other node for processing!
      mediaStreamSource.connect(audioContext.destination);
     if (window.URL) {
      video.src = window.URL.createObjectURL(stream);
    } else {
      video.src = stream;
    }
    video.play();
    }
    navigator.webkitGetUserMedia({audio:true,video:true}, gotStream);
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
