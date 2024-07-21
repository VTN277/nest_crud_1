import { IsString } from "class-validator";

export class CreateMessageDto {
    
    @IsString()
    cosntent: string;
}
