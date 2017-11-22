var wrapTarget : Transform;

function Update() {
    
}

function OnTriggerEnter(col : Collider) {
    if (col.gameObject.tag == "wrap001") {
        this.transform.position = wrapTarget.position;

    }
}