#pragma strict

// player script
 
// inspector variables (private)
var tagName : String;
var rayDistance : float = 100.0;
var score : int = 0; // holds the players score
var totalGameTime : float = 10.0;
var levelloadWaitTime : float = 3.0; // wait time before loading next level/scene
var numberOfPointsToWin : int = 5; // nukmber of point required to win the game
/* private variable (private) */


// called once
function Start () {
	//invoke the countdown fucntion once every second
	InvokeRepeating("CountDown", 1.0, 1.0);
}

// called throughout the game tp update the state of the game
function Update () {

	//Use mouse button to select on gameObjects in the scene
	if(Input.GetMouseButtonDown(0)) {

		// get pixel coordinates position of teh mouse
		var rayOrigin : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		// check if mouse click collided with game object(s)
		var hitDirection : RaycastHit;

		// if the left click collided with and object do something
		if(Physics.Raycast(rayOrigin, hitDirection, rayDistance)) {

			// checking to see if the object collided is tagged "enemy"
			if(hitDirection.transform.tag == tagName) {

					Debug.Log("you hit an object.");

					// get random position
					var enemyScript = hitDirection.transform.GetComponent(script_Enemy);

					// update the click	
					enemyScript.numberOfClicks -=1;

					if(enemyScript.numberOfClicks <= 0){
						score += enemyScript.enemyPoint;
					}
			}
		}
	
		
	}
			
}
		
		

	/* my functions */

	// countdown our totalGametime
	function CountDown () {

		// if the tot
		if (--totalGameTime <= 0) {

			CancelInvoke("CountDown"); // built in Unity function that takes a string

			if(score >= numberOfPointsToWin) {
				
				Application.LoadLevel("sceneWin");

			}
			else {

					Application.LoadLevel("sceneLose"); 
			}
		}
	}

	
	function OnGUI () {

			GUI.Label(Rect(10,10,100,20), "Score:" + score );  
		
			GUI.Label(Rect(10,30,100,20), "Time:" + totalGameTime );  

		}