export interface ApplicationState {
  /** Set true before API call and false after it */
  isLoading: boolean;

  /** Error Message to display for the user */
  errorMessage: string;
}
