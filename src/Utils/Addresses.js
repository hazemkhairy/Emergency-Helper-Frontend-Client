import backendAxios from "../services/backendAxios";


export const AddAddress = async (
  name,
  addressName,
  longitude,
  altitude,
) => {
  let res = await backendAxios
    .post("api/Client/Address", {
      name: name,
      addressName: addressName,
      location: {
        longitude: longitude,
        latitude: altitude
      }
    })
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

export const getSavedAddresses = async () => {
  let res = await backendAxios
    .get("api/Client/SavedAddresses")
    .then((res) => {
      return res.data.payload.savedAddresses;
    })
    .catch((error) => {
      return error;
    });
  return res;
}

export const deleteAddress = async (id) => {
  let res = await backendAxios
    .delete(`api/Client/Address/${id}`)
    .then((res) => {
      return res.data.message;
    })
    .catch((error) => {
      return error;
    });
  return res;
}
