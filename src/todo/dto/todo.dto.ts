import { IsBoolean, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;

  @IsNotEmpty()
  @IsBoolean()
  deleted: boolean;
}

export class ParamsWithId {
  @IsString()
  @IsNotEmpty()
  id: string;
}
