import { Resolver, Query } from '@nestjs/graphql';

import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'sdsdsds',
      name: 'Physics class',
      startData: (new Date()).toISOString(),
      endData: (new Date()).toISOString(),
    };
  }
}
