// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bullet extends cc.Component {


    @property
    BulletSpeed:number = 500;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    spawn(event){

    }
    start () {

    }
     onLoad(){
        this.node.on('touchmove',this.spawn,this);
        var manager= cc.director.getCollisionManager();
        manager.enabled=true;
        
     }
     onCollisionEnter(otherCollider,selfCollider){
      console.log(otherCollider.name);
      console.log(selfCollider.name);
      
   }
     update (dt) {
      // this.node.setPosition(this.node.position.x,this.node.position.y  = this.BulletSpeed*dt);
     
     }
}
