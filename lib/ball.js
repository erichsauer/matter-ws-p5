//Ball class
import Matter from 'matter-js';
import { Element } from './element.js';
export default class Ball extends Element {
    constructor(x, y, id) {
        let r = 20 * Math.random(); //Random radious
        let options = {
            friction: 0,
            restitution: 0.7,
            frictionAir: 0,
            label: 'ball' //Element type
        };
        super(x, y, r, 'ball', id, options);
        //Set initial velocity and angle of ball
        const vel = Ball.getNewVelocity();
        Matter.Body.setVelocity(this._body, vel.velocity);
        Matter.Body.setAngle(this._body, vel.angle);
    }
    /*
     * Generate a random velocity for ball
     */
    static getNewVelocity() {
        let x = Math.random() * 2 - 1; //Adjust to have +/- values
        let y = Math.random() * 2 - 1;
        let velocity = { x, y }; //Velocity
        let angle = Math.atan(y / x); //Set angle of body towards its heading
        return { velocity, angle };
    }
}
;
