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
    posY:number = 0;
    score:number = 0;
    BulletSpeed:number = 500;
    angle:number =0;
   
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    spawn(event){
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.getChildByName('Bullets').position.x,this.node.getChildByName('Bullets').position.y);
        this.node.addChild(newBullet);
        console.log(newBullet);
        var touchPosition = event.getLocation();
        touchPosition = this.node.convertToNodeSpaceAR(touchPosition);
        this.posX =touchPosition.x*1000;
        this.posY = touchPosition.y*1000;
       
        var actionBy = cc.moveTo(0.5,cc.v2(this.posX,this.posY));
        var destruction = cc.callFunc(function(){
            newBullet.destroy();
        },this);
        var sequence = cc.sequence(actionBy,destruction);
        newBullet.runAction(sequence);
        cc.audioEngine.playEffect(this.gun,false);
    }
    start () {

    }
   onLoad(){
    this.node.on('touchmove',this.spawn,this);
    this.node.on('touchstart',this.spawn,this);
    this.node.stopAllActions();
   }
     update (dt) {
        //this.node.setPosition(this.node.position.x = this.BulletSpeed*dt,this.node.position.y  = this.BulletSpeed*dt);
        
    }
}
