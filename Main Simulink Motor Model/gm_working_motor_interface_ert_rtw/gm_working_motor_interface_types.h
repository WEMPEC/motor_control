/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: gm_working_motor_interface_types.h
 *
 * Code generated for Simulink model 'gm_working_motor_interface'.
 *
 * Model version                  : 1.60
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Wed May 09 16:54:44 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: ARM Compatible->ARM Cortex
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_gm_working_motor_interface_types_h_
#define RTW_HEADER_gm_working_motor_interface_types_h_
#include "rtwtypes.h"
#include "multiword_types.h"
#ifndef typedef_zynq_AXIRead_gm_working_motor_T
#define typedef_zynq_AXIRead_gm_working_motor_T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIRead_gm_working_motor_T;

#endif                                 /*typedef_zynq_AXIRead_gm_working_motor_T*/

#ifndef typedef_zynq_AXIWrite_gm_working_moto_T
#define typedef_zynq_AXIWrite_gm_working_moto_T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIWrite_gm_working_moto_T;

#endif                                 /*typedef_zynq_AXIWrite_gm_working_moto_T*/

#ifndef typedef_struct_T_gm_working_motor_int_T
#define typedef_struct_T_gm_working_motor_int_T

typedef struct {
  char_T f1[4];
} struct_T_gm_working_motor_int_T;

#endif                                 /*typedef_struct_T_gm_working_motor_int_T*/

#ifndef typedef_struct_T_gm_working_motor_i_f_T
#define typedef_struct_T_gm_working_motor_i_f_T

typedef struct {
  char_T f1[8];
} struct_T_gm_working_motor_i_f_T;

#endif                                 /*typedef_struct_T_gm_working_motor_i_f_T*/

#ifndef typedef_struct_T_gm_working_motor__f3_T
#define typedef_struct_T_gm_working_motor__f3_T

typedef struct {
  char_T f1[7];
} struct_T_gm_working_motor__f3_T;

#endif                                 /*typedef_struct_T_gm_working_motor__f3_T*/

#ifndef typedef_struct_T_gm_working_motor_f3y_T
#define typedef_struct_T_gm_working_motor_f3y_T

typedef struct {
  char_T f1[11];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  real_T f5;
} struct_T_gm_working_motor_f3y_T;

#endif                                 /*typedef_struct_T_gm_working_motor_f3y_T*/

#ifndef typedef_struct_T_gm_working_moto_f3yk_T
#define typedef_struct_T_gm_working_moto_f3yk_T

typedef struct {
  char_T f1[8];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  uint32_T f5;
} struct_T_gm_working_moto_f3yk_T;

#endif                                 /*typedef_struct_T_gm_working_moto_f3yk_T*/

#ifndef typedef_struct_T_gm_working_mot_f3ykz_T
#define typedef_struct_T_gm_working_mot_f3ykz_T

typedef struct {
  real_T f1[2];
} struct_T_gm_working_mot_f3ykz_T;

#endif                                 /*typedef_struct_T_gm_working_mot_f3ykz_T*/

/* Parameters (auto storage) */
typedef struct P_gm_working_motor_interface_T_ P_gm_working_motor_interface_T;

/* Forward declaration for rtModel */
typedef struct tag_RTM_gm_working_motor_inte_T RT_MODEL_gm_working_motor_int_T;

#endif                                 /* RTW_HEADER_gm_working_motor_interface_types_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
