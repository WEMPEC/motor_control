function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["gm_testing_interface:1"] = "gm_testing_interface.c:67&gm_testing_interface.h:124&gm_testing_interface_data.c:32";
	/* <Root>/Constant1 */
	this.urlHashMap["gm_testing_interface:2"] = "gm_testing_interface.c:68&gm_testing_interface.h:127&gm_testing_interface_data.c:35";
	/* <Root>/Constant2 */
	this.urlHashMap["gm_testing_interface:3"] = "gm_testing_interface.c:54&gm_testing_interface.h:130&gm_testing_interface_data.c:38";
	/* <Root>/Manual Switch */
	this.urlHashMap["gm_testing_interface:4"] = "gm_testing_interface.c:66,76&gm_testing_interface.h:121&gm_testing_interface_data.c:29";
	/* <Root>/Scope1 */
	this.urlHashMap["gm_testing_interface:5"] = "gm_testing_interface.h:94";
	/* <Root>/Scope2 */
	this.urlHashMap["gm_testing_interface:6"] = "gm_testing_interface.h:98";
	/* <Root>/Scope3 */
	this.urlHashMap["gm_testing_interface:7"] = "gm_testing_interface.h:102";
	/* <Root>/Scope4 */
	this.urlHashMap["gm_testing_interface:8"] = "gm_testing_interface.h:106";
	/* <Root>/motor_controller */
	this.urlHashMap["gm_testing_interface:10"] = "gm_testing_interface.c:30,78,142,250,253,320,330,387";
	/* <S1>/Slider
Gain */
	this.urlHashMap["gm_testing_interface:9:31"] = "gm_testing_interface.c:53,64&gm_testing_interface.h:118&gm_testing_interface_data.c:26";
	/* <S3>/AXI4Lite_Read_ReadBackAll_DTC */
	this.urlHashMap["gm_testing_interface:38"] = "gm_testing_interface.c:133&gm_testing_interface.h:81";
	/* <S3>/AXI4Lite_Read_readback_direction _DTC */
	this.urlHashMap["gm_testing_interface:36"] = "gm_testing_interface.c:120&gm_testing_interface.h:80";
	/* <S3>/AXI4Lite_Read_readback_speed_pwm_DTC */
	this.urlHashMap["gm_testing_interface:34"] = "gm_testing_interface.c:107&gm_testing_interface.h:79";
	/* <S3>/EXTERNALPORT_Motor_DTC */
	this.urlHashMap["gm_testing_interface:32"] = "gm_testing_interface.c:139&gm_testing_interface.h:82";
	/* <S4>/AXI4Lite_Write_Rotate_direction_DTC */
	this.urlHashMap["gm_testing_interface:30"] = "gm_testing_interface.c:90";
	/* <S4>/AXI4Lite_Write_Rotate_speed_DTC */
	this.urlHashMap["gm_testing_interface:28"] = "gm_testing_interface.c:80";
	/* <S5>/AXI4-Interface Read */
	this.urlHashMap["gm_testing_interface:39:16"] = "gm_testing_interface.c:126,127,134,307,318,376,377,385&gm_testing_interface.h:89,112";
	/* <S6>/AXI4-Interface Read */
	this.urlHashMap["gm_testing_interface:37:16"] = "gm_testing_interface.c:113,114,121,294,305,365,366,374&gm_testing_interface.h:88,111";
	/* <S7>/AXI4-Interface Read */
	this.urlHashMap["gm_testing_interface:35:16"] = "gm_testing_interface.c:100,101,108,281,292,354,355,363&gm_testing_interface.h:87,110";
	/* <S8>/AXI4-Interface Write */
	this.urlHashMap["gm_testing_interface:31:17"] = "gm_testing_interface.c:93,94,268,279,343,344,352&gm_testing_interface.h:91,109";
	/* <S9>/AXI4-Interface Write */
	this.urlHashMap["gm_testing_interface:29:17"] = "gm_testing_interface.c:83,84,255,266,332,333,341&gm_testing_interface.h:90,108";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "gm_testing_interface"};
	this.sidHashMap["gm_testing_interface"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "gm_testing_interface:9"};
	this.sidHashMap["gm_testing_interface:9"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "gm_testing_interface:10"};
	this.sidHashMap["gm_testing_interface:10"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "gm_testing_interface:43"};
	this.sidHashMap["gm_testing_interface:43"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "gm_testing_interface:40"};
	this.sidHashMap["gm_testing_interface:40"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "gm_testing_interface:39"};
	this.sidHashMap["gm_testing_interface:39"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "gm_testing_interface:37"};
	this.sidHashMap["gm_testing_interface:37"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "gm_testing_interface:35"};
	this.sidHashMap["gm_testing_interface:35"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "gm_testing_interface:31"};
	this.sidHashMap["gm_testing_interface:31"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "gm_testing_interface:29"};
	this.sidHashMap["gm_testing_interface:29"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "gm_testing_interface:1"};
	this.sidHashMap["gm_testing_interface:1"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "gm_testing_interface:2"};
	this.sidHashMap["gm_testing_interface:2"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "gm_testing_interface:3"};
	this.sidHashMap["gm_testing_interface:3"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Manual Switch"] = {sid: "gm_testing_interface:4"};
	this.sidHashMap["gm_testing_interface:4"] = {rtwname: "<Root>/Manual Switch"};
	this.rtwnameHashMap["<Root>/Scope1"] = {sid: "gm_testing_interface:5"};
	this.sidHashMap["gm_testing_interface:5"] = {rtwname: "<Root>/Scope1"};
	this.rtwnameHashMap["<Root>/Scope2"] = {sid: "gm_testing_interface:6"};
	this.sidHashMap["gm_testing_interface:6"] = {rtwname: "<Root>/Scope2"};
	this.rtwnameHashMap["<Root>/Scope3"] = {sid: "gm_testing_interface:7"};
	this.sidHashMap["gm_testing_interface:7"] = {rtwname: "<Root>/Scope3"};
	this.rtwnameHashMap["<Root>/Scope4"] = {sid: "gm_testing_interface:8"};
	this.sidHashMap["gm_testing_interface:8"] = {rtwname: "<Root>/Scope4"};
	this.rtwnameHashMap["<Root>/Slider Gain"] = {sid: "gm_testing_interface:9"};
	this.sidHashMap["gm_testing_interface:9"] = {rtwname: "<Root>/Slider Gain"};
	this.rtwnameHashMap["<Root>/motor_controller"] = {sid: "gm_testing_interface:10"};
	this.sidHashMap["gm_testing_interface:10"] = {rtwname: "<Root>/motor_controller"};
	this.rtwnameHashMap["<S1>/u"] = {sid: "gm_testing_interface:9:30"};
	this.sidHashMap["gm_testing_interface:9:30"] = {rtwname: "<S1>/u"};
	this.rtwnameHashMap["<S1>/Slider Gain"] = {sid: "gm_testing_interface:9:31"};
	this.sidHashMap["gm_testing_interface:9:31"] = {rtwname: "<S1>/Slider Gain"};
	this.rtwnameHashMap["<S1>/y"] = {sid: "gm_testing_interface:9:32"};
	this.sidHashMap["gm_testing_interface:9:32"] = {rtwname: "<S1>/y"};
	this.rtwnameHashMap["<S2>/Rotate_speed"] = {sid: "gm_testing_interface:11"};
	this.sidHashMap["gm_testing_interface:11"] = {rtwname: "<S2>/Rotate_speed"};
	this.rtwnameHashMap["<S2>/Rotate_direction"] = {sid: "gm_testing_interface:12"};
	this.sidHashMap["gm_testing_interface:12"] = {rtwname: "<S2>/Rotate_direction"};
	this.rtwnameHashMap["<S2>/AXI4LiteRead"] = {sid: "gm_testing_interface:43"};
	this.sidHashMap["gm_testing_interface:43"] = {rtwname: "<S2>/AXI4LiteRead"};
	this.rtwnameHashMap["<S2>/AXI4LiteWrite"] = {sid: "gm_testing_interface:40"};
	this.sidHashMap["gm_testing_interface:40"] = {rtwname: "<S2>/AXI4LiteWrite"};
	this.rtwnameHashMap["<S2>/AXI4Reset"] = {sid: "gm_testing_interface:48"};
	this.sidHashMap["gm_testing_interface:48"] = {rtwname: "<S2>/AXI4Reset"};
	this.rtwnameHashMap["<S2>/AXI4ResetModelSource"] = {sid: "gm_testing_interface:49"};
	this.sidHashMap["gm_testing_interface:49"] = {rtwname: "<S2>/AXI4ResetModelSource"};
	this.rtwnameHashMap["<S2>/Motor"] = {sid: "gm_testing_interface:21"};
	this.sidHashMap["gm_testing_interface:21"] = {rtwname: "<S2>/Motor"};
	this.rtwnameHashMap["<S2>/readback_speed_pwm"] = {sid: "gm_testing_interface:22"};
	this.sidHashMap["gm_testing_interface:22"] = {rtwname: "<S2>/readback_speed_pwm"};
	this.rtwnameHashMap["<S2>/readback_direction "] = {sid: "gm_testing_interface:23"};
	this.sidHashMap["gm_testing_interface:23"] = {rtwname: "<S2>/readback_direction "};
	this.rtwnameHashMap["<S2>/ReadBackAll"] = {sid: "gm_testing_interface:24"};
	this.sidHashMap["gm_testing_interface:24"] = {rtwname: "<S2>/ReadBackAll"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_ReadBackAll"] = {sid: "gm_testing_interface:39"};
	this.sidHashMap["gm_testing_interface:39"] = {rtwname: "<S3>/AXI4Lite_Read_ReadBackAll"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_ReadBackAll_DTC"] = {sid: "gm_testing_interface:38"};
	this.sidHashMap["gm_testing_interface:38"] = {rtwname: "<S3>/AXI4Lite_Read_ReadBackAll_DTC"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_direction "] = {sid: "gm_testing_interface:37"};
	this.sidHashMap["gm_testing_interface:37"] = {rtwname: "<S3>/AXI4Lite_Read_readback_direction "};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_direction _DTC"] = {sid: "gm_testing_interface:36"};
	this.sidHashMap["gm_testing_interface:36"] = {rtwname: "<S3>/AXI4Lite_Read_readback_direction _DTC"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_speed_pwm"] = {sid: "gm_testing_interface:35"};
	this.sidHashMap["gm_testing_interface:35"] = {rtwname: "<S3>/AXI4Lite_Read_readback_speed_pwm"};
	this.rtwnameHashMap["<S3>/AXI4Lite_Read_readback_speed_pwm_DTC"] = {sid: "gm_testing_interface:34"};
	this.sidHashMap["gm_testing_interface:34"] = {rtwname: "<S3>/AXI4Lite_Read_readback_speed_pwm_DTC"};
	this.rtwnameHashMap["<S3>/EXTERNALPORT_Motor_DTC"] = {sid: "gm_testing_interface:32"};
	this.sidHashMap["gm_testing_interface:32"] = {rtwname: "<S3>/EXTERNALPORT_Motor_DTC"};
	this.rtwnameHashMap["<S3>/GROUND_Motor"] = {sid: "gm_testing_interface:33"};
	this.sidHashMap["gm_testing_interface:33"] = {rtwname: "<S3>/GROUND_Motor"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "gm_testing_interface:44"};
	this.sidHashMap["gm_testing_interface:44"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S3>/Out2"] = {sid: "gm_testing_interface:45"};
	this.sidHashMap["gm_testing_interface:45"] = {rtwname: "<S3>/Out2"};
	this.rtwnameHashMap["<S3>/Out3"] = {sid: "gm_testing_interface:46"};
	this.sidHashMap["gm_testing_interface:46"] = {rtwname: "<S3>/Out3"};
	this.rtwnameHashMap["<S3>/Out4"] = {sid: "gm_testing_interface:47"};
	this.sidHashMap["gm_testing_interface:47"] = {rtwname: "<S3>/Out4"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "gm_testing_interface:41"};
	this.sidHashMap["gm_testing_interface:41"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/In2"] = {sid: "gm_testing_interface:42"};
	this.sidHashMap["gm_testing_interface:42"] = {rtwname: "<S4>/In2"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_direction"] = {sid: "gm_testing_interface:31"};
	this.sidHashMap["gm_testing_interface:31"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_direction"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_direction_DTC"] = {sid: "gm_testing_interface:30"};
	this.sidHashMap["gm_testing_interface:30"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_direction_DTC"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_speed"] = {sid: "gm_testing_interface:29"};
	this.sidHashMap["gm_testing_interface:29"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_speed"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Write_Rotate_speed_DTC"] = {sid: "gm_testing_interface:28"};
	this.sidHashMap["gm_testing_interface:28"] = {rtwname: "<S4>/AXI4Lite_Write_Rotate_speed_DTC"};
	this.rtwnameHashMap["<S5>/AXI4-Interface Read"] = {sid: "gm_testing_interface:39:16"};
	this.sidHashMap["gm_testing_interface:39:16"] = {rtwname: "<S5>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S5>/Signal Specification"] = {sid: "gm_testing_interface:39:24"};
	this.sidHashMap["gm_testing_interface:39:24"] = {rtwname: "<S5>/Signal Specification"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "gm_testing_interface:39:19"};
	this.sidHashMap["gm_testing_interface:39:19"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/AXI4-Interface Read"] = {sid: "gm_testing_interface:37:16"};
	this.sidHashMap["gm_testing_interface:37:16"] = {rtwname: "<S6>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S6>/Signal Specification"] = {sid: "gm_testing_interface:37:24"};
	this.sidHashMap["gm_testing_interface:37:24"] = {rtwname: "<S6>/Signal Specification"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "gm_testing_interface:37:19"};
	this.sidHashMap["gm_testing_interface:37:19"] = {rtwname: "<S6>/Out1"};
	this.rtwnameHashMap["<S7>/AXI4-Interface Read"] = {sid: "gm_testing_interface:35:16"};
	this.sidHashMap["gm_testing_interface:35:16"] = {rtwname: "<S7>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S7>/Signal Specification"] = {sid: "gm_testing_interface:35:24"};
	this.sidHashMap["gm_testing_interface:35:24"] = {rtwname: "<S7>/Signal Specification"};
	this.rtwnameHashMap["<S7>/Out1"] = {sid: "gm_testing_interface:35:19"};
	this.sidHashMap["gm_testing_interface:35:19"] = {rtwname: "<S7>/Out1"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "gm_testing_interface:31:21"};
	this.sidHashMap["gm_testing_interface:31:21"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/AXI4-Interface Write"] = {sid: "gm_testing_interface:31:17"};
	this.sidHashMap["gm_testing_interface:31:17"] = {rtwname: "<S8>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S8>/Signal Specification"] = {sid: "gm_testing_interface:31:24"};
	this.sidHashMap["gm_testing_interface:31:24"] = {rtwname: "<S8>/Signal Specification"};
	this.rtwnameHashMap["<S9>/In1"] = {sid: "gm_testing_interface:29:21"};
	this.sidHashMap["gm_testing_interface:29:21"] = {rtwname: "<S9>/In1"};
	this.rtwnameHashMap["<S9>/AXI4-Interface Write"] = {sid: "gm_testing_interface:29:17"};
	this.sidHashMap["gm_testing_interface:29:17"] = {rtwname: "<S9>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S9>/Signal Specification"] = {sid: "gm_testing_interface:29:24"};
	this.sidHashMap["gm_testing_interface:29:24"] = {rtwname: "<S9>/Signal Specification"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
