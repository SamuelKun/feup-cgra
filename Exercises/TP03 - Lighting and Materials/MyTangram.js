/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initMaterials();

    this.diamond = new MyDiamond(scene);
    this.triangle = new MyTriangle(scene);
    this.parallelogram = new MyParallelogram(scene);
    this.triangleBig = new MyTriangleBig(scene);
    this.triangleSmall = new MyTriangleSmall(scene);
	}
	initMaterials() {
		this.yellow = new CGFappearance(this.scene);
		this.yellow.setAmbient(...this.scene.hexToRgbA('#ffff00'));
		this.yellow.setDiffuse(...this.scene.hexToRgbA('#ffff00'));
		this.yellow.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.yellow.setShininess(10.0);

		this.blue = new CGFappearance(this.scene);
		this.blue.setAmbient(...this.scene.hexToRgbA('#0000ff'));
		this.blue.setDiffuse(...this.scene.hexToRgbA('#0000ff'));
		this.blue.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.blue.setShininess(10.0);

		this.orange = new CGFappearance(this.scene);
		this.orange.setAmbient(...this.scene.hexToRgbA('#ff9900'));
		this.orange.setDiffuse(...this.scene.hexToRgbA('#ff9900'));
		this.orange.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.orange.setShininess(10.0);

		this.red = new CGFappearance(this.scene);
		this.red.setAmbient(...this.scene.hexToRgbA('#ff0000'));
		this.red.setDiffuse(...this.scene.hexToRgbA('#ff0000'));
		this.red.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.red.setShininess(10.0);

		this.pink = new CGFappearance(this.scene);
		this.pink.setAmbient(...this.scene.hexToRgbA('#ff00ff'));
		this.pink.setDiffuse(...this.scene.hexToRgbA('#ff00ff'));
		this.pink.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.pink.setShininess(10.0);

		this.purple = new CGFappearance(this.scene);
		this.purple.setAmbient(...this.scene.hexToRgbA('#9900ff'));
		this.purple.setDiffuse(...this.scene.hexToRgbA('#9900ff'));
		this.purple.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.purple.setShininess(10.0);

		this.green = new CGFappearance(this.scene);
		this.green.setAmbient(...this.scene.hexToRgbA('#00ff00'));
		this.green.setDiffuse(...this.scene.hexToRgbA('#00ff00'));
		this.green.setSpecular(...this.scene.hexToRgbA('#ffffff'));
		this.green.setShininess(10.0);
	}
	display() {
		//	Translação inicial para colocar o tangram centrado
		this.scene.pushMatrix();
		this.scene.translate(0, -2 * Math.sqrt(2) - Math.sqrt(2)/ 2, 0);

    // Transformações da forma Diamond
    // Coloca a matriz inicial na stack
    this.scene.pushMatrix();
    //Transformações da forma Diamond
		var diamond_rotation = [Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0.0, 0.0,
														Math.sin(Math.PI/4),  Math.cos(Math.PI/4), 0.0, 0.0,
														0.0,								 0.0, 								 1.0, 0.0,
														0.0,								 0.0,						 			 0.0, 1.0];
    this.scene.multMatrix(diamond_rotation);
		this.scene.customMaterial.apply();
    this.diamond.display();
    // Tira a matriz de transformação do diamond, voltando à original
    this.scene.popMatrix();

    //Transformações da forma Triangle
    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
		this.purple.apply();
    this.triangleSmall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 2 * Math.sqrt(2), 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.red.apply();
    this.triangleSmall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2)/2, Math.sqrt(2)/2 + Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
		this.pink.apply();
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
		this.orange.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(7*Math.PI/4, 0, 0, 1);
		this.purple.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(7*Math.PI/4, 0, 0, 1);
		this.blue.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2 + Math.sqrt(2), 0.1 + 3 + Math.sqrt(2)/2 + 4 * Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/2 + Math.PI/6, 0, 0, 1);
    this.scene.scale(1, -1, 1);
		this.yellow.apply();
    this.parallelogram.display();
    this.scene.popMatrix();
		this.scene.popMatrix();
	}
	enableNormalViz() {
		this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.triangleBig.enableNormalViz();
		this.triangleSmall.enableNormalViz();
}
}
