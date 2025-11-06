using System;
using Domain;

namespace Application.Activities.DTOs;

public class EditActivityDto : BaseActitiyDto
{
    public string id { get; set; } = "";

    public static implicit operator EditActivityDto(Activity v)
    {
        throw new NotImplementedException();
    }
}
