#load nuget:?package=Lucca.Cake.Lucilib&version=4.3.0

Setup(ctx => ctx.CreateLuciContext("lucca-bnb"));

TaskSequence(
    Task("GitVersion")
        .Does(ctx => ctx.ComputeVersion()),

    Task("RestoreFront")
        .Does(ctx => ctx.RestoreFront()),

    Task("DatadogGenerate")
        .Does(ctx => ctx.DatadogGenerate()),

    Task("BuildFront")
        .Does(ctx => ctx.BuildFront("dist/front/wwwroot")),

    Task("DatadogPost")
        .Does(ctx => ctx.DatadogPost("dist/front/wwwroot")),

    Task("Archive")
        .Does(ctx => ctx.ArchiveFront()),

    Task("LintFront")
        .Does(ctx => ctx.LintFront()),

    Task("PrettierFront")
        .Does(ctx => ctx.NpmRunScript("prettier")),

    Task("Default")
);

var target = Argument("target", "Default"); 
RunTarget(target);