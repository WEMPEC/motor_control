/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: gm_testing_interface.c
 *
 * Code generated for Simulink model 'gm_testing_interface'.
 *
 * Model version                  : 1.46
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Mon May 07 09:43:32 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: ARM Compatible->ARM Cortex
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "gm_testing_interface.h"
#include "gm_testing_interface_private.h"
#include "gm_testing_interface_dt.h"
#define gm_testing__RegisterOffset_cdry (256U)
#define gm_testing_i_RegisterOffset_cdr (260U)
#define gm_testing_in_RegisterOffset_cd (264U)
#define gm_testing_int_RegisterOffset_c (268U)
#define gm_testing_inter_RegisterOffset (272U)

/* user code (top of source file) */
/* System '<Root>/motor_controller' */
#include "axi_lct.h"

/* Block signals (auto storage) */
B_gm_testing_interface_T gm_testing_interface_B;

/* Block states (auto storage) */
DW_gm_testing_interface_T gm_testing_interface_DW;

/* Real-time model */
RT_MODEL_gm_testing_interface_T gm_testing_interface_M_;
RT_MODEL_gm_testing_interface_T *const gm_testing_interface_M =
  &gm_testing_interface_M_;

/* Model step function */
void gm_testing_interface_step(void)
{
  AXI4_struct * p_state;
  uint32_T rtb_AXI4Lite_Write_Rotate_speed;
  uint8_T rtb_SliderGain;
  boolean_T rtb_ManualSwitch;
  int32_T tmp;

  /* Gain: '<S1>/Slider Gain' incorporates:
   *  Constant: '<Root>/Constant2'
   */
  tmp = (int32_T)((uint32_T)gm_testing_interface_P.SliderGain_gain *
                  gm_testing_interface_P.Constant2_Value);
  if ((uint32_T)tmp > 15U) {
    tmp = 15;
  }

  rtb_SliderGain = (uint8_T)tmp;

  /* End of Gain: '<S1>/Slider Gain' */

  /* ManualSwitch: '<Root>/Manual Switch' incorporates:
   *  Constant: '<Root>/Constant'
   *  Constant: '<Root>/Constant1'
   */
  if (gm_testing_interface_P.ManualSwitch_CurrentSetting == 1) {
    rtb_ManualSwitch = gm_testing_interface_P.Constant_Value;
  } else {
    rtb_ManualSwitch = gm_testing_interface_P.Constant1_Value;
  }

  /* End of ManualSwitch: '<Root>/Manual Switch' */

  /* Outputs for Atomic SubSystem: '<Root>/motor_controller' */

  /* DataTypeConversion: '<S4>/AXI4Lite_Write_Rotate_speed_DTC' */
  rtb_AXI4Lite_Write_Rotate_speed = rtb_SliderGain;

  /* Start for MATLABSystem: '<S9>/AXI4-Interface Write' incorporates:
   *  MATLABSystem: '<S9>/AXI4-Interface Write'
   */
  p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_p.DeviceState);
  AXI4LITE_WRITE(p_state, &rtb_AXI4Lite_Write_Rotate_speed,
                 gm_testing__RegisterOffset_cdry, 4U);

  /* DataTypeConversion: '<S4>/AXI4Lite_Write_Rotate_direction_DTC' */
  rtb_AXI4Lite_Write_Rotate_speed = rtb_ManualSwitch;

  /* Start for MATLABSystem: '<S8>/AXI4-Interface Write' incorporates:
   *  MATLABSystem: '<S8>/AXI4-Interface Write'
   */
  p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_m.DeviceState);
  AXI4LITE_WRITE(p_state, &rtb_AXI4Lite_Write_Rotate_speed,
                 gm_testing_i_RegisterOffset_cdr, 4U);

  /* Start for MATLABSystem: '<S7>/AXI4-Interface Read' incorporates:
   *  MATLABSystem: '<S7>/AXI4-Interface Read'
   */
  p_state = (AXI4_struct *)(gm_testing_interface_DW.obj.DeviceState);
  AXI4LITE_READ(p_state, &rtb_AXI4Lite_Write_Rotate_speed,
                gm_testing_in_RegisterOffset_cd, 4U);

  /* DataTypeConversion: '<S3>/AXI4Lite_Read_readback_speed_pwm_DTC' incorporates:
   *  MATLABSystem: '<S7>/AXI4-Interface Read'
   */
  gm_testing_interface_B.AXI4Lite_Read_readback_speed_pw = (uint8_T)
    rtb_AXI4Lite_Write_Rotate_speed;

  /* Start for MATLABSystem: '<S6>/AXI4-Interface Read' incorporates:
   *  MATLABSystem: '<S6>/AXI4-Interface Read'
   */
  p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_b.DeviceState);
  AXI4LITE_READ(p_state, &rtb_AXI4Lite_Write_Rotate_speed,
                gm_testing_int_RegisterOffset_c, 4U);

  /* DataTypeConversion: '<S3>/AXI4Lite_Read_readback_direction _DTC' incorporates:
   *  MATLABSystem: '<S6>/AXI4-Interface Read'
   */
  gm_testing_interface_B.AXI4Lite_Read_readback_directio = (uint8_T)
    rtb_AXI4Lite_Write_Rotate_speed;

  /* Start for MATLABSystem: '<S5>/AXI4-Interface Read' incorporates:
   *  MATLABSystem: '<S5>/AXI4-Interface Read'
   */
  p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_e.DeviceState);
  AXI4LITE_READ(p_state, &rtb_AXI4Lite_Write_Rotate_speed,
                gm_testing_inter_RegisterOffset, 4U);

  /* DataTypeConversion: '<S3>/AXI4Lite_Read_ReadBackAll_DTC' incorporates:
   *  MATLABSystem: '<S5>/AXI4-Interface Read'
   */
  gm_testing_interface_B.AXI4Lite_Read_ReadBackAll_DTC = (uint8_T)
    rtb_AXI4Lite_Write_Rotate_speed;

  /* DataTypeConversion: '<S3>/EXTERNALPORT_Motor_DTC' */
  gm_testing_interface_B.EXTERNALPORT_Motor_DTC = 0U;

  /* End of Outputs for SubSystem: '<Root>/motor_controller' */

  /* External mode */
  rtExtModeUploadCheckTrigger(1);

  {                                    /* Sample time: [0.1s, 0.0s] */
    rtExtModeUpload(0, gm_testing_interface_M->Timing.taskTime0);
  }

  /* signal main to stop simulation */
  {                                    /* Sample time: [0.1s, 0.0s] */
    if ((rtmGetTFinal(gm_testing_interface_M)!=-1) &&
        !((rtmGetTFinal(gm_testing_interface_M)-
           gm_testing_interface_M->Timing.taskTime0) >
          gm_testing_interface_M->Timing.taskTime0 * (DBL_EPSILON))) {
      rtmSetErrorStatus(gm_testing_interface_M, "Simulation finished");
    }

    if (rtmGetStopRequested(gm_testing_interface_M)) {
      rtmSetErrorStatus(gm_testing_interface_M, "Simulation finished");
    }
  }

  /* Update absolute time for base rate */
  /* The "clockTick0" counts the number of times the code of this task has
   * been executed. The absolute time is the multiplication of "clockTick0"
   * and "Timing.stepSize0". Size of "clockTick0" ensures timer will not
   * overflow during the application lifespan selected.
   */
  gm_testing_interface_M->Timing.taskTime0 =
    (++gm_testing_interface_M->Timing.clockTick0) *
    gm_testing_interface_M->Timing.stepSize0;
}

