import BossMove from "./BossMove";
import GameController from "./GameController";
import InitBossController from "./InitBossController";
import PopupWindow from "./PopupWindow";
import GameUIcontroller from "./GameUIcontroller";
import Ship from "./Ship"
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
       
   if (other.name == "Bulletv1<CircleCollider>" && self.name == "enemy<BoxCollider>") {  
    other.node.destroy(); 
          this.enemyLife-= 1;
          console.log(this.enemyNumber);
          if ((this.enemyLife == 0)) { 
                   self.node.destroy();                
                    this.explosionRun();              
                    GameController.Instance.decreaseEnemy();
                     cc.audioEngine.playEffect(this.explosion,false);                 
                    // var anim = this.getComponent(cc.Animation); 
                    //
                    this.spawShield() 
                  }
                
      }
   if (other.name == "Bulletv2<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
                  self.node.destroy();
                    GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                    this.explosionRun();
                  
                   
                    this.spawShield();
                  console.log("CHAY DUOC" );
                  
                  }
      }     
   if (other.name == "Bulletv3<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        console.log(this.enemyNumber);
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
          self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    
                    this.spawShield();
                 
                  }
   }
   if (other.name == "Bulletv4<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        console.log(this.enemyNumber);
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
          self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    
                    this.spawShield();
                 
                  }
   }
   if (other.name == "Bulletv5<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        console.log(this.enemyNumber);
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
          self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    
                    this.spawShield();
                 
                  }
   }
   if (other.name == "Bulletv6<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        console.log(this.enemyNumber);
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
          self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    
                    this.spawShield();
                 
                  }
   }
   if (other.name == "Bulletv7<CircleCollider>" && self.name == "enemy<BoxCollider>") {
    other.node.destroy(); 
        console.log(this.enemyNumber);
        this.enemyLife-= 1;
        if ((this.enemyLife == 0)) {
          self.node.destroy();
                      GameController.Instance.decreaseEnemy();
                   cc.audioEngine.playEffect(this.explosion,false);
                  //  var explosion =this.node.getPosition();
                  // console.log(explosion);
                  this.explosionRun();
                    
                    this.spawShield();
                 
                  }
   }
   if (other.name=="Ship<BoxCollider>"&& self.name == "shield<CircleCollider>") {
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
