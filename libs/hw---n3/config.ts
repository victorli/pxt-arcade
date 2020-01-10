namespace config {

    export const PIN_BTN_A = DAL.P0_14
    export const PIN_BTN_B = DAL.P0_23

    export const PIN_BTN_MENU = DAL.P0_3

    export const PIN_BTN_RIGHT = DAL.P0_9
    export const PIN_BTN_LEFT = DAL.P0_10
    export const PIN_BTN_UP = DAL.P0_26
    export const PIN_BTN_DOWN = DAL.P1_0

    export const PIN_DISPLAY_SCK = DAL.P0_17 // yellow
    export const PIN_DISPLAY_MOSI = DAL.P0_13 // green
    export const PIN_DISPLAY_RST = DAL.P1_2 // purple
    export const PIN_DISPLAY_DC = DAL.P0_1 // blue
    export const PIN_DISPLAY_BL = DAL.P0_12
    // export const PIN_DISPLAY_CS =  // orange -> GND
 
    export const DISPLAY_WIDTH = 160
    export const DISPLAY_HEIGHT = 128

    export const DISPLAY_CFG0 = 0x00000080
    export const DISPLAY_CFG1 = 0x00000603
    export const DISPLAY_CFG2 = 32

    //export const DISPLAY_CFG0 = 0x00000080
    //export const DISPLAY_CFG1 = 0x00000603

    //export const DISPLAY_CFG0 = 0x00000088
    //export const DISPLAY_CFG1 = 0x000e14ff
}
