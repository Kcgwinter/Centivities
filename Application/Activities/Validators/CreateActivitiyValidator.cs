using System;
using Application.Activities.Comands;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivitiyValidator : AbstractValidator<CreateActivity.Command>
{
    public CreateActivitiyValidator()
    {
        RuleFor(x => x.ActivityDto.Title).NotEmpty().WithMessage("Title is required");
        RuleFor(x => x.ActivityDto.Description).NotEmpty().WithMessage("Description is required");
    }
}
