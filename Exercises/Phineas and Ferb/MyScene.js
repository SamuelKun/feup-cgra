/**
* MyScene
* @constructor
*/

var keyPressed;

document.addEventListener('keydown', getKey);

function getKey(k) {
  keyPressed = k.keyCode;
}

class MyScene extends CGFscene {
    constructor() {
        super();
        this.xAxis = 0;
        this.yAxis = 0;
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
        this.face = new FerbFace(this);
        this.nose = new FerbNose(this);
        this.mouth = new FerbMouth(this);
        this.lefteye = new FerbEye(this, 2.5, 9, 14.7, -0.4);
        this.righteye = new FerbEye(this, 1.9, 11.5, 14.5, 0.2);
        this.righteyepupil = new FerbEye(this, 0.4, 9.3, 14.1, 0.3);
        this.lefteyepupil = new FerbEye(this, 0.4, 11.5, 14.5, 0.3);
        this.garden = new MyUnitQuadCube(this);
        this.phineas = new MyPhineas(this);
        this.tree = new MyCircle(this, 5, 0, 7.5, 0);

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
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
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
        this.pushMatrix();
        this.scale(0.1, 0.1, 0.1);
        this.pushMatrix();
        this.setAmbient(1, 1, 1, 1);
        this.setDiffuse(1, 1, 1, 1);
        this.setSpecular(0, 0, 0, 1);
        this.setShininess(10);
        this.lefteye.display();
        this.righteye.display();

        this.setAmbient(0, 0, 0, 0);
        this.setDiffuse(0, 0, 0, 0);
        this.lefteyepupil.display();
        this.righteyepupil.display();

        this.setAmbient(1, 0.85, 0.69, 1);
        this.setDiffuse(1, 0.85, 0.69, 1);

        this.face.display();
        this.nose.display();
        this.mouth.display();
        this.popMatrix();
        this.popMatrix();

        this.pushMatrix();
        this.setAmbient(0.3, 1, 0.2, 1);
        this.setDiffuse(0.3, 1, 0.2, 1);
        this.translate(0, -1, 0);
        this.scale(20, 1, 20);
        this.garden.display();
        this.popMatrix();

        this.pushMatrix();
        this.setAmbient(0.53, 0.81, 0.92, 1);
        this.setDiffuse(0.53, 0.81, 0.92, 1);
        this.translate(0, 0, -3);
        this.scale(20, 20, 1);
        this.garden.display();
        this.popMatrix();

        for(var i = 0; i <= 20; i++) {
          this.pushMatrix();
          this.setAmbient(0.80, 0.62, 0.35, 1);
          this.setDiffuse(0.80, 0.62, 0.35, 1);
          this.translate(-10 + i, 0, -2);
          this.scale(1, 3, 0.5);
          this.garden.display();
          this.popMatrix();
        }

        this.pushMatrix();
        this.setAmbient(0.50, 0.35, 0.15, 1);
        this.setDiffuse(0.50, 0.35, 0.15, 1);
        this.translate(0, 0, -1);
        this.scale(1, 10, 0.5);
        this.garden.display();
        this.popMatrix();



        this.pushMatrix();
        this.scale(0.1,0.1,0.1);
        switch (keyPressed) {
            case 37:
              this.xAxis -= 1;
              keyPressed = 0;
              break;
            case 39:
              this.xAxis += 1;
              keyPressed = 0;
              break;
            case 38:
              this.yAxis -= 1;
              keyPressed = 0;
              break;
            case 40:
              this.yAxis += 1;
              keyPressed = 0;
              break;
        }

        this.translate(this.xAxis, 10, this.yAxis);
        this.phineas.display();

        this.popMatrix();

        this.setAmbient(0.0, 0.60, 0.20, 1);
        this.setDiffuse(0.0, 0.60, 0.20, 1);
        this.tree.display();

        // ---- END Primitive drawing section
    }
}
