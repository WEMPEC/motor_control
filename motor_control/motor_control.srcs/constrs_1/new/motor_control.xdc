# revised from https://github.com/ama142/Zynq-SoC-Training/blob/master/lab9/Source%20Code/stepper_motor.xdc
set_property PACKAGE_PIN AA8 [get_ports {GPIO_0_tri_o[3]}]
set_property PACKAGE_PIN AB9 [get_ports {GPIO_0_tri_o[2]}]
set_property PACKAGE_PIN AB11 [get_ports {GPIO_0_tri_o[0]}]
set_property PACKAGE_PIN AB10 [get_ports {GPIO_0_tri_o[1]}]
set_property IOSTANDARD LVCMOS33 [get_ports {GPIO_0_tri_o[3]}]
set_property IOSTANDARD LVCMOS33 [get_ports {GPIO_0_tri_o[2]}]
set_property IOSTANDARD LVCMOS33 [get_ports {GPIO_0_tri_o[1]}]
set_property IOSTANDARD LVCMOS33 [get_ports {GPIO_0_tri_o[0]}]