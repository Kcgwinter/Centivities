using System;
using System.Security.Cryptography.X509Certificates;
using Application.Activities.Comands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator() : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.id).NotEmpty().WithMessage("Id is required");
    }
}
