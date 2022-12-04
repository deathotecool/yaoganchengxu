sensors.rockerPin(AnalogPin.P0, AnalogPin.P1, DigitalPin.P2)
basic.forever(function () {
    if (0 < pins.analogReadPin(AnalogPin.P0) && pins.analogReadPin(AnalogPin.P0) < 200) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (200 < pins.analogReadPin(AnalogPin.P0) && pins.analogReadPin(AnalogPin.P0) < 400) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (400 < pins.analogReadPin(AnalogPin.P0) && pins.analogReadPin(AnalogPin.P0) < 600) {
        basic.showIcon(IconNames.Heart)
    }
    if (600 < pins.analogReadPin(AnalogPin.P0) && pins.analogReadPin(AnalogPin.P0) < 800) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    if (800 < pins.analogReadPin(AnalogPin.P0) && pins.analogReadPin(AnalogPin.P0) < 1000) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
