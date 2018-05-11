% NOTE: DO NOT REMOVE THIS LINE XMAKEFILE_TOOL_CHAIN_CONFIGURATION
function toolChainConfiguration = PCWIN64_blank_configuration()
%PCWIN64_BLANK_CONFIGURATION Defines a tool chain configuration.
%
% Copyright 2018 The MathWorks, Inc.
%
% General
toolChainConfiguration.Configuration   = 'PCWIN64_blank_configuration';
toolChainConfiguration.Version         = '2.0';
toolChainConfiguration.Description     = '';
toolChainConfiguration.Operational     = true;
toolChainConfiguration.InstallPath     = '';
toolChainConfiguration.CustomValidator     = '';
toolChainConfiguration.Decorator       = '';
% Make
toolChainConfiguration.MakePath        = 'gmake';
toolChainConfiguration.MakeFlags       = '';
toolChainConfiguration.MakeInclude     = '';
% Compiler
toolChainConfiguration.CompilerPath     = '';
toolChainConfiguration.CompilerFlags    = '';
toolChainConfiguration.SourceExtensions = '.c';
toolChainConfiguration.HeaderExtensions = '.h';
toolChainConfiguration.ObjectExtension  = '';
% Linker
toolChainConfiguration.LinkerPath        = '';
toolChainConfiguration.LinkerFlags       = '';
toolChainConfiguration.LibraryExtensions = '.lib';
toolChainConfiguration.TargetExtension   = '';
toolChainConfiguration.TargetNamePrefix  = '';
toolChainConfiguration.TargetNamePostfix = '';
% Archiver
toolChainConfiguration.ArchiverPath      = '';
toolChainConfiguration.ArchiverFlags     = '';
toolChainConfiguration.ArchiveExtension  = '';
toolChainConfiguration.ArchiveNamePrefix = '';
toolChainConfiguration.ArchiveNamePostfix= '';
% Pre-build
toolChainConfiguration.PrebuildEnable   = false;
toolChainConfiguration.PrebuildToolPath = '';
toolChainConfiguration.PrebuildFlags    = '';
% Post-build
toolChainConfiguration.PostbuildEnable   = false;
toolChainConfiguration.PostbuildToolPath = '';
toolChainConfiguration.PostbuildFlags    = '';
% Execute
toolChainConfiguration.ExecuteDefault  = false;
toolChainConfiguration.ExecuteToolPath = '';
toolChainConfiguration.ExecuteFlags    = '';
% Directories
toolChainConfiguration.DerivedPath     = '';
toolChainConfiguration.OutputPath      = '';
% Custom
toolChainConfiguration.Custom1         = '';
toolChainConfiguration.Custom2         = '';
toolChainConfiguration.Custom3         = '';
toolChainConfiguration.Custom4         = '';
toolChainConfiguration.Custom5         = '';
end
