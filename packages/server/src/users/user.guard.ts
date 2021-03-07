import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    // Temporarily hard-code default user here
    ctx.user = {
      _id: 'f4e95e7e-f31e-4ff6-a896-2bc17eb13169'
    };
    return true;
  }
}
