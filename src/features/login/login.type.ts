/**
 * This interface is for the initial state of the feature slice
 */
export interface Login {
  /** Set true if user is logged in */
  isAuthenticated: boolean;

  /** Username can be email or phone number */
  username: string;

  /** Access token needed to call authenticated APIs */
  token: string;

  /** FirstName plus lastName */
  fullName: string;

  /** Specifices the role of the user (ex: 'Admin', 'Employee', ...) */
  role: string;
}

export interface LoginBody {
  username: string;
  password: string;
}
