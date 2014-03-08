#pragma strict

function Start () {

}
var speed:int = 0;
function Update () {
	var vertical:float = Input.GetAxis("Vertical");
	var horizontal:float = Input.GetAxis("Horizontal");
	
	rigidbody.AddForce(horizontal*speed*Time.deltaTime, 0, vertical*speed*Time.deltaTime);

}