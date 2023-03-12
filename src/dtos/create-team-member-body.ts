import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(10, 255, {
    message: 'Name must be between 10 and 255 characters',
  })
  name: string;

  @IsNotEmpty({
    message: 'Function is a field required',
  })
  function: string;
}
