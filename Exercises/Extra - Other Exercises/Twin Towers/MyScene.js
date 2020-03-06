/**
* MyScene
* @constructor
*/

var keyPressed;
document.addEventListener('keydown', getKey);
function getKey(k) {
  keyPressed = k.keyCode;
}

function hexToRgbA(hex) {
    var match = hex.match(/^#([A-Fa-f0-9][A-Fa-f0-9])([A-Fa-f0-9][A-Fa-f0-9])([A-Fa-f0-9][A-Fa-f0-9])$/);
    if (match)
        return [parseInt(match[1], 16)/255.0, parseInt(match[2], 16)/255.0, parseInt(match[3], 16)/255.0];
    throw new Error('Bad Hex Code');
}

class MyScene extends CGFscene {
    constructor() {
        super();
        this.camX = -200;
        this.camY = 10;
        this.camZ = 100;

        this.camXtar = 1;
        this.camYtar = 5;
        this.camZtar = 1;
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cube = new MyUnitQuadCube(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;

        this.displayFerb = false;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(this.camX, this.camY, this.camZ), vec3.fromValues(1, 5, 1));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        //Floor
        this.pushMatrix();
        var color = hexToRgbA("#32CD32");
        this.setAmbient(color[0], color[1], color[2], 1.0);
        this.setDiffuse(color[0], color[1], color[2], 1.0);
        this.setSpecular(color[0], color[1], color[2], 1.0);
        this.translate(-1, 0, 0);
        this.scale(40, 1, 100);
        this.cube.display();
        this.popMatrix();

        //Ocean
        this.pushMatrix();
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.translate(-40, -1, 0);
        this.scale(400, 1, 500);
        this.cube.display();
        this.popMatrix();

        if(this.camX != 2) {
          //Tower 1
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(4, 5, 4);
          this.scale(3, 10, 3);
          this.cube.display();
          this.popMatrix();

          //Tower 1 Anthem
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(4, 10, 4);
          this.scale(0.1, 5, 0.1);
          this.cube.display();
          this.popMatrix();

          //Tower 2
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(0, 5, 0);
          this.scale(3, 10, 3);
          this.cube.display();
          this.popMatrix();

          switch (keyPressed) {
              case 38:
                this.camX += 2;
                this.camZ -= 1;
                keyPressed = 0;
                break;
              case 40:
                this.camX -= 2;
                this.camZ += 1;
                keyPressed = 0;
              break;
                break;
          }

          var pos = vec3.fromValues(this.camX, this.camY, this.camZ);
          this.camera.setPosition(pos);
        }
        else {
          //Tower 1
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(4, 5, 4);
          this.scale(3, 10, 3);
          this.cube.display();
          this.popMatrix();

          //Tower 1 Anthem
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(4, 10, 4);
          this.scale(0.1, 5, 0.1);
          this.cube.display();
          this.popMatrix();

          //Tower 2
          this.pushMatrix();
          var color = hexToRgbA("#808080");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(0, 1, 0);
          this.scale(3, 10, 3);
          this.cube.display();
          this.popMatrix();

          //Fire
          this.pushMatrix();
          var color = hexToRgbA("#800000");
          this.setAmbient(color[0], color[1], color[2], 1.0);
          this.setDiffuse(color[0], color[1], color[2], 1.0);
          this.setSpecular(color[0], color[1], color[2], 1.0);
          this.translate(5, 7, 0);
          this.scale(3, 3, 3);
          this.cube.display();
          this.popMatrix();

          var pos = vec3.fromValues(100, 10, 0);
          var tar = vec3.fromValues(0, 3, 0);
          this.camera.setPosition(pos);
          this.camera.setTarget(tar);

        }
        // ---- END Primitive drawing section
    }
}
