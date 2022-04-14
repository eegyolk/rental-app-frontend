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

export function requestQueryPropertyTypes() {
  return graphql.post('/graphql', {
    query: `{
      propertyTypes {
        id
        code
        label
        description
      }
    }`,
  });
}
