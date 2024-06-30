basic.showLeds(`
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . #
    `)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(25, 25)
        cuteBot.closeheadlights()
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 25)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(25, 10)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
    }
})
