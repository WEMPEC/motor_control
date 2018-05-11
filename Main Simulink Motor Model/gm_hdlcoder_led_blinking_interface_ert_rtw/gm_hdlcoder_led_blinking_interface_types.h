/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: gm_hdlcoder_led_blinking_interface_types.h
 *
 * Code generated for Simulink model 'gm_hdlcoder_led_blinking_interface'.
 *
 * Model version                  : 1.71
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Thu May 03 10:04:16 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: ARM Compatible->ARM Cortex
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_gm_hdlcoder_led_blinking_interface_types_h_
#define RTW_HEADER_gm_hdlcoder_led_blinking_interface_types_h_
#include "rtwtypes.h"
#include "multiword_types.h"
#ifndef typedef_zynq_AXIRead_gm_hdlcoder_led__T
#define typedef_zynq_AXIRead_gm_hdlcoder_led__T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIRead_gm_hdlcoder_led__T;

#endif                                 /*typedef_zynq_AXIRead_gm_hdlcoder_led__T*/

#ifndef typedef_zynq_AXIWrite_gm_hdlcoder_led_T
#define typedef_zynq_AXIWrite_gm_hdlcoder_led_T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIWrite_gm_hdlcoder_led_T;

#endif                                 /*typedef_zynq_AXIWrite_gm_hdlcoder_led_T*/

#ifndef typedef_struct_T_gm_hdlcoder_led_blin_T
#define typedef_struct_T_gm_hdlcoder_led_blin_T

typedef struct {
  char_T f1[4];
} struct_T_gm_hdlcoder_led_blin_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_led_blin_T*/

#ifndef typedef_struct_T_gm_hdlcoder_led_bl_h_T
#define typedef_struct_T_gm_hdlcoder_led_bl_h_T

typedef struct {
  char_T f1[8];
} struct_T_gm_hdlcoder_led_bl_h_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_led_bl_h_T*/

#ifndef typedef_struct_T_gm_hdlcoder_led_b_he_T
#define typedef_struct_T_gm_hdlcoder_led_b_he_T

typedef struct {
  char_T f1[7];
} struct_T_gm_hdlcoder_led_b_he_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_led_b_he_T*/

#ifndef typedef_struct_T_gm_hdlcoder_led__heo_T
#define typedef_struct_T_gm_hdlcoder_led__heo_T

typedef struct {
  char_T f1[11];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  real_T f5;
} struct_T_gm_hdlcoder_led__heo_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_led__heo_T*/

#ifndef typedef_struct_T_gm_hdlcoder_led_heol_T
#define typedef_struct_T_gm_hdlcoder_led_heol_T

typedef struct {
  char_T f1[8];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  uint32_T f5;
} struct_T_gm_hdlcoder_led_heol_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_led_heol_T*/

#ifndef typedef_struct_T_gm_hdlcoder_le_heol0_T
#define typedef_struct_T_gm_hdlcoder_le_heol0_T

typedef struct {
  real_T f1[2];
} struct_T_gm_hdlcoder_le_heol0_T;

#endif                                 /*typedef_struct_T_gm_hdlcoder_le_heol0_T*/

/* Parameters (auto storage) */
typedef struct P_gm_hdlcoder_led_blinking_in_T_ P_gm_hdlcoder_led_blinking_in_T;

/* Forward declaration for rtModel */
typedef struct tag_RTM_gm_hdlcoder_led_blink_T RT_MODEL_gm_hdlcoder_led_blin_T;

#endif                                 /* RTW_HEADER_gm_hdlcoder_led_blinking_interface_types_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
