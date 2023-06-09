export interface UserProps {
    photo: string;
    joinedAt: string;
    username: string;
    bio: string;
    repos: string;
    followers: string;
  }
  
  export interface TopAreaProps {
    setUser: (user: UserProps | null) => void;
  }
  
  export interface UserDataProps {
    user: UserProps;
  }