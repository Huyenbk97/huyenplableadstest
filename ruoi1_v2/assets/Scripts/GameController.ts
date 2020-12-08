import GameUIcontroller from "./GameUIcontroller";
import Test from "./Test";

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameController extends cc.Component {
    static Instance: GameController = null;
    @property
    numOfEnemy: number =47;
    // @property(cc.Prefab)
    // bossPrefab: cc.Prefab = null;
    // @property(cc.Node)
    // revicePopup:cc.Node=null;
    // @property(cc.Prefab)
    // enemy1: cc.Prefab = null;
    // @property(cc.Prefab)
    // enemy2: cc.Prefab = null;
    // numberOfBoss:number= 1;
    @property(cc.Node)
    popup: cc.Node = null;
    @property(cc.Node)
    Ship: cc.Node = null;
    @property(cc.Node)
    moveHand: cc.Node = null;
    @property(cc.Node)
    initBulletPosition:cc.Node=null;
    // @property()
    @property(cc.Prefab)
    shipBullet: cc.Node = null;
    @property({
        type:cc.AudioClip
      })
    Victory = null;
    @property({
        type:cc.AudioClip
      })
    backgroundSound = null;
    @property({
        type:cc.AudioClip
      })
    victory =null;
    onLoad() {
        //this.bulletTime = 0;
        GameController.Instance = this;
        //this.node.getComponent(Test).callTest();
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.moveHand.destroy();
            this.bulletPool = new cc.NodePool();
            this.Ship.getComponent(cc.Animation).play();
        }, this);
        this.Ship.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.moveHand.destroy();
            this.bulletPool = new cc.NodePool();
            this.Ship.getComponent(cc.Animation).play();
        }, this);
        this.check();
        this.setTouch();
        //this.InitBullet();
        //this.createBullet();
        cc.audioEngine.playEffect(this.backgroundSound, false);
   
        
    }
    start() {
    }
    check() {
        if (this.popup.active==false) {
            this.scheduleOnce(function() {
                // Here `this` is referring to the component
                       this.showPopup();
            }, 10); 
        }
    }
    setTouch() {
        this.Ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos_ship = this.Ship.getPosition()
            var pos_move = event.getDelta();
            console.log(pos_move);
            this.Ship.setPosition(cc.v2(pos_ship.x+pos_move.x,pos_move.y+pos_ship.y))
        }, this);
       }
    decreaseEnemy() {
        console.log("chay duoc decrease");
        this.numOfEnemy-=1;
        console.log(this.numOfEnemy);
        if (this.numOfEnemy == 0) {
            console.log("quai bi tieu diet het");
            //this.initBoss();
            // var moveRight= cc.rotateBy(0.5, 90);
        //    this.testNode.runAction(moveRight);
        //    console.log(this.testNode.name);
            this.showPopup();
        }
    }
    // spawnShips() {
    //     var ships = [this.enemy1, this.enemy2];
    //     var random = Math.floor(Math.random() * ships.length);
    //     var newShip = cc.instantiate(ships[random]);
    //     var randomX = [-84, 1371]
    //     var randX = Math.floor(Math.random() * randomX.length);
    //     newShip.setPosition(randX,(this.node.position.y*2)+(newShip.getContentSize().height*2));
    //     this.node.addChild(newShip);   
    // }
    InitBullet(){
        var bullet = cc.instantiate(this.shipBullet);
        //bullet.setPosition(this.initBulletPosition.position);
        //this.node.parent.addChild(bullet);
        //
        var pos = this.initBulletPosition.getPosition();
        bullet.setPosition(cc.v2(pos.x,pos.y+this.initBulletPosition.height/2))
        //cc.audioEngine.playEffect(this.shoot, false);
        bullet.parent = this.initBulletPosition;
        // var bullet1 = cc.instantiate(this.shipBullet);
        // bullet1.setPosition(this.initBulletPosition1.position);
        // bullet1.parent = this.bulletParent;
        // var bullet1 = cc.instantiate(this.shipBullet);
        // bullet1.setPosition(this.initBulletPosition2.position);
        // bullet1.parent = this.bulletParent; 
       // cc.audioEngine.setVolume(this.shoot, 0.5);
        //cc.audioEngine.playEffect(this.shoot,false); 
    }   
    //  createBullet() {
    //         let bullet = null;
    //         if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
    //         bullet = this.bulletPool.get();
    //         } else { // if not enough node in the pool, we call cc.instantiate to create node
    //            bullet = cc.instantiate(this.shipBullet);
    //         }
    //         bullet.parent = this.node;
    //         console.log(this.node);
            
    //         var pos = this.Ship.getPosition();
    //         bullet.setPosition(cc.v2(pos.x,pos.y+this.Ship.height-30))
    //     }
    //     onKill() {
    //         this.bullerPool.put(bullet);
    //     }
    decreaseBoss(){
        console.log("decreaseBoss");
         this.numberOfBoss-=1;
         if (this.numberOfBoss==0) {
            this.shipMove();
            console.log("dBossDead");
         }
    }
    // initBoss() {
    //     var boss = cc.instantiate(this.bossPrefab);
    //     console.log("dduoc goi");
    //          var moveRight= cc.moveBy(2, 0, -350);
    //          this.node.runAction(moveRight);
             
    //          //
    //     }
            //  onLoad () {
            // var moveRight= cc.moveBy(2, 0, -200);
            // this.node.runAction(moveRight);
            //  }
    
    shipMove(){
    
    }
    showPopup() {
        cc.audioEngine.playEffect(this.Victory,false);  
        var action = cc.moveBy(0.5, 0, 1000);
        var seq = cc.sequence(cc.moveBy(0.5, 0, 1000), cc.hide());
        this.Ship.runAction(seq);
        if (this.popup.active==false) {
            
        
        GameUIcontroller.Instance.showBanner();}
        cc.audioEngine.playEffect(this.victory ,false);
    }
    clickPopup() {
        if(cc.sys.os==cc.sys.OS_ANDROID){
        mraid.open("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=en_US&gl=US");}
        else  mraid.open("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
    }

}
