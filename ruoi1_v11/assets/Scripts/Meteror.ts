// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
       type:cc.SpriteFrame
      })
     meteorSprite= null;
    // LIFE-CYCLE CALLBACKS:
    meteorSpawnMinX: 0;
    meteorSpawnMaxX: 0;
    meteorSpawnMinY: 0;
    meteorSpawnMaxY: 0;
    meteorMinVelocity: 0;
    meteorMaxVelocity: 0;
     onLoad () {
     
     }
     createMetetor(){
         const x=Math.random()*(this.meteorSpawnMaxX-this.meteorSpawnMinX)+this.meteorSpawnMinX;
         const y=Math.random()*(this.meteorSpawnMaxY-this.meteorSpawnMinY)+this.meteorSpawnMinY;
          console.log(x+"aa "+y);
          const angle= 90+25+ Math.random()*20;
         console.log(angle);
         const velocity = Math.random()*(this.meteorMaxVelocity-this.meteorMinVelocity, this.meteorMinVelocity);
         
     }
    start () {

    }

    // update (dt) {}
}
