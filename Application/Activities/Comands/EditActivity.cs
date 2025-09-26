using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Comands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = await context.Activites
                .FindAsync([request.Activity.Id], cancellationToken)
                ?? throw new Exception("Cannot find activity");

                // activity.Title = request.Activity.Title;
                // instead of writing every parameter use AutoMapper Nuget Package
                // this matches every activity that is present
                mapper.Map(request.Activity, activity);

                await context.SaveChangesAsync(cancellationToken);


            }
        }
    }
}
