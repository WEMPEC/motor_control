###########################################################################
## Makefile generated for Simulink model 'gm_testing_interface'. 
## 
## Makefile     : gm_testing_interface.mk
## Generated on : Tue Apr 17 19:05:14 2018
## MATLAB Coder version: 3.3 (R2017a)
## 
## Build Info:
## 
## Final product: $(RELATIVE_PATH_TO_ANCHOR)/gm_testing_interface
## Product type : executable
## Build type   : Top-Level Standalone Executable
## 
###########################################################################

###########################################################################
## MACROS
###########################################################################

# Macro Descriptions:
# PRODUCT_NAME            Name of the system to build
# MAKEFILE                Name of this makefile
# COMPUTER                Computer type. See the MATLAB "computer" command.

PRODUCT_NAME              = gm_testing_interface
MAKEFILE                  = gm_testing_interface.mk
COMPUTER                  = PCWIN64
MATLAB_ROOT               = D:/MATLAB
MATLAB_BIN                = D:/MATLAB/bin
MATLAB_ARCH_BIN           = D:/MATLAB/bin/win64
MASTER_ANCHOR_DIR         = 
START_DIR                 = C:/Users/hyang344/Documents/MATLAB
ARCH                      = win64
SOLVER                    = 
SOLVER_OBJ                = 
CLASSIC_INTERFACE         = 0
TGT_FCN_LIB               = None
MODEL_HAS_DYNAMICALLY_LOADED_SFCNS = 0
MODELREF_LINK_RSPFILE_NAME = gm_testing_interface_ref.rsp
RELATIVE_PATH_TO_ANCHOR   = ..
C_STANDARD_OPTS           = 
CPP_STANDARD_OPTS         = 

###########################################################################
## TOOLCHAIN SPECIFICATIONS
###########################################################################

# Toolchain Name:          Xilinx Software Development Kit (SDK)  | gmake (64-bit Windows)
# Supported Version(s):    
# ToolchainInfo Version:   R2017a
# Specification Revision:  1.0
# 
#-------------------------------------------
# Macros assumed to be defined elsewhere
#-------------------------------------------

# XILINX_ARM_CROSS_COMPILE
# TARGET_LOAD_CMD_ARGS
# TARGET_PKG_INSTALLDIR

#-----------
# MACROS
#-----------

SHELL                    = %SystemRoot%/system32/cmd.exe
XILINXSDK_TOOLS          = $(XILINX_ARM_CROSS_COMPILE)
CCOUTPUTFLAG             = --output_file=
LDOUTPUTFLAG             = --output_file=
EXE_FILE_EXT             = $(PROGRAM_FILE_EXT)

TOOLCHAIN_SRCS = 
TOOLCHAIN_INCS = 
TOOLCHAIN_LIBS = -lm -lm

#------------------------
# BUILD TOOL COMMANDS
#------------------------

# Assembler: Xilinx SDK Assembler
AS_PATH = $(XILINXSDK_TOOLS)
AS = $(AS_PATH)/arm-xilinx-linux-gnueabi-as

# C Compiler: Xilinx SDK C Compiler
CC_PATH = $(XILINXSDK_TOOLS)
CC = $(CC_PATH)/arm-xilinx-linux-gnueabi-gcc

# Linker: Xilinx SDK Linker
LD_PATH = $(XILINXSDK_TOOLS)
LD = $(LD_PATH)/arm-xilinx-linux-gnueabi-gcc

# C++ Compiler: Xilinx SDK C++ Compiler
CPP_PATH = $(XILINXSDK_TOOLS)
CPP = $(CPP_PATH)/arm-xilinx-linux-gnueabi-g++

# C++ Linker: Xilinx SDK C++ Linker
CPP_LD_PATH = $(XILINXSDK_TOOLS)
CPP_LD = $(CPP_LD_PATH)/arm-xilinx-linux-gnueabi-gcc

# Archiver: Xilinx SDK Archiver
AR_PATH = $(XILINXSDK_TOOLS)
AR = $(AR_PATH)/arm-xilinx-linux-gnueabi-ar

# MEX Tool: MEX Tool
MEX_PATH = $(MATLAB_BIN)
MEX = $(MEX_PATH)/mex

# Download: Download
DOWNLOAD_PATH = $(TARGET_PKG_INSTALLDIR)
DOWNLOAD = $(DOWNLOAD_PATH)/download.bat

# Execute: Execute
EXECUTE = $(PRODUCT)

# Builder: GMAKE Utility
MAKE_PATH = %MATLAB%\bin\win64
MAKE = $(MAKE_PATH)/gmake


#-------------------------
# Directives/Utilities
#-------------------------

