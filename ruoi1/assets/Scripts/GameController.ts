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
    popupopen: cc.Node = null;
    @property(cc.Node)
    play: cc.Node = null;
    @property(cc.Node)
    Ship: cc.Node = null;
    @property(cc.Node)
    moveHand: cc.Node = null;
    @property(cc.Node)
    canvas: cc.Node = null;
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
     backgroundSound =null;
    onLoad() {
        //this.bulletTime = 0;
        GameController.Instance = this;
        //this.node.getComponent(Test).callTest();
        this.popup.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.moveHand.destroy();
            this.bulletPool = new cc.NodePool();
        }, this);
        this.setTouch();
        //this.InitBullet();
        //this.createBullet();
        cc.audioEngine.playEffect(this.backgroundSound, false); 
      
    }
    start() {
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
    // decreaseBoss(){
    //     console.log("decreaseBoss");
    //      this.numberOfBoss-=1;
    //      if (this.numberOfBoss==0) {
    //         this.shipMove();
    //         console.log("dBossDead");
    //      }
    // }
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
        GameUIcontroller.Instance.showBanner();
        this.Cavas();
    }
    Cavas() {
        
        var isTouchDevice =
        (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
        if(!isTouchDevice){
            this.clickPopup();
    }
    }
    clickPopup() {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                cc.sys.openURL("https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=vi&gl=US");
            } else {
                cc.sys.openURL("https://apps.apple.com/us/app/galaxy-attack-alien-shooter/id1176011642");
            }
        }
    update(){
        if (window.matchMedia("(orientation: portrait)").matches) {
          console.log("màn hình dọc");
          //this.node = cc.find("Canvas/playfreebutton");
        //
        //console.log(this.node); 
        this.node = cc.find("Canvas/playfreebutton");
        console.log(this.node.getPosition().x);
        
        if (this.node.getPosition().x!= 25) {
           this.node = cc.find("Canvas/Ship");
            this.node.setScale(1.9, 1.9);
            this.node.setPosition(cc.v2(25, -752));
            console.log("set lai vi tri");
            
        }
        this.node = cc.find("Canvas/playfreebutton");
            this.node.setPosition(cc.v2(25, -1000.165));
            this.node.setScale(1.3, 1.3);
           this.node = cc.find("Canvas/IconGame");
            this.node.setPosition(cc.v2(520.65, -980.046));
            this.node.setScale(1.2, 1.2);
         
            this.node = cc.find("Canvas/image");
            if (this.node.active==true) {      
                this.node.setPosition(cc.v2(28, -587));
            } 
            this.node = cc.find("Canvas/Node3");
            this.node.setScale(1.1, 1.1);
            this.node = cc.find("Canvas/enemy2");
            this.node.setScale(0,0);
            this.node = cc.find("Canvas/enemy3");
            this.node.setScale(0.45,0.45);
         }
         
         if (window.matchMedia("(orientation: landscape)").matches) {
            console.log("màn hình ngang");
            //this.node = cc.find("Canvas/Ship");
            //this.node.setPosition(cc.v2(0,0));
             this.node = cc.find("Canvas/playfreebutton");
             console.log(this.node.getPosition().x);
             
             if (this.node.getPosition().x!= -485.972) {
                this.node = cc.find("Canvas/Ship");
                 this.node.setScale(1.3, 1.3);
                 this.node.setPosition(cc.v2(35.129, -193.457));
                 console.log("set lai vi tri");
                 
             }
            //  if () {
            //      console.log("duoc duoc");
                 
            //  }
             this.node = cc.find("Canvas/playfreebutton");
             this.node.setPosition(cc.v2(-485.972, -270.216));
             this.node.setScale(0.9, 0.9);
             this.node = cc.find("Canvas/IconGame");
             this.node.setPosition(cc.v2(547.187, -250));
             this.node.setScale(0.7, 0.7);
             
             this.node = cc.find("Canvas/playfreebutton");
             console.log(this.node.getPosition());
             this.node = cc.find("Canvas/image");
             if (this.node.active==true) {
               
                 this.node.setPosition(cc.v2(25, -71));
             } 
           
            
             this.node = cc.find("Canvas/popup");
             this.node.setPosition(cc.v2(11,14));
             this.node = cc.find("popup");
             //this.node.setPosition(cc.v2(11, 14));
             //this.node.setScale(1, 1);
                // this.node = cc.find("Canvas/Ship");
                // this.node.setPosition(cc.v2(27.404, -174.857));
                // this.node.setScale(1.3, 1.3);  
                // this.node = cc.find("Canvas/Ship");
                // this.node.setPosition(cc.v2(27.404, -817.038));
                // this.node.setScale(1.3, 1.3);  
             
             
         }
    }
}
