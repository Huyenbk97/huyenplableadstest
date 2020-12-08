import BossMove from "./BossMove";
import GameController from "./GameController";
import InitBossController from "./InitBossController";
import PopupWindow from "./PopupWindow";
import GameUIcontroller from "./GameUIcontroller";
const {ccclass, property} = cc._decorator;
@ccclass
export default class Bad extends cc.Component {
  @property
  enemyLife:number =2;
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
  shield :cc.Node=null;
 onCollisionEnter(other,self){
   console.log(other.name+self.name);
   other.node.destroy();
   self.node.destroy();
   GameController.Instance.decreaseEnemy();
   cc.audioEngine.playEffect(this.explosion,false);       
   this.explosionRun(); 
        if(other.name == "Bullets<CircleCollider>" && self.name == "enemy2<BoxCollider>"){
          this.enemyLife-= 1;
          this.enemyNumber -= 1;
         
          console.log(this.enemyNumber);
                  if((this.enemyLife==0)){    
                    this.explosionRun();              
                    this.node.destroy(); 
                   
                     cc.audioEngine.playEffect(this.explosion,false);                 
                    // var anim = this.getComponent(cc.Animation); 
                    //
                  }
                
      }
      if(other.name == "Bullets<CircleCollider>" && self.name == "enemy<BoxCollider>"){
        this.enemyLife-= 1;
        this.enemyNumber -= 1;
        
        console.log(this.enemyNumber);
        console.log("CHAY DUOC" );
                  if((this.enemyLife==0)){
                    //GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                    this.explosionRun();
                    this.enemyNumber -= 1;
                    this.node.destroy();
                    //this.spawShield();
                  console.log("CHAY DUOC" );
                  
                  }
      }     
      if(other.name == "Bullets<CircleCollider>" && self.name == "enemy3<PolygonCollider>"){
        this.enemyLife-= 1;
        this.enemyNumber-= 1;
        console.log(this.enemyNumber);
        
                    if((this.enemyLife==0)){
                    
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    this.node.destroy();
                   // this.spawShield();
                 
                  }
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
    die(){
      ///
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
