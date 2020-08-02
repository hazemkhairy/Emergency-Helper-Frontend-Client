import backendAxios from "../services/backendAxios";

export const getOffers = async () => {
    let res = await backendAxios
        .get("api/Request/ViewOffers")
        .then((res) => {
            return (res.data.payload)
        })
        .catch((error) => {
            return error;
        });
    return res;
};

export const acceptOffer = async (offerID) => {
    return await backendAxios.post('api/Request/AcceptOffer', { offerID })
        .then(
            (res) => {
                return res.data;
            }
        )
        .catch(
            (err) => {
                return err.response.data;
            }
        )
}

export const getAcceptedOffer = async () => {
    // return {
    //     helperPicture: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
    //     helperName: 'hazem',
    //     helperPriceFrom: 5,
    //     helperPriceto: 66,
    //     helperSkills: 'many',
    //     helperCategory: 'Eductional',
    //     helperOffer: 'i will help',
    //     helperNumber: '01129908226'
    // }
    return await backendAxios.get('api/request/acceptedoffer').then(
        (res) => {
            return res.data.payload
        }
    )
        .catch(
            err => { throw err }
        )

}