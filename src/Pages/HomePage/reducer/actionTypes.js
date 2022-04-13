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