ASDEBUG             = -g
AS_OUTPUT_FLAG      = -o
CDEBUG              = -g
C_OUTPUT_FLAG       = -o
LDDEBUG             = -g
OUTPUT_FLAG         = -o
CPPDEBUG            = -g
CPP_OUTPUT_FLAG     = -o
CPPLDDEBUG          = -g
OUTPUT_FLAG         = -o
ARDEBUG             =
STATICLIB_OUTPUT_FLAG =
MEX_DEBUG           = -g
RM                  = @del /F
ECHO                = @echo
MV                  = @move
RUN                 =

#----------------------------------------
# "Faster Builds" Build Configuration
#----------------------------------------

ARFLAGS              = -ruvs
ASFLAGS              = -c \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon \
                       $(ASFLAGS_ADDITIONAL) \
                       $(INCLUDES)
CFLAGS               = -c \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon \
                       -MMD -MP -MF"$(@:%.o=%.dep)" -MT"$@"  \
                       -O0
CPPFLAGS             = -c \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon \
                       -MMD -MP -MF"$(@:%.o=%.dep)" -MT"$@"  \
                       -O2
CPP_LDFLAGS          = -lm \
                       -lrt \
                       -lpthread \
                       -ldl \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon
CPP_SHAREDLIB_LDFLAGS  = -shared  \
                         -lm \
                         -lrt \
                         -lpthread \
                         -ldl \
                         -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon
DOWNLOAD_FLAGS       = $(TARGET_LOAD_CMD_ARGS)  $(ZYNQ_PASSWORD)  $(ZYNQ_USERNAME) $(ZYNQ_IPADDRESS) /tmp $(PRODUCT)
EXECUTE_FLAGS        =
LDFLAGS              = -lm \
                       -lrt \
                       -lpthread \
                       -ldl \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon
MEX_CPPFLAGS         =
MEX_CPPLDFLAGS       =
MEX_CFLAGS           =
MEX_LDFLAGS          =
MAKE_FLAGS           = -f $(MAKEFILE)
SHAREDLIB_LDFLAGS    = -shared  \
                       -lm \
                       -lrt \
                       -lpthread \
                       -ldl \
                       -march=armv7-a -mcpu=cortex-a9  -mfloat-abi=softfp -mfpu=neon

#--------------------
# File extensions
#--------------------

OBJ_EXT             = .s.o
ASM_EXT             = .s
C_DEP               = .c.dep
H_EXT               = .h
COBJ_EXT            = .c.o
C_EXT               = .c
EXE_EXT             =
SHAREDLIB_EXT       =
CXX_DEP             = .cpp.dep
HPP_EXT             = .hpp
CPPOBJ_EXT          = .cpp.o
CPP_EXT             = .cpp
EXE_EXT             =
SHAREDLIB_EXT       =
STATICLIB_EXT       = .lib
MEX_EXT             = .mexw64
MAKE_EXT            = .mk


###########################################################################
## OUTPUT INFO
###########################################################################

PRODUCT = $(RELATIVE_PATH_TO_ANCHOR)/gm_testing_interface
PRODUCT_TYPE = "executable"
BUILD_TYPE = "Top-Level Standalone Executable"

###########################################################################
## INCLUDE PATHS
###########################################################################

INCLUDES_BUILDINFO = -I$(START_DIR) -IC:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/zynq/include -I$(START_DIR)/gm_testing_interface_ert_rtw -I$(MATLAB_ROOT)/extern/include -I$(MATLAB_ROOT)/simulink/include -I$(MATLAB_ROOT)/rtw/c/src -I$(MATLAB_ROOT)/rtw/c/src/ext_mode/common -I$(MATLAB_ROOT)/rtw/c/ert -I$(MATLAB_ROOT)/toolbox/coder/rtiostream/src/utils -I$(MATLAB_ROOT)/toolbox/target/codertarget/rtos/inc

INCLUDES = $(INCLUDES_BUILDINFO)

###########################################################################
## DEFINES
###########################################################################

