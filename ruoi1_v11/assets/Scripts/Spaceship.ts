const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
    //bullet 
    @property(cc.Prefab)
    greenBullet:cc.Prefab = null;
    @property(
        {
            type:cc.AudioClip
        }
    )
    gun2 = null;
    @property 
        speed: 0;
        resetX: 0;
        @property
        BulletSpeed:number = 500;
        angle:0;
    shootBullets(x,y,angle){
        var bullet =cc.instantiate(this.greenBullet);     
        bullet.setPosition(this.node.position.x,this.node.position.y);
        this.node.parent.addChild(bullet);
        cc.audioEngine.playEffect(this.gun2,false);
        bullet.setRotation(angle);
        console.log(angle);
    }
    onLoad(){
        
        // this.node.on('touchmove',function(event){
        //     var delta =event.touch.getDelta();
        //     this.x +=delta.x;
        //     this.y +=delta.y;      
        // },this.node);
        this.schedule(this.shootBullets,0.2,cc.macro.REPEAT_FOREVER,0);
        console.log("ban dan");
    }
    start () {

    }   
    update (dt) {
        this.node.setPosition(this.node.position.x,this.node.position.y  = this.BulletSpeed*dt);
       
       }
}
