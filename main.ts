input.onButtonPressed(Button.A, function () {
    if (Led == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        Led = 1
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        Led = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    number = randint(0, 3)
    basic.showNumber(number)
    if (number == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (number == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (number == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (number == 3) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
let number = 0
let Led = 0
led.enable(false)
pins.digitalWritePin(DigitalPin.P3, 0)
Led = 0
