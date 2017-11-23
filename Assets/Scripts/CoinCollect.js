function OnTriggerEnter(info : Collider) {
    Destroy(gameObject);
    CoinSystem.coinsCollect += 1;
}