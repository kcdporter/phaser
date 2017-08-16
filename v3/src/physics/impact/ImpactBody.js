
var Class = require('../../utils/Class');
var Components = require('./Components');

var ImpactBody = new Class({

    Mixins: [
        Components.Acceleration,
        Components.BodyType,
        Components.Bounce,
        Components.CheckAgainst,
        Components.Collides,
        Components.Debug,
        Components.Gravity,
        Components.Offset,
        Components.Velocity
    ],

    initialize:

    //  x/y is the top-left of the Body
    function ImpactBody (world, x, y, width, height)
    {
        this.body = world.create(x, y, width, height);

        //  Local references to the Body properties
        this.size = this.body.size;
        this.offset = this.body.offset;
        this.vel = this.body.vel;
        this.accel = this.body.accel;
        this.friction = this.body.friction;
        this.maxVel = this.body.maxVel;
    }

});

module.exports = ImpactBody;
