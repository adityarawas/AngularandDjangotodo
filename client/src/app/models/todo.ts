export class Todo{
    title:string;
    description:string;
    status:string;
    created_at:string;
    pk:number
}

export class JWTPayload {
    user_id: number;
    username: string;
    email: string;
    exp: number;
  }