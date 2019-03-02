const { ccclass, property } = cc._decorator;

@ccclass
export default class LongTouchTestScene extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: "用于演示长按动画效果的节点"
    })
    longTouchBtnNode: cc.Node = null;

    @property({
        type: cc.Label,
        tooltip: "用于在界面上反馈长按回调次数"
    })
    longTouchCallBackLabel: cc.Label = null;

    /**
     * 播放长按效果
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    playTouchAnim() {
        this.longTouchBtnNode.runAction(cc.sequence(cc.scaleTo(0.055, 0.92), cc.scaleTo(0.055, 1).easing(cc.easeCircleActionOut())));
    }

    /**
     * 处理长按逻辑
     *
     * @param touchCounter 本次长按触摸次数
     * @param customEventData 在属性检查器中传入进来的 CustomEventData
     */
    handleToucheLogic(touchCounter: number, customEventData?: any) {
        this.longTouchCallBackLabel.string = `本次长按，回调了 ${touchCounter} 次`;
        console.log(`界面就不演示输出 CustomEventData了`);
        console.log(customEventData);
    }
}
