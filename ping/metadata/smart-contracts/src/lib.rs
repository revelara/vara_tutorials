#![no_std]
use gstd::{debug, msg, prelude::*};

static mut LOG_STATE: Vec<String> = vec![];

#[no_mangle]
extern "C" fn handle() {
    let _payload: String = msg::load().expect("Error while getting the handle payload");

    if _payload == "PING" {
        msg::reply(String::from("PONG"), 0).expect("Error in sending a reply message");
        unsafe { LOG_STATE.push(_payload) };
    }
}

#[no_mangle]
extern "C" fn init() {
    let _init_message: String = msg::load().expect("Can't load init message");
    debug!("Program was initialized with message: {:?}", init_message);
}
