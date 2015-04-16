#pragma strict

function Start () {

}

function Update () {

}


function OnGUI () {

	var centeredStyle = GUI.skin.GetStyle("Button");
	centeredStyle.alignment = TextAnchor.MiddleCenter;


	// GUI.Button(Rect)

	if(GUI.Button(Rect (Screen.width/2-50, Screen.height/1.5-25, 100, 50), "Start Game", centeredStyle)) {
		print("start game");

		Application.LoadLevel ("levelOne");
	}

	// quit button
	if(GUI.Button(Rect(200, 200, 90, 50), "Exit Game")) {

		print("exit");

		Application.Quit ();
	}

}