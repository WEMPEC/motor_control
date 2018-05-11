function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:1"] = "gm_hdlcoder_led_blinking_interface.c:65&gm_hdlcoder_led_blinking_interface.h:112&gm_hdlcoder_led_blinking_interface_data.c:32";
	/* <Root>/Constant1 */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:2"] = "gm_hdlcoder_led_blinking_interface.c:66&gm_hdlcoder_led_blinking_interface.h:115&gm_hdlcoder_led_blinking_interface_data.c:35";
	/* <Root>/Constant2 */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:3"] = "gm_hdlcoder_led_blinking_interface.c:52&gm_hdlcoder_led_blinking_interface.h:118&gm_hdlcoder_led_blinking_interface_data.c:38";
	/* <Root>/Manual Switch */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:4"] = "gm_hdlcoder_led_blinking_interface.c:64,74&gm_hdlcoder_led_blinking_interface.h:109&gm_hdlcoder_led_blinking_interface_data.c:29";
	/* <Root>/Scope1 */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:7"] = "gm_hdlcoder_led_blinking_interface.h:92";
	/* <Root>/Scope2 */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:8"] = "gm_hdlcoder_led_blinking_interface.h:96";
	/* <Root>/led_counter */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:10"] = "gm_hdlcoder_led_blinking_interface.c:28,76,114,220,223,264,274,309";
	/* <S2>/Slider
Gain */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:9:31"] = "gm_hdlcoder_led_blinking_interface.c:51,62&gm_hdlcoder_led_blinking_interface.h:106&gm_hdlcoder_led_blinking_interface_data.c:26";
	/* <S4>/AXI4Lite_Read_Read_back_DTC */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:30"] = "gm_hdlcoder_led_blinking_interface.c:105&gm_hdlcoder_led_blinking_interface.h:81";
	/* <S4>/EXTERNALPORT_LED_DTC */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:28"] = "gm_hdlcoder_led_blinking_interface.c:111&gm_hdlcoder_led_blinking_interface.h:82";
	/* <S5>/AXI4Lite_Write_Blink_direction_DTC */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:26"] = "gm_hdlcoder_led_blinking_interface.c:88";
	/* <S5>/AXI4Lite_Write_Blink_frequency_DTC */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:24"] = "gm_hdlcoder_led_blinking_interface.c:78";
	/* <S6>/AXI4-Interface Read */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:31:16"] = "gm_hdlcoder_led_blinking_interface.c:98,99,106,251,262,298,299,307&gm_hdlcoder_led_blinking_interface.h:87,100";
	/* <S7>/AXI4-Interface Write */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:27:17"] = "gm_hdlcoder_led_blinking_interface.c:91,92,238,249,287,288,296&gm_hdlcoder_led_blinking_interface.h:89,99";
	/* <S8>/AXI4-Interface Write */
	this.urlHashMap["gm_hdlcoder_led_blinking_interface:25:17"] = "gm_hdlcoder_led_blinking_interface.c:81,82,225,236,276,277,285&gm_hdlcoder_led_blinking_interface.h:88,98";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "gm_hdlcoder_led_blinking_interface"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "gm_hdlcoder_led_blinking_interface:5"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:5"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "gm_hdlcoder_led_blinking_interface:9"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:9"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "gm_hdlcoder_led_blinking_interface:10"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:10"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "gm_hdlcoder_led_blinking_interface:35"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:35"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "gm_hdlcoder_led_blinking_interface:32"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:32"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "gm_hdlcoder_led_blinking_interface:31"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:31"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "gm_hdlcoder_led_blinking_interface:27"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:27"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "gm_hdlcoder_led_blinking_interface:25"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:25"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "gm_hdlcoder_led_blinking_interface:1"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:1"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "gm_hdlcoder_led_blinking_interface:2"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:2"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "gm_hdlcoder_led_blinking_interface:3"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:3"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Manual Switch"] = {sid: "gm_hdlcoder_led_blinking_interface:4"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:4"] = {rtwname: "<Root>/Manual Switch"};
	this.rtwnameHashMap["<Root>/Model Info1"] = {sid: "gm_hdlcoder_led_blinking_interface:5"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:5"] = {rtwname: "<Root>/Model Info1"};
	this.rtwnameHashMap["<Root>/Run Demo"] = {sid: "gm_hdlcoder_led_blinking_interface:6"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:6"] = {rtwname: "<Root>/Run Demo"};
	this.rtwnameHashMap["<Root>/Scope1"] = {sid: "gm_hdlcoder_led_blinking_interface:7"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:7"] = {rtwname: "<Root>/Scope1"};
	this.rtwnameHashMap["<Root>/Scope2"] = {sid: "gm_hdlcoder_led_blinking_interface:8"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:8"] = {rtwname: "<Root>/Scope2"};
	this.rtwnameHashMap["<Root>/Slider Gain"] = {sid: "gm_hdlcoder_led_blinking_interface:9"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:9"] = {rtwname: "<Root>/Slider Gain"};
	this.rtwnameHashMap["<Root>/led_counter"] = {sid: "gm_hdlcoder_led_blinking_interface:10"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:10"] = {rtwname: "<Root>/led_counter"};
	this.rtwnameHashMap["<S1>/EmptySubsystem"] = {sid: "gm_hdlcoder_led_blinking_interface:5:1"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:5:1"] = {rtwname: "<S1>/EmptySubsystem"};
	this.rtwnameHashMap["<S2>/u"] = {sid: "gm_hdlcoder_led_blinking_interface:9:30"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:9:30"] = {rtwname: "<S2>/u"};
	this.rtwnameHashMap["<S2>/Slider Gain"] = {sid: "gm_hdlcoder_led_blinking_interface:9:31"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:9:31"] = {rtwname: "<S2>/Slider Gain"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "gm_hdlcoder_led_blinking_interface:9:32"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:9:32"] = {rtwname: "<S2>/y"};
	this.rtwnameHashMap["<S3>/Blink_frequency"] = {sid: "gm_hdlcoder_led_blinking_interface:11"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:11"] = {rtwname: "<S3>/Blink_frequency"};
	this.rtwnameHashMap["<S3>/Blink_direction"] = {sid: "gm_hdlcoder_led_blinking_interface:12"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:12"] = {rtwname: "<S3>/Blink_direction"};
	this.rtwnameHashMap["<S3>/AXI4LiteRead"] = {sid: "gm_hdlcoder_led_blinking_interface:35"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:35"] = {rtwname: "<S3>/AXI4LiteRead"};
	this.rtwnameHashMap["<S3>/AXI4LiteWrite"] = {sid: "gm_hdlcoder_led_blinking_interface:32"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:32"] = {rtwname: "<S3>/AXI4LiteWrite"};
	this.rtwnameHashMap["<S3>/AXI4Reset"] = {sid: "gm_hdlcoder_led_blinking_interface:38"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:38"] = {rtwname: "<S3>/AXI4Reset"};
	this.rtwnameHashMap["<S3>/AXI4ResetModelSource"] = {sid: "gm_hdlcoder_led_blinking_interface:39"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:39"] = {rtwname: "<S3>/AXI4ResetModelSource"};
	this.rtwnameHashMap["<S3>/LED"] = {sid: "gm_hdlcoder_led_blinking_interface:17"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:17"] = {rtwname: "<S3>/LED"};
	this.rtwnameHashMap["<S3>/Read_back"] = {sid: "gm_hdlcoder_led_blinking_interface:18"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:18"] = {rtwname: "<S3>/Read_back"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Read_Read_back"] = {sid: "gm_hdlcoder_led_blinking_interface:31"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:31"] = {rtwname: "<S4>/AXI4Lite_Read_Read_back"};
	this.rtwnameHashMap["<S4>/AXI4Lite_Read_Read_back_DTC"] = {sid: "gm_hdlcoder_led_blinking_interface:30"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:30"] = {rtwname: "<S4>/AXI4Lite_Read_Read_back_DTC"};
	this.rtwnameHashMap["<S4>/EXTERNALPORT_LED_DTC"] = {sid: "gm_hdlcoder_led_blinking_interface:28"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:28"] = {rtwname: "<S4>/EXTERNALPORT_LED_DTC"};
	this.rtwnameHashMap["<S4>/GROUND_LED"] = {sid: "gm_hdlcoder_led_blinking_interface:29"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:29"] = {rtwname: "<S4>/GROUND_LED"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "gm_hdlcoder_led_blinking_interface:36"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:36"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S4>/Out2"] = {sid: "gm_hdlcoder_led_blinking_interface:37"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:37"] = {rtwname: "<S4>/Out2"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "gm_hdlcoder_led_blinking_interface:33"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:33"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/In2"] = {sid: "gm_hdlcoder_led_blinking_interface:34"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:34"] = {rtwname: "<S5>/In2"};
	this.rtwnameHashMap["<S5>/AXI4Lite_Write_Blink_direction"] = {sid: "gm_hdlcoder_led_blinking_interface:27"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:27"] = {rtwname: "<S5>/AXI4Lite_Write_Blink_direction"};
	this.rtwnameHashMap["<S5>/AXI4Lite_Write_Blink_direction_DTC"] = {sid: "gm_hdlcoder_led_blinking_interface:26"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:26"] = {rtwname: "<S5>/AXI4Lite_Write_Blink_direction_DTC"};
	this.rtwnameHashMap["<S5>/AXI4Lite_Write_Blink_frequency"] = {sid: "gm_hdlcoder_led_blinking_interface:25"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:25"] = {rtwname: "<S5>/AXI4Lite_Write_Blink_frequency"};
	this.rtwnameHashMap["<S5>/AXI4Lite_Write_Blink_frequency_DTC"] = {sid: "gm_hdlcoder_led_blinking_interface:24"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:24"] = {rtwname: "<S5>/AXI4Lite_Write_Blink_frequency_DTC"};
	this.rtwnameHashMap["<S6>/AXI4-Interface Read"] = {sid: "gm_hdlcoder_led_blinking_interface:31:16"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:31:16"] = {rtwname: "<S6>/AXI4-Interface Read"};
	this.rtwnameHashMap["<S6>/Signal Specification"] = {sid: "gm_hdlcoder_led_blinking_interface:31:24"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:31:24"] = {rtwname: "<S6>/Signal Specification"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "gm_hdlcoder_led_blinking_interface:31:19"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:31:19"] = {rtwname: "<S6>/Out1"};
	this.rtwnameHashMap["<S7>/In1"] = {sid: "gm_hdlcoder_led_blinking_interface:27:21"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:27:21"] = {rtwname: "<S7>/In1"};
	this.rtwnameHashMap["<S7>/AXI4-Interface Write"] = {sid: "gm_hdlcoder_led_blinking_interface:27:17"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:27:17"] = {rtwname: "<S7>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S7>/Signal Specification"] = {sid: "gm_hdlcoder_led_blinking_interface:27:24"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:27:24"] = {rtwname: "<S7>/Signal Specification"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "gm_hdlcoder_led_blinking_interface:25:21"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:25:21"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/AXI4-Interface Write"] = {sid: "gm_hdlcoder_led_blinking_interface:25:17"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:25:17"] = {rtwname: "<S8>/AXI4-Interface Write"};
	this.rtwnameHashMap["<S8>/Signal Specification"] = {sid: "gm_hdlcoder_led_blinking_interface:25:24"};
	this.sidHashMap["gm_hdlcoder_led_blinking_interface:25:24"] = {rtwname: "<S8>/Signal Specification"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
