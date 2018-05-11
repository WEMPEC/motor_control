# ECE 699 project - Motor Control Platform
A project that lets you control the motor on the Zedboard with your computer and receive feedback


Current Projects:

1. Hello world project

    After running the project, at the PuTTy window you can see the hello world statement printed out. Does not need any GPIO pin connections. Use the hardware as provided.
    
2. GPIO LED project

    After loading the project, the LEDs will switch on and off, alternating between odd and even LEDs. Created by adding one extra GPIO pin into the schematics and coded the beahvior in Vivado SDK. 
    
3. Motor Control project

    The motor connected by the PMOD to the board will start turning clockwise or counter clockwise if the user press the top or button push buttons on the right lower corner of the Zedboard. Created by adding two GPIO devices into the schematics, using push buttons as input and the motor as output. Also coded the beahvior in Vivado SDK. 

4. Main Project - LED Control project
    
    This project uses Simulink's provided default model to make sure all the connections and software hardware packages are setup correctly on MATLAB, Simulink, and Zedboard. It counts the LED light up or down with a speed that we can specify on the computer screen.
    
5. Main Project - Motor Control Part 2 project

    This project uses Simulink to draw schematics, where we draw out the hardware (compiled and loaded to the FPGA) through the HDL coder and create slider gains and switches for the software interface model. It is also assisted by two downloaded packages - HDL coder and the Embedder package. See the .slx files in the folder for more information. Currently, we can drive the motor with different speed and direction specified real time by the user on the computer screen and can get real time data back for more future work (although currently is sampling slower than expected).
    
Future Projects:

6. Ultimate goal

    Read back data faster then currently and possibly change the PWM back to duty cycle or speed. Use Simulink to add the MathWorks FOC IP into the HDL logic to test with different models and achieve real time data collection and showcase. Also possibly create a ADC, Controller interface, and position speed processing.
