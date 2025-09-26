using System;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Activities.Comands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required  string id { get; set; }

        public class Handler(AppDbContext context) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = await context.Activites
                .FindAsync([request.id], cancellationToken)
                ?? throw new Exception("Cannot find activity");

                context.Activites.Remove(activity);

                await context.SaveChangesAsync(cancellationToken);

            }
        }
    }
}
