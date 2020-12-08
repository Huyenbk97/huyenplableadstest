import bullet from "./Bullet";

const {ccclass, property} = cc._decorator;
@ccclass
export default class Ship extends cc.Component {
    static Instance: Ship = null;
    // @property(cc.Node)
    // initBulletPosition: cc.Node = null;
    // @property(cc.Node)
    // initBulletPosition1: cc.Node = null;
    @property(cc.Node)
    ship: cc.Node = null;
    @property(cc.Node)
    popup: cc.Node = null;
    @property(cc.Prefab)
    shield: cc.Prefab = null;
    
    // @property(cc.Node)
    // initBulletPosition2:cc.Node=null;
    // @property()
    @property(cc.Prefab)
    shipBullet: cc.Node = null;
    @property
    bulletPool: number = 0;
    @property
    bullet1:number=1;
    @property
    bullet2: boolean = false;
    @property(cc.Prefab)
    shipBullet1: cc.Node = null;
    @property(cc.Prefab)
    shipBullet2: cc.Node = null;
    @property(cc.Prefab)
    shipBullet3: cc.Node = null;
    @property(cc.Prefab)
    shipBullet4: cc.Node = null;
    @property(cc.Prefab)
    shipBullet5: cc.Node = null;
    @property(cc.Prefab)
    shipBullet6: cc.Node = null;
    @property(cc.Prefab)
    shipBullet7: cc.Node = null;
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
      Ship.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        if (this.popup.active==false) {
            this.bulletTime = 0;
            this.ship.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                this.bulletPool = new cc.NodePool();
                this.Ship.getComponent(cc.Animation).play();
              }, this);
           
            //this.node.parent.on('touchmove',this.startShotting,this);
        }
        console.log(this.bullet1);
          
    }
    start () {
    }
   
    spawShield1() {
        console.log("spawShieldShip11111");
        this.bullet1 += 1
        console.log("so dan"+this.bullet1);
        
    }
    createBullet() {
        if (this.popup.active==false&&this.bullet1==1 ) {
 
        // ////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node

            bullet = cc.instantiate(this.shipBullet2);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x, pos.y + this.ship.height / 2 + 20))
            ///////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
    
               bullet = cc.instantiate(this.shipBullet1);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x+20,pos.y+this.ship.height/2+20))
    //////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
            bullet = cc.instantiate(this.shipBullet3);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x - 20, pos.y + this.ship.height / 2 + 20))
        //        let bullet = null;
        // if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
        // bullet = this.bulletPool.get();
        // } else { // if not enough node in the pool, we call cc.instantiate to create node
        //    bullet = cc.instantiate(this.shipBullet);
        // }
        // bullet.parent = this.node;
        // var pos = this.ship.getPosition();
        // bullet.setPosition(cc.v2(pos.x-7,pos.y+this.ship.height/2-10))
            cc.audioEngine.playEffect(this.shoot ,false);
           
        } else {
    if (this.popup.active==false&&this.bullet1==2) {                                    
            cc.audioEngine.playEffect(this.shoot ,false);
    // ////
    let bullet = null;
    if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
    bullet = this.bulletPool.get();
    } else { // if not enough node in the pool, we call cc.instantiate to create node

    bullet = cc.instantiate(this.shipBullet4);
    }
    bullet.parent = this.node;
    var pos = this.ship.getPosition();
        bullet.setPosition(cc.v2(pos.x-10, pos.y + this.ship.height / 2 + 20))
        /////
        let bullet = null;
        if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
        bullet = this.bulletPool.get();
        } else { // if not enough node in the pool, we call cc.instantiate to create node
    
        bullet = cc.instantiate(this.shipBullet5);
        }
        bullet.parent = this.node;
        var pos = this.ship.getPosition();
        bullet.setPosition(cc.v2(pos.x+10, pos.y + this.ship.height / 2 + 20))
    let bullet = null;
    if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
    bullet = this.bulletPool.get();
    } else { // if not enough node in the pool, we call cc.instantiate to create node

    bullet = cc.instantiate(this.shipBullet2);
    }
    bullet.parent = this.node;
    var pos = this.ship.getPosition();
    bullet.setPosition(cc.v2(pos.x, pos.y + this.ship.height / 2 + 20))
    ///////
    let bullet = null;
    if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
    bullet = this.bulletPool.get();
    } else { // if not enough node in the pool, we call cc.instantiate to create node

       bullet = cc.instantiate(this.shipBullet1);
    }
    bullet.parent = this.node;
    var pos = this.ship.getPosition();
    bullet.setPosition(cc.v2(pos.x+20,pos.y+this.ship.height/2+20))
