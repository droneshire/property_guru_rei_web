
export enum ClientAction {
  NONE = "NONE",
  DELETE = "DELETE",
  ADD = "ADD",
}

export interface SearchParams {
  search_string: string;
  baths: number[];
  beds: number[];
  maxPrice: number;
  minPrice: number;
  maxSize: number;
  minSize: number;
}

export interface Preferences {
  notifications: {
    sms: {
      phoneNumber: string;
      updatesEnabled: boolean;
    };
    email: {
      email: string;
      updatesEnabled: boolean;
    };
  };
}

export interface ClientConfig {
  preferences: Preferences;
  search_params: SearchParams;
}

export const DEFAULT_USER_CONFIG = {
  preferences: {
    notifications: {
      email: { email: "", updatesEnabled: true },
      sms: {
        phoneNumber: "",
        updatesEnabled: true,
      },
    },
  },
  search_params: {
    search_string: "",
    baths: [1, 2, 3, 4, 5],
    beds: [1, 2, 3, 4, 5],
    maxPrice: 1000000,
    minPrice: 0,
    maxSize: 10000,
    minSize: 0,
  },
}
