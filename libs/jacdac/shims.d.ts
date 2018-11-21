// Auto-generated. Do not edit.
declare namespace jacdac {

    /**
     * Starts the JacDac protocol
     */
    //% shim=jacdac::start
    function start(): void;

    /**
     * Starts the JacDac protocol
     */
    //% shim=jacdac::stop
    function stop(): void;

    /**
     * Internal
     */
    //% shim=jacdac::__internalSendPacket
    function __internalSendPacket(buf: Buffer, deviceAddress: int32): int32;
}


declare interface JacDacDriverStatus {
    /**
     * Returns the JDDevice instnace
     */
    //% property shim=JacDacDriverStatusMethods::device
    device: Buffer;

    /** Check if driver is connected. */
    //% property shim=JacDacDriverStatusMethods::isConnected
    isConnected: boolean;

    /** Get device id for events. */
    //% property shim=JacDacDriverStatusMethods::id
    id: uint32;

    /** If paired, paired instance address */
    //% property shim=JacDacDriverStatusMethods::isPairedInstanceAddress
    isPairedInstanceAddress(address: uint8): boolean;
}

// Auto-generated. Do not edit. Really.