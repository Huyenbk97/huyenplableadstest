// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    bullet:cc.Prefab = null;  
    @property({
        type:cc.AudioClip
    })
    gun=null;
    // LIFE-CYCLE CALLBACKS:
    @property
    posX:number = 0;
    posY:number = 100;
    score:number = 0;0
    BulletSpeed:number = 500;
    angle:number =0;
    dt:number=100;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    spawn(event){
        // var newBullet = cc.instantiate(this.bullet);
        // newBullet.setPosition(this.node.getChildByName('Ship').position.x,this.node.getChildByName('Ship').position.y); 
        // this.node.addChild(newBullet);   
        // var touchPosition = event.getLocation();
        // touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        // this.posX =touchPosition.x;
        // this.posY = touchPosition.y;      
        // var actionBy = cc.moveTo(2,cc.v2(this.posX*10,this.posY*10));
        // var destruction = cc.callFunc(function(){
        //     newBullet.destroy();
        // },this);
        // var sequence = cc.sequence(actionBy,destruction);
        // newBullet.runAction(sequence);
        // cc.audioEngine.playEffect(this.gun,false);
        // //
  
    }
    start () {
    }
   onLoad(){
    this.node.on('touchmove',this.spawn,this);
    this.node.on('touchstart',this.spawn,this);
   
   }
     update (dt) {
        //this.node.setPosition(this.node.position.x = this.BulletSpeed*dt,this.node.position.y  = this.BulletSpeed*dt);
        
    }
}