//////
    let bullet = null;
    if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
    bullet = this.bulletPool.get();
    } else { // if not enough node in the pool, we call cc.instantiate to create node
    bullet = cc.instantiate(this.shipBullet3);
    }
    bullet.parent = this.node;
    var pos = this.ship.getPosition();
    bullet.setPosition(cc.v2(pos.x - 20, pos.y + this.ship.height / 2 + 20))
//        let bullet = null;
// if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
// bullet = this.bulletPool.get();
// } else { // if not enough node in the pool, we call cc.instantiate to create node
//    bullet = cc.instantiate(this.shipBullet);
// }
// bullet.parent = this.node;
// var pos = this.ship.getPosition();
// bullet.setPosition(cc.v2(pos.x-7,pos.y+this.ship.height/2-10))
    cc.audioEngine.playEffect(this.shoot ,false);
        
    
    }
        if (this.popup.active==false&&this.bullet1==3) {
            cc.audioEngine.playEffect(this.shoot, false);
            //////////////////////////////////////////////////// 
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
        
            bullet = cc.instantiate(this.shipBullet6);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x - 5, pos.y + this.ship.height / 2 + 20)) 
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
        
            bullet = cc.instantiate(this.shipBullet7);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
                bullet.setPosition(cc.v2(pos.x+5, pos.y + this.ship.height / 2 + 20)) 
            ///////////////////////////////////////////////////
            // ////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
        
            bullet = cc.instantiate(this.shipBullet4);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
                bullet.setPosition(cc.v2(pos.x-10, pos.y + this.ship.height / 2 + 20))
                /////
                let bullet = null;
                if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
                bullet = this.bulletPool.get();
                } else { // if not enough node in the pool, we call cc.instantiate to create node
            
                bullet = cc.instantiate(this.shipBullet5);
                }
                bullet.parent = this.node;
                var pos = this.ship.getPosition();
                bullet.setPosition(cc.v2(pos.x+10, pos.y + this.ship.height / 2 + 20))
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
        
            bullet = cc.instantiate(this.shipBullet2);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x, pos.y + this.ship.height / 2 + 20))
            ///////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
        
               bullet = cc.instantiate(this.shipBullet1);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x+20,pos.y+this.ship.height/2+20))
        //////
            let bullet = null;
            if (this.bulletPool.size() > 0) { // use size method to check if there're nodes available in the pool
            bullet = this.bulletPool.get();
            } else { // if not enough node in the pool, we call cc.instantiate to create node
            bullet = cc.instantiate(this.shipBullet3);
            }
            bullet.parent = this.node;
            var pos = this.ship.getPosition();
            bullet.setPosition(cc.v2(pos.x - 20, pos.y + this.ship.height / 2 + 20))
        }  
        cc.audioEngine.stop(this.shoot);  
        } 
    }
    
    onKill() {
        this.bulletPool.put(bullet);
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
        this.schedule(this.createBullet,0.18,cc.macro.REPEAT_FOREVER,0);
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
     stopShoot(){
        cc.audioEngine.stopAll();
        this.ship.stopAllActions();
        this.shipBullet.stopAllActions();
     }
}