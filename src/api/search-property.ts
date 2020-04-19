import axios from 'axios'
import config from '@/utilities/config'
// import headerHelper from '@/api/http-header-helper'

export class PropertyAPI {
  constructor() {
	}

  async getPropertyDetails(listingId: string | number) {
      let url = config.property_details_url + listingId + "/details"
      let result = await axios(url, {
          method: "get",
          // headers: headerHelper.CREATE_HEADER()
      });
      return result;
    }

}

// let result = {
//     SEARCH_PROPERTIES:async function SearchProperties(searchParameter: {}, sessionId: string) {
//         console.log('searchParameter:::',searchParameter, 'sessionId ' + sessionId)
//         let url = config.search_url + "search?body-format=SearchParam&session-id=" + sessionId
//         let result = await axios(url, {
//             method: "post",
//             headers: headerHelper.CREATE_HEADER(),
//             data: searchParameter
//         })

//         return result;
//     },
//     SEARCH_PROPERTY_DETAILS:async function SearchPropertyDetails(listingId: string | number) {
//         let url = config.property_details_url + listingId + "/details"
//         let result = await axios(url, {
//             method: "get",
//             headers: headerHelper.CREATE_HEADER()
//         });
//         return result;
//     },
//     SEARCH_PROPERTY_DETAILS_EDIT:async function SearchPropertyDetails(listingId: string | number) {
//         let url = config.property_details_url + listingId + "/details?response-for=edit"
//         let result = await axios(url, {
//             method: "get",
//             headers: headerHelper.CREATE_HEADER()
//         });
//         return result;
//     },
//     SEARCH_PROPERTY_DETAILS_ADD:async function SearchPropertyDetails(listingId: string | number) {
//         let url = config.property_details_url + listingId + "/details?response-for=add"
//         let result = await axios(url, {
//             method: "get",
//             headers: headerHelper.CREATE_HEADER(),
//         });
//         return result;
//     },
//     SAVE_PROPERTIES:async function (listingId: string | number,_data: {}) {
//         let url = config.search_url + listingId
//         let result = await axios(url, {
//             method: "put",
//             headers: headerHelper.CREATE_HEADER(),
//             data: _data
//         })
//         return result;
//     },
//     ADD_PROPERTIES:async function (_data: {}) {
//         let url = config.search_url
//         let result = await axios(url, {
//             method: "post",
//             headers: headerHelper.CREATE_HEADER(),
//             data: _data
//         })
//         return result;
//     },
//     SET_PROPERTIES_STATUS:async function (listingId: string | number, IsPublish: string) {
//         let url =  `${config.property_details_url}${listingId}/status?publish=${IsPublish}`
//         let result = await axios(url, {
//             method: "put",
//             headers: headerHelper.CREATE_HEADER()
//         });

//         console.log('result::',result)
//         return result;
//     },
//     GET_FEEDBACK_PROPERTY:async function (listingId: string | number) {
//         let url =  config.search_url + listingId + '/feedback'
//         let result = await axios(url, {
//             method: 'get',
//             headers: headerHelper.CREATE_HEADER()
//         });

//         return result;
//     },

//     GET_PROJECT_DETAIL:async function (projectId: string | number) {
//         let url =  config.project_url + projectId + '/details'
//         let result = await axios(url, {
//             method: 'get',
//             headers: headerHelper.CREATE_HEADER()
//         })

//         return result;
//     },
//     GET_PROJECT_AUTO_FILL:async function (projectName: string) {
//         let url =  config.project_url + 'auto-fill'
//         let result = await axios(url, {
//             method: 'put',
//             data: {ProjectName: projectName},
//             headers: headerHelper.CREATE_HEADER()
//         })

//         return result;
//     },
//     GET_PROJECT_DETAIL_ADD:async function (projectId: string | number) {
//         let url =  config.project_url + projectId + '/details?response-for=add'
//         let result = await axios(url, {
//             method: 'get',
//             headers: headerHelper.CREATE_HEADER()
//         })

//         return result;
//     },
//     EDIT_PROJECT_DETAIL:async function (projectId: string | number,_data: {}) {
//         let url =  config.project_url + projectId
//         let result = await axios(url, {
//             method: 'put',
//             headers: headerHelper.CREATE_HEADER(),
//             data: _data
//         })
//         console.log('resultSave::',result)
//         return result;
//     },
//     ADD_PROJECT_DETAIL:async function (_data: {}) {
//         let url =  config.project_url
//         let result = await axios(url, {
//             method: 'post',
//             headers: headerHelper.CREATE_HEADER(),
//             data: _data
//         })
//         console.log('resultSave::',result)
//         return result;
//     },
//     POST_NOTE:async function (propertiesId: string | number, body: {}) {
//         let url =  `${config.search_url}${propertiesId}/notes`
//         let result = await axios(url, {
//             method: "post",
//             headers: headerHelper.CREATE_HEADER(),
//             data: body
//         });

//         console.log('api-note::',result)
//         return result;
//     },
//     GET_PROJECT_DETAIL_VALET:async function (projectId: string | number) {
//         let url =  config.valet_url + 'projects/' + projectId + '/messages'
//         let result = await axios(url, {
//             method: 'get',
//             headers: headerHelper.CREATE_HEADER()
//         })

//         return result;
//     },
//     GET_PROPERTY_DETAIL_VALET:async function (propertyId: string | number) {
//         let url =  config.valet_url + 'properties/' + propertyId + '/messages'
//         let result = await axios(url, {
//             method: 'get',
//             headers: headerHelper.CREATE_HEADER()
//         })

//         return result;
//     },
// }
// export default result
