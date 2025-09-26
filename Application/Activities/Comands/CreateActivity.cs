using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Comands;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required Activity Activity { get; set; }

        public class Handler(AppDbContext context) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                //use Add not AddAsync
                context.Activites.Add(request.Activity);
                await context.SaveChangesAsync(cancellationToken);

                return request.Activity.Id;
            }
        }
    }

}
