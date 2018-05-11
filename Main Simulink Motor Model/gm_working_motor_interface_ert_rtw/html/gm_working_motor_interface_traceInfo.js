function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["gm_working_motor_interface:1"] = "gm_working_motor_interface.c:66&gm_working_motor_interface.h:117&gm_working_motor_interface_data.c:32";
	/* <Root>/Constant1 */
	this.urlHashMap["gm_working_motor_interface:2"] = "gm_working_motor_interface.c:67&gm_working_motor_interface.h:120&gm_working_motor_interface_data.c:35";
	/* <Root>/Constant2 */
	this.urlHashMap["gm_working_motor_interface:3"] = "gm_working_motor_interface.c:53&gm_working_motor_interface.h:123&gm_working_motor_interface_data.c:38";
	/* <Root>/Manual Switch */
	this.urlHashMap["gm_working_motor_interface:4"] = "gm_working_motor_interface.c:65,75&gm_working_motor_interface.h:114&gm_working_motor_interface_data.c:29";
	/* <Root>/Scope1 */
	this.urlHashMap["gm_working_motor_interface:5"] = "gm_working_motor_interface.h:92";
	/* <Root>/Scope2 */
	this.urlHashMap["gm_working_motor_interface:6"] = "gm_working_motor_interface.h:96";
	/* <Root>/Scope3 */
	this.urlHashMap["gm_working_motor_interface:7"] = "gm_working_motor_interface.h:100";
	/* <Root>/motor_controller */
	this.urlHashMap["gm_working_motor_interface:9"] = "gm_working_motor_interface.c:29,77,128,235,238,292,302,348";
	/* <S1>/Slider
Gain */
	this.urlHashMap["gm_working_motor_interface:8:31"] = "gm_working_motor_interface.c:52,63&gm_working_motor_interface.h:111&gm_working_motor_interface_data.c:26";
	/* <S3>/AXI4Lite_Read_readback_direction _DTC */
	this.urlHashMap["gm_working_motor_interface:34"] = "gm_working_motor_interface.c:119&gm_working_motor_interface.h:80";
	/* <S3>/AXI4Lite_Read_readback_speed_pwm_DTC */
	this.urlHashMap["gm_working_motor_interface:32"] = "gm_working_motor_interface.c:106&gm_working_motor_interface.h:79";
	/* <S3>/EXTERNALPORT_Motor_DTC */
	this.urlHashMap["gm_working_motor_interface:30"] = "gm_working_motor_interface.c:125&gm_working_motor_interface.h:81";
	/* <S4>/AXI4Lite_Write_Rotate_direction_DTC */
	this.urlHashMap["gm_working_motor_interface:28"] = "gm_working_motor_interface.c:89";
	/* <S4>/AXI4Lite_Write_Rotate_speed_DTC */
	this.urlHashMap["gm_working_motor_interface:26"] = "gm_working_motor_interface.c:79";
	/* <S5>/AXI4-Interface Read */
	this.urlHashMap["gm_working_motor_interface:35:16"] = "gm_working_motor_interface.c:112,113,120,279,290,337,338,346&gm_working_motor_interface.h:87,105";
	/* <S6>/AXI4-Interface Read */
	this.urlHashMap["gm_working_motor_interface:33:16"] = "gm_working_motor_interface.c:99,100,107,266,277,326,327,335&gm_working_motor_interface.h:86,104";
	/* <S7>/AXI4-Interface Write */
	this.urlHashMap["gm_working_motor_interface:29:17"] = "gm_working_motor_interface.c:92,93,253,264,315,316,324&gm_working_motor_interface.h:89,103";
	/* <S8>/AXI4-Interface Write */
	this.urlHashMap["gm_working_motor_interface:27:17"] = "gm_working_motor_interface.c:82,83,240,251,304,305,313&gm_working_motor_interface.h:88,102";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "gm_working_motor_interface"};
	this.sidHashMap["gm_working_motor_interface"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "gm_working_motor_interface:8"};
	this.sidHashMap["gm_working_motor_interface:8"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "gm_working_motor_interface:9"};
	this.sidHashMap["gm_working_motor_interface:9"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "gm_working_motor_interface:39"};
	this.sidHashMap["gm_working_motor_interface:39"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "gm_working_motor_interface:36"};
	this.sidHashMap["gm_working_motor_interface:36"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "gm_working_motor_interface:35"};
	this.sidHashMap["gm_working_motor_interface:35"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "gm_working_motor_interface:33"};
	this.sidHashMap["gm_working_motor_interface:33"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "gm_working_motor_interface:29"};
	this.sidHashMap["gm_working_motor_interface:29"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "gm_working_motor_interface:27"};
	this.sidHashMap["gm_working_motor_interface:27"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "gm_working_motor_interface:1"};
	this.sidHashMap["gm_working_motor_interface:1"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "gm_working_motor_interface:2"};
	this.sidHashMap["gm_working_motor_interface:2"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "gm_working_motor_interface:3"};
	this.sidHashMap["gm_working_motor_interface:3"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Manual Switch"] = {sid: "gm_working_motor_interface:4"};
	this.sidHashMap["gm_working_motor_interface:4"] = {rtwname: "<Root>/Manual Switch"};
	this.rtwnameHashMap["<Root>/Scope1"] = {sid: "gm_working_motor_interface:5"};
	this.sidHashMap["gm_working_motor_interface:5"] = {rtwname: "<Root>/Scope1"};
	this.rtwnameHashMap["<Root>/Scope2"] = {sid: "gm_working_motor_interface:6"};
	this.sidHashMap["gm_working_motor_interface:6"] = {rtwname: "<Root>/Scope2"};
	this.rtwnameHashMap["<Root>/Scope3"] = {sid: "gm_working_motor_interface:7"};
	this.sidHashMap["gm_working_motor_interface:7"] = {rtwname: "<Root>/Scope3"};
	this.rtwnameHashMap["<Root>/Slider Gain"] = {sid: "gm_working_motor_interface:8"};
	this.sidHashMap["gm_working_motor_interface:8"] = {rtwname: "<Root>/Slider Gain"};
	this.rtwnameHashMap["<Root>/motor_controller"] = {sid: "gm_working_motor_interface:9"};
	this.sidHashMap["gm_working_motor_interface:9"] = {rtwname: "<Root>/motor_controller"};
	this.rtwnameHashMap["<S1>/u"] = {sid: "gm_working_motor_interface:8:30"};
	this.sidHashMap["gm_working_motor_interface:8:30"] = {rtwname: "<S1>/u"};
	this.rtwnameHashMap["<S1>/Slider Gain"] = {sid: "gm_working_motor_interface:8:31"};
	this.sidHashMap["gm_working_motor_interface:8:31"] = {rtwname: "<S1>/Slider Gain"};
	this.rtwnameHashMap["<S1>/y"] = {sid: "gm_working_motor_interface:8:32"};
	this.sidHashMap["gm_working_motor_interface:8:32"] = {rtwname: "<S1>/y"};
	this.rtwnameHashMap["<S2>/Rotate_speed"] = {sid: "gm_working_motor_interface:10"};
	this.sidHashMap["gm_working_motor_interface:10"] = {rtwname: "<S2>/Rotate_speed"};
	this.rtwnameHashMap["<S2>/Rotate_direction"] = {sid: "gm_working_motor_interface:11"};
	this.sidHashMap["gm_working_motor_interface:11"] = {rtwname: "<S2>/Rotate_direction"};
	this.rtwnameHashMap["<S2>/AXI4LiteRead"] = {sid: "gm_working_motor_interface:39"};
	this.sidHashMap["gm_working_motor_interface:39"] = {rtwname: "<S2>/AXI4LiteRead"};
	this.rtwnameHashMap["<S2>/AXI4LiteWrite"] = {sid: "gm_working_motor_interface:36"};
	this.sidHashMap["gm_working_motor_interface:36"] = {rtwname: "<S2>/AXI4LiteWrite"};
	this.rtwnameHashMap["<S2>/AXI4Reset"] = {sid: "gm_working_motor_interface:43"};
	this.sidHashMap["gm_working_motor_interface:43"] = {rtwname: "<S2>/AXI4Reset"};
	this.rtwnameHashMap["<S2>/AXI4ResetModelSource"] = {sid: "gm_working_motor_interface:44"};
	this.sidHashMap["gm_working_motor_interface:44"] = {rtwname: "<S2>/AXI4ResetModelSource"};
	this.rtwnameHashMap["<S2>/Motor"] = {sid: "gm_working_motor_interface:20"};
	this.sidHashMap["gm_working_motor_interface:20"] = {rtwname: "<S2>/Motor"};
	this.rtwnameHashMap["<S2>/readback_speed_pwm"] = {sid: "gm_working_motor_interface:21"};
	this.sidHashMap["gm_working_motor_interface:21"] = {rtwname: "<S2>/readback_speed_pwm"};
	this.rtwnameHashMap["<S2>/readback_direction "] = {sid: "gm_working_motor_interface:22"};
	this.sidHashMap["gm_working_motor_interface:22"] = {rtwname: "<S2>/readback_direction "};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_direction "] = {sid: "gm_working_motor_interface:35"};
	this.sidHashMap["gm_working_motor_interface:35"] = {rtwname: "<S3>/AXI4Lite_Read_readback_direction "};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_direction _DTC"] = {sid: "gm_working_motor_interface:34"};
	this.sidHashMap["gm_working_motor_interface:34"] = {rtwname: "<S3>/AXI4Lite_Read_readback_direction _DTC"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_speed_pwm"] = {sid: "gm_working_motor_interface:33"};
	this.sidHashMap["gm_working_motor_interface:33"] = {rtwname: "<S3>/AXI4Lite_Read_readback_speed_pwm"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_speed_pwm_DTC"] = {sid: "gm_working_motor_interface:32"};
	this.sidHashMap["gm_working_motor_interface:32"] = {rtwname: "<S3>/AXI4Lite_Read_readback_speed_pwm_DTC"};
	this.rtwnameHashMap["<S3>/EXTERNALPORT_Motor_DTC"] = {sid: "gm_working_motor_interface:30"};
	this.sidHashMap["gm_working_motor_interface:30"] = {rtwname: "<S3>/EXTERNALPORT_Motor_DTC"};
	this.rtwnameHashMap["<S3>/GROUND_Motor"] = {sid: "gm_working_motor_interface:31"};
	this.sidHashMap["gm_working_motor_interface:31"] = {rtwname: "<S3>/GROUND_Motor"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "gm_working_motor_interface:40"};
	this.sidHashMap["gm_working_motor_interface:40"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S3>/Out2"] = {sid: "gm_working_motor_interface:41"};
	this.sidHashMap["gm_working_motor_interface:41"] = {rtwname: "<S3>/Out2"};
	this.rtwnameHashMap["<S3>/Out3"] = {sid: "gm_working_motor_interface:42"};
	this.sidHashMap["gm_working_motor_interface:42"] = {rtwname: "<S3>/Out3"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "gm_working_motor_interface:37"};
	this.sidHashMap["gm_working_motor_interface:37"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/In2"] = {sid: "gm_working_motor_interface:38"};
	this.sidHashMap["gm_working_motor_interface:38"] = {rtwname: "<S4>/In2"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_direction"] = {sid: "gm_working_motor_interface:29"};
	this.sidHashMap["gm_working_motor_interface:29"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_direction"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_direction_DTC"] = {sid: "gm_working_motor_interface:28"};
	this.sidHashMap["gm_working_motor_interface:28"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_direction_DTC"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_speed"] = {sid: "gm_working_motor_interface:27"};
	this.sidHashMap["gm_working_motor_interface:27"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_speed"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_speed_DTC"] = {sid: "gm_working_motor_interface:26"};
	this.sidHashMap["gm_working_motor_interface:26"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_speed_DTC"};
	this.rtwnameHashMap["<S5>/AXI4-Interface Read"] = {sid: "gm_working_motor_interface:35:16"};
	this.sidHashMap["gm_working_motor_interface:35:16"] = {rtwname: "<S5>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S5>/Signal Specification"] = {sid: "gm_working_motor_interface:35:24"};
	this.sidHashMap["gm_working_motor_interface:35:24"] = {rtwname: "<S5>/Signal Specification"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "gm_working_motor_interface:35:19"};
	this.sidHashMap["gm_working_motor_interface:35:19"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/AXI4-Interface Read"] = {sid: "gm_working_motor_interface:33:16"};
	this.sidHashMap["gm_working_motor_interface:33:16"] = {rtwname: "<S6>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S6>/Signal Specification"] = {sid: "gm_working_motor_interface:33:24"};
	this.sidHashMap["gm_working_motor_interface:33:24"] = {rtwname: "<S6>/Signal Specification"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "gm_working_motor_interface:33:19"};
	this.sidHashMap["gm_working_motor_interface:33:19"] = {rtwname: "<S6>/Out1"};
	this.rtwnameHashMap["<S7>/In1"] = {sid: "gm_working_motor_interface:29:21"};
	this.sidHashMap["gm_working_motor_interface:29:21"] = {rtwname: "<S7>/In1"};
	this.rtwnameHashMap["<S7>/AXI4-Interface Write"] = {sid: "gm_working_motor_interface:29:17"};
	this.sidHashMap["gm_working_motor_interface:29:17"] = {rtwname: "<S7>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S7>/Signal Specification"] = {sid: "gm_working_motor_interface:29:24"};
	this.sidHashMap["gm_working_motor_interface:29:24"] = {rtwname: "<S7>/Signal Specification"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "gm_working_motor_interface:27:21"};
	this.sidHashMap["gm_working_motor_interface:27:21"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/AXI4-Interface Write"] = {sid: "gm_working_motor_interface:27:17"};
	this.sidHashMap["gm_working_motor_interface:27:17"] = {rtwname: "<S8>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S8>/Signal Specification"] = {sid: "gm_working_motor_interface:27:24"};
	this.sidHashMap["gm_working_motor_interface:27:24"] = {rtwname: "<S8>/Signal Specification"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
