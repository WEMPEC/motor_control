-makelib ies_lib/xil_defaultlib -sv \
  "D:/Vivado/2017.4/data/ip/xpm/xpm_cdc/hdl/xpm_cdc.sv" \
  "D:/Vivado/2017.4/data/ip/xpm/xpm_fifo/hdl/xpm_fifo.sv" \
  "D:/Vivado/2017.4/data/ip/xpm/xpm_memory/hdl/xpm_memory.sv" \
-endlib
-makelib ies_lib/xpm \
  "D:/Vivado/2017.4/data/ip/xpm/xpm_VCOMP.vhd" \
-endlib
-makelib ies_lib/axi_infrastructure_v1_1_0 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/ec67/hdl/axi_infrastructure_v1_1_vl_rfs.v" \
-endlib
-makelib ies_lib/smartconnect_v1_0 -sv \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/02c8/hdl/sc_util_v1_0_vl_rfs.sv" \
-endlib
-makelib ies_lib/axi_protocol_checker_v2_0_1 -sv \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/3b24/hdl/axi_protocol_checker_v2_0_vl_rfs.sv" \
-endlib
-makelib ies_lib/axi_vip_v1_1_1 -sv \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/a16a/hdl/axi_vip_v1_1_vl_rfs.sv" \
-endlib
-makelib ies_lib/processing_system7_vip_v1_0_3 -sv \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/1313/hdl/processing_system7_vip_v1_0_vl_rfs.sv" \
-endlib
-makelib ies_lib/xil_defaultlib \
  "../../../bd/design_gpio_led/ip/design_gpio_led_processing_system7_0_0/sim/design_gpio_led_processing_system7_0_0.v" \
-endlib
-makelib ies_lib/axi_lite_ipif_v3_0_4 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/cced/hdl/axi_lite_ipif_v3_0_vh_rfs.vhd" \
-endlib
-makelib ies_lib/lib_cdc_v1_0_2 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/ef1e/hdl/lib_cdc_v1_0_rfs.vhd" \
-endlib
-makelib ies_lib/interrupt_control_v3_1_4 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/8e66/hdl/interrupt_control_v3_1_vh_rfs.vhd" \
-endlib
-makelib ies_lib/axi_gpio_v2_0_17 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/c450/hdl/axi_gpio_v2_0_vh_rfs.vhd" \
-endlib
-makelib ies_lib/xil_defaultlib \
  "../../../bd/design_gpio_led/ip/design_gpio_led_axi_gpio_0_0/sim/design_gpio_led_axi_gpio_0_0.vhd" \
-endlib
-makelib ies_lib/proc_sys_reset_v5_0_12 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/f86a/hdl/proc_sys_reset_v5_0_vh_rfs.vhd" \
-endlib
-makelib ies_lib/xil_defaultlib \
  "../../../bd/design_gpio_led/ip/design_gpio_led_rst_ps7_0_100M_0/sim/design_gpio_led_rst_ps7_0_100M_0.vhd" \
-endlib
-makelib ies_lib/generic_baseblocks_v2_1_0 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/b752/hdl/generic_baseblocks_v2_1_vl_rfs.v" \
-endlib
-makelib ies_lib/fifo_generator_v13_2_1 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/5c35/simulation/fifo_generator_vlog_beh.v" \
-endlib
-makelib ies_lib/fifo_generator_v13_2_1 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/5c35/hdl/fifo_generator_v13_2_rfs.vhd" \
-endlib
-makelib ies_lib/fifo_generator_v13_2_1 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/5c35/hdl/fifo_generator_v13_2_rfs.v" \
-endlib
-makelib ies_lib/axi_data_fifo_v2_1_14 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/9909/hdl/axi_data_fifo_v2_1_vl_rfs.v" \
-endlib
-makelib ies_lib/axi_register_slice_v2_1_15 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/3ed1/hdl/axi_register_slice_v2_1_vl_rfs.v" \
-endlib
-makelib ies_lib/axi_protocol_converter_v2_1_15 \
  "../../../../Gpio_LED.srcs/sources_1/bd/design_gpio_led/ipshared/ff69/hdl/axi_protocol_converter_v2_1_vl_rfs.v" \
-endlib
-makelib ies_lib/xil_defaultlib \
  "../../../bd/design_gpio_led/ip/design_gpio_led_auto_pc_0/sim/design_gpio_led_auto_pc_0.v" \
  "../../../bd/design_gpio_led/sim/design_gpio_led.v" \
-endlib
-makelib ies_lib/xil_defaultlib \
  glbl.v
-endlib

