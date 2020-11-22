export interface ApplicationState {
  /** Set true before API call and false after it */
  isLoading: boolean;

  /** Error Message to display for the user */
  errorMessage: string;

  /** Set true to display error modal */
  isError: boolean;

  /** Set true to display success modal */
  isSuccess: boolean;

  /** Success message to be displayed for the user */
  successMessage: string;
}
