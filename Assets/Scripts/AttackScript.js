﻿var hitpoint: int = 10;
var totarget: float;
var range: float = 5;

function Update() {
    if (Input.GetButtonDown("Attack")) {
        var hit: RaycastHit;
        if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)) {
            totarget = hit.distance;
            if (totarget < range) {
                hit.transform.SendMessage("DeductPoints", hitpoint, SendMessageOptions.DontRequireReceiver);
            }
        }
    }

}