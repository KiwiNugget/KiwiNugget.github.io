#pragma strict

// enemy script

// inspector variables (public)
var numberOfClicks 	: int = 2;		//set number of clicks for the object
var respawnWaitTime : float = 2.0;	//set time delay between reappearances
var shapeColor		: Color[];		//declare the array for the colors to be initialized in spector
var explosion		: Transform;

// private variables (private)
private var storeClicks : int = 0;


function Start () {

	// store clicks from inspector to reset object's clicks
	storeClicks = numberOfClicks;
}

// update game every frame
function Update () {

	// player.js captured info about clicking
	if (numberOfClicks <= 0) {

		if (explosion) {
			// create explosion
			Instantiate(explosion,transform.position,transform.rotation);
		};
		// get random x and y's within certain range for position
		var randomPosition = Vector3(Random.Range(-6, 6), Random.Range(-4,4), 0);

		RespawnWaitTime();

		// get tranform position of the vector3 in x,y,z cordinates of our world space
		// this will move our object in the random position generated
		gameObject.transform.position = randomPosition;

		// reset number of clicks
		numberOfClicks = storeClicks;
	
	};
}

//  used to hide game object for a set amount of time and then unhide it
function RespawnWaitTime () {

	// make object invisible
	// appears in inspector as Mesh Renderer
	// renderer.enabled = false;
	gameObject.renderer.enabled = false;

	// change to random color when it reappers next time
	RandomColor();
	// functon to wait for a certain amount of time
	yield WaitForSeconds(respawnWaitTime);

	//  make object visible
	// renderer.enabled = true;
	gameObject.renderer.enabled = true;
}

// change color on the material of a game object
function RandomColor () {

	// prevent our of range error on 0
	if (shapeColor.length > 0) {
		// get color
		var newColor = Random.Range(0,shapeColor.length); // min,max arguments

		// get a random color to change our object color
		renderer.material.color = shapeColor[newColor];

	};

}