using System;
using FluentValidation;
using MediatR;

namespace Application.Core;

public class ValidationBehaviour<TRequest, TResponse>(IValidator<TRequest>? validator = null) : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (validator == null) return await next();

        var validationResult = validator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsCompletedSuccessfully)
        {
            throw new ValidationException(validationResult.Result.Errors);
        }

        return await next();
    }
}
