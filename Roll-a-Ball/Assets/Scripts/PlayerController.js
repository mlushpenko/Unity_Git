#pragma strict

var speed:int = 0;
private var count:int;
var countText:GUIText;
var winText:GUIText;

function Start () {
	count = 0;
	SetCountText();
	winText.text = "";
}

function FixedUpdate () {
	var vertical:float = Input.GetAxis("Vertical");
	var horizontal:float = Input.GetAxis("Horizontal");
	
	rigidbody.AddForce(horizontal*speed*Time.deltaTime, 0, vertical*speed*Time.deltaTime);

}

function OnTriggerEnter (other:Collider) {
	if(other.gameObject.tag == "PickUp"){
		other.gameObject.SetActive(false);
		count++;
		SetCountText();
	}
}

function SetCountText(){
	countText.text = "Count: " + count;
	if (count >= 12){
		winText.text = "YOU WON!";
	}
}