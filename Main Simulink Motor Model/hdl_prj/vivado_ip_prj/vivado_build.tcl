open_project vivado_prj.xpr
update_compile_order -fileset sources_1
reset_run impl_1
reset_run synth_1
launch_runs synth_1
wait_on_run synth_1
launch_runs impl_1 -to_step write_bitstream
wait_on_run impl_1
close_project
puts "------------------------------------"
puts "Embedded system build completed."
puts "You may close this shell."
puts "------------------------------------"
exit
