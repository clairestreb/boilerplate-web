(function (w) {
    /**
     * quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     * @class
     * @name u2.Car
     */
    w.u2.Car = function () {
    };

    w.u2.Car.prototype = /** @lends u2.Car.prototype */{
        /**
         * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         */
        testMethod: function () {
        },

        testMethodUnNotated: function () {
        },

        testEvent: function () {
            /**
             * tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             * @name u2.Car#testEvent
             * @event
             * @param {Event} e
             */
            test.trigger();
        }
    };
})(window);
