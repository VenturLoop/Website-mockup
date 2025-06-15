

export const getInvestorListData = async () => {
  try {
    const res = await fetch(
      `https://venturloopbackend-v-1-0-9.onrender.com/api/get-investor-for-web`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error while updating Item: ' + error);
  }
};


export const getListData = async (title) => {
  try {
    const res = await fetch(
      `https://venturloopbackend-v-1-0-9.onrender.com/admin/get_list_data/${title}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error while updating Item: ' + error);
  }
};


export const getSaveProject = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/user/${userId}/saved/projects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};

export const getSavedCofounder = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/profiles/${userId}/cofounders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};

export const getSavedInvestor = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/profiles/${userId}/investors`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};


// 15 Get invitation
export const getInvitations = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/invitations/received/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};

// 16 accept invitation request

export const acceptInvitation = async (senderId, receiverId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/accept-request/${senderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverId: receiverId,
        }),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

// 17 accept invitation request

export const declineInvitation = async (senderId, receiverId) => {
  console.log(senderId, receiverId);
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/api/decline-request/${senderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverId: receiverId,
        }),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getStartupDetailSendInvestorList = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/startup/startup_details/${userId}/investors`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};



export const getNotification = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/notifications/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while updating Item: " + error);
  }
};

// 4
export const markAsReadNotification = async (userId) => {
  try {
    const res = await fetch(
      `https://digitalocean.venturloop.com/notifications/mark-as-read/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};