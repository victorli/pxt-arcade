namespace config {
    export const PIN_A0 = DAL.P0_4;
    export const PIN_A1 = DAL.P0_5;
    export const PIN_A2 = DAL.P0_30;
    export const PIN_A3 = DAL.P0_28;
    export const PIN_A4 = DAL.P0_2;
    export const PIN_A5 = DAL.P0_3;

    export const PIN_D2 = DAL.P0_10;
    export const PIN_D5 = DAL.P1_8;
    export const PIN_D6 = DAL.P0_7;
    export const PIN_D9 = DAL.P0_26;
    export const PIN_D10 = DAL.P0_27;
    export const PIN_D11 = DAL.P0_6;
    export const PIN_D12 = DAL.P0_8;
    export const PIN_D13 = DAL.P1_9;

    export const PIN_LED = DAL.P1_15;
    export const PIN_LED2 = DAL.P1_10;

    export const PIN_MISO = DAL.P0_15;
    export const PIN_MOSI = DAL.P0_13;
    export const PIN_SCK = DAL.P0_14;

    export const PIN_TX = DAL.P0_25;
    export const PIN_RX = DAL.P0_24;

    export const PIN_SCL = DAL.P0_11;
    export const PIN_SDA = DAL.P0_12;

    export const PIN_NEOPIXEL = DAL.P0_16;
    export const NUM_NEOPIXELS = 1;

    export const PIN_BTN_LEFT = PIN_RX
    export const PIN_BTN_RIGHT = PIN_A0
    export const PIN_BTN_UP = PIN_A1
    export const PIN_BTN_DOWN = PIN_D2
    export const PIN_BTN_A = PIN_TX
    export const PIN_BTN_B = PIN_A2

    export const PIN_BTN_MENU = DAL.P1_2; // on board

    export const PIN_DISPLAY_SCK = PIN_SCK // yellow
    export const PIN_DISPLAY_MOSI = PIN_MOSI // green
    export const PIN_DISPLAY_RST = PIN_A3 // purple
    export const PIN_DISPLAY_DC = PIN_A4 // blue
    export const PIN_DISPLAY_CS = PIN_A5 // orange

    export const DISPLAY_WIDTH = 160
    export const DISPLAY_HEIGHT = 128

    export const DISPLAY_CFG0 = 0x01000080
    export const DISPLAY_CFG1 = 0x00000603

    //export const DISPLAY_CFG0 = 0x00000080
    //export const DISPLAY_CFG1 = 0x00000603

    //export const DISPLAY_CFG0 = 0x00000090
    //export const DISPLAY_CFG1 = 0x000e14ff
}
