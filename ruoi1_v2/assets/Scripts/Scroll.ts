const { ccclass, property } = cc._decorator;

@ccclass
export default class Scroll extends cc.Component {


    // onLoad () {}
    @property(cc.Node)
    background_1: cc.Node = null;
    @property(cc.Node)
    background_2: cc.Node = null;
    @property
    speed: number = 200;
    initPosition: cc.Vec2 = null;
    start() {
        var screen = cc.find("Canvas");

        // this.initPosition = this.background_2.getPosition();
        this.initPosition = cc.v2(screen.getContentSize().width,0);
        console.log(screen.getContentSize().width);
        this.background_2.setPosition( this.initPosition);
    }
    update(dt) {
        this.background_1.x -= this.speed * dt;
        this.background_2.x -= this.speed * dt;
        if (this.background_1.getPosition().x <= -this.background_1.getContentSize().width) {
            this.background_1.setPosition(this.initPosition);
            
            this.background_2.setPosition(0, 0);
        }

        if (this.background_2.getPosition().x <= -this.background_2.getContentSize().width) {
            this.background_2.setPosition(this.initPosition);
            this.background_1.setPosition(0, 0);
        }

    }
}
