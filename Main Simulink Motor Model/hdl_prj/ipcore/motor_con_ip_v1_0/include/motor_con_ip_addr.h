/*
 * File Name:         hdl_prj\ipcore\motor_con_ip_v1_0\include\motor_con_ip_addr.h
 * Description:       C Header File
 * Created:           2018-05-09 16:28:54
*/

#ifndef MOTOR_CON_IP_H_
#define MOTOR_CON_IP_H_

#define  IPCore_Reset_motor_con_ip               0x0  //write 0x1 to bit 0 to reset IP core
#define  IPCore_Enable_motor_con_ip              0x4  //enabled (by default) when bit 0 is 0x1
#define  Rotate_speed_Data_motor_con_ip          0x100  //data register for Inport Rotate_speed
#define  Rotate_direction_Data_motor_con_ip      0x104  //data register for Inport Rotate_direction
#define  readback_speed_pwm_Data_motor_con_ip    0x108  //data register for Outport readback_speed_pwm
#define  readback_direction__Data_motor_con_ip   0x10C  //data register for Outport readback_direction 

#endif /* MOTOR_CON_IP_H_ */
