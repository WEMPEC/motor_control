  function targMap = targDataMap(),

  ;%***********************
  ;% Create Parameter Map *
  ;%***********************
      
    nTotData      = 0; %add to this count as we go
    nTotSects     = 3;
    sectIdxOffset = 0;
    
    ;%
    ;% Define dummy sections & preallocate arrays
    ;%
    dumSection.nData = -1;  
    dumSection.data  = [];
    
    dumData.logicalSrcIdx = -1;
    dumData.dtTransOffset = -1;
    
    ;%
    ;% Init/prealloc paramMap
    ;%
    paramMap.nSections           = nTotSects;
    paramMap.sectIdxOffset       = sectIdxOffset;
      paramMap.sections(nTotSects) = dumSection; %prealloc
    paramMap.nTotData            = -1;
    
    ;%
    ;% Auto data (gm_hdlcoder_led_blinking_inte_P)
    ;%
      section.nData     = 2;
      section.data(2)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_inte_P.SliderGain_gain
	  section.data(1).logicalSrcIdx = 0;
	  section.data(1).dtTransOffset = 0;
	
	  ;% gm_hdlcoder_led_blinking_inte_P.ManualSwitch_CurrentSetting
	  section.data(2).logicalSrcIdx = 1;
	  section.data(2).dtTransOffset = 1;
	
      nTotData = nTotData + section.nData;
      paramMap.sections(1) = section;
      clear section
      
      section.nData     = 2;
      section.data(2)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_inte_P.Constant_Value
	  section.data(1).logicalSrcIdx = 2;
	  section.data(1).dtTransOffset = 0;
	
	  ;% gm_hdlcoder_led_blinking_inte_P.Constant1_Value
	  section.data(2).logicalSrcIdx = 3;
	  section.data(2).dtTransOffset = 1;
	
      nTotData = nTotData + section.nData;
      paramMap.sections(2) = section;
      clear section
      
      section.nData     = 1;
      section.data(1)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_inte_P.Constant2_Value
	  section.data(1).logicalSrcIdx = 4;
	  section.data(1).dtTransOffset = 0;
	
      nTotData = nTotData + section.nData;
      paramMap.sections(3) = section;
      clear section
      
    
      ;%
      ;% Non-auto Data (parameter)
      ;%
    

    ;%
    ;% Add final counts to struct.
    ;%
    paramMap.nTotData = nTotData;
    


  ;%**************************
  ;% Create Block Output Map *
  ;%**************************
      
    nTotData      = 0; %add to this count as we go
    nTotSects     = 1;
    sectIdxOffset = 0;
    
    ;%
    ;% Define dummy sections & preallocate arrays
    ;%
    dumSection.nData = -1;  
    dumSection.data  = [];
    
    dumData.logicalSrcIdx = -1;
    dumData.dtTransOffset = -1;
    
    ;%
    ;% Init/prealloc sigMap
    ;%
    sigMap.nSections           = nTotSects;
    sigMap.sectIdxOffset       = sectIdxOffset;
      sigMap.sections(nTotSects) = dumSection; %prealloc
    sigMap.nTotData            = -1;
    
    ;%
    ;% Auto data (gm_hdlcoder_led_blinking_inte_B)
    ;%
      section.nData     = 2;
      section.data(2)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_inte_B.AXI4Lite_Read_Read_back_DTC
	  section.data(1).logicalSrcIdx = 0;
	  section.data(1).dtTransOffset = 0;
	
	  ;% gm_hdlcoder_led_blinking_inte_B.EXTERNALPORT_LED_DTC
	  section.data(2).logicalSrcIdx = 1;
	  section.data(2).dtTransOffset = 1;
	
      nTotData = nTotData + section.nData;
      sigMap.sections(1) = section;
      clear section
      
    
      ;%
      ;% Non-auto Data (signal)
      ;%
    

    ;%
    ;% Add final counts to struct.
    ;%
    sigMap.nTotData = nTotData;
    


  ;%*******************
  ;% Create DWork Map *
  ;%*******************
      
    nTotData      = 0; %add to this count as we go
    nTotSects     = 3;
    sectIdxOffset = 1;
    
    ;%
    ;% Define dummy sections & preallocate arrays
    ;%
    dumSection.nData = -1;  
    dumSection.data  = [];
    
    dumData.logicalSrcIdx = -1;
    dumData.dtTransOffset = -1;
    
    ;%
    ;% Init/prealloc dworkMap
    ;%
    dworkMap.nSections           = nTotSects;
    dworkMap.sectIdxOffset       = sectIdxOffset;
      dworkMap.sections(nTotSects) = dumSection; %prealloc
    dworkMap.nTotData            = -1;
    
    ;%
    ;% Auto data (gm_hdlcoder_led_blinking_int_DW)
    ;%
      section.nData     = 1;
      section.data(1)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_int_DW.obj
	  section.data(1).logicalSrcIdx = 0;
	  section.data(1).dtTransOffset = 0;
	
      nTotData = nTotData + section.nData;
      dworkMap.sections(1) = section;
      clear section
      
      section.nData     = 2;
      section.data(2)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_int_DW.obj_b
	  section.data(1).logicalSrcIdx = 1;
	  section.data(1).dtTransOffset = 0;
	
	  ;% gm_hdlcoder_led_blinking_int_DW.obj_k
	  section.data(2).logicalSrcIdx = 2;
	  section.data(2).dtTransOffset = 1;
	
      nTotData = nTotData + section.nData;
      dworkMap.sections(2) = section;
      clear section
      
      section.nData     = 5;
      section.data(5)  = dumData; %prealloc
      
	  ;% gm_hdlcoder_led_blinking_int_DW.Scope1_PWORK.LoggedData
	  section.data(1).logicalSrcIdx = 3;
	  section.data(1).dtTransOffset = 0;
	
	  ;% gm_hdlcoder_led_blinking_int_DW.Scope2_PWORK.LoggedData
	  section.data(2).logicalSrcIdx = 4;
	  section.data(2).dtTransOffset = 1;
	
	  ;% gm_hdlcoder_led_blinking_int_DW.AXI4InterfaceWrite_PWORK
	  section.data(3).logicalSrcIdx = 5;
	  section.data(3).dtTransOffset = 2;
	
	  ;% gm_hdlcoder_led_blinking_int_DW.AXI4InterfaceWrite_PWORK_a
	  section.data(4).logicalSrcIdx = 6;
	  section.data(4).dtTransOffset = 3;
	
	  ;% gm_hdlcoder_led_blinking_int_DW.AXI4InterfaceRead_PWORK
	  section.data(5).logicalSrcIdx = 7;
	  section.data(5).dtTransOffset = 4;
	
      nTotData = nTotData + section.nData;
      dworkMap.sections(3) = section;
      clear section
      
    
      ;%
      ;% Non-auto Data (dwork)
      ;%
    

    ;%
    ;% Add final counts to struct.
    ;%
    dworkMap.nTotData = nTotData;
    


  ;%
  ;% Add individual maps to base struct.
  ;%

  targMap.paramMap  = paramMap;    
  targMap.signalMap = sigMap;
  targMap.dworkMap  = dworkMap;
  
  ;%
  ;% Add checksums to base struct.
  ;%


  targMap.checksum0 = 1926694319;
  targMap.checksum1 = 4276153837;
  targMap.checksum2 = 3264517925;
  targMap.checksum3 = 2549329910;

