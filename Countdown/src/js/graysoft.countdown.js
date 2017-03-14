/* eslint linebreak-style: ["error", "windows"] */
/**
 * Countdown class.
 * @class Countdown
 */
class Countdown {
    /**
     * Creates an instance of Countdown.
     * @param {Date} countDate
     * @memberOf Countdown
     */
    constructor(countDate) {
        // Property countDate is a Date.
        this.countDate = new Date(countDate);
    }
    /**
     * Calculator time method.
     * @memberOf Countdown
     */
    calcTime() {
        // Get now time.
        let _nowTime = new Date().getTime();
        // Calculator milliseconds.
        let _milliSeconds = this.countDate.getTime() - _nowTime;
        // Calculator times.
        this._seconds = _milliSeconds / 1000;
        this._minutes = this._seconds / 60;
        this._hours = this._minutes / 60;
        this._days = this._hours / 24;
    }
    /**
     * Remainder time method.
     * @param {number} time
     * @param {number} remainder
     * @return {number} Result of a time remainder
     * @memberOf Countdown
     */
    timeRemainder(time, remainder) {
        return time % remainder;
    }
    /**
     * Math.floor() time.
     * @param {number} time
     * @return {number}
     * @memberOf Countdown
     */
    timeFloor(time) {
        // Math.floor time.
        return Math.floor(time);
    }
    /**
     * Start countdown time.
     * @memberOf Countdown
     */
    start() {
        // Call method calcTime().
        this.calcTime();
        // Format times.
        let _second = this.timeFloor(this.timeRemainder(this._seconds, 60));
        let _minute = this.timeFloor(this.timeRemainder(this._minutes, 60));
        let _hour = this.timeFloor(this.timeRemainder(this._hours, 24));
        let _day = this.timeFloor(this._days);
        // JQuery
        $('#second').html(_second);
        $('#minute').html(_minute);
        $('#hour').html(_hour);
        $('#day').html(_day);
        // Set timeout 1 second, I dont know how to use arrow functions,
        // need to learn.
        setTimeout(() => this.start(), 1000);
    }
}
// new a class.
let countdown = new Countdown('01/01/2018');
// window.onload
window.onload = countdown.start.bind(countdown);
