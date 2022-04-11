
export const getComments = async () => {
    return [ {
      id: "1",
      body: "Hello Adnan and Luke :)",
      username: "Sanja",
      userId: "1",
      parentId: null,
      createdAt: "2022-04-08T11:00:33.010+02:00",
    },];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Sanja",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };