
// to serve as a server
export const GET = async () => {
  try {
    //Initial fetching of gitHub user list
    const response = await fetch("https://api.github.com/users?per_page=8");
    if (!response.ok) {
      throw new Error(`Failed to fetch user list. Status: ${response.status}`);
    }
    const userList = await response.json();
    const userswithFullDetails = await Promise.all(
      userList.map(async (user) => {
        try {
          //fetching of each user detail
          const userDetailResponse = await fetch(
            `https://api.github.com/users/${user.login}`
          );
          if (!userDetailResponse.ok) {
            throw new Error(
              `Failed to fetch user details. Status: ${userDetailResponse.status}`
            );
          }
          const userDetail = await userDetailResponse.json();
          const completeUserList = { ...user, userDetail: { ...userDetail } };
          return completeUserList;
        } catch (error) {
          throw new Error(
            `Failed to fetch user details. Status: ${userDetailResponse.status}`
          );
        }
      })
    );

    return new Response(
      JSON.stringify({
        userdata: userswithFullDetails,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch user data" }),
      { status: 500 }
    );
  }
};
