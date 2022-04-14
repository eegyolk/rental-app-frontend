const namespace = 'home';

export const QUERY_ANNOUNCEMENT = `${namespace}/QUERY_ANNOUNCEMENT`;
export const queryAnnouncement = () => ({
  type: QUERY_ANNOUNCEMENT,
});
export const MUTATE_ANNOUNCEMENT_IS_FETCHING = `${namespace}/MUTATE_ANNOUNCEMENT_IS_FETCHING`;
export const mutateAnnouncementIsFetching = (isFetching) => ({
  type: MUTATE_ANNOUNCEMENT_IS_FETCHING,
  isFetching,
});
export const MUTATE_ANNOUNCEMENT = `${namespace}/MUTATE_ANNOUNCEMENT`;
export const mutateAnnouncement = (announcement) => ({
  type: MUTATE_ANNOUNCEMENT,
  announcement,
});
export const MUTATE_ANNOUNCEMENT_ERROR = `${namespace}/MUTATE_ANNOUNCEMENT_ERROR`;
export const mutateAnnouncementError = (error) => ({
  type: MUTATE_ANNOUNCEMENT_ERROR,
  error,
});

export const QUERY_PROPERTY_TYPES = `${namespace}/QUERY_PROPERTY_TYPES`;
export const queryPropertyTypes = () => ({
  type: QUERY_PROPERTY_TYPES,
});
export const MUTATE_PROPERTY_TYPES_IS_FETCHING = `${namespace}/MUTATE_PROPERTY_TYPES_IS_FETCHING`;
export const mutatePropertyTypesIsFetching = (isFetching) => ({
  type: MUTATE_PROPERTY_TYPES_IS_FETCHING,
  isFetching,
});
export const MUTATE_PROPERTY_TYPES = `${namespace}/MUTATE_PROPERTY_TYPES`;
export const mutatePropertyTypes = (propertyTypes) => ({
  type: MUTATE_PROPERTY_TYPES,
  propertyTypes,
});
export const MUTATE_PROPERTY_TYPES_ERROR = `${namespace}/MUTATE_PROPERTY_TYPES_ERROR`;
export const mutatePropertyTypesError = (error) => ({
  type: MUTATE_PROPERTY_TYPES_ERROR,
  error,
});
