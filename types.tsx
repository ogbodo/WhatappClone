export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TopTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type CameraParamList = {
  CameraScreen: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};
export type StatusParamList = {
  StatusScreen: undefined;
};

export type CallsParamList = {
  CallsScreen: undefined;
};

export type User = {
  id: string;
  name: string
  imageUri: string
};

export type Message = {
  id: string;
  content: string
  createdAt: string
};

export type ChatRoomType = {
  id: string;
  users: User[],
  lastMessage: Message
};