/* Model initialize function */
void gm_testing_interface_initialize(void)
{
  /* Registration code */

  /* initialize real-time model */
  (void) memset((void *)gm_testing_interface_M, 0,
                sizeof(RT_MODEL_gm_testing_interface_T));
  rtmSetTFinal(gm_testing_interface_M, -1);
  gm_testing_interface_M->Timing.stepSize0 = 0.1;

  /* External mode info */
  gm_testing_interface_M->Sizes.checksums[0] = (3232349429U);
  gm_testing_interface_M->Sizes.checksums[1] = (180148159U);
  gm_testing_interface_M->Sizes.checksums[2] = (2083711930U);
  gm_testing_interface_M->Sizes.checksums[3] = (2111555329U);

  {
    static const sysRanDType rtAlwaysEnabled = SUBSYS_RAN_BC_ENABLE;
    static RTWExtModeInfo rt_ExtModeInfo;
    static const sysRanDType *systemRan[7];
    gm_testing_interface_M->extModeInfo = (&rt_ExtModeInfo);
    rteiSetSubSystemActiveVectorAddresses(&rt_ExtModeInfo, systemRan);
    systemRan[0] = &rtAlwaysEnabled;
    systemRan[1] = &rtAlwaysEnabled;
    systemRan[2] = &rtAlwaysEnabled;
    systemRan[3] = &rtAlwaysEnabled;
    systemRan[4] = &rtAlwaysEnabled;
    systemRan[5] = &rtAlwaysEnabled;
    systemRan[6] = &rtAlwaysEnabled;
    rteiSetModelMappingInfoPtr(gm_testing_interface_M->extModeInfo,
      &gm_testing_interface_M->SpecialInfo.mappingInfo);
    rteiSetChecksumsPtr(gm_testing_interface_M->extModeInfo,
                        gm_testing_interface_M->Sizes.checksums);
    rteiSetTPtr(gm_testing_interface_M->extModeInfo, rtmGetTPtr
                (gm_testing_interface_M));
  }

  /* block I/O */
  (void) memset(((void *) &gm_testing_interface_B), 0,
                sizeof(B_gm_testing_interface_T));

  /* states (dwork) */
  (void) memset((void *)&gm_testing_interface_DW, 0,
                sizeof(DW_gm_testing_interface_T));

  /* data type transition information */
  {
    static DataTypeTransInfo dtInfo;
    (void) memset((char_T *) &dtInfo, 0,
                  sizeof(dtInfo));
    gm_testing_interface_M->SpecialInfo.mappingInfo = (&dtInfo);
    dtInfo.numDataTypes = 17;
    dtInfo.dataTypeSizes = &rtDataTypeSizes[0];
    dtInfo.dataTypeNames = &rtDataTypeNames[0];

    /* Block I/O transition table */
    dtInfo.BTransTable = &rtBTransTable;

    /* Parameters transition table */
    dtInfo.PTransTable = &rtPTransTable;
  }

  {
    AXI4_struct * p_state;
    static const char_T tmp[14] = { '/', 'd', 'e', 'v', '/', 'm', 'w', 'i', 'p',
      'c', 'o', 'r', 'e', '\x00' };

    char_T tmp_0[14];
    int32_T i;

    {
      /* user code (Start function Header) */

      /* System '<Root>/motor_controller' */
      AXI4LITE_RESET_IPCORE("/dev/mwipcore");

      /* Start for Atomic SubSystem: '<Root>/motor_controller' */

      /* Start for MATLABSystem: '<S9>/AXI4-Interface Write' */
      gm_testing_interface_DW.obj_p.isInitialized = 0;
      gm_testing_interface_DW.obj_p.isInitialized = 1;
      gm_testing_interface_DW.obj_p.DeviceState = 0U;
      for (i = 0; i < 14; i++) {
        tmp_0[i] = tmp[i];
      }

      p_state = AXI4LITE_INIT(tmp_0);
      gm_testing_interface_DW.obj_p.DeviceState = (uint32_T)p_state;

      /* End of Start for MATLABSystem: '<S9>/AXI4-Interface Write' */

      /* Start for MATLABSystem: '<S8>/AXI4-Interface Write' */
      gm_testing_interface_DW.obj_m.isInitialized = 0;
      gm_testing_interface_DW.obj_m.isInitialized = 1;
      gm_testing_interface_DW.obj_m.DeviceState = 0U;
      for (i = 0; i < 14; i++) {
        tmp_0[i] = tmp[i];
      }

      p_state = AXI4LITE_INIT(tmp_0);
      gm_testing_interface_DW.obj_m.DeviceState = (uint32_T)p_state;

      /* End of Start for MATLABSystem: '<S8>/AXI4-Interface Write' */

      /* Start for MATLABSystem: '<S7>/AXI4-Interface Read' */
      gm_testing_interface_DW.obj.isInitialized = 0;
      gm_testing_interface_DW.obj.isInitialized = 1;
      gm_testing_interface_DW.obj.DeviceState = 0U;
      for (i = 0; i < 14; i++) {
        tmp_0[i] = tmp[i];
      }

      p_state = AXI4LITE_INIT(tmp_0);
      gm_testing_interface_DW.obj.DeviceState = (uint32_T)p_state;

      /* End of Start for MATLABSystem: '<S7>/AXI4-Interface Read' */

      /* Start for MATLABSystem: '<S6>/AXI4-Interface Read' */
      gm_testing_interface_DW.obj_b.isInitialized = 0;
      gm_testing_interface_DW.obj_b.isInitialized = 1;
      gm_testing_interface_DW.obj_b.DeviceState = 0U;
      for (i = 0; i < 14; i++) {
        tmp_0[i] = tmp[i];
      }

      p_state = AXI4LITE_INIT(tmp_0);
      gm_testing_interface_DW.obj_b.DeviceState = (uint32_T)p_state;

      /* End of Start for MATLABSystem: '<S6>/AXI4-Interface Read' */

      /* Start for MATLABSystem: '<S5>/AXI4-Interface Read' */
      gm_testing_interface_DW.obj_e.isInitialized = 0;
      gm_testing_interface_DW.obj_e.isInitialized = 1;
      gm_testing_interface_DW.obj_e.DeviceState = 0U;
      for (i = 0; i < 14; i++) {
        tmp_0[i] = tmp[i];
      }

      p_state = AXI4LITE_INIT(tmp_0);
      gm_testing_interface_DW.obj_e.DeviceState = (uint32_T)p_state;

      /* End of Start for MATLABSystem: '<S5>/AXI4-Interface Read' */

      /* End of Start for SubSystem: '<Root>/motor_controller' */
    }
  }
}

