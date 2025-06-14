

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