//Boarder class represents the boundary that bodies can move around
import { Element } from './element.js';
export default class Boarder extends Element {
    constructor(x, y, w, h, id) {
        let options = {
            isStatic: true,
            restitution: 0.7,
            label: 'boarder' //Element type
        };
        super(x, y, w, 'boarder', id, options, h);
    }
    ;
}
