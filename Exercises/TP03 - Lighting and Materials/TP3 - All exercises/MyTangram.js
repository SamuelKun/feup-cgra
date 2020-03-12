/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
    this.diamond = new MyDiamond(scene);
    this.triangle = new MyTriangle(scene);
    this.parallelogram = new MyParallelogram(scene);
    this.triangleBig = new MyTriangleBig(scene);
    this.triangleSmall = new MyTriangleSmall(scene);
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
    this.diamond.display();
    // Tira a matriz de transformação do diamond, voltando à original
    this.scene.popMatrix();

    //Transformações da forma Triangle
    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
    this.triangleSmall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 2 * Math.sqrt(2), 0);
    this.scene.rotate(Math.PI/4, 0, 0, 1);
    this.triangleSmall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(Math.sqrt(2)/2, Math.sqrt(2)/2 + Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(7*Math.PI/4, 0, 0, 1);
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, Math.sqrt(2)/2 + 3 * Math.sqrt(2), 0);
    this.scene.rotate(7*Math.PI/4, 0, 0, 1);
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2 + Math.sqrt(2), 0.1 + 3 + Math.sqrt(2)/2 + 4 * Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/2 + Math.PI/6, 0, 0, 1);
    this.scene.scale(1, -1, 1);
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
