using Application.Activities.Queries;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivityDetails.Handler>());

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod()
.WithOrigins("http://localhost:3000", "https://localhost:3000")
);

app.MapControllers();

//Add Scope to add migration and seeding to Database
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    //create and wait for the migration to happen
    await context.Database.MigrateAsync();
    //use context to seed the database
    await DBInitalizer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured during migration");
}

app.Run();
