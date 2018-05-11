/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: gm_testing_interface_types.h
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

#ifndef RTW_HEADER_gm_testing_interface_types_h_
#define RTW_HEADER_gm_testing_interface_types_h_
#include "rtwtypes.h"
#include "multiword_types.h"
#ifndef typedef_zynq_AXIRead_gm_testing_inter_T
#define typedef_zynq_AXIRead_gm_testing_inter_T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIRead_gm_testing_inter_T;

#endif                                 /*typedef_zynq_AXIRead_gm_testing_inter_T*/

#ifndef typedef_zynq_AXIWrite_gm_testing_inte_T
#define typedef_zynq_AXIWrite_gm_testing_inte_T

typedef struct {
  int32_T isInitialized;
  uint32_T DeviceState;
} zynq_AXIWrite_gm_testing_inte_T;

#endif                                 /*typedef_zynq_AXIWrite_gm_testing_inte_T*/

#ifndef typedef_struct_T_gm_testing_interface_T
#define typedef_struct_T_gm_testing_interface_T

typedef struct {
  char_T f1[4];
} struct_T_gm_testing_interface_T;

#endif                                 /*typedef_struct_T_gm_testing_interface_T*/

#ifndef typedef_struct_T_gm_testing_interfa_c_T
#define typedef_struct_T_gm_testing_interfa_c_T

typedef struct {
  char_T f1[8];
} struct_T_gm_testing_interfa_c_T;

#endif                                 /*typedef_struct_T_gm_testing_interfa_c_T*/

#ifndef typedef_struct_T_gm_testing_interf_cd_T
#define typedef_struct_T_gm_testing_interf_cd_T

typedef struct {
  char_T f1[7];
} struct_T_gm_testing_interf_cd_T;

#endif                                 /*typedef_struct_T_gm_testing_interf_cd_T*/

#ifndef typedef_struct_T_gm_testing_inter_cdr_T
#define typedef_struct_T_gm_testing_inter_cdr_T

typedef struct {
  char_T f1[11];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  real_T f5;
} struct_T_gm_testing_inter_cdr_T;

#endif                                 /*typedef_struct_T_gm_testing_inter_cdr_T*/

#ifndef typedef_struct_T_gm_testing_inte_cdry_T
#define typedef_struct_T_gm_testing_inte_cdry_T

typedef struct {
  char_T f1[8];
  char_T f2[7];
  char_T f3[6];
  char_T f4[2];
  uint32_T f5;
} struct_T_gm_testing_inte_cdry_T;

#endif                                 /*typedef_struct_T_gm_testing_inte_cdry_T*/

#ifndef typedef_struct_T_gm_testing_int_cdryd_T
#define typedef_struct_T_gm_testing_int_cdryd_T

typedef struct {
  real_T f1[2];
} struct_T_gm_testing_int_cdryd_T;

#endif                                 /*typedef_struct_T_gm_testing_int_cdryd_T*/

/* Parameters (auto storage) */
typedef struct P_gm_testing_interface_T_ P_gm_testing_interface_T;

/* Forward declaration for rtModel */
typedef struct tag_RTM_gm_testing_interface_T RT_MODEL_gm_testing_interface_T;

#endif                                 /* RTW_HEADER_gm_testing_interface_types_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
