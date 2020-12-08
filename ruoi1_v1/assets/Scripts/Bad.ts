import BossMove from "./BossMove";
import GameController from "./GameController";
import InitBossController from "./InitBossController";
import PopupWindow from "./PopupWindow";
import GameUIcontroller from "./GameUIcontroller";
import Ship from "./Ship";
const {ccclass, property} = cc._decorator;
@ccclass
export default class Bad extends cc.Component {
  static Instance: Bad = null;
  @property
  enemyLife:number =10;
  @property
  enemyNumber:number =46;
  action: cc.ActionInterval;
  @property({
    type:cc.AudioClip
  })
  @property({
    type:cc.AudioClip
  })
  explosion =null;
  @property(cc.Prefab)
  fire: cc.Node = null;
  @property(cc.Prefab)
  shield :cc.Prefab=null;
 onCollisionEnter(other,self){
        if(other.name == "Bullets<CircleCollider>" && self.name == "enemy2<BoxCollider>"){
          this.enemyLife-= 1;
          other.node.destroy();
          if((this.enemyLife==0)){    
            this.explosionRun();              
            this.node.destroy();
            this.enemyNumber-= 1;       
           self.node.destroy();
              GameController.Instance.decreaseEnemy();
          cc.audioEngine.playEffect(this.explosion,false);
              cc.audioEngine.playEffect(this.explosion,false);                 
                    // var anim = this.getComponent(cc.Animation); 
                    //
                  }
                
      }
      if(other.name == "Bullets<CircleCollider>" && self.name == "enemy<BoxCollider>"){
        this.enemyLife-= 1;
        other.node.destroy();
        console.log(this.enemyNumber);
        console.log("CHAY DUOC" );
                  if((this.enemyLife==0)){
                    this.explosionRun(); 
                    this.enemyNumber-= 1;             
                    this.node.destroy();       
                   self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                      this.spawShield();
                   cc.audioEngine.playEffect(this.explosion,false);
                      cc.audioEngine.playEffect(this.explosion,false);
                  
                  }
      }     
      if(other.name == "Bullets<CircleCollider>" && self.name == "enemy3<BoxCollider>"){
        this.enemyLife-= 1;
       
        other.node.destroy();
                    if((this.enemyLife==0)){
                      this.explosionRun();
                      this.enemyNumber-= 1;
                      GameController.Instance.decreaseEnemy();            
                      this.node.destroy();       
                     self.node.destroy();
                     this.spawShield();
                       
                       cc.audioEngine.playEffect(this.explosion,false);
                        cc.audioEngine.playEffect(this.explosion,false);
                  }
   }
   console.log(other.name+self.name);
   if (other.name == "Ship<CircleCollider>" && self.name=="shield<CircleCollider>") {
    self.node.destroy();    
     Ship.Instance.spawShield1();
    }
     
   
   
  //  if (this.enemyNumber == 0) {
  //   this.showRevivePopup();
  //  }
  }
  //tao item shield
  spawShield() {
    var shield = this.node.getPosition();
    var shieldRun = cc.instantiate(this.shield);
    this.node.parent.addChild(shieldRun);
    shieldRun.setPosition(this.node.position.x, this.node.position.y); 
}
    // tao vu no 
    explosionRun(){
      var explosion =this.node.getPosition();
      // console.log(explosion);
      var explosionRun = cc.instantiate(this.fire);
      this.node.parent.addChild(explosionRun);
      explosionRun.setPosition(this.node.position.x,this.node.position.y);
      var animation =explosionRun.getComponent(cc.Animation);
      animation.on('finished',this.onFinished, explosionRun);
    }
  //  spawnBigGuy(){
  //   var newBoss = cc.instantiate(this.bigguy);
  //   newBoss.setPosition(this.node.getChildByName('bigguy').position.x,this.node.getChildByName('bigguy').position.y); 
  //   this.node.addChild(newBoss);
  //  } 
      onLoad () {
          var manager = cc.director.getCollisionManager();
          manager.enabled = true;
         
      }
    //   spawn(even){
    //     var moveRight= cc.moveBy(2, 0, -200);
    //     this.node.runAction(moveRight);
    //  }
    start () {
  
    }

   
  // showRevivePopup() {
  //   GameController.Instance.showPopup();
  //   };
    
  // removeEx() {
  //   this.node.destroy();
  //   // GameController.Instance.spawnShips();
  //   this.node.parent.getComponent('Game').spawnShips();
  //  }
    // update (dt) {}
 
}
