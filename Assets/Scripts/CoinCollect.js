function OnTriggerEnter(info: Collider) {
    var coinaudio: AudioSource = GetComponent.<AudioSource>();
    coinaudio.Play();
    CoinSystem.coinsCollect += 1;
    transform.position = Vector3(0,-1000,0);
    yield WaitForSeconds(1.5);
    Destroy(gameObject);
   
}