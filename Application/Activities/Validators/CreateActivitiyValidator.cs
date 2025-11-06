using System;
using Application.Activities.Comands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivitiyValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivitiyValidator() : base(x => x.ActivityDto)
    {
    }
}
