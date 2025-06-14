

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