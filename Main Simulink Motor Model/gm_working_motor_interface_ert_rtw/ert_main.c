/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: ert_main.c
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

#include <stdio.h>
#include <stdlib.h>
#include "gm_working_motor_interface.h"
#include "gm_working_motor_interface_private.h"
#include "rtwtypes.h"
#include "limits.h"
#include "linuxinitialize.h"
#define UNUSED(x)                      x = x

/* Function prototype declaration*/
void exitFcn(int sig);
void *terminateTask(void *arg);
void *baseRateTask(void *arg);
void *subrateTask(void *arg);
volatile boolean_T runModel = true;
sem_t stopSem;
sem_t baserateTaskSem;
pthread_t schedulerThread;
pthread_t baseRateThread;
unsigned long threadJoinStatus[8];
int terminatingmodel = 0;
void *baseRateTask(void *arg)
{
  runModel = (rtmGetErrorStatus(gm_working_motor_interface_M) == (NULL)) &&
    !rtmGetStopRequested(gm_working_motor_interface_M);
  while (runModel) {
    sem_wait(&baserateTaskSem);

    /* External mode */
    {
      boolean_T rtmStopReq = false;
      rtExtModePauseIfNeeded(gm_working_motor_interface_M->extModeInfo, 1,
        &rtmStopReq);
      if (rtmStopReq) {
        rtmSetStopRequested(gm_working_motor_interface_M, true);
      }

      if (rtmGetStopRequested(gm_working_motor_interface_M) == true) {
        rtmSetErrorStatus(gm_working_motor_interface_M, "Simulation finished");
        break;
      }
    }

    /* External mode */
    {
      boolean_T rtmStopReq = false;
      rtExtModeOneStep(gm_working_motor_interface_M->extModeInfo, 1, &rtmStopReq);
      if (rtmStopReq) {
        rtmSetStopRequested(gm_working_motor_interface_M, true);
      }
    }

    gm_working_motor_interface_step();

    /* Get model outputs here */
    rtExtModeCheckEndTrigger();
    runModel = (rtmGetErrorStatus(gm_working_motor_interface_M) == (NULL)) &&
      !rtmGetStopRequested(gm_working_motor_interface_M);
  }

  runModel = 0;
  terminateTask(arg);
  pthread_exit((void *)0);
  return NULL;
}

void exitFcn(int sig)
{
  UNUSED(sig);
  rtmSetErrorStatus(gm_working_motor_interface_M, "stopping the model");
}

void *terminateTask(void *arg)
{
  UNUSED(arg);
  terminatingmodel = 1;

  {
    runModel = 0;
  }

  rtExtModeShutdown(1);

  /* Disable rt_OneStep() here */

  /* Terminate model */
  gm_working_motor_interface_terminate();
  sem_post(&stopSem);
  return NULL;
}

int main(int argc, char **argv)
{
  UNUSED(argc);
  UNUSED(argv);
  rtmSetErrorStatus(gm_working_motor_interface_M, 0);
  rtExtModeParseArgs(argc, (const char_T **)argv, NULL);

  /* Initialize model */
  gm_working_motor_interface_initialize();

  /* External mode */
  rtSetTFinalForExtMode(&rtmGetTFinal(gm_working_motor_interface_M));
  rtExtModeCheckInit(1);

  {
    boolean_T rtmStopReq = false;
    rtExtModeWaitForStartPkt(gm_working_motor_interface_M->extModeInfo, 1,
      &rtmStopReq);
    if (rtmStopReq) {
      rtmSetStopRequested(gm_working_motor_interface_M, true);
    }
  }

  rtERTExtModeStartMsg();

  /* Call RTOS Initialization function */
  myRTOSInit(0.1, 0);

  /* Wait for stop semaphore */
  sem_wait(&stopSem);
  return 0;
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
