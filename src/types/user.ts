
export enum ClientAction {
  NONE = "NONE",
  DELETE = "DELETE",
  ADD = "ADD",
}

export interface SearchParams {
  searchString: string;
  minBaths: number;
  maxBaths: number;
  minBeds: number;
  maxBeds: number;
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
  searchParams: SearchParams;
  listingIds: number[];
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
  searchParams: {
    searchString: "",
    minBaths: 1,
    maxBaths: 5,
    minBeds: 1,
    maxBeds: 6,
    maxPrice: 1000000,
    minPrice: 0,
    maxSize: 10000,
    minSize: 0,
  },
}
