
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var boston_camera = new Camera({
        position: [
          -71.061434,
          42.370693,
          9000// elevation in meters
        ],
        tilt: 0,
        heading: 0,
        fov: 90
      });
      
      var camera = new Camera({
        position: [
          -71.09777751,
          42.34625234,
          2// elevation in meters
        ],
        tilt: 90,
        heading: 45
      });
      
      var camera2 = new Camera({
        position: {
          x: -71.061179,
          y: 42.377092,
          z: 2
        },
        tilt: 90,
        heading: 155
      });
      
      var camera3 = new Camera({
        position: {
          x: -71.025577,
          y: 42.355583,
          z: 1000
        },
        tilt: 65,
        heading: 277
      });

      var view =  new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: boston_camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
      
    var homeBtn = new Home({
          view: view
        });
          
      
        view.ui.add(homeBtn, "top-left");
    
        [fen, bh, dwntn].forEach(function(button) {
          button.style.display = 'flex';
          view.ui.add(button, 'top-right');
        });
        
      
      
    // bunker hill
    bh.addEventListener('click', function() {
    view.goTo({
        target:camera2
      });
    });
    
    //fenway park
    fen.addEventListener('click', function() {
     view.goTo({
        target:camera
      });
    });
    
      //downtown from SE
    dwntn.addEventListener('click', function() {
      view.goTo({
        target:camera3
      });
    });


    });