DEFINES_ = -DMODEL=gm_testing_interface -DNUMST=1 -DNCSTATES=0 -DHAVESTDIO -DON_TARGET_WAIT_FOR_START=1 -DTERMFCN=1 -DONESTEPFCN=1 -DMAT_FILE=0 -DMULTI_INSTANCE_CODE=0 -DEXT_MODE=1 -DINTEGER_CODE=0 -DMT=0 -DCLASSIC_INTERFACE=0 -DALLOCATIONFCN=0 -DTID01EQ=0 -DARM_PROJECT -DSTACK_SIZE=64 -D__MW_TARGET_USE_HARDWARE_RESOURCES_H__ -DRT
DEFINES_BUILD_ARGS = -DTERMFCN=1 -DONESTEPFCN=1 -DMAT_FILE=0 -DMULTI_INSTANCE_CODE=0 -DEXT_MODE=1 -DINTEGER_CODE=0 -DMT=0 -DCLASSIC_INTERFACE=0 -DALLOCATIONFCN=0
DEFINES_IMPLIED = -DTID01EQ=0
DEFINES_OPTS = -DON_TARGET_WAIT_FOR_START=1
DEFINES_SKIPFORSIL = -DARM_PROJECT -DSTACK_SIZE=64 -DRT
DEFINES_STANDARD = -DMODEL=gm_testing_interface -DNUMST=1 -DNCSTATES=0 -DHAVESTDIO

DEFINES = $(DEFINES_) $(DEFINES_BUILD_ARGS) $(DEFINES_IMPLIED) $(DEFINES_OPTS) $(DEFINES_SKIPFORSIL) $(DEFINES_STANDARD)

###########################################################################
## SOURCE FILES
###########################################################################

SRCS = $(START_DIR)/gm_testing_interface_ert_rtw/gm_testing_interface.c $(START_DIR)/gm_testing_interface_ert_rtw/gm_testing_interface_data.c $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/ext_svr.c $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/updown.c $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/ext_work.c $(MATLAB_ROOT)/toolbox/coder/rtiostream/src/utils/rtiostream_utils.c C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/zynq/src/axi4Lite.c $(MATLAB_ROOT)/toolbox/target/codertarget/rtos/src/linuxinitialize.c $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/rtiostream_interface.c C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/arm_cortex_a/src/rtiostream_tcpip.c

MAIN_SRC = $(START_DIR)/gm_testing_interface_ert_rtw/ert_main.c

ALL_SRCS = $(SRCS) $(MAIN_SRC)

###########################################################################
## OBJECTS
###########################################################################

OBJS = gm_testing_interface.c.o gm_testing_interface_data.c.o ext_svr.c.o updown.c.o ext_work.c.o rtiostream_utils.c.o axi4Lite.c.o linuxinitialize.c.o rtiostream_interface.c.o rtiostream_tcpip.c.o

MAIN_OBJ = ert_main.c.o

ALL_OBJS = $(OBJS) $(MAIN_OBJ)

###########################################################################
## PREBUILT OBJECT FILES
###########################################################################

PREBUILT_OBJS = 

###########################################################################
## LIBRARIES
###########################################################################

LIBS = 

###########################################################################
## SYSTEM LIBRARIES
###########################################################################

SYSTEM_LIBS = 

###########################################################################
## ADDITIONAL TOOLCHAIN FLAGS
###########################################################################

#---------------
# C Compiler
#---------------

CFLAGS_BASIC = $(DEFINES) $(INCLUDES)

CFLAGS += $(CFLAGS_BASIC)

#-----------------
# C++ Compiler
#-----------------

CPPFLAGS_BASIC = $(DEFINES) $(INCLUDES)

CPPFLAGS += $(CPPFLAGS_BASIC)

###########################################################################
## INLINED COMMANDS
###########################################################################


DERIVED_SRCS = $(subst .o,.dep,$(OBJS))

build:

%.dep:



-include codertarget_assembly_flags.mk
-include ../codertarget_assembly_flags.mk
-include *.dep


###########################################################################
## PHONY TARGETS
###########################################################################

.PHONY : all build buildobj clean info prebuild download execute


all : build
	@echo "### Successfully generated all binary outputs."


build : prebuild $(PRODUCT)


buildobj : prebuild $(OBJS) $(PREBUILT_OBJS)
	@echo "### Successfully generated all binary outputs."


prebuild : 


download : build
	@echo "### Invoking postbuild tool "Download" ..."
	$(DOWNLOAD) $(DOWNLOAD_FLAGS)
	@echo "### Done invoking postbuild tool."


execute : download
	@echo "### Invoking postbuild tool "Execute" ..."
	$(EXECUTE) $(EXECUTE_FLAGS)
	@echo "### Done invoking postbuild tool."


###########################################################################
## FINAL TARGET
###########################################################################

#-------------------------------------------
# Create a standalone executable            
#-------------------------------------------

$(PRODUCT) : $(OBJS) $(PREBUILT_OBJS) $(MAIN_OBJ)
	@echo "### Creating standalone executable "$(PRODUCT)" ..."
	$(LD) $(LDFLAGS) -o $(PRODUCT) $(OBJS) $(MAIN_OBJ) $(SYSTEM_LIBS) $(TOOLCHAIN_LIBS)
	@echo "### Created: $(PRODUCT)"


