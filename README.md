# ECE_699_project
A project that lets you control the motor on the Zedboard with your computer and receive feedback


Current Projects:

1. Hello world project

    After running the project, at the PuTTy window you can see the hello world statement printed out. Does not need any GPIO pin connections. Use the hardware as provided.
    
2. GPIO LED project

    After loading the project, the LEDs will switch on and off, alternating between odd and even LEDs. Created by adding one extra GPIO pin into the schematics and coded the beahvior in Vivado SDK. 
    
3. Motor Control project

    The motor connected by the PMOD to the board will start turning clockwise or counter clockwise if the user press the top or button push buttons on the right lower corner of the Zedboard. Created by adding two GPIO devices into the schematics, using push buttons as input and the motor as output. Also coded the beahvior in Vivado SDK. 
    
    
Future Projects:

4. Motor Control Part 2 project

    Read the driven motors output as input and analyze its speed and rpm. Use difference PWMs to drive the enable pin to generate different drive voltage and see how the rpm changes accordingly.

5. Ultimate goal

    Use Simulink to add the MathWorks FOC IP into the HDL logic to test with different models and achieve real time data collection and showcase. Also possibly create a ADC, Controller interface, and position speed processing.
