use sails_idl_gen::program;
use std::fs::File;

use ping_app::PingProgram;

fn main() {
    gwasm_builder::build();

    let idl_file_path = "./ping.idl";
    let idl_file = File::create(idl_file_path).unwrap();

    program::generate_idl::<PingProgram>(idl_file).unwrap();
}
