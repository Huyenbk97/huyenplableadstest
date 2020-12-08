import bullet from "./Bullet";
import GameUIcontroller from "./GameUIcontroller";
const { ccclass, property } = cc._decorator;
import Gamecontroller from "./Gamecontroller";
@ccclass
export default class Ship extends cc.Component {
    static Instance: Ship = null;
    // @property(cc.Node)
    // initBulletPosition: cc.Node = null;
    // @property(cc.Node)
    // initBulletPosition1: cc.Node = null;
    @property(cc.Node)
    ship: cc.Node = null;
 
    // @property(cc.Node)
    // initBulletPosition2:cc.Node=null;
    // @property()
    @property(cc.Prefab)
    shipBullet: cc.Node = null;
    @property(cc.NodePool)
    bulletPool: cc.NodePool = null;
    @property(cc.Node)
    popup: cc.Node = null;
    @property({
        type:cc.AudioClip
    })
    shoot:null;
  
    @property({
        type:cc.AudioClip
    })
    backgroundSound=null;
    @property(cc.Node)
    bulletParent:cc.Node=null;
    fireRate:number=1;
isGamestart:boolean=false;
    positionXY(event){
        // //lay toa do xy tim ra goc xoay
        // var playerPosition =cc.v2(this.node.position.x,this.node.position.y);
        // var touchPosition=event.getLocation();
        // touchPosition=this.node.parent.convertToNodeSpaceAR( touchPosition);
        // // console.log(mousePosition); 
        // var angle= touchPosition.signAngle(playerPosition);
        // // console.log(angle);
        // var angleD=cc.misc.radiansToDegrees(angle);
        // angleD=(angleD* -1)-180;
        // this.node.angle=angleD;
    }
    onLoad() {
        this.bulletTime = 0;
        this.ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.bulletPool = new cc.NodePool();
            this.check();
          }, this);
       
        this.node.parent.on('touchmove',this.startShotting,this);
        cc.audioEngine.playEffect(this.backgroundSound, false); 
       
    }
    start () {
    }
    check() {
        if (this.popup.active==false) {
            this.scheduleOnce(function() {
                // Here `this` is referring to the component
                GameUIcontroller.Instance.showBanner();
            }, 12); 
            Gamecontroller.Instance.Cavas();
        }
    }
    createBullet() {
        if (this.popup.active == false) {    
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
                bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
                bullet = cc.instantiate(this.shipBullet);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x, pos.y + this.ship.height - 30))
            cc.audioEngine.playEffect(this.shoot, false);
        }
    }
    onKill() {
        this.bullerPool.put(bullet);
    }
    InitBullet(){
        // var bullet = cc.instantiate(this.shipBullet);
        // //bullet.setPosition(this.initBulletPosition.position);
        // //this.node.parent.addChild(bullet);
        // bullet.parent = this.node;
        // var pos = this.initBulletPosition.getPosition();
        // bullet.setPosition(cc.v2(pos.x,pos.y+this.initBulletPosition.height/2))
        // cc.audioEngine.playEffect(this.shoot, false);
        // // var bullet1 = cc.instantiate(this.shipBullet);
        // // bullet1.setPosition(this.initBulletPosition1.position);
        // // bullet1.parent = this.bulletParent;
        // // var bullet1 = cc.instantiate(this.shipBullet);
        // // bullet1.setPosition(this.initBulletPosition2.position);
        // // bullet1.parent = this.bulletParent; 
        // cc.audioEngine.setVolume(this.shoot, 0.5);
        // cc.audioEngine.playEffect(this.shoot,false); 
    }   
    startShotting(){
        // var self=this;
        // this.schedule(function(){
        //     self.shotting();
        // },this.fireRate);
        this.schedule(this.InitBullet,0.1,cc.macro.REPEAT_FOREVER,0);
    }

    shotting(){
        this.InitBullet();
    }
    update(dt) {
        this.bulletTime++
         if (this.bulletTime==8) {
             this.bulletTime = 0;
             this.createBullet();
         }
         
     }
}
