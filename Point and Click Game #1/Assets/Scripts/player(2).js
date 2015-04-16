#pragma strict

// player Script

// inspector variables (public)
var tagName 	: String;		// allow designer to setup a tag in the inspector
var rayDistance : float = 0;	// length of ray for raycast default as 0

// private variables (private)

function Start () {

}

// update is called every frame
function Update () {
	// use mouse button to select on gameObjects in the scene

	// Detects clicks from the mouse and prints a message
	// only for left click, and message will print on the console
	if(Input.GetMouseButtonDown(0)) {
		// Debug.Log("Pressed left mouse button.");

		//raycast to check if the click collided with game objects
		var hit : RaycastHit;

		// screenpointtoray returns a ray from camera to screen point
		// get position of mouse
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		// if the location of the mouse click position hits and object do something
		if (Physics.Raycast(ray, hit, rayDistance)) { // origin, direction, distance

			// if the hit object position hits the assigned tagName then do something
			if (hit.transform.tag == tagName) {

				// get random x and y's within certain range for position
				// var randomPosition = Vector3(Random.Range(-6, 6), Random.Range(-4,4), 0);

				// get tranform position of the vector3 in x,y,z cordinates of our world space
				// this will move our object in the random position generated
				// hit.transform.position = randomPosition;
				// print("You Hit an enemy tagged object!");

				// click handling
				// get enemy script from game object
				var enemyScript = hit.transform.GetComponent(enemy);

				// after each click minus one click in enemy.js
				enemyScript.numberOfClicks -= 1;
			}
			else {
				print("this is not an enemy");
			}
		};
	}


}