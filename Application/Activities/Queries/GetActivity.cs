using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;


public class GetActivity
{
    public class Query : IRequest<Activity> { }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activites.FirstAsync(cancellationToken);
        }
    }
}
