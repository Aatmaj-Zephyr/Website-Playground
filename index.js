
<!DOCTYPE html>
<html>
<head>

<meta http-equiv="origin-trial" data-feature="WebVR (For Chrome M59+)" >
<meta charset="utf-8">
<title>Video</title>
<meta name="description" content="Video - A-Frame">
<script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.5.0/aframe.js"></script>

</head>
<script>/* global AFRAME */
    AFRAME.registerComponent('play-on-click', {
      init: function () {
        this.onClick = this.onClick.bind(this);
      },
      play: function () {
        window.addEventListener('click', this.onClick);
      },
      pause: function () {
        window.removeEventListener('click', this.onClick);
      },
      onClick: function (evt) {
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl) { return; }
        this.el.object3D.visible = true;
        videoEl.play();
      }
      
    });

    AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        document.getElementById("videoBunny").src="https://cdn.aframe.io/videos/fireworks.mp4"
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });
    </script>

<body>
<a-scene>
<a-assets>
<video id="videoBunny" preload="auto" src="https://cdn.aframe.io/videos/bunny.mp4" width="160" height="90" autoplay loop="true" crossOrigin="anonymous" muted></video>
<!-- Load your panorama image asset -->
<img id="panorama" src="img.png" >
   
</a-assets>
<a-sky  src="#panorama"></a-sky>
<a-entity material="shader: flat; src: #videoBunny" geometry="primitive: plane; width: 160; height: 90;" position="0 0 -60" rotation="0 0 0" play-on-click >
</a-entity>
<a-entity id="rig" position="25 10 0">
  <a-entity id="camera" camera look-controls></a-entity>
</a-entity>
<a-box change-color-on-hover onclick='console.log("ok")' position="-1 0.5 -3" id="next" rotation="0 45 0" color="#4CC3D9" ></a-box>


<a-camera>
    <a-cursor></a-cursor>
</a-camera>
</a-scene>

</body>
</html>
