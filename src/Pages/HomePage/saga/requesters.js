import graphql from '../../../utils/graphql';

export function requestQueryAnnouncement() {
  return graphql.post('/graphql', {
    query: `{
      announcements {
        title
        description
      }
    }`,
  });
}
