# This script is generated when there are blocks with ResetType property set to None.
# This script initializes registers or signals generated from these blocks before
# the start of simulation, as they do not have a reset port or are not initialized in the HDL code.
# The initialization commands are compatible with ModelSim. Other simulation tools may use different syntax.
# For VHDL, the command syntax is: 
# force -deposit <path to signal> <value to initialize to> <time to initialize at> 
# 
# For Verilog, the command syntax is: 
# change <path to signal> <value to initialize to> 
force -deposit ${::dut_prefix}led_count_ip_src_led_counter/alpha1_D_Lookup_Table_out1_1 0 1
