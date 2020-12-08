const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
 @property(cc.Node)
    initBulletPosition2:cc.Node=null;
    onLoad () {
         var moveEnemy= node.getComponent(cc.Graphics);
        // moveEnemy.moveTo(20,20);
         moveEnemy.bezierCurveTo(20,100,200,100,200,20);
        // moveEnemy.stroke ();
        var moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        this.node.runAction(moveEnemy);
    }

    
    start () {

    }

    update (dt) {
    
        }
    }