###########################################################################
## INTERMEDIATE TARGETS
###########################################################################

#---------------------
# SOURCE-TO-OBJECT
#---------------------

%.c.o : %.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : %.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : %.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(RELATIVE_PATH_TO_ANCHOR)/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(RELATIVE_PATH_TO_ANCHOR)/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(RELATIVE_PATH_TO_ANCHOR)/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(MATLAB_ROOT)/rtw/c/src/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(MATLAB_ROOT)/rtw/c/src/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(MATLAB_ROOT)/rtw/c/src/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(MATLAB_ROOT)/rtw/c/src/ext_mode/common/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(MATLAB_ROOT)/simulink/src/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(MATLAB_ROOT)/simulink/src/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(MATLAB_ROOT)/simulink/src/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(MATLAB_ROOT)/toolbox/coder/rtiostream/src/utils/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(MATLAB_ROOT)/toolbox/coder/rtiostream/src/utils/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(MATLAB_ROOT)/toolbox/coder/rtiostream/src/utils/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(START_DIR)/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(START_DIR)/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(START_DIR)/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : $(START_DIR)/gm_testing_interface_ert_rtw/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : $(START_DIR)/gm_testing_interface_ert_rtw/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : $(START_DIR)/gm_testing_interface_ert_rtw/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


%.c.o : C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/zynq/src/%.c
	$(CC) $(CFLAGS) -o $@ $<


%.s.o : C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/zynq/src/%.s
	$(AS) $(ASFLAGS) -o $@ $<


%.cpp.o : C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/zynq/src/%.cpp
	$(CPP) $(CPPFLAGS) -o $@ $<


linuxinitialize.c.o : $(MATLAB_ROOT)/toolbox/target/codertarget/rtos/src/linuxinitialize.c
	$(CC) $(CFLAGS) -o $@ $<


rtiostream_tcpip.c.o : C:/ProgramData/MATLAB/SupportPackages/R2017a/toolbox/target/supportpackages/arm_cortex_a/src/rtiostream_tcpip.c
	$(CC) $(CFLAGS) -o $@ $<


###########################################################################
## DEPENDENCIES
###########################################################################

$(ALL_OBJS) : $(MAKEFILE) rtw_proj.tmw


###########################################################################
## MISCELLANEOUS TARGETS
###########################################################################

info : 
	@echo "### PRODUCT = $(PRODUCT)"
	@echo "### PRODUCT_TYPE = $(PRODUCT_TYPE)"
	@echo "### BUILD_TYPE = $(BUILD_TYPE)"
	@echo "### INCLUDES = $(INCLUDES)"
	@echo "### DEFINES = $(DEFINES)"
	@echo "### ALL_SRCS = $(ALL_SRCS)"
	@echo "### ALL_OBJS = $(ALL_OBJS)"
	@echo "### LIBS = $(LIBS)"
	@echo "### MODELREF_LIBS = $(MODELREF_LIBS)"
	@echo "### SYSTEM_LIBS = $(SYSTEM_LIBS)"
	@echo "### TOOLCHAIN_LIBS = $(TOOLCHAIN_LIBS)"
	@echo "### ASFLAGS = $(ASFLAGS)"
	@echo "### CFLAGS = $(CFLAGS)"
	@echo "### LDFLAGS = $(LDFLAGS)"
	@echo "### SHAREDLIB_LDFLAGS = $(SHAREDLIB_LDFLAGS)"
	@echo "### CPPFLAGS = $(CPPFLAGS)"
	@echo "### CPP_LDFLAGS = $(CPP_LDFLAGS)"
	@echo "### CPP_SHAREDLIB_LDFLAGS = $(CPP_SHAREDLIB_LDFLAGS)"
	@echo "### ARFLAGS = $(ARFLAGS)"
	@echo "### MEX_CFLAGS = $(MEX_CFLAGS)"
	@echo "### MEX_CPPFLAGS = $(MEX_CPPFLAGS)"
	@echo "### MEX_LDFLAGS = $(MEX_LDFLAGS)"
	@echo "### MEX_CPPLDFLAGS = $(MEX_CPPLDFLAGS)"
	@echo "### DOWNLOAD_FLAGS = $(DOWNLOAD_FLAGS)"
	@echo "### EXECUTE_FLAGS = $(EXECUTE_FLAGS)"
	@echo "### MAKE_FLAGS = $(MAKE_FLAGS)"


clean : 
	$(ECHO) "### Deleting all derived files..."
	$(RM) $(subst /,\,$(PRODUCT))
	$(RM) $(subst /,\,$(ALL_OBJS))
	$(RM) *.c.dep
	$(RM) *.cpp.dep
	$(ECHO) "### Deleted all derived files."


