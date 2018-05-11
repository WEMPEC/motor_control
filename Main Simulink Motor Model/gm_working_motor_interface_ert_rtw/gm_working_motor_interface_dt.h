/*
 * gm_working_motor_interface_dt.h
 *
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * Code generation for model "gm_working_motor_interface".
 *
 * Model version              : 1.60
 * Simulink Coder version : 8.12 (R2017a) 16-Feb-2017
 * C source code generated on : Wed May 09 16:54:44 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: ARM Compatible->ARM Cortex
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "ext_types.h"

/* data type size table */
static uint_T rtDataTypeSizes[] = {
  sizeof(real_T),
  sizeof(real32_T),
  sizeof(int8_T),
  sizeof(uint8_T),
  sizeof(int16_T),
  sizeof(uint16_T),
  sizeof(int32_T),
  sizeof(uint32_T),
  sizeof(boolean_T),
  sizeof(fcn_call_T),
  sizeof(int_T),
  sizeof(pointer_T),
  sizeof(action_T),
  2*sizeof(uint32_T),
  sizeof(uint8_T),
  sizeof(zynq_AXIRead_gm_working_motor_T),
  sizeof(zynq_AXIWrite_gm_working_moto_T)
};

/* data type name table */
static const char_T * rtDataTypeNames[] = {
  "real_T",
  "real32_T",
  "int8_T",
  "uint8_T",
  "int16_T",
  "uint16_T",
  "int32_T",
  "uint32_T",
  "boolean_T",
  "fcn_call_T",
  "int_T",
  "pointer_T",
  "action_T",
  "timer_uint32_pair_T",
  "uint8_T",
  "zynq_AXIRead_gm_working_motor_T",
  "zynq_AXIWrite_gm_working_moto_T"
};

/* data type transitions for block I/O structure */
static DataTypeTransition rtBTransitions[] = {
  { (char_T *)(&gm_working_motor_interface_B.AXI4Lite_Read_readback_speed_pw), 3,
    0, 3 }
  ,

  { (char_T *)(&gm_working_motor_interface_DW.obj), 15, 0, 2 },

  { (char_T *)(&gm_working_motor_interface_DW.obj_k), 16, 0, 2 },

  { (char_T *)(&gm_working_motor_interface_DW.Scope1_PWORK.LoggedData), 11, 0, 7
  }
};

/* data type transition table for block I/O structure */
static DataTypeTransitionTable rtBTransTable = {
  4U,
  rtBTransitions
};

/* data type transitions for Parameters structure */
static DataTypeTransition rtPTransitions[] = {
  { (char_T *)(&gm_working_motor_interface_P.SliderGain_gain), 14, 0, 2 },

  { (char_T *)(&gm_working_motor_interface_P.Constant_Value), 8, 0, 2 },

  { (char_T *)(&gm_working_motor_interface_P.Constant2_Value), 14, 0, 1 }
};

/* data type transition table for Parameters structure */
static DataTypeTransitionTable rtPTransTable = {
  3U,
  rtPTransitions
};

/* [EOF] gm_working_motor_interface_dt.h */