/* Model terminate function */
void gm_testing_interface_terminate(void)
{
  AXI4_struct * p_state;

  /* Terminate for Atomic SubSystem: '<Root>/motor_controller' */

  /* Start for MATLABSystem: '<S9>/AXI4-Interface Write' incorporates:
   *  Terminate for MATLABSystem: '<S9>/AXI4-Interface Write'
   */
  if (gm_testing_interface_DW.obj_p.isInitialized == 1) {
    gm_testing_interface_DW.obj_p.isInitialized = 2;
    p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_p.DeviceState);
    AXI4LITE_TERMINATE(p_state);
  }

  /* End of Start for MATLABSystem: '<S9>/AXI4-Interface Write' */

  /* Start for MATLABSystem: '<S8>/AXI4-Interface Write' incorporates:
   *  Terminate for MATLABSystem: '<S8>/AXI4-Interface Write'
   */
  if (gm_testing_interface_DW.obj_m.isInitialized == 1) {
    gm_testing_interface_DW.obj_m.isInitialized = 2;
    p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_m.DeviceState);
    AXI4LITE_TERMINATE(p_state);
  }

  /* End of Start for MATLABSystem: '<S8>/AXI4-Interface Write' */

  /* Start for MATLABSystem: '<S7>/AXI4-Interface Read' incorporates:
   *  Terminate for MATLABSystem: '<S7>/AXI4-Interface Read'
   */
  if (gm_testing_interface_DW.obj.isInitialized == 1) {
    gm_testing_interface_DW.obj.isInitialized = 2;
    p_state = (AXI4_struct *)(gm_testing_interface_DW.obj.DeviceState);
    AXI4LITE_TERMINATE(p_state);
  }

  /* End of Start for MATLABSystem: '<S7>/AXI4-Interface Read' */

  /* Start for MATLABSystem: '<S6>/AXI4-Interface Read' incorporates:
   *  Terminate for MATLABSystem: '<S6>/AXI4-Interface Read'
   */
  if (gm_testing_interface_DW.obj_b.isInitialized == 1) {
    gm_testing_interface_DW.obj_b.isInitialized = 2;
    p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_b.DeviceState);
    AXI4LITE_TERMINATE(p_state);
  }

  /* End of Start for MATLABSystem: '<S6>/AXI4-Interface Read' */

  /* Start for MATLABSystem: '<S5>/AXI4-Interface Read' incorporates:
   *  Terminate for MATLABSystem: '<S5>/AXI4-Interface Read'
   */
  if (gm_testing_interface_DW.obj_e.isInitialized == 1) {
    gm_testing_interface_DW.obj_e.isInitialized = 2;
    p_state = (AXI4_struct *)(gm_testing_interface_DW.obj_e.DeviceState);
    AXI4LITE_TERMINATE(p_state);
  }

  /* End of Start for MATLABSystem: '<S5>/AXI4-Interface Read' */

  /* End of Terminate for SubSystem: '<Root>/motor_controller' */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
