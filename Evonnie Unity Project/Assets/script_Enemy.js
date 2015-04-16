#pragma strict

// public variables
var numberOfClicks: int = 1;
var reappearTime: float = 2.0;
var shapeColor : Color[]; // color array for array of random colors\wp8
var explosion : Transform; // hold our explosion prefab
var enemyPoint : int = 1; //point given after thet enemy is destroyed

private var storeClicks : int;

function Start () {

	RandomPosition ();

	if( numberOfClicks <= 0){

		storeClicks = 1;
		numberOfClicks = 1;
	
	}

	else {

		storeClicks = numberOfClicks;
	}

}

function Update () {
	if (numberOfClicks <=0) {

		if(explosion){

			//instantiate or makre a copy of our  explosion prefab
			var explosionInstance = Instantiate(explosion, transform.position, transform.rotation);

			// destroy explosion clone after 2 seconds
			Destroy(explosionInstance.gameObject, 2);

			// if there is an audio file on the inspector or the game object, play the audio file
			if(audio.clip) {

				audio.Play();
			}
		}

		ReappearWaitTime ();
		
		RandomPosition ();
		
		// reset number of clicks to 2
		numberOfClicks = 2;
		
	}
	
}

/* My functions */

// create a time delay between reappearances
function ReappearWaitTime () {
	// make object invisible
	gameObject.renderer.enabled = false;
	
	// wait for a few seconds
	yield WaitForSeconds (reappearTime);
	
	// make object visible again
	gameObject.renderer.enabled = true;

}

// change the object to a random color before reappearing
function RandomColor () {

	// get new color
	var newColor = Random.RandomRange(0, shapeColor.length); 

	// render our random color
	gameObject.renderer.material.color = shapeColor[newColor];

}

function RandomPosition () {

	var randomPosition = Vector3(Random.RandomRange (-6, 6), Random.RandomRange (-4,4), 0);

		// put the random position inside our transform position
		transform.position = randomPosition;
}
