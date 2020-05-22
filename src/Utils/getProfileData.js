import backendAxios from "../services/backendAxios";

export const getProfileData = async () => {
  let res = await backendAxios
    .get("api/Client")
    .then((res) => {
      return res.data.payload;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const updateProfileData = async (
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  gender,
  dateofBirth,
  profilePic
) => {
  let formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("mobile", phoneNumber);
  formData.append("email", emailAddress);
  formData.append("birthDate", dateofBirth);
  let photo = {
    uri: profilePic.uri,
    type: "image/jpeg",
    name: profilePic.name,
  };
  formData.append("profilePicture", photo);
  formData.append("gender", gender);
  let res = await backendAxios
    .patch("api/Client", formData)
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};
