basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # #
        . . . # #
        # # # # #
        . . . . .
        . # # . .
        `)
    led.plot(0, 0)
    basic.pause(100)
    if (0 == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})
